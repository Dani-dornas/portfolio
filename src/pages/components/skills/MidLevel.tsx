import styled from "styled-components";

const Level2 = styled.div`
  width: 100%;
  border: 1px solid white;
  border-radius: 10px;
  height: 20px;
& div {
  background-color: black;
  width: 50%;
  border-radius: 10px;
  height: 99%;
}
`;

export default function MidLevel() {
  return <Level2><div>.</div></Level2>;
}
