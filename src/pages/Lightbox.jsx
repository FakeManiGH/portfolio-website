import { Header } from '../components';
import { Section, Main, Button, AutoGrid, GridImage } from '../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { HashLink } from 'react-router-hash-link';


function Lightbox() {
  return (
    <div>
      <Header title="LightBox Overlay - LBO" />
      <Main>
        <Section>
          <img src="src/assets/lbo.png" className="logo" alt="LightBox Overlay Logo" />
          <p>Version 2.0.1</p>
          <Button><FontAwesomeIcon icon={faGithub} /> Download from GitHub</Button>
        </Section>
        <hr />
        <Section>
          <h2>Contents</h2>
          <AutoGrid>
            <HashLink smooth to="#overview" className="btn">Overview</HashLink>
            <HashLink smooth to="#preview" className="btn">Preview</HashLink>
            <HashLink smooth to="#setup" className="btn">Setup</HashLink>
            <HashLink smooth to="#activation" className="btn">Activation</HashLink>
            <HashLink smooth to="#download" className="btn">Download img</HashLink>
            <HashLink smooth to="#user_manual" className="btn">User manual</HashLink>
            <HashLink smooth to="#broser-support" className="btn">Browser support</HashLink>
            <HashLink smooth to="#license" className="btn">License</HashLink>
            <HashLink smooth to="#help" className="btn">Need help?</HashLink>
          </AutoGrid>
        </Section>
        
        {/* Overview */}
        <Section id="overview">
          <h2 id="overview">Overview</h2>
          <p>LightBox Overlay is a script for creating image viewing layer on any webpage that supports JavaScript. LBO is designed to work with image galleries and single images. It is an easy way to implement user friendly image browsing functionality on your web project.</p>
        </Section>

        {/* Preview */}
        <Section id="preview">
          <h2>Preview</h2>
          <p>LBO works for both single image and image gallery. Below you find example, how it works in both cases.</p>
          <h5>Single image</h5>
          <AutoGrid>
            <GridImage src="src/assets/lbo_single.jpg" alt="Single image preview" />
          </AutoGrid>
        </Section> 
      </Main>
    </div>
  );
}

export default Lightbox;