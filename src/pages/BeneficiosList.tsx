import React from 'react';
import { useBeneficios } from '../hooks/useBeneficios';

const BeneficiosList: React.FC = () => {
  const { beneficios, loading, error, fetch } = useBeneficios();

  if (loading) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-3"></div>
        <p className="text-lg text-gray-700">Cargando beneficios...</p>
      </div>
    );
  }

  // Manejo de errores
  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error al cargar:</strong>
        <span className="block sm:inline ml-2">{error}</span>
        <button 
          onClick={() => fetch()} 
          className="ml-4 px-3 py-1 bg-red-700 text-white rounded hover:bg-red-800 transition"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (beneficios.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow">
        <p className="text-lg text-gray-700">No se encontraron beneficios disponibles.</p>
      </div>
    );
  }
  
  // Renderizado de la lista
  
  return (
    <div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Lista de Beneficios ({beneficios.length})</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beneficios.map((beneficio) => (
          <div 
            key={beneficio.id} 
            className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer ${beneficio.activo ? 'border-2 border-transparent' : 'border-2 border-red-500 opacity-75'}`}
          >
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-medium overflow-hidden">
                {beneficio.imagenUrl ? (
                    <img 
                      src={beneficio.imagenUrl} 
                      alt={beneficio.comercio} 
                      className="w-full h-full object-cover"
                    />
                ) : (
                    "Sin Imagen"
                )}
            </div>
            
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 truncate" title={beneficio.comercio}>
                {beneficio.comercio}
              </h3>
              
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{beneficio.descripcion}</p>
              
              <div className="mt-4 flex justify-between items-center">
                <span 
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${beneficio.activo ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                >
                  Estado: {beneficio.activo ? 'Activo' : 'Inactivo'}
                </span>

                <span className="text-sm text-gray-500">
                    {beneficio.vencimiento ? `Vence: ${beneficio.vencimiento}` : 'Sin vencimiento'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeneficiosList;