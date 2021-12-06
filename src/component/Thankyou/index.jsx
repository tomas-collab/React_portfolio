import { TiTick } from 'react-icons/ti'
import './style.css'

const Thankyou = () =>{
    return(
        <div className='thankyou'>
            <div className='thankyou-field'>
             <div className='tick-container'>
               <TiTick size='75' color='green' className='tick'/>
             </div>
             <h1 className='text-white'>Thank you!</h1>
             <h6 className='text-white'>your message has been sent successfully</h6>
            </div>
        </div>
    )
}
export default Thankyou