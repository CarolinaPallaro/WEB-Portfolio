
import React from "react";
import { AiFillGithub} from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { SiGitlab } from 'react-icons/si';
import { Link } from "react-router-dom";
import AboutCSS from "../components/Portfolio/Styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={AboutCSS.AboutContainer} id="AboutMe">

      <div className={AboutCSS.Part2}>
        
        <h2 className={AboutCSS.Title}>About Me</h2>
        <p className={AboutCSS.Paragraph}>
          Desde pequeña tengo gran curiosidad por saber &#34;como están hechas las cosas&#34;, en especial, como funcionaba el mundo de internet. 
          Hace <span id="añosEstudio">más de dos año</span>  me animé a dar el salto de confianza y comencé a estudiar programación Web. Aunque al princio Front-End captaba mi atención
          lo que realmente me atrapó es el mundo del 
          <span className={AboutCSS.backend}> Back-End</span> que aún sigo explorando.
          Mi curiosidad y entusiasmo siempre me motivan a superarme en cada proyecto, y, cuando no estoy sobre los navegadores o algún video,
          disfruto de leer, y especialmente pasar tiempo con Siria, que por si no te diste cuenta, es quien inspiro la pantalla de carga del Portfolio
          
          Mi próximo desafío personal es poder realizar una <span className={AboutCSS.ful}> App Fulstack, integrando las tecnologías aprendidas.</span>
         
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
