import styled from 'styled-components';
import { ListProjects } from './components';


const ProjectsSld = styled.div`
  background-color: #3F0042;
  padding: 1vw 0vw;
`;

export default function Projects() {
  return (
    <ProjectsSld id='Projects'>
      <h1>Projetos</h1>
      <ListProjects />
    </ProjectsSld>
  );
};
