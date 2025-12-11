import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BeneficiosList from '../pages/BeneficiosList.tsx';

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-black shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-white">
                Sportclub - Beneficios
            </h1>
        </div>
    </header>
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
    </main>
  </div>
);


const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/beneficios" element={<BeneficiosList />} />
          
          {/* La raíz del sitio redirige a la lista */}
          <Route path="/" element={<Navigate to="/beneficios" replace />} />

          {/* Manejo de Rutas No Encontradas (404) */}
          <Route path="*" element={
            <div className="text-center p-8">
              <h2 className="text-3xl font-extrabold text-gray-900">404 - Página No Encontrada</h2>
              <p className="mt-2 text-sm text-gray-500">
                La dirección a la que intentas acceder no existe.
              </p>
            </div>
          } />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;