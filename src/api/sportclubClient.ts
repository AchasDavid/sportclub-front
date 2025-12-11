import axios, { type AxiosInstance } from 'axios';
import { type BeneficiosListResponse, type BeneficioDetailResponse } from '../core/models';

// URL base del backend
const BASE_URL = 'http://localhost:8000/api/v1';

const sportclubClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, 
});

// Funciones de consumo de Endpoints

/**
 * Obtiene la lista de beneficios
 */
export const getBeneficios = async (): Promise<BeneficiosListResponse> => {
  try {
    const response = await sportclubClient.get<BeneficiosListResponse>('/beneficios');
    return response.data;
  } catch (error) {
    throw error; 
  }
};

/**
 * Obtiene el detalle de un beneficio por ID.
 * @param id ID del beneficio.
 */
export const getBeneficioDetail = async (id: number): Promise<BeneficioDetailResponse> => {
  try {
    const response = await sportclubClient.get<BeneficioDetailResponse>(`/beneficios/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};