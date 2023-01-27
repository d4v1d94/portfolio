import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJsSquare, faPhp, faReact, faLaravel } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C','o','n','o','c','e','m','e']}
                idx={15}
              />
            </h1>
            <div className='scroll scroll1'>
              <div className='text-info'>
                <p>
                  Hola soy Juan David.
                </p>
                <p>
                  Desde niño he sido un apasionado por los computadores y la tecnologia, me gusta buscar y encontrar el porque de las cosas, y como funcionan por dentro. Lo cual me encamino en este hermoso mundo del desarrollo de software.
                  Me llamo la atención el desarrollo web, ya que a parte de divertirme creando sitios web y funcionalidades, tambien me gusta compartir lo que sé con los demas.
                </p>
                <p>
                  Si quieres trabajar conmigo encontraras un compañero que te ayudara a crecer y estara dispuesto a compartir contigo todo el conocimiento adquirido y tambien estara dispuesto a aprender de ti. Me consideró una persona autodidacta ya que soy fiel cretyente de que si quieres algo y te esfuerzas lo puedes obtener por tus propios medios, ademas con los avances tecnologicos de hoy en día y las oportunidades que nos ofrece internet, la información esta mas facil de obtener.
                </p>
                <p>
                  Tengo experiencia como desarrollador desde el 2020 en tecnologias como:
                </p>
                <ul className='skills'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>PHP</li>
                  <li>MYSQL</li>
                  <li>SQL</li>
                  <li>GIT</li>
                  <li>LINUX</li>
                  <li>REACT</li>
                  <li>LARAVEL</li>
                  <li>CODEIGNITER</li>
                  <li>WORDPRESS</li>
                </ul>
              </div>
            </div>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faLaravel} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faPhp} color='#7A86B8' />
            </div>
          </div>
        </div>

      </div>
      <Loader type='pacman' />
    </>
  );
}

export default About;