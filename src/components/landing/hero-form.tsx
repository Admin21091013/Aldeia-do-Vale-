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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { submitHeroForm, HeroFormData } from "@/app/actions";
import { useState } from "react";

const heroFormSchema = z.object({
  name: z.string().min(2, { message: "Nome completo é obrigatório." }),
  email: z.string().email({ message: "E-mail inválido." }),
  phone: z.string().min(10, { message: "Telefone com DDD é obrigatório." }),
  userType: z.enum(["Cliente", "Corretor"]),
});

interface HeroFormProps {
    onSuccessfulSubmit: (data: HeroFormData) => void;
}

export function HeroForm({ onSuccessfulSubmit }: HeroFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<HeroFormData>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      userType: "Cliente",
    },
  });

  async function onSubmit(values: HeroFormData) {
    setIsSubmitting(true);
    try {
      const result = await submitHeroForm(values);
      if (result.success && result.data) {
        toast({
          title: "Sucesso!",
          description: result.message,
        });
        form.reset();
        onSuccessfulSubmit(result.data);
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
    <div className="w-full max-w-md rounded-lg bg-black/30 p-6 backdrop-blur-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nome" {...field} className="bg-white text-black placeholder:text-gray-500" />
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
                <FormControl>
                  <Input type="email" placeholder="E-mail" {...field} className="bg-white text-black placeholder:text-gray-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="tel" placeholder="Telefone" {...field} className="bg-white text-black placeholder:text-gray-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Cliente" className="border-white text-white" />
                      </FormControl>
                      <FormLabel className="font-normal text-white">Cliente</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Corretor" className="border-white text-white" />
                      </FormControl>
                      <FormLabel className="font-normal text-white">Corretor</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
              type="submit" 
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90" 
              size="lg"
              disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
