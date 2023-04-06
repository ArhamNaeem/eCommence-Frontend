import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";

type formType = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const useRegisterFormValidations = () => {
  const [inputFocused, setInputFocused] = useState({
    name: false,
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const formSchema: ZodType<formType> = z
    .object({
      name: z.string().min(2).max(20),
      username: z.string().min(3).max(15),
      email: z.string().email(),
      password: z.string().min(6),
      confirmPassword: z.string().min(6),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(formSchema),
  });
  const submit = (data: formType) => {
    console.log(data);
  };

  return {
    handleSubmit,
    submit,
    inputFocused,
    setInputFocused,
    register,
    errors,
  };
};

export default useRegisterFormValidations;
