import './style.css'
import { DiNodejsSmall, DiReact } from 'react-icons/di'
import { SiJavascript, SiMicrosoftazure, SiMongodb, SiPostgresql, SiRedux, SiSocketdotio, SiTypescript } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { BsFillBootstrapFill } from 'react-icons/bs'


const SkillsTools = ({aos,offset,easing,delay,delay2,delay3,delay4,delay5}) =>{
   return (
       <div  className='skills-container ' id='skills'>
           <div data-aos={aos} data-aos-offset={offset} data-aos-easing={easing} className='skill-left'>
               <h1>Skills & Tools</h1>
               <div className='skills-title'>
                   <div>
                       <h3>Programming Languages</h3>
                       <ul>
                           <li>Javascript & NodeJs</li>
                           <li>TypeScript</li>
                           <li>CSS</li>
                           <li>HTML</li>
                           <li>Python</li>
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
                           <li>Security</li>
                       </ul>
                   </div>
               </div>
            </div>
           <div className='skill-right'>
               <div data-aos={aos} data-aos-delay={delay}><DiReact  className='icon' size='62' color='white'/></div>
               <div data-aos={aos} data-aos-delay={delay5}><SiJavascript className='icon'  size='62' color='white' /></div>
               <div data-aos={aos} data-aos-delay={delay2}> <SiTypescript className='icon'  size='62' color='white'/></div>
               <div data-aos={aos} data-aos-delay={delay4}><AiFillHtml5 className='icon'  size='62' color='white'/></div>
               <div data-aos={aos} data-aos-delay={delay3}><SiMongodb className='icon'  size='62' color='white'/></div>
               <div data-aos={aos} data-aos-delay={delay3}><BsFillBootstrapFill className='icon'  size='62' color='white'/></div>
               <div data-aos={aos} data-aos-delay={delay4}><DiNodejsSmall className='icon'  size='62' color='white'/></div>
               <div data-aos={aos} data-aos-delay={delay2}><SiSocketdotio className='icon'  size='62' color='white'/></div>
               <div data-aos={aos} data-aos-delay={delay4}><SiPostgresql className='icon'  size='62' color='white'/></div>
               <div data-aos={aos} data-aos-delay={delay}><SiRedux className='icon'  size='62' color='white'/></div>
               <div data-aos={aos} data-aos-delay={delay5}><SiMicrosoftazure className='icon'  size='62' color='white'/></div>
           </div>
       </div>
   )
}
export default SkillsTools