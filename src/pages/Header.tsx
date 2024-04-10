import styled from 'styled-components';
import { HeaderNav } from './components';
import { logo } from '../assets';

const HeaderSld = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 30px;
`;

const Logo = styled.img`
  border-radius: 50%;
  max-width: 70px;
`;

export default function Header() {
  return (
    <HeaderSld>
      <Logo src={logo} alt="Daniel Dornelas" />
      <HeaderNav />
    </HeaderSld>
  );
};
