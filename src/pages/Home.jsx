import { Header } from '../components';
import { Main, Section } from '../elements/';

function Home() {
  return (
    <>
      <Header title="Web developer & ICT Specialist" />
      <Main>
        <Section>
          <img src="src/assets/scribble-logo.png" className="logo" alt="Timo Anjala logo" />
          <h1>Welcome to my portfolio!</h1>
          <p>
            I am a web developer and ICT specialist (Identity & Access Management). I have a passion for creating
            and developing websites and applications. I am always looking for new
            challenges and opportunities to learn new technologies.
          </p>
        </Section>
      </Main>
    </>
    
  );
}

export default Home;