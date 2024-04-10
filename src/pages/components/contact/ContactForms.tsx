export default function ContactForms() {
  return (
    <div className="formulario-contato">
      <input type="text" placeholder="Nome" className="campo-contato" />
      <input type="text" placeholder="Email" className="campo-contato" />
      <textarea placeholder="Mensagem" className="campo-contato campo-mensagem"/>
      <button>Enviar</button>
    </div>
  );
};
