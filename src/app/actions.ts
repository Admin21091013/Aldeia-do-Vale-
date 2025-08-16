"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  city: z.string().optional(),
  interest: z.enum(["Investir", "Morar", "Ambos"]),
  contactTime: z.enum(["Manhã", "Tarde", "Noite"]),
  lgpd: z.literal(true),
});

export async function submitInquiry(data: unknown) {
  const validation = formSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      message: "Dados inválidos. Por favor, verifique o formulário.",
    };
  }
  
  // Here you would typically send the data to a CRM, database, or email service.
  // We'll simulate a successful submission.
  console.log("New inquiry received:", validation.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: "Inquiry submitted successfully!",
  };
}
