import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "./ui/button";
import iconGoogle from "@/assets/google.svg";
import { auth } from "@/lib/firebase";
import { api } from "@/lib/api";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

export function GoogleLoginButton() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const provider = new GoogleAuthProvider();

      // 1. abrir o poup do google
      const result = await signInWithPopup(auth, provider);

      // 2. pegar o token JWT
      const idToken = await result.user.getIdToken();

      // 3. Enviar para o Back-end
      const response = await api.post("auth/google", {
        access_token: idToken,
      });

      const { token } = response.data;
      login(token);

      console.log("Login sucesso", response.data);
      toast.success("Login com Google realizado com sucesso!");

      // 4. Redirecionar usuario para o Dashboad
      navigate("/");
    } catch (error) {
      console.error("Erro detalhado do Firebase:", error);
      toast.error(
        "Erro ao fazer login com o Google. Verifique o console para mais detalhes."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      variant="outline"
      disabled={isLoading}
      size="icon"
      className="rounded-full p-2 w-12 h-12"
      onClick={handleLogin}
    >
      <img src={iconGoogle} alt="Google Icon" />
    </Button>
  );
}
