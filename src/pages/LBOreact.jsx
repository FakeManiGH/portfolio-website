import { CodeBlock, Header } from '../components';
import { NavLink } from "react-router-dom";
import { Section, Main, Button, AutoGrid, List, ListItem, CompactList, SubList } from '../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { LBOimage } from 'lightbox-overlay-react';


function LBOreact() {
  return (
    <div>
      <Header title="LightBox Overlay - LBOreact" />
      <Main>
        <Section>
            <img src="src/assets/lbo.png" className="logo" alt="LightBox Overlay Logo" />
            <h1>LBO React v1.2.0</h1>
            <a href="https://github.com/FakeManiGH/lightbox-overlay-react" target="_blank" rel="noopener noreferrer">
                <Button><FontAwesomeIcon icon={faGithub} /> Download from GitHub</Button>
            </a>
        </Section>

        <hr />
        
        <Section>
          {/* Contents */}
          <h2>Contents</h2>
          <AutoGrid>
            <HashLink smooth to="#overview" className="btn">Overview</HashLink>
            <HashLink smooth to="#preview" className="btn">Preview</HashLink>
            <HashLink smooth to="#installation" className="btn">Installation</HashLink>
            <HashLink smooth to="#activation" className="btn">Setup</HashLink>
            <HashLink smooth to="#browser-support" className="btn">Browser support</HashLink>
            <HashLink smooth to="#license" className="btn">License</HashLink>
            <HashLink smooth to="#help" className="btn">Need help?</HashLink>
          </AutoGrid>
        </Section>
        
        <hr />

        <List>

          {/* Overview */}
          <ListItem id="overview">
            <h2 id="overview">Overview</h2>
            <CompactList>
              <li><strong>Build for React:</strong> LBOreact works on React 18. It has not been tested with older versions. If you are not using react in your project, for non-React projects, use <NavLink to='/LBOgeneral'>LBOgeneral.</NavLink></li>
                <li><strong>Build with:</strong> React components and supports TypeScript.</li>
              <li><strong>Responsive:</strong> LBOreact works on all display sizes from desktop to mobile devices.</li>
              <li><strong>Functionality:</strong> 
                  <SubList>
                      <li>Single Image Lightbox</li>
                      <li>Image Gallery Lightbox</li>
                      <li>Image Download</li>
                      <li>Fullscreen Mode</li>
                  </SubList>
              </li>
              <li><strong>Navigation:</strong>
                    <SubList>
                        <li><strong>Mouse:</strong> Use built-in buttons inside the LBO.</li>
                        <li><strong>Keyboard:</strong> Move between images with RIGHT and LEFT arrow-keys, ESC and BACKSPACE closes the overlay.</li>
                        <li><strong>Touch:</strong> Swipe left and right to move between images and up to close the overlay.</li>
                    </SubList>
              </li>
              <li><strong>Browser Support:</strong> LBOreact works on all modern browsers and mobile devices.</li>
              <li><strong>License:</strong> LBOreact is licensed under <a href="#license">The MIT License</a>.</li>
              <li><strong>Customization:</strong> No quick customization. Styled-elements are free to customize (colors, animations).</li>
            </CompactList>          
          </ListItem>

          <hr />

          {/* Preview */}
          <ListItem id="preview">
            <h2>Preview</h2>
            <p>LBO works for both single image and image gallery. Below you find example, how it works in both cases.</p>
            <h5>Single image</h5>
            <AutoGrid>
              <LBOimage src="src/assets/lbo_single.jpg" alt="Single image preview" title="Foggy winter weahter..." />
            </AutoGrid>

            <h5>Image gallery</h5>
            <AutoGrid>
              <LBOimage src="src/assets/lbo_gallery_1.jpg" title="Roe deer resting" gallery="gallery" alt="Roe deer resting" />
              <LBOimage src="src/assets/lbo_gallery_2.jpg" title="Roe deer on snowy field" gallery="gallery" alt="Roe deer on snowy field" download />
              <LBOimage src="src/assets/lbo_gallery_3.jpg" title="Lizzard between pier boards" gallery="gallery" alt="Lizzard between pier boards" download />
              <LBOimage src="src/assets/lbo_gallery_4.jpg" title="Fox standing on hay bale" gallery="gallery" alt="Fox standing on hay bale" />
            </AutoGrid>
          </ListItem>

          <hr />

          {/* Installation */}
          <ListItem id="installation">
            <h2>Installation</h2>
            <p>LBOreact is Node Package and you can use NPM to install it to your project.</p>
            <CodeBlock code={'npm install lightbox-overlay-react'} />
          </ListItem>

          <hr />

          {/* Setup */}
          <ListItem id="setup">
            <h2>Setup</h2>
            <p>Import LBOimage component:</p>
            <CodeBlock code={`import { LBOimage } from 'lightbox-overlay-react';`} />
            <p>Activate LBO for single image:</p>
            <CodeBlock code={`<LBOimage src="src/assets/lbo_single.jpg" title="image title" alt="image description" />`} />
            <p>Example of a gallery setup in app:</p>
<CodeBlock code={`
import { LBOimage } from 'lightbox-overlay-react';

function App() {
    return (
        <>
            <h4>LBO Gallery</h4>
            <div>
                <LBOimage src="path/of/image1" gallery="gallery1" title="img-title1" />
                <LBOimage src="path/of/image2" gallery="gallery1" title="img-title2" />
                <LBOimage src="path/of/image3" gallery="gallery1" title="img-title3" />
                <LBOimage src="path/of/image4" gallery="gallery1" title="img-title4" />
            </div>
        </>
    )
}

export default App;
`} />
          <p><strong>Remember!</strong> Add alt=&quot;image description&quot; attribute to all images for accessibility.</p>
          </ListItem>

          <hr />

          {/* Browser support */}
          <ListItem id="browser-support">
            <h2>Browser support</h2>
            <p>LBOreact works on all modern browsers and mobile devices.</p>
            <CompactList>
                <li>Chrome</li>
                <li>Firefox</li>
                <li>Edge</li>
                <li>Safari</li>
                <li>Opera</li>
                <li>Mobile browsers</li>
            </CompactList>
          </ListItem>

          <hr />

          {/* License */}
          <ListItem id="license">
            <h2>License</h2>
            <p>LBOreact is licensed under The MIT License.</p>
            <p>Read the full license from <a href="https://opensource.org/licenses/MIT">opensource.org</a>.</p>
          </ListItem>

          <hr />

          {/* Need help? */}
          <ListItem id="help">
            <h2>Need help?</h2>
            <p>If you run into problem with Lightbox-Overlay script, follow these steps:</p>

            <CompactList>
                <li>Search Google and <a href="https://stackoverflow.com/" target="_blank">StackOverflow</a>, if someone has same issue with you.</li>
                <li>If problem is unique, <a href="https://stackoverflow.com/questions/ask">Post a New Question</a> with LBO -tag.</li>
            </CompactList>

            <p><strong>! Github Issue reports are not to be used for posting personal support requests</strong></p>
          </ListItem>

        </List>
      </Main>
    </div>
  );
}

export default LBOreact;