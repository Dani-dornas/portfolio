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

const MySkillsSld = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 150px;
    height: 150px;
  }
  & li h4 {
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
        <h4>HTML 5</h4>
        <img src={html} alt="html-icon" />
        <BasicLevel />
      </li>
      <li>
        <h4>CSS 3</h4>
        <img src={css} alt="css-icon" />
        <BasicLevel />
      </li>
      <li>
        <h4>JAVASCRIPT</h4>
        <img src={js} alt="js-icon" />
        <BasicLevel />
      </li>
      <li>
        <h4>TYPESCRIPT</h4>
        <img src={ts} alt="ts-icon" />
        <BasicLevel />
      </li>
      <li>
        <h4>REACT</h4>
        <img src={react} alt="react-icon" />
        <BasicLevel />
      </li>
      <li>
        <h4>POSTGRES</h4>
        <img src={postgres} alt="postgres-icon" />
        <BasicLevel />
      </li>
      <li>
        <h4>PYTHON</h4>
        <img src={python} alt="python-icon" />
        <BasicLevel />
      </li>
      <li>
        <h4>LINUX</h4>
        <img src={linux} alt="linux-icon" />
        <BasicLevel />
      </li>
      <li>
        <h4>NODE</h4>
        <img src={node} alt="node-icon" />
        <BasicLevel />
      </li>
      <li>
        <h4>OFFICE</h4>
        <img src={office} alt="office-icon" />
        <BasicLevel />
      </li>
      <li>
        <h4>GIT</h4>
        <img src={git} alt="git-icon" />
        <BasicLevel />
      </li>
      <li>
        <h4>FIGMA</h4>
        <img src={figma} alt="figma-icon" />
        <BasicLevel />
      </li>
    </MySkillsSld>
  );
}
