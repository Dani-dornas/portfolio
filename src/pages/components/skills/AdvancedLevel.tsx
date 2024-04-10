import styled from "styled-components";

const Level3 = styled.div`
  width: 100%;
  border: 1px solid white;
  border-radius: 10px;
  height: 20px;
& div {
  background-color: black;
  width: 85%;
  border-radius: 10px;
  height: 99%;
}
`;

export default function AdvancedLevel() {
  return <Level3><div>.</div></Level3>;
}
