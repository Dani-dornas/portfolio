import styled from "styled-components";

const AboutSld = styled.div`
  background-color: #88008F;
  padding: 1vw 20vw;

  & p {
    color: white;

  }
`;

export default function About() {
  return (
    <AboutSld id='About'>
      <h1>Sobre</h1>
      <div>Linha do tempo</div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis minima nemo magni omnis ad ipsum recusandae eaque consectetur ratione iusto at sit, nulla libero totam eius, tempore dolore expedita aspernatur!</p>
    </AboutSld>
  );
};
