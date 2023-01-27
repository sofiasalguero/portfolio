import React, {} from 'react';
import './styles.css';


const Home = () => {
    return(
        <div className='homeContainer'>
            <div className='tittleContainer'>
            <h1 className='tittle'>Sofia Salguero.</h1>
            <p className='descripcion'>
            Desarrolladora FrontEnd junior, actualmente estudiando Diseño UX/UI, 
            soy una persona proactiva y en busqueda constante del crecimiento, amo 
            el diseño y desarrollo web.  
            </p>
            </div>
            <img src="/imgCV.JPG" className="img"/>
        </div>
    )
}

export default Home;