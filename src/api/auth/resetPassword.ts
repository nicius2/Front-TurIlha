import { api } from "@/lib/api";

interface resetPasswordProps {
     email: string
}

export async function ResetPasswordEmail({email}: resetPasswordProps) {
          const response = await api.post("/reset/forgot-password", {email});
          console.log("Response:", response.data);
          return response.data;
}
