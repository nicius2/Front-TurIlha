// api/cards.ts
import { api } from '@/lib/api'

export interface Card {
  id: number;
  name: string;
  image: string;
}

export type CardCategory = 'paisagens' | 'atividades' | 'restaurantes';

export const getCardsByCategory = async (category: CardCategory): Promise<Card[]> => {
  console.log('🔍 Buscando categoria:', category);
  
  const response = await api.get(`/${category}`);
  
  console.log('📦 Response completa:', response);
  console.log('📦 Response.data:', response.data);
  console.log('📦 Tipo de response.data:', typeof response.data);
  console.log('📦 É array?', Array.isArray(response.data));
  
  // Se vier direto o array (json-server padrão)
  if (Array.isArray(response.data)) {
    console.log('✅ Retornando array direto');
    return response.data;
  }
  
  // Se vier como objeto { paisagens: [...] }
  if (response.data[category]) {
    console.log('✅ Retornando data[category]:', response.data[category]);
    return response.data[category];
  }
  
  console.error('❌ Formato inesperado da API');
  return [];
};