import { Navbar,Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import './style.css'
 const ProfileNav = ()=>{
    return(
        <div className='profile-nav'>
         
                <Container className='nav-container' >
                  
                  <Navbar.Brand className='nav-logo ' ><Link className='tomas' to='/'>Tomas</Link></Navbar.Brand>
                
                  <div className='navbar-sections'>
                        <a href='#profile'>Profile</a>
                        <a href='#projects' className='ml-4'>Projects</a>
                        <a href='#aboutMe' className='ml-4'>AboutMe</a>
                        <a href='#skills'  className='ml-4'>Skills&Tools</a>
                        <a href='#contact'  className='ml-4'>ContactMe</a>
                  </div>
                 
                </Container>
       
        </div>
    )
}

export default ProfileNav