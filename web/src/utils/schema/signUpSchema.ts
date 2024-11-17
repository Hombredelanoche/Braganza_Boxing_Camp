import {
  birthdayValidator,
  cpasswordValidator,
  emailValidator,
  firstnameValidator,
  genderValidator,
  lastnameValidator,
  passwordValidator,
  phoneNumberValidator,
} from "@/utils/validators";
import { object } from "yup";

export { signUpInitialValue, signUpValidationSchema };

const signUpInitialValue = {
  firstname: "",
  lastname: "",
  email: "",
  cemail: "",
  password: "",
  cpassword: "",
  gender: "",
  birthday: "",
  phoneNumber: "",
};

const signUpValidationSchema = object({
  firstname: firstnameValidator.label("Prénom"),
  lastname: lastnameValidator.label("Nom"),
  email: emailValidator.label("Email"),
  password: passwordValidator.label("Mot de passe"),
  cpassword: cpasswordValidator.label("Confirmer votre mot de passe"),
  gender: genderValidator.label("Genre"),
  birthday: birthdayValidator.label("Date d'anniversaire"),
  phoneNumber: phoneNumberValidator.label("Numéro de téléphone"),
});
