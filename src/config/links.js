// export the navigation links to be used across the application
export const navLinks = [
  {
    id: 'home',
    path: '/',
    text: 'Inicio'
  },
  {
    id: 'servicos',
    path: '/servicos',
    text: 'Servicios'
  },
  {
    id: 'contact',
    path: '/contact',
    text: 'Contacto'
  }
];

export const socialLinks = [
  { id: 'facebook', url: 'https://facebook.com', icon: 'facebook' },
  { id: 'instagram', url: 'https://instagram.com', icon: 'instagram' },
  { id: 'linkedin', url: 'https://linkedin.com', icon: 'linkedin' }
];

export const contactNumbers = [
  '+1 (234) 567-8900',
  '+1 (987) 654-3210'
];

export const locationData = {
  address: 'Calle Ficticia 404, Ciudad, País', // Opcional: si lo vacías '', no aparecerá en el copyright
  mapUrl: 'https://maps.google.com/?q=Buenos+Aires,+Argentina'
};
