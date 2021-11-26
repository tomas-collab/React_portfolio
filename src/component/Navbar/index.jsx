import { Navbar,Container } from "react-bootstrap"
import './style.css'
 const ProfileNav = ()=>{
    return(
        <div className='profile-nav'>
         
                <Container className='nav-container' >
                  <Navbar.Brand className='nav-logo' >Tomas</Navbar.Brand>
                  <div className='navbar-sections'>
                        <a href='#profile'>Profile</a>
                        <a href='#projects' className='ml-4'>Projects</a>
                        <a href='#aboutMe' className='ml-4'>AboutMe</a>
                        <a href='#ContactMe'  className='ml-4'>ContactMe</a>
                  </div>
                 
                </Container>
       
        </div>
    )
}

export default ProfileNav