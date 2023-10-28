import React from "react";
import { Link } from "react-router-dom";
import contactCSS from '../components/Portfolio/Styles/Contacto.module.css'
import BotonCV from "../components/Portfolio/BotonCV";
import { SendEmail } from "../components/SendEmail";


const Contact = () => {
   
    return (
      <div className={contactCSS.ContactContainer} id="Contact">
        <h3>Contacto</h3>

        <div className={contactCSS.boton} ><BotonCV/> </div>

       <SendEmail/>
       

      </div>
      
    );
    }

export default Contact;