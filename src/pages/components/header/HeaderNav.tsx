import "../../css/header.css"

export const HeaderNav = () => {
  return (
    <nav>
      <ul className="flex-content list">
        <li className="list-item">
          <a href="" className="color-white">
            Skills
          </a>
        </li>
        <li className="list-item">
          <a href="" className="color-white">
            Projetos
          </a>
        </li>
        <li className="list-item">
          <a href="" className="color-white">
            Sobre
          </a>
        </li>
        <li className="list-item">
          <a href="" className="color-white">
            Contato
          </a>
        </li>
      </ul>
      <button className="download-cv">Download CV</button>
    </nav>
  );
};
