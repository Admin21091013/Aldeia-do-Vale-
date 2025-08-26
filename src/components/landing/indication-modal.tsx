"use client";

import { useState, useEffect } from "react";
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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitIndicationForm, type HeroFormData, type IndicationFormData } from "@/app/actions";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

interface IndicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  indicator: HeroFormData | null;
}

const indicationSchema = z.object({
  indicatorName: z.string().min(2, { message: "Seu nome é obrigatório." }),
  indicatorEmail: z.string().email({ message: "Seu e-mail é inválido." }),
  indicatedName: z.string().min(2, { message: "Nome do indicado é obrigatório." }),
  indicatedEmail: z.string().email({ message: "E-mail do indicado inválido." }),
  indicatedPhone: z.string().optional(),
  indicatedName2: z.string().optional(),
  indicatedEmail2: z.string().email({ message: "E-mail do indicado 2 inválido." }).optional().or(z.literal('')),
  indicatedPhone2: z.string().optional(),
  consent: z.boolean().refine(val => val, { message: "Você deve concordar para enviar." }),
});

type IndicationFormValues = z.infer<typeof indicationSchema>;

export function IndicationModal({ isOpen, onClose, indicator }: IndicationModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<IndicationFormValues>({
    resolver: zodResolver(indicationSchema),
    defaultValues: {
      indicatorName: "",
      indicatorEmail: "",
      indicatedName: "",
      indicatedEmail: "",
      indicatedPhone: "",
      indicatedName2: "",
      indicatedEmail2: "",
      indicatedPhone2: "",
      consent: false,
    },
  });

  useEffect(() => {
    if (indicator) {
      form.setValue("indicatorName", indicator.name);
      form.setValue("indicatorEmail", indicator.email);
    } else {
        form.resetField("indicatorName");
        form.resetField("indicatorEmail");
    }
  }, [indicator, form, isOpen]);


  const onSubmit = async (values: IndicationFormValues) => {
    setIsSubmitting(true);
    try {
      const result = await submitIndicationForm(values);
      
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
      <DialogContent className="sm:max-w-[480px] grid-rows-[auto,1fr] max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-headline text-2xl">Convite Privado Aldeia do Vale</DialogTitle>
          <DialogDescription>
            Você conhece alguém que merece viver neste padrão? <br />
            Indique e receba recompensas exclusivas pelo nosso programa de indicação
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full">
            <div className="px-6 pb-6">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                    <div>
                    <FormLabel className="text-sm font-semibold">Seus Dados</FormLabel>
                    <Separator className="my-2"/>
                    <div className="space-y-4">
                        <FormField
                        control={form.control}
                        name="indicatorName"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input placeholder="Seu nome" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="indicatorEmail"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="email" placeholder="Seu e-mail" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    </div>

                    <div>
                    <FormLabel className="text-sm font-semibold">Dados do Indicado 1</FormLabel>
                    <Separator className="my-2"/>
                    <div className="space-y-4">
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
                    </div>
                    </div>

                    <div>
                    <FormLabel className="text-sm font-semibold">Dados do Indicado 2 (Opcional)</FormLabel>
                    <Separator className="my-2"/>
                    <div className="space-y-4">
                        <FormField
                        control={form.control}
                        name="indicatedName2"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input placeholder="Nome do indicado 2" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="indicatedEmail2"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="email" placeholder="E-mail do indicado 2" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="indicatedPhone2"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="tel" placeholder="Telefone do indicado 2" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    </div>

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
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
