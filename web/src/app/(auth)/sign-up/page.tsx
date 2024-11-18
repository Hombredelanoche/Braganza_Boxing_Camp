"use client";
import Form from "@/components/ui/uiComponents/Form";
import FormField from "@/components/ui/uiComponents/FormField";
import SubmitButton from "@/components/ui/uiComponents/SubmitButton";
import {
  signUpInitialValue,
  signUpValidationSchema,
} from "@/utils/schema/signUpSchema";
import { useMutation } from "@tanstack/react-query";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignUpForm = () => {
  const { mutateAsync } = useMutation({
    mutationFn: (values) => apiClient.post("/users", values),
  });
  const router = useRouter();
  const handleSubmit = async (values) => {
    await mutateAsync(values);

    router.push("/");
  };
  return (
    <>
      <article className="flex flex-col">
        <Formik
          initialValues={signUpInitialValue}
          validationSchema={signUpValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col p-5 gap-10 rounded-md shadow-md">
            <h1 className="text-2xl font-bold text-primary">S'inscrire</h1>
            <div className="flex gap-10">
              <FormField
                name="firstname"
                label="Prénom"
                id="firstname"
                type="text"
              />
              <FormField
                name="lastname"
                label="Nom"
                id="lastname"
                type="text"
              />
            </div>
            <FormField name="email" label="Email" id="email" type="email" />
            <FormField
              name="password"
              label="Mot de passe"
              id="password"
              type="password"
            />
            <FormField
              name="cpassword"
              label="Confirmer votre mot de passe"
              id="cpassword"
              type="password"
            />
            <FormField
              name="birthday"
              label="Date de naissance"
              id="birthday"
              type="date"
            />
            <div className="flex gap-10">
              <FormField
                name="gender"
                label="Genre"
                id="gender"
                type="select"
              />
              <FormField
                name="phoneNumber"
                label="Numéro de téléphone"
                id="phoneNumber"
                type="text"
              />
            </div>
            <span className="text-xs text-primaryLight hover:text-primary">
              Vous avez déjà un compte ?
              <Link href="/sign-in"> Cliquez ici !</Link>
            </span>
            <SubmitButton disabled />
          </Form>
        </Formik>
      </article>
    </>
  );
};

export default SignUpForm;
