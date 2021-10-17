import { Container } from "react-bootstrap"
import { ProfileFooter } from "../../component/Footer"
import { ProfileProject } from "../Projects"
import './style.css'
export const ProfileHome = ()=>{
    return(
        <Container fluid>
            <div className='profile-home'>tomas profile</div>
             <ProfileProject/>
            
        </Container>
    )
}

