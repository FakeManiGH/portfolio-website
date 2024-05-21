import { Header, SkillMeter } from '../components';
import { Section, Main } from '../elements';


function Skills() {
  return (
    <>
      <Header title="Web Development and IT Skills" />
      <Main>
        <Section>
          <h2>Language Skills</h2>
          <p className="grey">I have experience in multiple markup, script, and query languages. I have skills to build functional web applications (Full stack).</p>
          <SkillMeter language="HTML" level="95" />
          <SkillMeter language="CSS" level="80" />
          <SkillMeter language="JavaScript" level="55" />
          <SkillMeter language="PHP" level="45" />
          <SkillMeter language="SQL" level="75" />
          <SkillMeter language="Python" level="20" />
        </Section>

        <Section>
          <h2>Frameworks</h2>
          <p className="grey">I have deep div... swimming in kids pool, learning different frameworks.</p>
          <SkillMeter language="React" level="40" />
          <SkillMeter language="Node.js" level="35" />
          <SkillMeter language="Laravel" level="20" />
        </Section>

        <Section>
          <h2>Tools and Libraries</h2>
          <p className="grey">Some tools and libraries I use or have used in my projects.</p>
          <SkillMeter language="Git" level="40" />
          <SkillMeter language="Docker" level="20" />
          <SkillMeter language="Bootstrap" level="45" />
          <SkillMeter language="VSCode" level="65" />
        </Section>

        <Section>
          <h2>Identity & Access Management</h2>
          <p className="grey">I have experience in few Identity & Access Management systems. I also have aquired some experience in CRM and ITSM SaaS (ServiceNow).</p>
          <SkillMeter language="Micro Focus NetIQ" level="55" />
          <SkillMeter language="Azure AD" level="50" />
          <SkillMeter language="One Indentity" level="40" />
          <SkillMeter language="ServiceNow" level="60" />
        </Section>

        <Section>
          <h2>Media Tools</h2>
          <p className="grey">I often use various media tools on my work and hobbies. I have fair amount of experience in photo editing, photo manipulation and 2D graphics.</p>
          <SkillMeter language="Adobe Lightroom" level="95" />
          <SkillMeter language="Adobe Photoshop" level="50" />
          <SkillMeter language="Adobe Illustrator" level="50" />
          <SkillMeter language="GIMP" level="75" />
          <SkillMeter language="Inkscape" level="30" />
        </Section>

        <Section>
          <h2>Other Skills</h2>
          <SkillMeter language="Linux" level="40" />
          <SkillMeter language="Windows Server" level="50" />
          <SkillMeter language="Networking" level="55" />
          <SkillMeter language="Virtual Machines & Environments" level="70" />
          <SkillMeter language="ITIL" level="35" />
        </Section>
      </Main>
    </>
  );
}

export default Skills;