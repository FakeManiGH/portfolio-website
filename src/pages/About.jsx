import { Header} from '../components';
import { Section, Main, Grid2 } from '../elements';


function About() {
  return (
    <>
      <Header title="Information about me" />
      <Main>
        <Section>
          <img src="src/assets/MyPhoto.png" className="logo2" alt="Me" />
          <h1>Personal Information</h1>
          <p>I am a web developer and ICT specialist (Identity & Access Management). I have a passion for creating
          and developing websites and applications. I am always looking for new
          challenges and opportunities to learn new technologies.</p>
        </Section>
        <Grid2>
          <Section>
            <h2>Education</h2>
            <p></p>
          </Section>
          <Section>
            <h2>Hobbies</h2>
            <p></p>
          </Section>
        </Grid2>
      </Main>
    </>
  );
}

export default About;