import { api } from "@/lib/api";

interface loginUser {
    email: string
    password: string
}

interface loginResponse {
    token: string
}

export async function loginNewSession({ email, password }: loginUser) {
  const payload = { email, password }
  console.log('Sending payload to API:', payload)
  const response = await api.post<loginResponse>('/session/login', payload)
  return response.data
}