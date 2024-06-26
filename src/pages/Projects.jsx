import Header from '../components/Header';
import { NavLink } from "react-router-dom";
import { Main, List, ListItem, Button, RowFlex } from '../elements';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from "react-helmet";

function Projects() {
  return (
    <>
      <Helmet>
        <title>TA - Code Projects</title>
        <meta name="description" content="My personal code projects. All projects are also available in GitHub." />
        <meta name="keywords" content="LightBox Overlay, LBO, LBOgeneral, LBOreact, LightBox Overlay React, To-do app." />
      </Helmet>

      <Header title="My Code Projects" />
      <Main>

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
              <Button onClick={() => window.open('https://www.npmjs.com/package/lboreact', '_blank')}><FontAwesomeIcon icon={faNpm} /> View NPM</Button>
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