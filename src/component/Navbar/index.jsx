import { Navbar,Container } from "react-bootstrap"
import './style.css'
 const ProfileNav = ()=>{
    return(
        <div className='profile-nav'>
         
                <Container className='nav-container' >
                  <Navbar.Brand >Tomas</Navbar.Brand>
                  <div>
                        <a>Profile</a>
                        <a className='ml-4'>Projects</a>
                        <a className='ml-4'>AboutMe</a>
                        <a  className='ml-4'>ContactMe</a>
                  </div>
                 
                </Container>
       
        </div>
    )
}

export default ProfileNav