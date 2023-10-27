import React from 'react';
import botonCVCss from './Styles/botones.module.css'

const BotonCV = () => {
  const cvUrl = 'https://www.canva.com/design/DAFvji-ayus/vwC6fB8a9NvzRFW3sumhGQ/view?utm_content=DAFvji-ayus&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'; 

  return (
    
      <a href={cvUrl} target="mi_cv.pdf">
        <button className={botonCVCss.BotonCV}>Ver CV</button>
      </a>
   
  );
};

export default BotonCV;

