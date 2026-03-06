import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

function Contact() {
  return (
    <div className="page-container contact">
      <h1>Contacto</h1>
      <p>Nos encantaría escucharte. Aquí tienes cómo contactarnos.</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <FiMail className="contact-icon" />
          <span>hola@nuestraapp.com</span>
        </div>
        <div className="contact-item">
          <FiPhone className="contact-icon" />
          <span>+1 (234) 567-890</span>
        </div>
        <div className="contact-item">
          <FiMapPin className="contact-icon" />
          <span>Buenos Aires, Argentina</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
