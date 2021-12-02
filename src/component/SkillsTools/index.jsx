import './style.css'
import { DiReact } from 'react-icons/di'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'


const SkillsTools = () =>{
   return (
       <div className='skills-container container'>
           <div className='skill-left'>
               <h1>Skills & Tools</h1>
               <div className='skills-title'>
                   <div>
                       <h3>Programming Language</h3>
                       <ul>
                           <li>1</li>
                           <li>2</li>
                           <li>3</li>
                           <li>4</li>
                       </ul>
                   </div>
                   <div>
                       <h3>Data</h3>
                       <ul>
                           <li>1</li>
                           <li>2</li>
                           <li>3</li>
                           <li>4</li>
                       </ul>
                   </div>
                   <div>
                       <h3>Frameworks & Libraries</h3>
                       <ul>
                           <li>1</li>
                           <li>2</li>
                           <li>3</li>
                           <li>5</li>
                       </ul>
                   </div>
                   <div>
                       <h3>Other Skills & Tools</h3>
                       <ul>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                           <li>1</li>
                       </ul>
                   </div>
               </div>
            </div>
           <div className='skill-right'>
               <div><DiReact style={{borderRadius:'50%', background:'#282D50'}} size='42' color='white'/></div>
               <div><SiJavascript style={{borderRadius:'50%', backgroundColor:'#282D50'}} size='42' color='white' /></div>
               <div> <SiTypescript style={{borderRadius:'50%', backgroundColor:'#282D50'}} size='42' color='white'/></div>
               <div><AiFillHtml5 style={{borderRadius:'50%', backgroundColor:'#282D50'}} size='42' color='white'/></div>
           </div>
       </div>
   )
}
export default SkillsTools