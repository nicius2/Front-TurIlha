import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Label } from "@radix-ui/react-label";
import iconMao from "@/assets/icon-mao.svg";
import { Eye, Mail, EyeOff } from "lucide-react";
import { useState } from "react";

import iconGoogle from "@/assets/google.png";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const formSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export function SignIn() {
    const [eyesopen, setEyesopen] = useState(false);

    const { register, handleSubmit, reset,  formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    function handleLogin(data: FormData) {
        console.log(data); // Exibe os dados no console
        reset();
    }

    return (
        <>
            <Helmet title="sign" />

            <div className="flex flex-col items-center w-full py-10 h-full">
                <div className="flex gap-2 items-center mb-8">
                    <h1 className="text-3xl font-semibold ">
                        Bem-Vindo
                    </h1>
                    <span>
                        <img src={iconMao}
                            className="w-8"
                            alt="icone de mao" />
                    </span>
                </div>

                <div className="space-y-6">
                    <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 w-[300px]">
                        <div className="relative">
                            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </Label>
                            <div className="relative mt-1">
                                <Input
                                    id="email"
                                    {...register("email")} // Registro do campo
                                    type="email"
                                    placeholder="Email"
                                    className="w-full h-12 px-4 py-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm">
                                        {errors.email.message}
                                    </span>
                                )}
                                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        <div className="relative">
                            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Senha
                            </Label>
                            <div className="relative mt-1">
                                <Input
                                    id="password"
                                    {...register("password")} // Registro do campo
                                    type={eyesopen ? "text" : "password"}
                                    placeholder="Senha"
                                    className="w-full h-12 px-4 py-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                                />
                                {errors.password && (
                                    <span className="text-red-500 text-sm">
                                        {errors.password.message}
                                    </span>
                                )}
                                <button
                                    type="button"
                                    onClick={() => setEyesopen(!eyesopen)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none z-10"
                                >
                                    {eyesopen ? <Eye className="text-amber-500" /> : <EyeOff />}
                                </button>
                            </div>

                            <span className="text-sm md:text-xs text-amber-500 cursor-pointer hover:text-amber-500/80 float-right mt-2 mb-6 ">
                                Esqueceu a Senha?
                            </span>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 px-4 py-3 font-bold text-white bg-amber-500 rounded-md shadow-sm hover:bg-amber-500/90 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                        >
                            Entrar
                        </Button>
                    </form>

                    <span className="text-sm md:text-xs flex justify-center gap-1 text-gray-500">
                        Não tem uma conta? <Link to="/cadastrar" className="text-amber-500 cursor-pointer hover:text-amber-500/80">Cadastre-se</Link>
                    </span>

                    <div className="flex justify-center mt-4">
                        <button
                            type="button"
                            aria-label="Autenticar com Google"
                            className="flex items-center justify-center w-12 h-12 bg-white border rounded-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 "
                        >
                            <img
                                src={iconGoogle}
                                alt="Google Logo"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}