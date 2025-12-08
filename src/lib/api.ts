import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_BASE_URL,
});

if(env.VITE_DELAY_API) {
     api.interceptors.response.use(
          (response) => {
               return new Promise(resolve => {
                    setTimeout(() => resolve(response), 1000)
               })
          },
          (error) => {
               return Promise.reject(error)
          }
     )
}