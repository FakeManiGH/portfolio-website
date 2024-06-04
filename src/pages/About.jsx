import { Header, AccordionItem } from '../components';
import { Main, ColumnFlex, Button, Accordion } from '../elements';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import myPhoto from '../assets/MyPhoto.png'



function About() {
  return (
    <>
      <Helmet>
        <title>TA - About Me</title>
        <meta name="description" content="Who is Timo Anjala? Some information about me, my experience and hobbies." />
        <meta name="keywords" content="Timo Anjala, education, hobbies, photography, sales, marketing, ICT, developent, frot-end, back-end" />
      </Helmet>

      <Header title="About Me" />
      <Main>
        
        <img src={myPhoto} className="logo2" alt="Photo of me" />
        <h1>Who is Timo Anjala?</h1>

        <p>
          I am a web developer and ICT specialist (IAM). I have a passion for creating
          and developing websites and applications. I have experience in front-end and back-end development, 
          and I am always looking for new challenges and opportunities to learn new technologies and techniques.
        </p>
        <p>
          I have strong background on Sales &amp; Marketing positions, working with B2C and B2B customers. I have also worked in IT support and customer service positions, so I have a good understanding of customer needs and requirements.
        </p>
        <p>
          My motto is <strong>&quot;I can always learn more&quot;</strong>, so I am always looking for new things to learn and improve myself. 
          I am a team player, but I can also work independently just fine. I am a good communicator and I have a good sense of humor. 
          I absolutely love problem solving tasks and I am always looking for new challenges. Cannot live without them.
        </p>

        <hr />

        {/* Accordion */}
        <Accordion>
          <AccordionItem title="Education">

            {/* Education */}
            <ColumnFlex>
                <h6><strong>Web Application Development</strong> | 2024 | <a href="https://www.omnia.fi/" target="_blank">Omnia</a></h6>
                <p>Full stack development (vocational), containing 3 end-to-end development projects.</p>
                <hr />
                <h6><strong>Web Service Specialist</strong> | 2023 | <a href="https://www.taitotalo.fi/" target="_blank">Taitotalo</a></h6>
                <p>Vocational studies of web service development, containing media, marketing, and web development.</p>
                <hr />
                <h6><strong>ICT Specialist (IAM)</strong> | 2022 | <a href="https://www.bc.fi/" target="_blank">Business College Helsinki</a></h6>
                <p>ICT specialist studies, focusing on Identity and Access Management. IAM, CIAM, PAM, CRM, ITSM.</p>
                <hr />
                <h6><strong>Undergraduate</strong> | 2009 | <a href="https://www.espoo.fi/fi/espoonlahden-lukio" target="_blank">Espoonlahden Lukio</a></h6>
                <p>General upper secondary school, general knowledge.</p>
              </ColumnFlex>
          </AccordionItem>
          
          {/* Hobbies */}
          <AccordionItem title="Hobbies">
            <ColumnFlex>
              <h6><strong>Photography</strong></h6>
              <p>
                I spend a lot of time on nature trails with my camera looking for your usual suspects, birds and animals. I am also known for snapping scenery photos when opportunity presents itself. 
                If you are interested and want to see some of my photos, visit my personal gallery.
              </p>
              <a href="#"><Button >Gallery coming soon...</Button></a>

              <hr />

              <h6><strong>Video Games</strong></h6>
              <p>Playing video games is a great way to relax after work and zone out. I like Action RPG, MMO, and driving games, so quite wide variety.</p>
            </ColumnFlex>
          </AccordionItem>

          {/* Languages */}
          <AccordionItem title="Languages">
            <ColumnFlex>
              <h6><strong>Finnish</strong></h6>
              <p>Native language.</p>
              <hr />
              <h6><strong>English</strong></h6>
              <p>Fluent in English, written and spoken.</p>
              <hr />
              <h6><strong>Swedish</strong></h6>
              <p>Basic knowledge of Swedish, can understand and communicate.</p>
            </ColumnFlex>
          </AccordionItem>

          {/* Skills */}
          <AccordionItem title="Skills">
            <ColumnFlex>
              <h6><strong>Front-End Development</strong></h6>
              <p>HTML, CSS, JavaScript, React, Bootstrap, MaterialUI, WordPress</p>
              <hr />
              <h6><strong>Back-End Development</strong></h6>
              <p>Node.js, MySQL, PHP, Python, (Flask)</p>
              <hr />
              <h6><strong>(Web) Design</strong></h6>
              <p>Figma, Canva, Illustrator, GIMP2, Photoshop, Rush</p>
              <hr />
              <h6><strong>Identity & Access Management</strong></h6>
              <p>CIAM, PAM, CRM, ITSM, IAM, SSO, MFA, SAML</p>
              <hr />
              <h6><strong>Other Skills</strong></h6>
              <p>Linux, Microsoft Server, SSH, VirtualBox, HyperV, SEO, cPanel</p>
            </ColumnFlex>
          </AccordionItem>
        </Accordion>

      </Main>
    </>
  );
}

export default About;