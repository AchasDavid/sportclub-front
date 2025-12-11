# Sportclub Challenge: Frontend (React & Tailwind CSS)

Este proyecto contiene una aplicación de Frontend desarrollada con **React** y **TypeScript**, utilizando **Tailwind CSS** para el diseño y **Vite** como *bundler*.

La aplicación consume la **Sportclub Backend API** (ubicada en `http://localhost:8000`) para mostrar una lista de beneficios.

## Tecnologías Utilizadas

* **Framework:** React con TypeScript
* **Estilos:** Tailwind CSS V3 (Configurado con PostCSS)
* **Build Tool:** Vite
* **Routing:** React Router DOM
* **Consumo de API:** Axios

## Requisitos Previos

Para ejecutar la aplicación:

1.  **Node.js LTS** (Versión estable recomendada, ej: v24.x).
2.  Tener **Sportclub Backend API** levantada y accesible en **`http://localhost:8000`** (usando Docker Compose).

## Instalación y Ejecución

### 1. Instalación de Dependencias

Tras clonar el repositorio, abre tu terminal, navega a la carpeta `sportclub-frontend/` e instala todas las dependencias de Node:

```bash
cd sportclub-frontend
npm install
```

### 2. Ejecución del Servidor de Desarrollo

Inicia el servidor de desarrollo de Vite. Esto compilará el código y el CSS de Tailwind:

```bash
npm run dev
```

Una vez que el servidor esté activo, la aplicación estará disponible en la URL que indique Vite.

### 3. Rutas principales

- Lista de beneficios: `/beneficios`