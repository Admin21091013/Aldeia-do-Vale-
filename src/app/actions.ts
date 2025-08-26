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
  
  const webhookUrl = "https://takerisk.app.n8n.cloud/webhook/formulario-interesse";
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
          tipo: userType
      }),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error("Webhook response error:", response.status, errorBody);
        throw new Error("Falha ao enviar os dados para o webhook. Verifique o console do servidor para mais detalhes.");
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
    indicatedEmail: z.string().email({ message: "E-mail inválido." }).optional().or(z.literal('')),
    indicatedPhone: z.string().optional(),
    indicatedName2: z.string().optional(),
    indicatedEmail2: z.string().email({ message: "E-mail inválido." }).optional().or(z.literal('')),
    indicatedPhone2: z.string().optional(),
    consent: z.boolean().refine(val => val === true, {
        message: "O consentimento é obrigatório.",
    }),
}).refine(data => {
    return !!data.indicatedEmail || !!data.indicatedPhone;
}, {
    message: "É necessário fornecer o e-mail ou o telefone do Indicado 1.",
    path: ["indicatedPhone"], // Path to show the error message
}).refine(data => {
    if (!data.indicatedName2) return true; // If there's no second indicated, validation passes
    return !!data.indicatedEmail2 || !!data.indicatedPhone2;
}, {
    message: "É necessário fornecer o e-mail ou o telefone do Indicado 2.",
    path: ["indicatedPhone2"], // Path to show the error message
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
    
    const webhookUrl = encodeURI("https://takerisk.app.n8n.cloud/webhook/formulario-indicação");
    const { 
        indicatorName, 
        indicatorEmail, 
        indicatedName, 
        indicatedEmail, 
        indicatedPhone,
        indicatedName2,
        indicatedEmail2,
        indicatedPhone2,
        consent
    } = validation.data;

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Seu nome": indicatorName,
                "Seu e-mail": indicatorEmail,
                "Nome do indicado": indicatedName,
                "E-mail do indicado": indicatedEmail,
                "Telefone do indicado": indicatedPhone,
                "Nome do indicado 2": indicatedName2,
                "E-mail do indicado 2": indicatedEmail2,
                "Telefone do indicado 2": indicatedPhone2,
                "Permissão": consent,
            }),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error("Webhook response error (Indication):", response.status, errorBody);
            throw new Error("Falha ao enviar os dados da indicação para o webhook.");
        }
        
        console.log("New indication form submission sent to n8n:", validation.data);

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
