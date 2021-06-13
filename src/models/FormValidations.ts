import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato inválido")
    .required("El campo email es obligatorio"),
  password: yup
    .string()
    .required("El campo contraseña es obligatorio")
    .min(8, "La contraseña es muy corta"),
});

export const phoneNumberSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(phoneRegExp, "El número de teléfono no es válido"),
});

export const creditCardSchema = yup.object().shape({
  credit: yup
    .number()
    .min(111111111111, "El campo es demasiado corto")
    .max(999999999999, "El campo es demasiado largo")
    .required("El campo es obligatorio"),
  secret: yup
    .number()
    .min(111, "Introduzca al menos 3 cifras")
    .max(999, "Introduzca menos de 3 cifras")
    .required("El campo código secreto es obligatorio"),
});
