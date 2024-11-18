import * as yup from "yup";

// Register form

export const emailValidator = yup
  .string()
  .required("Ce Champs ne peut être vide.")
  .email("Le format de l'adresse mail est invalide.")
  .min(5, "L'adresse mail doit faire plus de 5 caractères.")
  .max(180, "L'adresse mail ne doit pas dépasser les 180 caractères.")
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "L'adresse mail doit respecter le format standard."
  );
export const passwordValidator = yup
  .string()
  .required("Ce Champs ne peut être vide.")
  .min(8, "Le mot de passe doit contenir au moins 8 caractères.")
  .max(255, "Le mot de passe ne peut pas contenir plus de 255 caractères.")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
    "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial."
  );
export const cpasswordValidator = yup
  .string()
  .oneOf(
    [yup.ref("password"), null],
    "Les mots de passes doivent être les mêmes."
  )
  .required("Ce Champs ne peut être vide.");
export const lastnameValidator = yup
  .string()
  .required("Ce Champs ne peut être vide.")
  .max(40, "Le nom de famille ne doit pas dépasser 40 caractères.")
  .matches(
    /^[a-zA-ZÀ-ÿ' -]+$/,
    "Le nom de famille ne doit contenir que des lettres, des espaces, des tirets ou des apostrophes."
  );
export const firstnameValidator = yup
  .string()
  .required("Ce Champs ne peut être vide.")
  .max(40, "Le prénom ne doit pas dépasser 40 caractères.")
  .matches(
    /^[a-zA-ZÀ-ÿ' -]+$/,
    "Le prénom ne doit contenir que des lettres, des espaces, des tirets ou des apostrophes."
  );
export const genderValidator = yup
  .string()
  .required("Ce Champs ne peut être vide.")
  .oneOf(["Masculin", "Feminin", "Autres"], "Un genre doit-être choisis");

export const phoneNumberValidator = yup
  .string()
  .required("Ce Champs ne peut être vide.")
  .max(30, "Le numéro de téléphone ne doit pas dépasser 30 chiffres.")
  .matches(
    /^\+?[0-9\s\-]+$/,
    "Le numéro de téléphone doit contenir uniquement des chiffres, des espaces et des tirets, et peut commencer par un '+'."
  );

const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

export const birthdayValidator = yup
  .date()
  .required("Ce Champs ne peut être vide.")
  .test(
    "is-old-enough",
    "Vous devez avoir au moins 10 ans pour vous inscrire",
    (value) => {
      if (!value) return false;
      return calculateAge(value) >= 10;
    }
  );
