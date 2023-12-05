import * as z from "zod";

export const userSchema = z.object({
    id: z.string().optional(),
    name: z.string().refine((data) => !!data, { message: "El nombre es obligatorio" }),
    surnames: z.string().refine((data) => !!data, { message: "El apellido es obligatorio" }),
    email: z.string().email({message: "Por favor, introduce una dirección de correo electrónico válida"}),
    phone: z.string().nullable(),
    password: z.string().min(8, {message: "La contraseña debe tener al menos 8 caracteres"})
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
    }),
    roleId: z.string().refine((data) => !!data, { message: "El Rol es obligatorio" }),
    state: z.enum(["Active", "Inactive"], {invalid_type_error: 'Please select an invoice status.'})
    
})