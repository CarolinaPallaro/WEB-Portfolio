
import presentCSS from './Styles/Presentacion.module.css'
export const  Presentacion= () => {


    return(
        <div className={presentCSS.container}>
         <div className={presentCSS.CircleImage}>
            <img 
            className={presentCSS.miImagen}
            src="src/public/imgs/miFoto.png" 
            alt="Imagen" 
            />
        </div>
        
        <p> 
          <span id='Hola' className={presentCSS.hola}><strong>Hola soy Caro!</strong></span> Cuento con <span className={presentCSS.exp}>+2 años</span> de estudios y formación autodidacta
          en el desarrollo Backend. <br />Actualmente estoy comprometida a centrarme en <span id="actualidad" 
           className={presentCSS.actualidad}>aplicaciones más seguras utilizando Microservicios.
           </span>

        </p>
       </div>
        )
}