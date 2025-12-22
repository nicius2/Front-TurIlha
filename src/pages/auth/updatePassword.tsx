import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Label } from "@radix-ui/react-label";
import iconMao from "@/assets/icon-mao.svg";
import { Eye, Mail, EyeOff } from "lucide-react";
import { useContext, useEffect, useState } from "react";

import iconGoogle from "@/assets/google.png";

import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginNewSession } from "@/api/auth/loginUser";
import { toast, Toaster } from "sonner";
import { AuthContext } from "@/context/AuthContext";

const formSchema = z.object({
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  confirmPassword: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
})

type FormData = z.infer<typeof formSchema>;

export function UpdatePassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });



  return (
    <>
      <Helmet title="sign" />
      <Toaster />

      <div className="flex flex-col items-center w-full py-10 h-full">
        <div className="flex gap-2 items-center mb-8">
          <h1 className="text-3xl font-semibold ">Esqueci senha</h1>
        </div>

        <div className="space-y-6">
          <form
            // onSubmit={handleSubmit(handleLogin)}
            className="space-y-6 w-[300px]"
          >
            <div className="relative">
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Nova Senha
              </Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  {...register("password")} // Registro do campo
                  placeholder="Digite sua nova senha"
                  className="w-full h-12 px-4 py-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <div className="relative">
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirme a Senha
              </Label>
              <div className="relative mt-1">
                <Input
                  id="confirmPassword"
                  {...register("confirmPassword")} // Registro do campo
                  placeholder="Confirme sua nova senha"
                  className="w-full h-12 px-4 py-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>

            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 px-4 py-3 font-bold text-white bg-amber-500 rounded-md shadow-sm hover:bg-amber-500/90 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Atualizar Senha
            </Button>
          </form>

        
        </div>
      </div>
    </>
  );
}
