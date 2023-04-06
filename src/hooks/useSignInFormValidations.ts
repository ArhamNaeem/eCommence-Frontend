import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType, z } from "zod";
type formDT = {
  uname_email: string;
  password: string;
};

const useSignInFormValidations = () => {
  const [focused, setFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const FormSchema: ZodType<formDT> = z.object({
    uname_email: z.string().email().or(z.string()),
    password: z.string().min(6),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formDT>({ resolver: zodResolver(FormSchema) });
  const submit = (data: formDT) => {
    const { uname_email } = data;
    console.log(data);
  };

  return {
    handleSubmit,
    focused,
    setFocused,
    submit,
    register,
    errors,
    passwordFocused,
    setPasswordFocused,
  };
};

export default useSignInFormValidations;
