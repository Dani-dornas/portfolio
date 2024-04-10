import styled from 'styled-components';
import { HeaderNav } from './components';

const HeaderSld = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 30px;
`;

const Logo = styled.img`
  border-radius: 50%;
  margin: 10px;
`;

export default function Header() {
  return (
    <HeaderSld>
      <Logo src="" alt="Daniel Dornelas" />
      <HeaderNav />
    </HeaderSld>
  );
};
