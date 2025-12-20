import { api } from "@/lib/api"
import { AxiosError } from "axios";

interface userNewRegister {
     name: string
     email: string
     password: string
     confirmPassword: string
}

export async function createNewRegister({name, email, password, confirmPassword}: userNewRegister) {
    try {
        const payload = {name, email, password, confirmPassword};
        console.log("Sending payload to API:", payload);
        const response = await api.post("/user/register", payload);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Erro ao registrar o usuário:", error.response?.data);
            console.error("Full Axios error:", error);
          }
        throw error;
    }
}