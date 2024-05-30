import { CodeBlock, Header } from '../components';
import { NavLink } from "react-router-dom";
import { Section, Main, Button, AutoGrid, List, ListItem, CompactList, SubList } from '../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { LBOimage } from 'lightbox-overlay-react';
import { Helmet } from "react-helmet";


function LBOgeneral() {
  return (
    <>
      <Helmet>
        <title>LightBox Overlay General</title>
        <meta name="description" content="LBOgeneral is simple and modern image lightbox for all code projects that use HTML elements, or accept HTML attributes." />
        <meta name="keywords" content="LightBox Overlay, LBO, LBOgeneral, images, gallery, browsing, JavaScript" />
      </Helmet>

      <Header title="LightBox Overlay - LBOgeneral" />
      <Main>
        <Section>
          <img src="src/assets/lbo.png" className="logo" alt="LightBox Overlay Logo" />
          <h1>LBO General</h1>
          <a href="https://github.com/FakeManiGH/lightbox-overlay-general" target="_blank" rel="noopener noreferrer">
            <Button><FontAwesomeIcon icon={faGithub} /> Download from GitHub</Button>
          </a>
        </Section>

        <Section>
          {/* Contents */}
          <h2>Contents</h2>
          <AutoGrid>
            <HashLink smooth to="#overview" className="btn">Overview</HashLink>
            <HashLink smooth to="#preview" className="btn">Preview</HashLink>
            <HashLink smooth to="#setup" className="btn">Setup</HashLink>
            <HashLink smooth to="#activation" className="btn">Activation</HashLink>
            <HashLink smooth to="#download" className="btn">Image download</HashLink>
            <HashLink smooth to="#navigation" className="btn">Navigation</HashLink>
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
              <li><strong>Build for:</strong> All projects that use HTML elements, or accepts HTML element attributes. Build with JavaScript version ECMAScript 2023 (ES14).</li>
                <SubList>
                    <li><strong>For React:</strong> Use <NavLink to='/LBOreact'>LBOreact</NavLink> for React projects.</li>
                </SubList>
              <li><strong>Responsive:</strong> LBOgeneral works on all display sizes from desktop to mobile. Built-in <strong>DOM listener</strong>, looking for DOM changes (new images).</li>
              <li><strong>Functionality:</strong> 
                  <SubList>
                      <li>Single Image Lightbox</li>
                      <li>Image Gallery Lightbox</li>
                      <li>Image Download</li>
                      <li>Fullscreen Mode</li>
                  </SubList>
              </li>
              <li><strong>Browser Support:</strong> LBOgeneral works on all modern browsers and mobile devices.</li>
              <li><strong>License:</strong> LBOgeneral is licensed under <a href="#license">The MIT License</a>.</li>
              <li><strong>Customization:</strong> All styles are customizable from included CSS file. Functions are also customizable from JS file. No quick setups.</li>
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

          {/* Setup */}
            <ListItem id="setup">
              <h2>Setup</h2>
              <p>Download the LBOgeneral files from GitHub and include them in your project.</p>
              <h5>Step 1: Download</h5>
              <p>Download the latest release of LBOgeneral as ZIP file from GitHub. Export <strong>lbo.css</strong> and <strong>lbo.js</strong> files to your project folder.</p>
              <Button><FontAwesomeIcon icon={faGithub} /> Download from GitHub</Button>
              <br />
              <h5>Step 2: Include files</h5>
              <p>Link the LBOgeneral CSS and JS files to &#x2C2;HEAD&#x2C3; section of the document, where you wish to use LBO.</p>
              <CodeBlock code={'<link rel="stylesheet" href="location/of/lbo.css" />'} />
              <CodeBlock code={'<script src="location/of/lbo.js" defer></script>'} />
            </ListItem>

          <hr />

          {/* Activation */}
          <ListItem id="activation">
            <h2>Activation</h2>
            <h5>Single image:</h5>
            <p>- Activate LBO by adding <strong>data-lbo</strong> attribute to your image elements.</p>
            <CodeBlock code={'<img src="path/to/image.jpg" data-lbo title="title for image" />'} />
            <h5>Image gallery:</h5>
            <p>- For image gallery, add <strong>gallery name</strong> as value to <strong>data-lbo</strong> attribute. Add same value to all images you want to view in same gallery.</p>
<CodeBlock code={`<img src="path/to/image1.jpg" data-lbo="myGallery" title="title for image 1" />
<img src="path/to/image2.jpg" data-lbo="myGallery" title="title for image 2" />
<img src="path/to/image3.jpg" data-lbo="myGallery" title="title for image 3" />
<img src="path/to/image4.jpg" data-lbo="myGallery" title="title for image 4" />
`} />
            <p><strong>Remember!</strong> to add alt=&quot;image description&quot; attribute to all images for accessibility.</p>
          </ListItem>

          <hr />

          {/* Image download */}
          <ListItem id="download">
            <h2>Image download</h2>
            <p>For image download function, add <strong>download=&quot;yes&quot;</strong> attribute to image element. Download button apperas for set image inside LBO.</p>
            <CodeBlock code={'<img src="path/to/image.jpg" data-lbo data-title="image title" download="yes" />'} />
          </ListItem>

          <hr />

          {/* Navigation */}
          <ListItem id="navigation">
            <h2>Navigation</h2>
            <CompactList>
                <li><strong>Mouse:</strong> Use built-in buttons inside LBO to navigate.</li>
                <li><strong>Keyboard:</strong> Use <strong>right</strong> and <strong>left</strong> arrow keys to navigate between images. <strong>Backspace</strong> and <strong>Esc</strong> close lightbox.</li>
                <li><strong>Touch:</strong> Swipe left and right to navigate between images. Swipe up to close LBO.</li>
            </CompactList>
          </ListItem>

          <hr />

          {/* Browser support */}
          <ListItem id="browser-support">
            <h2>Browser support</h2>
            <p>LBOgeneral works on all modern browsers and mobile devices.</p>
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
            <p>LBOgeneral is licensed under The MIT License.</p>
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
    </>
  );
}

export default LBOgeneral;