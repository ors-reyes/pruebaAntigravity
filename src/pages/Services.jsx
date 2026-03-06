import { FiCode, FiSmartphone, FiDatabase, FiCloud, FiShield, FiMonitor } from 'react-icons/fi'

function Services() {
  const genericServices = [
    {
      id: 1,
      title: 'Desarrollo Web',
      description: 'Creamos aplicaciones web modernas, rápidas y escalables utilizando las últimas tecnologías como React y Vite.',
      icon: <FiCode />
    },
    {
      id: 2,
      title: 'Desarrollo Móvil',
      description: 'Aplicaciones móviles nativas e híbridas con enfoque en una experiencia de usuario fluida y diseño responsivo.',
      icon: <FiSmartphone />
    },
    {
      id: 3,
      title: 'Bases de Datos',
      description: 'Diseño, optimización y mantenimiento de bases de datos relacionales y NoSQL de alto rendimiento.',
      icon: <FiDatabase />
    },
    {
      id: 4,
      title: 'Servicios en la Nube',
      description: 'Migración y gestión de infraestructuras en plataformas como AWS, Google Cloud y Azure.',
      icon: <FiCloud />
    },
    {
      id: 5,
      title: 'Ciberseguridad',
      description: 'Auditorías de seguridad, protección de datos y cumplimiento de normativas internacionales.',
      icon: <FiShield />
    },
    {
      id: 6,
      title: 'Soporte y Mantenimiento',
      description: 'Soporte técnico 24/7 y mantenimiento continuo para asegurar la operatividad de tus sistemas.',
      icon: <FiMonitor />
    }
  ];

  return (
    <div className="page-container services-page">
      <h1>Nuestros Servicios</h1>
      <p>Soluciones tecnológicas de alto nivel para impulsar tu negocio al siguiente nivel.</p>

      <div className="services-grid">
        {genericServices.map(service => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">
              {service.icon}
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
