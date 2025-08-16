"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { submitInquiry } from "@/app/actions";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome completo é obrigatório." }),
  phone: z.string().min(10, { message: "Telefone/WhatsApp é obrigatório." }),
  email: z.string().email({ message: "E-mail inválido." }),
  city: z.string().optional(),
  interest: z.enum(["Investir", "Morar", "Ambos"]),
  contactTime: z.enum(["Manhã", "Tarde", "Noite"]),
  lgpd: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm({ onFormSubmit }: { onFormSubmit?: () => void }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      interest: "Morar",
      contactTime: "Manhã",
      lgpd: false,
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    try {
      const result = await submitInquiry(values);
      if (result.success) {
        toast({
          title: "Sucesso!",
          description: "Recebemos seu interesse. Entraremos em contato em breve.",
        });
        form.reset();
        if (onFormSubmit) {
          onFormSubmit();
        }
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: (error as Error).message || "Ocorreu um problema. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Cidade/UF</FormLabel>
                <FormControl>
                    <Input placeholder="Ex: Brasília, DF" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Telefone/WhatsApp</FormLabel>
                <FormControl>
                    <Input type="tel" placeholder="(00) 00000-0000" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interesse</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Investir">Investir</SelectItem>
                    <SelectItem value="Morar">Morar</SelectItem>
                    <SelectItem value="Ambos">Ambos</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Melhor horário para contato</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Manhã">Manhã</SelectItem>
                    <SelectItem value="Tarde">Tarde</SelectItem>
                    <SelectItem value="Noite">Noite</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="lgpd"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Autorizo o contato e o envio de informações.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button 
            type="submit" 
            className="w-full bg-[#C7A45B] text-black hover:bg-[#C7A45B]/90" 
            size="lg"
            disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
        </Button>
      </form>
    </Form>
  );
}
