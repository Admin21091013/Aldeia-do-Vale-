"use server";

import * as z from "zod";

// Schema for the hero form
const heroFormSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone é obrigatório"),
  userType: z.enum(["Cliente", "Corretor"]),
});

export async function submitHeroForm(data: unknown) {
  const validation = heroFormSchema.safeParse(data);

  if (!validation.success) {
    // Return detailed error messages
    const errorMessages = validation.error.issues.map(issue => issue.message).join(", ");
    return {
      success: false,
      message: `Dados inválidos: ${errorMessages}`,
    };
  }
  
  console.log("New hero form submission:", validation.data);

  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: "Recebemos seu interesse. Em breve, um de nossos especialistas entrará em contato!",
  };
}
