# La Enramada — Restaurante & Cocina de Autor

Sitio web moderno y experiencia digital gastronómica de alta gama desarrollada con **React 19**, **TypeScript**, **Vite** y **Tailwind CSS v4**.

---

## 🌟 Características Principales

- **Diseño & Estética Premium**:
  - Paleta curada en modo oscuro orgánico (`#12180f`), acentos dorados (`#c9a24b`) y crema vintage (`#f4efe4`).
  - Tipografía editorial con **Fraunces** (serif de alta cocina) y **Plus Jakarta Sans**.
  - Glassmorphism, microinteracciones, transiciones fluidas y animaciones refinadas.

- **Carta Interactiva & Maridajes**:
  - Filtro por categorías en tiempo real (*Entradas*, *Platos Principales*, *Postres*, *Cava & Vinos*).
  - Buscador predictivo en vivo por nombre o ingredientes.
  - Modal interactivo con **Ficha Técnica**, notas de cata del Chef, sugerencias de maridaje de sommelier y badges dietarios (*Sin TACC*, *Vegetariano*, *Plato Firma*).

- **Galería Visual con Lightbox**:
  - Composición asimétrica tipo masonry con zoom progresivo y visor en pantalla completa con navegación anterior/siguiente.

- **Estado en Vivo & Horarios**:
  - Cálculo dinámico del estado del restaurante en tiempo real (*Abierto Ahora / Turno Almuerzo / Turno Cena / Cerrado los Lunes*).
  - Resaltado automático del día de la semana actual.

- **Sistema de Reservas Inteligente**:
  - Selección de comensales, fecha (bloqueo automático de fechas pasadas), franja horaria y preferencia de ambiente (*Salón Principal*, *Patio & Pérgola*, *Barra del Chef*).
  - Validación interactiva con generación de voucher y código localizador (`#ENR-XXXX`), con acceso directo a confirmación por WhatsApp.

- **Opiniones de Comensales**:
  - Muro de testimonios con valoración de 5 estrellas y plato recomendado.
  - Modal para que nuevos comensales publiquen su reseña en tiempo real.

- **Ubicación & Mapa Interactivo**:
  - Mapa interactivo integrado vía OpenStreetMap sin dependencias pesadas.
  - Enlaces rápidos de navegación hacia Google Maps, Waze y contacto directo por WhatsApp.

---

## 🛠️ Stack Tecnológico

- **Framework**: [React 19](https://react.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) (configuración moderna `@theme` sin dependencias legadas)
- **Empaquetador**: [Vite](https://vite.dev/)
- **Iconografía**: [Lucide React](https://lucide.dev/)

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Iniciar el servidor de desarrollo
```bash
npm run dev
```
El servidor se iniciará en `http://localhost:5173/`.

### 2. Compilar para producción
```bash
npm run build
```
Generará los artefactos optimizados y minificados en la carpeta `dist/`.

### 3. Previsualizar la versión de producción
```bash
npm run preview
```

---

## 📁 Estructura del Código

```text
├── legacy/                   # Respaldo del código original (HTML/CSS/JS estático)
├── public/
│   └── images/               # Fotografía gastronómica de alta resolución
├── src/
│   ├── components/           # Componentes modulares de React
│   │   ├── Navbar.tsx        # Navegación fija con efecto vidrio y menú móvil
│   │   ├── Hero.tsx          # Portada principal con badges y llamada a la acción
│   │   ├── MenuSection.tsx   # Menú con filtros dinámicos y buscador
│   │   ├── DishModal.tsx     # Modal de maridaje y ficha técnica del plato
│   │   ├── GallerySection.tsx# Galería con visor Lightbox modal
│   │   ├── AboutSection.tsx  # Historia, filosofía y horarios en tiempo real
│   │   ├── ReviewsSection.tsx# Reseñas con formulario para dejar opiniones
│   │   ├── ReservationSection.tsx # Motor de reservas con código y confirmación
│   │   ├── LocationSection.tsx    # Ubicación, accesos en transporte y mapa
│   │   └── Footer.tsx        # Pie de página y suscripción al Club de Vinos
│   ├── data/
│   │   └── restaurantData.ts # Carta de platos, galería, opiniones y horarios
│   ├── types/
│   │   └── restaurant.ts     # Tipos e interfaces de TypeScript
│   ├── index.css             # Configuración de Tailwind CSS v4 y tokens de diseño
│   ├── App.tsx               # Ensamblador principal de la aplicación
│   └── main.tsx              # Punto de entrada de React
├── index.html                # Estructura HTML moderna y fuentes tipográficas
├── package.json
├── tsconfig.json
└── vite.config.ts            # Configuración de Vite con Tailwind v4
```
