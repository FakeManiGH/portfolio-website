import { Header } from '../components';
import { Section, Main, Button, AutoGrid } from '../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Lbo() {
  return (
    <div>
      <Header title="LightBox Overlay - LBO" />
      <Main>
        <Section>
          <img src="src/assets/lbo.svg" className="logo" alt="LightBox Overlay Logo" />
          <p>Version 2.0.1</p>
          <Button><FontAwesomeIcon icon={faGithub} /> Download from GitHub</Button>
        </Section>
        <hr />
        <Section>
          <h2>Contents</h2>
          <AutoGrid>
            <a href="#overview" className="btn">OVERVIEW</a>
            <a href="#preview" className="btn">PREVIEW</a>
            <a href="#setup" className="btn">SETUP</a>
            <a href="#activation" className="btn">ACTIVATION</a>
            <a href="#download" className="btn">DOWNLOAD FUNCTION</a>
            <a href="#user_manual" className="btn">USER MANUAL</a>
            <a href="#broser-support" className="btn">BROWSER SUPPORT</a>
            <a href="#license" className="btn">LICENSE</a>
            <a href="#help" className="btn">NEED HELP?</a>
          </AutoGrid>
        </Section>
        
        {/* Overview */}
        <Section>
          <h2 id="overview">Overview</h2>
          <p>LightBox Overlay is a script for creating image viewing layer on any webpage that supports JavaScript. LBO is designed to work with image galleries and single images. It is an easy way to implement user friendly image browsing functionality on your web project.</p>
        </Section>
      </Main>
    </div>
  );
}

export default Lbo;