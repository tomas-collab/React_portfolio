import './style.css'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'



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
                        <div>
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsTwitter/>
                            <BsGithub/>
                        </div>
                </div>
             </div>
      </div>
    )
}
export default Profile