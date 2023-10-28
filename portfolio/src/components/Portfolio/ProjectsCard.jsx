import { Link } from "react-router-dom";
import CardCss from './Styles/Cards.module.css';
import proyectos from "./utils/ProjectDATAF";
import proyectosBack from "./utils/ProjectDATAB";

const ProjectsCard = () => {
  return (
    <div className={CardCss.contenedorDivs}>
      <div className={CardCss.frontProjects}>
        <h3 className={CardCss.tittle}>Front Projects</h3>
        {proyectos.map((proyecto) => (
          <div className={CardCss.card} key={proyecto.id}>
            <div className={CardCss.cardImage} style={{ backgroundImage: `url(${proyecto.imagenUrl})` }}></div>
            <div className={CardCss.cardText}>
              <h2>{proyecto.nombre}</h2>
              <p>{proyecto.herramientas}</p>
              <p>{proyecto.descripcion}</p>
              <Link to={proyecto.link}>
                <button
                 className={CardCss.btnLink}>Ver más</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className={CardCss.backProjects}>
        <h3 className={CardCss.tittle}>Back Projects</h3>
        {proyectosBack.map((proyectoB) => (
          <div className={CardCss.card} key={proyectoB.id}>
            <div className={CardCss.cardImage} style={{ backgroundImage: `url(${proyectoB.imagenUrl})` }}></div>
            <div className={CardCss.cardText}>
              <h2>{proyectoB.nombre}</h2>
              <p>{proyectoB.herramientas}</p>
              <p>{proyectoB.descripcion}</p>
              <Link to={proyectoB.link}>
                <button
                className={CardCss.btnLink}
                >Ver más</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsCard;
