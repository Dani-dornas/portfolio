import styled from "styled-components";

const Level1 = styled.div`
  width: 100%;
  border: 1px solid white;
  border-radius: 10px;
  height: 20px;
& div {
  background-color: black;
  width: 33%;
  border-radius: 10px;
  height: 99%;
}
`;

export default function BasicLevel() {
  return <Level1><div>.</div></Level1>;
}
