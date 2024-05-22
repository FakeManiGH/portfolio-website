import Header from '../components/Header';
import { NavLink } from "react-router-dom";
import { Main, Section, List, ListItem, Button, RowFlex } from '../elements';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <>
      <Header title="My code projects" />
      <Main>
        <Section>
          <h2>Projects</h2>
          <p>Here are some of my personal code projects.</p>
        </Section>
        
        <List>
          <ListItem>
            <h3>LightBox Overlay - LBOgeneral</h3>
            <p>LBOgeneral is simple and modern image lightbox for all code projects that use HTML elements, or accept HTML attributes. E.g. HTML, PHP, and JavaScript.</p>
            <RowFlex>
              <NavLink to='/LBOgeneral'><Button><FontAwesomeIcon icon={faArrowAltCircleRight} /> View project</Button></NavLink>
              <Button onClick={() => window.open('https://github.com/FakeManiGH/lightbox-overlay-general', '_blank')}><FontAwesomeIcon icon={faGithub} /> View in GitHub</Button>
            </RowFlex>
          </ListItem>
          <ListItem>
            <h3>LightBox Overlay - LBOreact</h3>
            <p>LBOreact is simple and modern image lightbox for all <strong>React</strong> and <strong>Vite + React</strong> projects. Build with React components and supports TypeScript.</p>
            <RowFlex>
              <NavLink to='/LBOreact'><Button><FontAwesomeIcon icon={faArrowAltCircleRight} /> View project</Button></NavLink>
              <Button onClick={() => window.open('https://github.com/FakeManiGH/lightbox-overlay-react', '_blank')}><FontAwesomeIcon icon={faGithub} /> View in GitHub</Button>
            </RowFlex>
          </ListItem>
          <ListItem>
            <h3>To Do App</h3>
            <p>A simple to-do-app where you can set notifications by date.</p>
            <RowFlex>
              <NavLink to='/ToDo'><Button><FontAwesomeIcon icon={faArrowAltCircleRight} /> View project</Button></NavLink>
              <Button onClick={() => window.open('https://github.com/FakeManiGH/to-do-app', '_blank')}><FontAwesomeIcon icon={faGithub} /> View in GitHub</Button>
            </RowFlex>
          </ListItem>
        </List>
      </Main>
    </>
  );
}

export default Projects;