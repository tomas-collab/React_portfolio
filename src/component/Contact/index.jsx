
import { useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { IoIosArrowDropdown } from 'react-icons/io'
import './style.css'
const ContactMe=()=>{
    const [Show, setShow] = useState('0')
    const [display, setDisplay] = useState('1')
    const [message, setMessage] = useState(false)
    const setEmail = () =>{
        setShow('1')
        setDisplay('0')
    }
    return(
         
         <div  className='contact' id='contact'>
             <div className='contact-left'>
                    <h1>Get In Touch</h1>
                    <div className='contact-left-media'>
                        <BsLinkedin style={{cursor:'pointer'}} size='34'/>
                        <BsGithub size='34'style={{cursor:'pointer'}} className='ml-4'/>
                    </div>
             </div>
             <div className='contact-right'>

                 <h3 className='mb-2 text-white'>The best way to reach me is by email</h3>
                     <div onClick={()=>setEmail()} style={{opacity:display}} className='display-email text-white'>
                         click here
                         <IoIosArrowDropdown size='24'/>
                     </div>
                    <form style={{opacity:Show?Show:'0'}} className='form-submit mt-5' action="https://formsubmit.co/tomasberhane14@gmail.com" method="POST">
                            <label htmlFor="email">Your Email</label>
                            <input  id='email' placeholder='Email address' type="email" name="email" required/>
                            <label className='mt-3' htmlFor="message">Message</label>
                            <textarea id='message' placeholder='write your message here' type="text" name="message" required/>
                            <input type="hidden" name='_next' value='http://localhost:3000/thankyou' />
                            <button onClick={()=>setMessage(true)} className='send-message mt-5' type="submit">Send</button>   
                    </form>
             </div>
             
       </div>
    )
}
export default ContactMe