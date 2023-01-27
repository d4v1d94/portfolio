import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import Me from '../../assets/images/me.jpeg'
import AnimatedLetters from '../AnimatedLetters';
import Experience from './experience';
import './index.scss';

const Home = () => {  
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['J','u','a','n',' ','D','a','v','i','d', ' ','P','i','n','e','d','a','.'];
  const jobArray = ['D','e','s','a','r','r','o','l','l','a','d','o','r',' ','w','e','b', '.'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>ola,</span>
            <br />
            <span className={`${letterClass} _13`}>S</span>
            <span className={`${letterClass} _14`}>oy</span>
            <img src={Me} alt='developer' />
            <br /> 
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br /> 
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={jobArray}
              idx={33}
            />
          </h1>
          <h2>FullStack Developer / JavaScript / PHP / HTML / CSS </h2>
          <Link to='/contact' className='flat-button'>CONTACTAME</Link>
        </div>
        <div className='experience'>
        <Experience />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;