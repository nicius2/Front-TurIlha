import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Label } from "@radix-ui/react-label";
import iconMao from "@/assets/icon-mao.svg";
import { Eye, Mail, EyeOff, User } from "lucide-react";
import { useState } from "react";

import iconGoogle from "@/assets/google.png";

import { Button } from "@/components/ui/button";
import { createNewRegister } from "@/api/app/userNewRegister";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

const formSchema = z
  .object({
    name: z.string().min(2, "O nome deve ter no mínimo 2 caracteres"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "A confirmação de senha deve ter no mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // Posição do erro no formulário
  });

type FormData = z.infer<typeof formSchema>;

export function SignUp() {
  const [eyesopen, setEyesopen] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });


  const { mutate: createNewRegisterFn, isPending } = useMutation({
    mutationFn: createNewRegister,
    onSuccess: (_, variables) => {
      toast.success("Conta criada com sucesso!");
      localStorage.setItem("registered_email", variables.email);
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    },
    onError: (error) => {
        if (error instanceof AxiosError && error.response?.status === 409) {
            setError("email", { message: error.response.data.message });
        } else {
            toast.error("Erro ao criar conta, tente novamente!");
        }
    },
  });

  function handleSignUp(data: FormData) {
    console.log("Submitting data:", data);
    createNewRegisterFn({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  }
  return (
    <>
      <Helmet title="Sign Up" />
      <Toaster />

      <div className="flex flex-col items-center w-full py-4 h-full">
        <div className="flex gap-2 items-center mb-8">
          <h1 className="text-3xl font-semibold ">Crie sua conta</h1>
          <span>
            <img src={iconMao} className="w-8" alt="icone de mao" />
          </span>
        </div>

        <div className="space-y-4">
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="space-y-4 w-[300px]"
          >
            <div className="relative">
              <Label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </Label>
              <div className="relative mt-1">
                <Input
                  id="name"
                  {...register("name")}
                  type="text"
                  placeholder="Nome"
                  className="w-full h-12 px-4 py-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <div className="relative mt-1">
                <Input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 px-4 py-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  {...register("password")}
                  type={eyesopen ? "text" : "password"}
                  placeholder="Senha"
                  className="w-full h-12 px-4 py-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
                <button
                  type="button"
                  onClick={() => setEyesopen(!eyesopen)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none z-10"
                >
                  {eyesopen ? <Eye className="text-amber-500" /> : <EyeOff />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirmar Senha
              </Label>
              <div className="relative mt-1">
                <Input
                  id="confirmPassword"
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="Confirme sua senha"
                  className="w-full h-12 px-4 py-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 px-4 py-3 mt-4 font-bold text-white bg-amber-500 rounded-md shadow-sm hover:bg-amber-500/90 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Cadastrar
            </Button>
          </form>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 bg-white border rounded-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 "
            >
              <img src={iconGoogle} alt="Google Logo" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
