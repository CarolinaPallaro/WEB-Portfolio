import React from 'react'
import BotonGCss from "./Styles/botones.module.css"

const BotonGame =() =>{

    return(
        <div>
            <button
            className={BotonGCss.button}
             onClick={()=>alert('Juego')}
             >Iniciar Juego</button>
        </div>       
    )
}

export default BotonGame

