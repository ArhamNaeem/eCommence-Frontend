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
      name: z.string().min(2, 'Name must contain atleast 2 characters').max(20, 'Cannot have more than 20 characters'),
      username: z.string().min(3, 'Username must contain atleast 3 characters').max(15, 'Cannot have more than 15 characters'),
      email: z.string().email('Enter valid email'),
      password: z.string().min(6,'Password must contain atleast 6 characters'),
      confirmPassword: z.string().min(6,'Password must contain atleast 6 characters'),
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
