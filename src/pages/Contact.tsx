import styled from "styled-components";
import { ContactForms, SocialMedia } from "./components";

const ContactSld = styled.div`
  background-color: #3F0042;
  padding: 1vw 0vw;
`;

export default function Contact() {
  return (
    <ContactSld id="Contact">
      <h1>Contatos</h1>

      <ContactForms />

      <SocialMedia />
    </ContactSld>
  );
};
