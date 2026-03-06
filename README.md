# 🚀 React Vite Premium Template

¡Bienvenido a tu plantilla personalizada para crear aplicaciones web premium de inmediato!

Esta plantilla fue diseñada con un enfoque corporativo, moderno y **Mobile-First**, lista para que la uses como base en cualquiera de tus futuros proyectos sin tener que empezar de cero.

## ✨ Características Principales

- ⚡️ **Rápido por Naturaleza**: Construido sobre [Vite](https://vitejs.dev/) y React 19.
- 🎨 **Diseño Glassmorphism Premium**: Efectos visuales de cristal y desenfoque listos para usar.
- 🌓 **Soporte Light / Dark Mode**: Cambio de tema nativo e integrado con un botón flotante y estilos globales que cambian dinámicamente.
- 📱 **Mobile-First Total**: Todo se verá impecable en móviles y se adaptará a pantallas gigantes.
- 🛣️ **Enrutamiento Configurado**: Preparado con `react-router-dom` usando `<HashRouter>` (ideal para Github Pages).
- 🧩 **Componentes Incluidos**:
  - `Navbar`: Responsivo con menú de hamburguesa.
  - `Footer`: Inteligente, auto-generado y con íconos sociales flotantes y Auto-Scroll.
- ⚙️ **Configuración Dinámica (`links.js`)**: Modifica tus enlaces de menús, redes sociales, teléfonos y mapas de Google desde un único archivo de configuración (`src/config/links.js`) y toda la aplicación se actualizará automáticamente.
- 🚀 **Despliegue a 1 clic**: Alojamiento en [GitHub Pages](https://pages.github.com/) integrado con el comando `npm run deploy`.

---

## 🛠️ Cómo Iniciar un Nuevo Proyecto Mismo desde esta Plantilla

Si guardaste este repositorio como plantilla en tu GitHub, iniciar un nuevo proyecto es sumamente fácil:

### Opción A (Desde la Web - La más fácil):
1. Entra a este repositorio en tu cuenta de GitHub.
2. Da clic al botón verde que dice **"Use this template"** -> **"Create a new repository"**.
3. Ponle un nuevo nombre y listo. Ya tienes un proyecto completamente nuevo y limpio heredando todo este código. ¡Clónalo y empieza a trabajar!

### Opción B (Desde la Terminal - Al usar Git Clone):
Si prefieres simplemente clonar esta carpeta en tu computadora y crear proyectos a partir de ella:
```bash
git clone https://github.com/ors-reyes/pruebaAntigravity.git mi-nuevo-proyecto
cd mi-nuevo-proyecto
npm install
npm run dev
```

(Recuerda borrar la carpeta `.git` si vas a iniciar un proyecto totalmente distinto usando los mismos archivos, para que puedas hacer `git init` como un proyecto nuevo).

---

## 📝 Modificar la Información del Sitio

Para cambiar rápidamente el nombre de las secciones, links y redes sociales:
1. Abre `src/config/links.js`
2. Modifica o agrega los datos JSON en `navLinks`, `socialLinks`, `contactNumbers` y `locationData`.
3. ¡Guarda! La página actualizará automáticamente tanto el NavBar como el Footer.

## 📦 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo local para previsualizar los cambios.
- `npm run build`: Compila la aplicación a estático (para producción).
- `npm run deploy`: Crea una compilación (Build) y la despliega directamente a Github Pages.
