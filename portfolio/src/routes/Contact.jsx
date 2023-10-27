import React from "react";
import { Link } from "react-router-dom";
import contactCSS from '../components/Portfolio/Styles/Contacto.module.css'
import BotonCV from "../components/Portfolio/BotonCV";
import { SendEmail } from "../components/SendEmail";


const Contact = () => {
   
    return (
      <div className={contactCSS.ContactContainer} id="Contact">
        <h2>Contacto</h2>

        <div className={contactCSS.boton} ><BotonCV/> </div>
       
           <Link to="https://wa.me/15448662">
            <a  href="https://wa.me/15448662">
             <img className={contactCSS.ico} src="src/public/imgs/ico-whatsapp.png" alt="whatsapp-logo" />
           </a>
           </Link>


       <SendEmail/>
       

      </div>
      
    );
    }

export default Contact;