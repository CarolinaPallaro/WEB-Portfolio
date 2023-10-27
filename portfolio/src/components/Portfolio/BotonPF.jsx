
import React from 'react';
import { Link } from 'react-router-dom';
import BotonPFCss from './Styles/botones.module.css';

const BotonPF = () => {
  return (
    <div>
      <Link to="/portfolio" className={BotonPFCss.button + ' ' + BotonPF.buttonLink}>
        Ver Portfolio
      </Link>
    </div>
  );
};

export default BotonPF;
