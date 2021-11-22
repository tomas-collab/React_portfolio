import { Navbar,Container } from "react-bootstrap"
export const ProfileNav = ()=>{
    return(
        <Container >
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                  <Navbar.Brand >Navbar</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}