import styled from "styled-components";
import DownloadCVButton from "./DownloadCV";

const HeaderNavSld = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  list-style: square;
  color: #3a8c00;
`;

const NavListItem = styled.li`
  margin: 0px 20px;
`;

const NavLinks = styled.a`
  color: white;
  text-decoration: none;
`;

export default function HeaderNav() {
  return (
    <HeaderNavSld>
      <NavList>
        <NavListItem>
          <NavLinks href="">Skills</NavLinks>
        </NavListItem>
        <NavListItem>
          <NavLinks href="">Projetos</NavLinks>
        </NavListItem>
        <NavListItem>
          <NavLinks href="">Sobre</NavLinks>
        </NavListItem>
        <NavListItem>
          <NavLinks href="">Contato</NavLinks>
        </NavListItem>
      </NavList>
      <DownloadCVButton />
    </HeaderNavSld>
  );
}
