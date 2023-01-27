import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import CodeWars from '../../assets/images/codewars.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
  const [menuState, setmenuState] = useState(false);
  const handleMenu = () =>{
    setmenuState(menuState => !menuState);
    // let navbar = document.querySelectorAll('.nav-bar');
    // navbar.classList.add('show');
    // console.log(navbar);
  }
  let toggleClassCheck = menuState ? 'active' : null;
  return(
      <>
        <div 
          className={`nav-bar ${toggleClassCheck}`}
        >
          <Link className='logo' to='/'>
            <img src={LogoS}  alt='logo' />
          </Link>
          <a
            target='_blank' 
            rel='noreferrer' 
            href='https://www.codewars.com/users/David0105'
          >
            <img  src={CodeWars} alt='codewars' className='codewars' title='Codewars'/>
          </a>
          <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
              <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
              <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
              <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
          </nav>
          <ul>
            <li>
              <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/juan-david-34b9051a1/'
              > 
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' className='anchor-icon' />
              </a>
            </li>
            <li>
              <a 
                target='_blank' 
                rel='noreferrer' 
                href='https://github.com/d4v1d94'
              > 
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' className='anchor-icon' />
              </a>
            </li>
            <li>
              <a
                href='mailto:davidpinedaaaa@gmail.com'
              > 
                <FontAwesomeIcon icon={faGoogle} color='#4d4d4e' className='anchor-icon' />
              </a>
            </li>
          </ul>
        </div>
        <div onClick={handleMenu}>
            <FontAwesomeIcon icon={faListAlt} color='#f1f1f1' className='anchor-icon' />
        </div>
    </>
  );
}

export default Sidebar;