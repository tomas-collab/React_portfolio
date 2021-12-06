import { useEffect, useState } from 'react'
import './style.css'

const Projects =({aos,offset,easing})=>{

    return( 
         <div   className='projects' id='projects' >
             <hr  className='random-line' />
             <h1>Recent Projects</h1>
             <ul data-aos={aos} data-aos-offset={offset} data-aos-easing={easing} className='projects-list container'>
                 <a href="#1">1</a>
                 <a href="#2">2</a>
                 <a href="#3">3</a>
                 <a href="#4">4</a>
                 <a href="#5">5</a>
                 <a href="#6">6</a>
             </ul>
       </div>
    )
}

export default Projects