"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitIndicationForm, type HeroFormData, type IndicationFormData } from "@/app/actions";

interface IndicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  indicator: HeroFormData;
}

const indicationSchema = z.object({
  indicatedName: z.string().min(2, { message: "Nome do indicado é obrigatório." }),
  indicatedEmail: z.string().email({ message: "E-mail do indicado inválido." }),
  indicatedPhone: z.string().optional(),
  consent: z.boolean().refine(val => val, { message: "Você deve concordar para enviar." }),
});

type IndicationFormValues = z.infer<typeof indicationSchema>;

export function IndicationModal({ isOpen, onClose, indicator }: IndicationModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<IndicationFormValues>({
    resolver: zodResolver(indicationSchema),
    defaultValues: {
      indicatedName: "",
      indicatedEmail: "",
      indicatedPhone: "",
      consent: false,
    },
  });

  const onSubmit = async (values: IndicationFormValues) => {
    setIsSubmitting(true);
    try {
      const fullData: IndicationFormData = {
        ...values,
        indicatorName: indicator.name,
        indicatorEmail: indicator.email,
        consent: values.consent,
      };
      
      const result = await submitIndicationForm(fullData);
      
      if (result.success) {
        toast({
          title: "Sucesso!",
          description: result.message,
        });
        form.reset();
        onClose();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: (error as Error).message || "Ocorreu um problema ao enviar a indicação.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Convite Privado Aldeia do Vale</DialogTitle>
          <DialogDescription>
            Você já faz parte desse privilégio. Quer convidar alguém especial para conhecer também?
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <FormField
              control={form.control}
              name="indicatedName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nome do indicado" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="indicatedEmail"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="E-mail do indicado" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="indicatedPhone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="tel" placeholder="Telefone (Opcional)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                   <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <Label htmlFor="consent" className="text-sm font-normal text-muted-foreground">
                      Ao marcar, você confirma que tem permissão da pessoa indicada para compartilhar seus dados conosco para este convite.
                    </Label>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar convite"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
