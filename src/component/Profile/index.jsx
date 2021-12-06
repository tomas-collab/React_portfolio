import './style.css'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { ImFacebook, ImLinkedin2 } from 'react-icons/im'
import Projects from '../Project'
import SkillsTools from '../SkillsTools'
import ContactMe from '../Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Profile =()=>{
    const textRef = useRef()
    
    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            strings: ['FullStack Developer', 'Video Editor', 'BSN' ] })
        }, [])

        useEffect(() => {  
            AOS.init({duration:1000});
         }, [])
    return(
        <>
         <div data-aos='fade-up' data-aos-offset='100' className='profile ' id='profile' >
             <div className='d-flex'>
                <h1  className='name'>TOMAS</h1>
                <div className='profile-right'>
                        <h3 className='about-me' ref={textRef}></h3>
                        <div className='social-medias'>
                            <ImFacebook className='facebook'/>
                            <BsInstagram className='instagram'/>
                            <a href="https://www.linkedin.com/in/tomas-b-4340b71b2/"><ImLinkedin2 className='linkedin'/></a>
                            <a href="https://github.com/tomas-collab" ><BsGithub className='github'/></a>
                        </div>
                </div>
             </div>
      </div>
      <Projects aos='slide-up' offset='100' easing='ease-in-out'/>
      <SkillsTools aos='flip-left' offset='100' easing='ease-in-out'/>
      <ContactMe/>

      </>
    )
}
export default Profile