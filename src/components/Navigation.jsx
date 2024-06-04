import { NavLink } from "react-router-dom";
import { NavBar, MainNavigation, SocialNav } from "../elements/";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Navigation() {

  function showMenu() {
    const nav = document.getElementById('main_navigation');
    nav.style.display === 'flex' ? nav.style.display = 'none' : nav.style.display = 'flex';
  }

  window.addEventListener('resize', () => {
    const nav = document.getElementById('main_navigation' );
    if(window.innerWidth > 768) {
      nav.style.display = 'flex';
    } else {
      nav.style.display = 'none';
    }
  });

  // Close the menu when a link is clicked
  document.querySelectorAll('nav a').forEach( link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('main_navigation');
      nav.style.display = 'none';
    });
  });

  return (
    <NavBar>
      <SocialNav>
        <a href="https://github.com/FakeManiGH" target="_blanc"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/timo-anjala-iam/" target="_blanc"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.instagram.com/timo.anjala" target="_blanc"><FontAwesomeIcon icon={faInstagram} /></a>
      </SocialNav>
      <FontAwesomeIcon icon={faBars} className="burger_btn" onClick={showMenu} />
      <MainNavigation id="main_navigation">
          <NavLink to="/" end><FontAwesomeIcon icon={faHome} /> Home</NavLink>
          <NavLink to="/projects"><FontAwesomeIcon icon={faCode} /> Projects</NavLink>
          <NavLink to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</NavLink>
          <NavLink to="/about"><FontAwesomeIcon icon={faUser} /> About</NavLink>
      </MainNavigation>
    </NavBar>
  );
}

export default Navigation;