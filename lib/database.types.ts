/**
 * Tipos generados automáticamente por Supabase CLI
 * Ejecutar: npm run db:generate-types
 * 
 * Este archivo es un placeholder. Los tipos reales se generarán
 * cuando se configuren las tablas en Supabase.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      // Enums personalizados
      user_role: "super_admin" | "tenant_admin" | "user";
      ai_layer: "informational" | "consultive" | "transactional";
    };
  };
}

// Tipos de conveniencia para usar en la aplicación
export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export type Enums<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];
