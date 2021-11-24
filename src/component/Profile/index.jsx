import './style.css'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'


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
                <h3 className='about-me' ref={textRef}></h3>
             </div>
      </div>
    )
}
export default Profile