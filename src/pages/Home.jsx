import { Header } from '../components';
import { Main } from '../elements/';
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage} from '@fortawesome/free-solid-svg-icons';
import scribbleLogo from '../assets/scribble-logo.png';

function Home() {
  return (
    <>
      <Helmet>
        <title>Timo Anjala - Web Developer & ICT Specialist</title>
        <meta name="description" content="Timo Anjala is a web developer and ICT specialist (Identity & Access Management). He has a passion for creating and developing websites and applications." />
        <meta name="keywords" content="web developer, ICT specialist, Identity & Access Management, web development, web applications" />
      </Helmet>

      <Header title="Web Developer & ICT Specialist" />
      <Main>
          <img src={scribbleLogo} className="logo2" alt="Timo Anjala logo" />

          <h1>Welcome to My Portfolio!</h1>
          <p>
            I am a web developer and ICT specialist (Identity & Access Management). I have a passion for creating
            and developing websites and applications. I am always looking for new challenges and opportunities to learn new technologies.
            Feel free to browse my projects, skills, and learn more about me.
          </p>

          <hr />

          <h5>Looking for my photography?</h5>
          <p>One of my favorite hobbies is nature and scenery photography. If you are interested to see some of my shots, you can visit my gallery.</p>
          <p><NavLink to="#" style={{textDecoration: 'line-through'}}><FontAwesomeIcon icon={faImage} /> Visit My Gallery</NavLink> (Opening soon...)</p>
      </Main>
    </>
    
  );
}

export default Home;