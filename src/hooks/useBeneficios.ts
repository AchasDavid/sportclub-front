import { useState, useEffect, useCallback } from 'react';
import { type BeneficioSummary } from '../core/models';
import { getBeneficios } from '../api/sportclubClient';

export const useBeneficios = () => {
  const [beneficios, setBeneficios] = useState<BeneficioSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getBeneficios();
      setBeneficios(data);

    } catch (err: any) {
      let errorMessage = "Ocurrió un error al cargar los beneficios.";
      if (err.response) {
        errorMessage = `Error del servidor: ${err.response.status} - ${err.response.data.detail || err.message}`;
      } else if (err.request) {
        errorMessage = "Error de red: la api que se busca consumir no responde.";
      }
      setError(errorMessage);
      setBeneficios([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { beneficios, loading, error, fetch: fetchData };
};