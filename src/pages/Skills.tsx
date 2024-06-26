import styled from 'styled-components';
import { MySkills } from './components';

const SkillsSld = styled.div`
  background-color: #88008F;
  padding: 1vw 0vw;
`;

export const Skills = () => {
  return (
    <SkillsSld id='Skills'>
      <h1>Skills</h1>
      <MySkills />
    </SkillsSld>
  );
};
