import React, {} from 'react';
import './styles.css';


const Skills = () => {
    return(
        <div className='skills'>
           <h1 className='tittleSkills'>Skills</h1>
           <div className='skillsContainer'>
            <div className='skillContainer'>
                <h3 className='skillTittle'>React JS</h3>
                <img src="/Skills/reactjs.png" alt="" className='iconSkills' />
            </div>
            <div className='skillContainer'>
                <h3 className='skillTittle'>Javascript</h3>
                <img src="/Skills/js.png" alt="" className='iconSkills' />
            </div>
            <div className='skillContainer'>
                <h3 className='skillTittle'>HTML5</h3>
                <img src="/Skills/html-5.png" alt="" className='iconSkills' />
            </div>
            <div className='skillContainer'>
                <h3 className='skillTittle'>Firebase</h3>
                <img src="/Skills/firebase.png" alt="" className='iconSkills' />
            </div>
            <div className='skillContainer'>
                <h3 className='skillTittle'>FIGMA</h3>
                <img src="/Skills/figma.png" alt="" className='iconSkills' />
            </div>
            <div className='skillContainer'>
                <h3 className='skillTittle'>CSS/SASS</h3>
                <img src="/Skills/sass.png" alt="" className='iconSkills' />
            </div>
            <div className='skillContainer'>
                <h3 className='skillTittle'>Web Design</h3>
                <img src="/Skills/ux.png" alt="" className='iconSkills' />
            </div>
            <div className='skillContainer'>
                <h3 className='skillTittle'>GIT</h3>
                <img src="/Skills/github.png" alt="" className='iconSkills' />
            </div>

           </div>
        </div>
    )
}

export default Skills;