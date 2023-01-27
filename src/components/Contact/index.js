import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_ghor9ws',
        'template_hsehebw',
        refForm.current,
        'ZOjmJRlcHmjsUvZIs'
      )
      .then(
        () => {
          alert('Message succesfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  };

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
              <AnimatedLetters 
              letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t','a','m','e']}
                idx={15}
              />
          </h1>
          <p>
            Si estas interesado en mis servicios de software no dudes en contactarme.
            Estare encantado en trabajar contigo. 
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Nombre' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Correo' required />
                </li>
                <li>
                  <input placeholder='Asunto' type='text' name='subject' required />
                </li>
                <li>
                  <textarea placeholder='Message' name='Mensaje' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='Enviar' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Juan David Pineda,
          <br />
          Medellín, Antioquia. Colombia
          <br />
          Carrera 34f # 35 - 11.
          <br />
          <span>davidpinedaaaa@gmail.com</span>
          <span>Desarrollador Web</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[6.234268098866982, -75.56234329398366]} zoom={13}>
            <TileLayer  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[6.234268098866982, -75.56234329398366]}>
              <Popup>Juan lives here, come over for a cup of coffe </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Contact;