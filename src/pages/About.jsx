import { Header} from '../components';
import { Main, List, ListItem, ColumnFlex, Button } from '../elements';
import {Helmet} from "react-helmet";


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
        
        <img src="src/assets/MyPhoto.png" className="logo2" alt="Me" />
        <h1>Who is Timo Anjala?</h1>

        <p>
          I am a web developer and ICT specialist (IAM). I have a passion for creating
          and developing websites and applications. I have experience in front-end and back-end development, and I am always looking for new challenges and opportunities to learn new technologies.
        </p>
        <p>
          I have strong background on Sales &amp; Marketing positions, working with B2C and B2B customers. I have also worked in IT support and customer service positions, so I have a good understanding of customer needs and requirements.
        </p>
        <p>
          My motto is <strong>&quot;I can always learn more&quot;</strong>, so I am always looking for new things to learn and improve myself. I am always a team player, but I can also work independently just fine. I am a good communicator and I have a good sense of humor.
        </p>

        <List>
          <ListItem>
            <h2>Education</h2>
            <ColumnFlex style={{marginLeft: 20}}>
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
          </ListItem>

          <ListItem>
            <h2>Hobbies</h2>
            <ColumnFlex style={{marginLeft: 20}}>
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
          </ListItem>
        </List>
      </Main>
    </>
  );
}

export default About;