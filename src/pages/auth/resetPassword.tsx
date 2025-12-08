import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";


import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const formSchema = z.object({
     email: z.string().email("Email inválido"),
})

type FormData = z.infer<typeof formSchema>;

export function ResetPassword() {

     const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<FormData>({
          resolver: zodResolver(formSchema),
     });

     function handleSignUp(data: FormData) {
          console.log(data); // Exibe os dados no console
     }

     return (
          <>
               <Helmet title="Resetar Senha" />

               <div className="flex flex-col items-center w-full py-4 h-full">
                    <div className="flex gap-2 items-center mb-8">
                         <h1 className="text-3xl font-semibold ">
                              Resetar Senha
                         </h1>
                    </div>

                    <div className="space-y-4">
                         <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4 w-[300px]">
                              <div className="relative">
                                   <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                   </Label>
                                   <div className="relative mt-1">
                                        <Input
                                             id="email"
                                             {...register("email")}
                                             type="text"
                                             placeholder="Digite seu email"
                                             className="w-full h-12 px-4 py-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                                        />
                                        <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                   </div>
                                   {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                              </div>

                              <Button
                                   type="submit"
                                   disabled={isSubmitting}
                                   className="w-full h-12 px-4 py-3 mt-4 font-bold text-white bg-amber-500 rounded-md shadow-sm hover:bg-amber-500/90 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                              >
                                   Cadastrar
                              </Button>
                         </form>
                    </div>
               </div>
          </>
     );
}