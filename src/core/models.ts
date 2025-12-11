export type DateString = string; 

// Modelo de beneficio listado

export interface BeneficioSummary {
  id: number;
  comercio: string;
  descripcion: string;
  vencimiento: DateString | null;
  imagenUrl: string | null;
  activo: boolean; 
}

// Modelo de detalle de beneficio

export interface BeneficioDetail extends BeneficioSummary {
  aclaratoria: string,
  descuento: number;
  tarjeta: boolean;
  efectivo: boolean;
}

// Respuestas de la API

// Respuesta de /api/v1/beneficios
export type BeneficiosListResponse = BeneficioSummary[];

// Respuesta de /api/v1/beneficios/:id
export type BeneficioDetailResponse = BeneficioDetail;

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}