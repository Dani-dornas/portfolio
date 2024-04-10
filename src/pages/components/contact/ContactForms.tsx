import styled from "styled-components";

export default function ContactForms() {
  const ContactFormsSld = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & input,
    textarea {
      margin-bottom: 10px;
      background-color: rgba(255, 255, 255, 0.5);
      border: 0.5px solid white;
      border-radius: 10px;
      width: 40%;
      padding: 5px 15px 5px 15px;
      color: white;
      font-size: medium;

      &::placeholder {
        color: white;
        font-weight: bolder;
        font-size: large;
      }
    }

    & textarea {
      height: 100px;
      text-align: start;
      resize: none;
    }

    & button {
      margin: 18px;
      background-color: #3a8c00;
      border: 2px solid rgba(0, 0, 0, 0);
      border-radius: 8px;
      padding: 10px 15px 10px 15px;
      color: white;
      box-shadow: 5px 5px black;
      font-size: large;
      transition: all 0.6s ease;
      transition: border 0s ease;

      &:hover {
        cursor: pointer;
        background-color: #a1d28a;
        color: black;
      }

      &:active {
        background-color: #80a56e;
        border: 2px solid black;
      }
    }
  `;

  return (
    <ContactFormsSld>
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="Email" />
      <textarea placeholder="Mensagem" />
      <button>Enviar</button>
    </ContactFormsSld>
  );
}
