import { api } from "@/lib/api";

interface AuthenticatedUser {
  id: number;
  name: string;
  email: string;
}

export async function Authenticated() {
     const response = await api.get<AuthenticatedUser>('users');
     return response.data;
}