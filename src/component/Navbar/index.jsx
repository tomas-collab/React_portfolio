import { Navbar,Container } from "react-bootstrap"
import './style.css'
 const ProfileNav = ()=>{
    return(
        <div className='profile-nav'>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                  <Navbar.Brand >Navbar</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default ProfileNav