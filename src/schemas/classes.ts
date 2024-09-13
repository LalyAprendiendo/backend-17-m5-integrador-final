import { z } from "zod";

const classesSchema = z.object({
  tema: z
    .string({
      invalid_type_error: "El nombre debe ser de tipo STRING",
      required_error: "El nombre es requerido",
    })
    .min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" })
    .max(255, {
      message: "El nombre tiene que tener como MÁXIMO 255 caracteres",
    }),
  fecha: z
    .string({ invalid_type_error: "El nombre debe ser de tipo STRING" })
    .date(),
  ejercicio: z
    .string({
      invalid_type_error: "El nombre debe ser de tipo STRING",
      required_error: "El nombre es requerido",
    })
    .min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" })
    .max(255, {
      message: "El nombre tiene que tener como MÁXIMO 255 caracteres",
    }),
  link: z
    .string({
      invalid_type_error: "El nombre debe ser de tipo STRING",
      required_error: "El nombre es requerido",
    })
    .min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" })
    .max(255, {
      message: "El nombre tiene que tener como MÁXIMO 70 caracteres",
    })
    .url() ,
});

export function classesValidator(data) {
  return classesSchema.safeParse(data);
}
