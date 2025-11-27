"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createServerClient } from "@/lib/supabase";

const authSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export async function login(formData: FormData) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = authSchema.safeParse(rawData);
  if (!result.success) {
    const errorMessage = result.error.errors[0]?.message ?? "Datos inválidos";
    redirect("/login?error=" + encodeURIComponent(errorMessage));
  }

  const supabase = await createServerClient();
  const { error } = await supabase.auth.signInWithPassword(result.data);

  if (error) {
    redirect("/login?error=" + encodeURIComponent(error.message));
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = authSchema.safeParse(rawData);
  if (!result.success) {
    const errorMessage = result.error.errors[0]?.message ?? "Datos inválidos";
    redirect("/login?error=" + encodeURIComponent(errorMessage));
  }

  const supabase = await createServerClient();
  const { error } = await supabase.auth.signUp(result.data);

  if (error) {
    redirect("/login?error=" + encodeURIComponent(error.message));
  }

  revalidatePath("/", "layout");
  redirect("/login?message=" + encodeURIComponent("Revisa tu email para confirmar tu cuenta"));
}
