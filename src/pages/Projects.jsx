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
            <h3>LightBox Overlay - v2.0.1</h3>
            <p>LightBox Overlay is a script for creating image viewing layer on any webpage that supports JavaScript. LBO is designed to work with image galleries and single images. It is an easy way to implement user friendly image browsing functionality on your web project.</p>
            <RowFlex>
              <NavLink to='/lbo'><Button><FontAwesomeIcon icon={faArrowAltCircleRight} /> View project</Button></NavLink>
              <Button onClick={() => window.open('https://github.com/FakeManiGH/lightbox-overlay', '_blank')}><FontAwesomeIcon icon={faGithub} /> View in GitHub</Button>
            </RowFlex>
          </ListItem>
          <ListItem>
            <h3>To Do App</h3>
            <p>A simple to-do-app to set reminders by date.</p>
            <RowFlex>
              <NavLink to='/to-do-app'><Button><FontAwesomeIcon icon={faArrowAltCircleRight} /> View project</Button></NavLink>
              <Button onClick={() => window.open('https://github.com/FakeManiGH/to-do-app', '_blank')}><FontAwesomeIcon icon={faGithub} /> View in GitHub</Button>
            </RowFlex>
          </ListItem>
          <ListItem>
            <h3>Project 3</h3>
            <p>Project description</p>
            <Button>View project</Button>
          </ListItem>
        </List>
      </Main>
    </>
  );
}

export default Projects;