import './style.css'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { ImFacebook, ImLinkedin2 } from 'react-icons/im'




const Profile =()=>{
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            strings: ['FullStack Developer', 'Video Editor', 'BSN' ] })
    }, [])
    return(
         <div className='profile' >
             <div className='d-flex'>
                <h1 className='name'>TOMAS</h1>
                <div className='profile-right'>
                        <h3 className='about-me' ref={textRef}></h3>
                        <div className='social-medias'>
                            <ImFacebook className='facebook'/>
                            <BsInstagram className='instagram'/>
                            <ImLinkedin2 className='linkedin'/>
                            <BsGithub className='github'/>
                        </div>
                </div>
             </div>
      </div>
    )
}
export default Profile