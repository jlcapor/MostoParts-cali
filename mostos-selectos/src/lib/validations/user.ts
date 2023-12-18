import * as z from "zod";

export const userSchema = z.object({
    id: z.string().optional(),
    name: z.string().refine((data) => !!data, { message: "El nombre es obligatorio" }),
    surnames: z.string().refine((data) => !!data, { message: "El apellido es obligatorio" }),
    email: z.string().email({message: "Por favor, introduce una dirección de correo electrónico válida"}),
    phone: z .string()
    .refine((value) => {
      const regex =
        value === ""
          ? /^$/
          : /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
      return regex.test(value)
    }, "Invalid phone number")

    .optional()
    .nullable(),
    password: z.string().min(8, {message: "La contraseña debe tener al menos 8 caracteres"})
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
    }),
    roleId: z.string().refine((data) => !!data, { message: "El Rol es obligatorio" }),
    state: z.enum(["ACTIVO", "INACTIVO"], {invalid_type_error: 'Please select an invoice status.'})
})


export const userUpdateSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  surnames: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
  roleId: z.string().refine((data) => !!data, { message: "El Rol es obligatorio" }),
  state: z.string(),
});

export const getUserSchema = z.object({
  id: z.string(),
})