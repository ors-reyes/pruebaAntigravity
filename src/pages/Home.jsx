function Home() {
  return (
    <div className="page-container home">
      <h1>Bienvenido a Nuestra Aplicación</h1>
      <p>Esta es la página de inicio, construida <br />con React, Vite y Diseño "Mobile-First".</p>
      
      <div className="home-features">
        <div className="feature-card">
          <h2>Rápido</h2>
          <p>Compilación instantánea con Vite.</p>
        </div>
        <div className="feature-card">
          <h2>Responsivo</h2>
          <p>Se adapta a cualquier dispositivo usando diseño Mobile-First.</p>
        </div>
        <div className="feature-card">
          <h2>Moderno</h2>
          <p>Diseño premium usando buenas prácticas.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
