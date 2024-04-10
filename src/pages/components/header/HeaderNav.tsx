import styled from "styled-components";
import DownloadCVButton from "./DownloadCV";

const HeaderNavSld = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  list-style: square;
  color: #3a8c00;

  & li {
    margin: 0px 20px;
  }
  & li a {
    color: white;
    text-decoration: none;
  }
`;

export default function HeaderNav() {
  return (
    <HeaderNavSld>
      <NavList>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Projects">Projetos</a>
        </li>
        <li>
          <a href="#About">Sobre</a>
        </li>
        <li>
          <a href="#Contact">Contato</a>
        </li>
      </NavList>
      <DownloadCVButton />
    </HeaderNavSld>
  );
}
