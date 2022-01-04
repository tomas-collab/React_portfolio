import { useEffect, useState } from 'react'
import project from '../../assets/web.jpg'
import './style.css'

const Projects =({aos,offset,easing})=>{

    return( 
         <div   className='projects' id='projects' >
             <hr  className='random-line' />
             <h1>Recent Projects</h1>
             <ul data-aos={aos} data-aos-offset={offset} data-aos-easing={easing} className='projects-list container'>
                 <a href="#1"><img style={{width:'50%' }} src={project} alt="" /></a>
                 <a href="#1"><img style={{width:'50%' }} src={project} alt="" /></a>
                 <a href="#1"><img style={{width:'50%' }} src={project} alt="" /></a>
                 <a href="#1"><img style={{width:'50%' }} src={project} alt="" /></a>
                 <a href="#1"><img style={{width:'50%' }} src={project} alt="" /></a>
                 <a href="#1"><img style={{width:'50%' }} src={project} alt="" /></a>
                 
             </ul>
       </div>
    )
}

export default Projects