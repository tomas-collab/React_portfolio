
import './style.css'
const ContactMe=()=>{
    return(
         
         <div className='contact' id='contact'>
             <div className='contact-left'>
                    <h1>Get In Touch</h1>
             </div>
             <div className='contact-right'>
                    <form className='form-submit' action="https://formsubmit.co/your@email.com" method="POST">
                            <label htmlFor="email">Email</label>
                            <input  id='email' placeholder='Email address' type="email" name="email" required/>
                            <label className='mt-3' htmlFor="message">Message</label>
                            <textarea id='message' placeholder='write your message here' type="text" name="name" required/>
                            <button className='mt-5' type="submit">Send</button>   
                    </form>
             </div>
             
       </div>
    )
}
export default ContactMe