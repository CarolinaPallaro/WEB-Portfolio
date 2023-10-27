import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import sendCSS from './Portfolio/Styles/SendEmail.module.css'


export const SendEmail = () => {
  const form = useRef();
  const [formValid, setFormValid] = useState(true); 

  const sendEmail = (e) => {
    e.preventDefault();

    // Verifica si los campos obligatorios están completos
    if (
      form.current.user_name.value &&
      form.current.user_email.value &&
      form.current.message.value
    ) {
      setFormValid(true); 
      alert  ('Gracias por escribirme 🤗 Pronto estaremos en contacto 👋')

      emailjs
        .sendForm('service_eltzl7u', 'template_lklfqks', form.current, 'q3JAiBf4W6xodrbNL')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setFormValid(false); 
      alert('Por favor, complete todos los campos obligatorios.');
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}
    className={sendCSS.form}
    >
      <label
      className={sendCSS.Name}
      ></label>
      <input type="text" name="user_name" placeholder='Nombre' required /> 
      <label
       className={sendCSS.Email}
      ></label>
      <input 
      type="email" name="user_email" placeholder='Email' required /> 
      <label
      className={sendCSS.Message}
      ></label>
      <textarea name="message" placeholder='Deja tu Mensaje' required /> 
      {!formValid && <p
      className={sendCSS.MessageError}
      >Ningun campo debe estar vacío.</p>}
      <input type="submit" value="Send" />
    </form>
  );
};
