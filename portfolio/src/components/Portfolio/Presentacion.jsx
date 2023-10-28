
import presentCSS from './Styles/Presentacion.module.css'
export const  Presentacion= () => {


    return(
        <div className={presentCSS.container}>
         <div className={presentCSS.CircleImage}>
            <img 
            className={presentCSS.miImagen}
            src="/public/imgs/miFoto.png" 
            alt="Imagen" 
            />
        </div>
        
        <p className={presentCSS.textContain}> 
          <span id='Hola' 
          className={presentCSS.hola}><strong>Hola soy Caro!</strong></span>Cuento con<span
            className={presentCSS.exp}> + 2 años</span> de formación en desarrollo Web, especialmente en el desarrollo Backend con JAVA. <br />Mi objetivo actual es crear
          <span id="actualidad"className={presentCSS.actualidad}> aplicaciones más seguras y dinámicas.
           </span>

        </p>
       </div>
        )
}