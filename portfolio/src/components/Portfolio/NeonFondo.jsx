import React from 'react';
import './Portfolio/Styles/NeonFondo.css'; 


const NeonFondo = () => {
  return (
    <body>
      <div className="pared"></div>
      <a href="#" className="btn-neon">
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
      </a>
      <div className="piso"></div>
    </body>
  );
}

export default NeonFondo;
