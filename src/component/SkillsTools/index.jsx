import './style.css'
import { DiReact } from 'react-icons/di'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'


const SkillsTools = () =>{
   return (
       <div className='skills-container container' id='skills'>
           <div className='skill-left'>
               <h1>Skills & Tools</h1>
               <div className='skills-title'>
                   <div>
                       <h3>Programming Language</h3>
                       <ul>
                           <li>Javascript & NodeJs</li>
                           <li>TypeScript</li>
                           <li>CSS</li>
                           <li>HTML</li>
                       </ul>
                   </div>
                   <div>
                       <h3>Data</h3>
                       <ul>
                           <li>MongoDB</li>
                           <li>Mongoose</li>
                           <li>SQL</li>
                           <li>Sequelize</li>
                           <li>REST APIs</li>
                       </ul>
                   </div>
                   <div>
                       <h3>Frameworks & Libraries</h3>
                       <ul>
                           <li>ReactJS</li>
                           <li>Express</li>
                           <li>Jest</li>
                           <li>Styled-Components</li>
                           <li>Socketio</li>
                       </ul>
                   </div>
                   <div>
                       <h3>Other Skills & Tools</h3>
                       <ul>
                           <li>Git (version control)</li>
                           <li>Responsive web design</li>
                           <li>Linux</li>
                           <li>VSCode</li>
                           <li>Cryptography</li>
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