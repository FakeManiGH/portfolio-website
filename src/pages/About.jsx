import { Header} from '../components';
import { Section, Main } from '../elements';


function About() {
  return (
    <>
      <Header title="Information about me" />
      <Main>
        <Section>
          <h1>Personal Information</h1>
          <p>I am a web developer and ICT specialist (Identity & Access Management). I have a passion for creating
          and developing websites and applications. I am always looking for new
          challenges and opportunities to learn new technologies.</p>
        </Section>
      </Main>
    </>
  );
}

export default About;