"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitIndicationForm, type HeroFormData } from "@/app/actions";
import { Separator } from "../ui/separator";

const indicationFormSchema = z.object({
  indicatorName: z.string(),
  indicatorEmail: z.string(),
  indicatorPhone: z.string(),
  indicatedName: z.string().min(2, { message: "Nome completo do indicado é obrigatório." }),
  indicatedEmail: z.string().email({ message: "E-mail do indicado inválido." }),
  indicatedPhone: z.string().optional(),
  relationship: z.enum(["Família", "Amigo", "Cliente", "Outro"]),
  consentContact: z.boolean().refine(val => val === true, { message: "Autorização é obrigatória." }),
  consentPermission: z.boolean().refine(val => val === true, { message: "Confirmação é obrigatória." }),
});

type IndicationFormData = z.infer<typeof indicationFormSchema>;

interface IndicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  indicatorData: HeroFormData | null;
}

export function IndicationModal({ isOpen, onClose, indicatorData }: IndicationModalProps) {
  const { toast } = useToast();
  const form = useForm<IndicationFormData>({
    resolver: zodResolver(indicationFormSchema),
    defaultValues: {
      indicatedName: "",
      indicatedEmail: "",
      indicatedPhone: "",
      relationship: undefined,
      consentContact: false,
      consentPermission: false,
    },
  });

  useEffect(() => {
    if (indicatorData) {
      form.reset({
        ...form.getValues(),
        indicatorName: indicatorData.name,
        indicatorEmail: indicatorData.email,
        indicatorPhone: indicatorData.phone,
      });
    } else {
        // Clear indicator data if modal is opened without it (e.g. from footer)
        form.reset({
            ...form.getValues(),
            indicatorName: '',
            indicatorEmail: '',
            indicatorPhone: '',
        });
    }
  }, [indicatorData, form, isOpen]);

  async function onSubmit(values: IndicationFormData) {
    const result = await submitIndicationForm(values);
    if (result.success) {
      toast({
        title: "Sucesso!",
        description: result.message,
      });
      form.reset();
      onClose();
    } else {
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: result.message,
      });
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="text-center">
          <DialogTitle className="font-headline text-2xl">Convite Privado Aldeia do Vale</DialogTitle>
          <DialogDescription>
            Indique alguém que combine com o nosso estilo de viver. Se ele(a) avançar com a aquisição, você recebe benefícios exclusivos sob curadoria Duprime.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-muted/50 p-3 rounded-md text-xs text-muted-foreground">
            <ul className="list-disc list-inside space-y-1">
                <li>Day-spa + jantar para 2 no hotel parceiro</li>
                <li>Sessão concierge de interiores/paisagismo</li>
                <li>Janela prioritária para escolha de lote</li>
                <li>Estadia cortesia durante a visita</li>
            </ul>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            
            {indicatorData && (
                <div className="space-y-2 rounded-lg border bg-background p-4">
                    <h4 className="font-medium text-foreground">Seus Dados (Indicador)</h4>
                    <p className="text-sm text-muted-foreground">{indicatorData.name}</p>
                    <p className="text-sm text-muted-foreground">{indicatorData.email}</p>
                </div>
            )}
            
            <div className="space-y-4">
                <h4 className="font-medium text-foreground">Dados do Indicado</h4>
                <FormField control={form.control} name="indicatedName" render={({ field }) => (
                    <FormItem><FormControl><Input placeholder="Nome completo do indicado" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="indicatedEmail" render={({ field }) => (
                    <FormItem><FormControl><Input type="email" placeholder="E-mail do indicado" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="indicatedPhone" render={({ field }) => (
                    <FormItem><FormControl><Input type="tel" placeholder="Telefone do indicado (Opcional)" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="relationship" render={({ field }) => (
                    <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger><SelectValue placeholder="Qual a sua relação com o indicado?" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="Família">Família</SelectItem>
                                <SelectItem value="Amigo">Amigo</SelectItem>
                                <SelectItem value="Cliente">Cliente</SelectItem>
                                <SelectItem value="Outro">Outro</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}/>
            </div>

            <Separator />
            
            <div className="space-y-4">
                 <FormField control={form.control} name="consentContact" render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                        <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">Autorizo o contato com o indicado exclusivamente para este convite.</FormLabel>
                            <FormMessage/>
                        </div>
                    </FormItem>
                 )}/>
                 <FormField control={form.control} name="consentPermission" render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                        <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">Confirmo que tenho permissão do indicado para compartilhar estes dados.</FormLabel>
                            <FormMessage/>
                        </div>
                    </FormItem>
                 )}/>
            </div>

            <DialogFooter className="!mt-6 flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
                <Button type="button" variant="ghost" onClick={onClose} className="sm:mr-auto">Agora não</Button>
                <Button type="submit" className="w-full sm:w-auto">Enviar convite</Button>
            </DialogFooter>
          </form>
        </Form>
        <p className="text-center text-xs text-muted-foreground">
            O convite é pessoal e analisado individualmente para preservar a experiência e a exclusividade do empreendimento. Dados tratados conforme LGPD.
        </p>
      </DialogContent>
    </Dialog>
  );
}
