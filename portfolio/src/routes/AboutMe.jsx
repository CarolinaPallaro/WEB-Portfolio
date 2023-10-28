
import React from "react";
import { AiFillGithub} from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { SiGitlab } from 'react-icons/si';
import { Link } from "react-router-dom";
import AboutCSS from "../components/Portfolio/Styles/AboutMe.module.css";
import NeonFondo from "../components/Portfolio/NeonFondo";

const AboutMe = () => {
  return (
    <div className={AboutCSS.AboutContainer} id="AboutMe">

      <div className={AboutCSS.Part2}>
        
        <h2 className={AboutCSS.Title}>About Me</h2>
        <p className={AboutCSS.Paragraph}>
          Econtré en la programación aquello que también motiva mi vida: las ganas de aprender, la curiosidad por experimentar, y la posibilidad de crear a través de código. 
          Comencé mis estudios en desarrollo Web<span id="añosEstudio"> hace casi tres años </span>y lo que realmente me cautivó fue el mundo del
          <span className={AboutCSS.backend}> Back-End con JAVA. </span>
           En la actualidad busco mi lugar en el Mundo IT de forma profesional mientras continúo con mis prácticas y estudio de forma autodidacta. 
           Mi próximo desafío personal es poder realizar una <span className={AboutCSS.ful}> App Fulstack, integrando las tecnologías aprendidas</span>.
         
        </p>


        <div className={AboutCSS.SocialLinks}>

         {/* ** Link a GitHub */}
          <Link to="https://github.com/CarolinaPallaro">
            <a className={AboutCSS.ico}><AiFillGithub /></a>
          </Link>

          {/* ** Link a Linkedin */}
          <Link to="https://www.linkedin.com/in/carolina-pallaro-9b40aa225/">
            <a className={AboutCSS.ico} ><BsLinkedin /></a>
        </Link>


        <Link to="https://github.com/CarolinaPallaro">
            <a className={AboutCSS.ico}><SiGitlab /></a>
        </Link>

          

        </div>
      </div>


    </div> 
   
    
  );
};

export default AboutMe;
