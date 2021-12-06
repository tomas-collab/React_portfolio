import { BsFacebook, BsInstagram, BsLinkedin, BsMailbox, BsTwitter } from 'react-icons/bs'
import { ImMail } from 'react-icons/im'
import './style.css'

const SocialMedia = () =>{
    return(
                <div className='sidebar-social-container'>
                    <ul className='social-list'>
                        <li className='socialmed'><BsFacebook color='#314A83' size='29'/></li>
                        <li className='socialmed'><BsInstagram color='#E47457' size='29'/></li>
                        <li className='socialmed'><BsTwitter color='#00ABF0' size='29'/></li>
                        <li className='socialmed'><ImMail color='#DD4B39' size='29'/></li>
                        <a href="https://www.linkedin.com/in/tomas-b-4340b71b2/" className='socialmed'><BsLinkedin color='#0077b5' size='29'/></a>
                        <hr className='socialmed-line1'/>
                        <hr className='socialmed-line2' />
                    </ul>
                </div>
    )
}

export default SocialMedia