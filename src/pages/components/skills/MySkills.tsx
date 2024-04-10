import styled from "styled-components";
import {
  css,
  figma,
  git,
  html,
  js,
  linux,
  node,
  office,
  postgres,
  python,
  react,
  ts,
} from "../../../assets";
import BasicLevel from "./BasicLevel";
import AdvancedLevel from "./AdvancedLevel";
import MidLevel from "./MidLevel";

const MySkillsSld = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0px 15vw;
  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 150px;
    height: 150px;
    margin: 0px 8px;
  }
  & li h5 {
    color: white;
  }
  & img {
    max-width: 50px;
    margin: auto;
  }
`;

export default function MySkills() {
  return (
    <MySkillsSld>
      <li>
        <h5>HTML 5</h5>
        <img src={html} alt="html-icon" />
        <AdvancedLevel />
      </li>
      <li>
        <h5>CSS 3</h5>
        <img src={css} alt="css-icon" />
        <AdvancedLevel />
      </li>
      <li>
        <h5>JAVASCRIPT</h5>
        <img src={js} alt="js-icon" />
        <MidLevel />
      </li>
      <li>
        <h5>TYPESCRIPT</h5>
        <img src={ts} alt="ts-icon" />
        <MidLevel />
      </li>
      <li>
        <h5>REACT</h5>
        <img src={react} alt="react-icon" />
        <MidLevel />
      </li>
      <li>
        <h5>POSTGRES</h5>
        <img src={postgres} alt="postgres-icon" />
        <MidLevel />
      </li>
      <li>
        <h5>PYTHON</h5>
        <img src={python} alt="python-icon" />
        <MidLevel />
      </li>
      <li>
        <h5>LINUX</h5>
        <img src={linux} alt="linux-icon" />
        <BasicLevel />
      </li>
      <li>
        <h5>NODE</h5>
        <img src={node} alt="node-icon" />
        <MidLevel />
      </li>
      <li>
        <h5>OFFICE</h5>
        <img src={office} alt="office-icon" />
        <AdvancedLevel />
      </li>
      <li>
        <h5>GIT</h5>
        <img src={git} alt="git-icon" />
        <AdvancedLevel />
      </li>
      <li>
        <h5>FIGMA</h5>
        <img src={figma} alt="figma-icon" />
        <MidLevel />
      </li>
    </MySkillsSld>
  );
}
