import { ContactForms, SocialMedia } from "./components";
import "./css/contact.css";

export const Contact = () => {
  return (
    <div id="contato">
      <h1>Contatos</h1>

      <ContactForms />

      <SocialMedia />
    </div>
  );
};
