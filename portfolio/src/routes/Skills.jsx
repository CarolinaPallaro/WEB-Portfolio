import skillsCSS from '../components/Portfolio/Styles/Skills.module.css';

const Skills = () => {
  return (
    <div id='Skills' 
    className={skillsCSS.contain}>

      <div
       className={skillsCSS.parte1}>
        <h2 
        className={skillsCSS.title}>My Skills</h2>
        
            <ul className={skillsCSS.listContainer}>
                <li className={skillsCSS.listItem}>Java</li>
                <li className={skillsCSS.listItem}>MySQL</li>
                <li className={skillsCSS.listItem}>Postman</li>
                <li className={skillsCSS.listItem}>Spring Boot</li>
                <li className={skillsCSS.listItem}>Control de versiones con Git</li>
                <li className={skillsCSS.listItem}>Hibernate</li>
                <li className={skillsCSS.listItem}>RESTful API</li>
                <li className={skillsCSS.listItem}>Arquitectura de capas</li>
                <li className={skillsCSS.listItem}>SCRUM</li>
          </ul>
      </div>
    </div>
  );
};

export default Skills;