import { Header, SkillMeter } from '../components';
import { Main, List, ListItem, Button } from '../elements';
import { Form } from 'react-bootstrap'; 
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet";


function Skills() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);

    if (event.target.value === '') {
      handleReset();
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const skills = Array.from(document.querySelectorAll('.skill-label'));
    skills.forEach(skill => {
      if (skill.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
        skill.parentElement.style.display = 'flex';
      } else {
        skill.parentElement.style.display = 'none';
      }
    });
  }

  const handleReset = () => {
    const skills = Array.from(document.querySelectorAll('.skill-label'));
    const searchForm = document.getElementById('search-form');
    searchForm.reset();
    skills.forEach(skill => {
      skill.parentElement.style.display = 'flex';
    });
  }

  return (
    <>
      <Helmet>
        <title>TA - Skills</title>
        <meta name="description" content="List of my Language, Service, Media, and ITC skills in general." />
        <meta name="keywords" content="Languages, ITC, Frameworks, Libraries, Tools, Services, IAM, Media" />
      </Helmet>

      <Header title="My Skills" />
      <Main>

        {/* Skill search bar */}
        <Form id="search-form" onSubmit={handleSearch}>
          <Form.Group className='d-flex flex-row gap-2 mt-2' controlId="search">
            <Form.Control onChange={handleInputChange} type="text" placeholder="Search for a skill..." />
            <Button onClick={handleSearch} variant="primary">Search</Button>
          </Form.Group>
        </Form>

        <List>
          <ListItem>
            <h2>Language Skills</h2>
            <SkillMeter skill="HTML" level="95" />
            <SkillMeter skill="CSS" level="80" />
            <SkillMeter skill="JavaScript" level="55" />
            <SkillMeter skill="PHP" level="45" />
            <SkillMeter skill="SQL" level="75" />
            <SkillMeter skill="Python" level="20" />
          </ListItem>

          <ListItem>
            <h2>Frameworks</h2>
            <SkillMeter skill="React" level="40" />
            <SkillMeter skill="Node.js" level="35" />
            <SkillMeter skill="Laravel" level="20" />
          </ListItem>

          <ListItem>
            <h2>Tools and Libraries</h2>
            <SkillMeter skill="Git" level="40" />
            <SkillMeter skill="Docker" level="10" />
            <SkillMeter skill="Bootstrap" level="45" />
            <SkillMeter skill="VSCode" level="65" />
          </ListItem>

          <ListItem>
            <h2>Identity & Access Management</h2>
            <SkillMeter skill="Micro Focus NetIQ" level="55" />
            <SkillMeter skill="Azure AD" level="50" />
            <SkillMeter skill="One Indentity" level="40" />
            <SkillMeter skill="ServiceNow" level="60" />
          </ListItem>

          <ListItem>
            <h2>Media Tools</h2>
            <SkillMeter skill="Adobe Lightroom" level="95" />
            <SkillMeter skill="Adobe Photoshop" level="50" />
            <SkillMeter skill="Adobe Illustrator" level="50" />
            <SkillMeter skill="GIMP" level="75" />
            <SkillMeter skill="Inkscape" level="30" />
          </ListItem>

          <ListItem>
            <h2>Other Skills</h2>
            <SkillMeter skill="Linux" level="40" />
            <SkillMeter skill="Windows Server" level="50" />
            <SkillMeter skill="Networking" level="55" />
            <SkillMeter skill="Virtual Machines & Environments" level="70" />
            <SkillMeter skill="ITIL" level="35" />
          </ListItem>
        </List>
      </Main>
    </>
  );
}

export default Skills;