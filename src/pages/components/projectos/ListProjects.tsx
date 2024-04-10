import styled from "styled-components";

export default function ListProjects() {
  const ProjectsList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    list-style: none;

    & li {
      margin: 10px 20px;
    }

    & li a {
      color: white;
      text-decoration: none;
    }

    & li a img {
      
      display: block;
      height: 100px;
      width: 100px;
      background-color: gray;
      border-radius: 50%
    }
  `;

  return (
    <ProjectsList>
      <li>
        <a href="">
          <img src="" alt="My Portfolio" />
        </a>
      </li>

      <li>
        <a href="">
          <img src="" alt="BikePass" />
        </a>
      </li>

      <li>
        <a href="">
          <img src="" alt="Learn Scrum" />
        </a>
      </li>

      <li>
        <a href="">
          <img src="" alt="DnD Sheet" />
        </a>
      </li>
    </ProjectsList>
  );
}
