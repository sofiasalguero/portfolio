import React, {} from 'react';
import './styles.css';


const Portfolio = () => {
    return(
        <div className='portfolio'>
            <h1 className='tittlePortfolio'>Portfolio</h1>
            <div className='ContainerPortfolio'>
                <div className='container'>
                    <h2 className='tittleWork'>Desarrollo Web</h2>
                    <h4 className='descriptionwork'>Aplicacion estatica enfocada en Diseño Responsive,
                        sin funcionalidad.
                    </h4>
                    <img  className='imgPortfolio' src="/screenshots-portfolio/desarrolloWeb.png" alt="" />
                    <button className='buttonPortfolio'>
                    <a href="https://sofiasalguero.github.io/moda-circular/" target="_blank">Conocer</a>
                    </button>
                </div>
                <div className='container'>
                    <h2 className='tittleWork'>Javascript</h2>
                    <h4 className='descriptionwork'>Aplicacion desarrollada en Javascript,
                        se enfoca en funcionalidad de e-commerce y uso de API.
                    </h4>
                    <img  className='imgPortfolioJavascript' src="/screenshots-portfolio/javascript.png" alt="" />
                    <button className='buttonPortfolio'>
                    <a href="https://sofiasalguero.github.io/carrito-compras/" target="_blank">Conocer</a>
                    </button>
                </div>
                <div className='container'>
                    <h2 className='tittleWork'>React JS</h2>
                    <h4 className='descriptionwork'>Aplicacion desarrollada en React JS,
                        se enfoca profundamente en funcionalidad de E-commerce, genera un 
                        carrito con tu orden y lo persiste en Firebase.
                    </h4>
                    <img  className='imgPortfolio' src="/screenshots-portfolio/react.png" alt="" />
                    <button className='buttonPortfolio'>
                    <a href="https://modacircular.netlify.app/"  target="_blank">Conocer</a>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Portfolio;