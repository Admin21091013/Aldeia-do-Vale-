"use server";

import * as z from "zod";

// Schema for the hero form
const heroFormSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone é obrigatório"),
  userType: z.enum(["Cliente", "Corretor"]),
});

export type HeroFormData = z.infer<typeof heroFormSchema>;

export async function submitHeroForm(data: unknown) {
  const validation = heroFormSchema.safeParse(data);

  if (!validation.success) {
    const errorMessages = validation.error.issues.map(issue => issue.message).join(", ");
    return {
      success: false,
      message: `Dados inválidos: ${errorMessages}`,
      data: null,
    };
  }
  
  const webhookUrl = "https://takerisk.app.n8n.cloud/webhook/96d1ba02-af32-4eb7-8a2f-c927e456d0ad";
  const { name, email, phone, userType } = validation.data;

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: name,
        email: email,
        telefone: phone,
        tipo: userType,
        source: 'lead-form'
      }),
    });

    if (!response.ok) {
      throw new Error("Falha ao enviar os dados para o webhook.");
    }
    
    console.log("New hero form submission sent to n8n:", validation.data);

    return {
      success: true,
      message: "Recebemos seu interesse. Em breve, um de nossos especialistas entrará em contato!",
      data: validation.data,
    };

  } catch (error) {
    console.error("Error sending to webhook:", error);
    const errorMessage = error instanceof Error ? error.message : "Ocorreu um problema ao enviar seu formulário.";
    return {
      success: false,
      message: errorMessage,
      data: null,
    };
  }
}


// Schema for the indication form
const indicationFormSchema = z.object({
    indicatorName: z.string().min(2, "Seu nome é obrigatório."),
    indicatorEmail: z.string().email("Seu e-mail é inválido."),
    indicatedName: z.string().min(2, "Nome do indicado é obrigatório."),
    indicatedEmail: z.string().email("E-mail do indicado inválido."),
    indicatedPhone: z.string().optional(),
    consent: z.boolean().refine(val => val === true, {
        message: "O consentimento é obrigatório.",
    }),
});

export type IndicationFormData = z.infer<typeof indicationFormSchema>;

export async function submitIndicationForm(data: unknown) {
    const validation = indicationFormSchema.safeParse(data);

    if (!validation.success) {
        const errorMessages = validation.error.issues.map(issue => issue.message).join(", ");
        return {
            success: false,
            message: `Dados inválidos: ${errorMessages}`,
        };
    }

    const webhookUrl = "https://hooks.zapier.com/hooks/catch/24298038/ut896v6/";
    const { indicatorName, indicatorEmail, indicatedName, indicatedEmail, indicatedPhone, consent } = validation.data;

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: new Date().toISOString(),
                indicador_nome: indicatorName,
                indicador_email: indicatorEmail,
                indicado_nome: indicatedName,
                indicado_email: indicatedEmail,
                indicado_telefone: indicatedPhone,
                permissao: consent ? "Sim" : "Não",
                status: "Novo",
                source: 'indication-form'
            }),
        });

        if (!response.ok) {
            throw new Error("Falha ao enviar os dados de indicação para o webhook.");
        }
        
        console.log("New indication form submission sent to Zapier:", validation.data);

        return {
            success: true,
            message: "Obrigado. Seu convite foi enviado com exclusividade pelo nosso concierge.",
        };

    } catch (error) {
        console.error("Error sending indication to webhook:", error);
        const errorMessage = error instanceof Error ? error.message : "Ocorreu um problema ao enviar sua indicação.";
        return {
            success: false,
            message: errorMessage,
        };
    }
}
