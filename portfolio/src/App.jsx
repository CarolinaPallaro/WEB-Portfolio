import React, { useState, useEffect } from 'react';
import AppCss from './App.module.css';
import LoadingScreen from './components/Portfolio/LoadingScreen';
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setShowLoadingScreen(false);
    }, 4000); 
  }, []);

  

  return (
     
      
        <div className={AppCss.divBotonesApp}>
     
     {showLoadingScreen ? <LoadingScreen /> : <Portfolio />}
      </div>
       
    
    
   
  );
}

export default App;


