import { api } from "@/lib/api";

interface updatePassword {
    password: string
    confirmPassword: string
    token: string;
}

export async function updatePassword({password, confirmPassword, token}: updatePassword) {
    try {
        const payload = {
            newPassword: password,
            confirmNewPassword: confirmPassword
        }
     //    console.log("Sending payload to API:", payload);
        const response = await api.put(`/reset/reset-password?token=${token}`, payload);
     //    console.log('update config api:', response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}
