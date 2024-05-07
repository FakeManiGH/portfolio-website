import { Header, SkillMeter } from '../components';
import { Section, Main } from '../elements';


function Skills() {
  return (
    <>
      <Header title="Web development and IT skills" />
      <Main>
        <Section>
          <h2>Language Skills</h2>
          <p>I have experience in multiple markup, script, and query languages. My </p>
          <SkillMeter language="HTML" level="95" />
          <SkillMeter language="CSS" level="80" />
          <SkillMeter language="JavaScript" level="60" />
          <SkillMeter language="PHP" level="50" />
          <SkillMeter language="SQL" level="75" />
          <SkillMeter language="Python" level="25" />
        </Section>

        <Section>
          <h2>Frameworks</h2>
          <p>I have recently </p>
          <SkillMeter language="React" level="40" />
          <SkillMeter language="Node.js" level="35" />
          <SkillMeter language="Laravel" level="20" />
        </Section>

        <Section>
          <h2>Tools and Libraries</h2>
          <p></p>
          <SkillMeter language="Git" level="40" />
          <SkillMeter language="Docker" level="20" />
          <SkillMeter language="Bootstrap" level="45" />
          <SkillMeter language="VSCode" level="65" />
        </Section>

        <Section>
          <h2>Identity & Access Management</h2>
          <p>I have experience in view Identity & Access Management systems. I also contain some experience in CRM and ITSM services.</p>
          <SkillMeter language="Micro Focus NetIQ" level="55" />
          <SkillMeter language="Azure AD" level="50" />
          <SkillMeter language="One Indentity" level="40" />
          <SkillMeter language="ServiceNow" level="60" />
        </Section>

        <Section>
          <h2>Other Skills</h2>
          <p></p>
          <SkillMeter language="Linux" level="40" />
          <SkillMeter language="Windows Server" level="50" />
          <SkillMeter language="Networking" level="55" />
          <SkillMeter language="Virtual Machines & Environments" level="70" />
          <SkillMeter language="ITIL" level="60" />
        </Section>
      </Main>
    </>
  );
}

export default Skills;