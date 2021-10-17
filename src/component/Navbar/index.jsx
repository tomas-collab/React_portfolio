import { Navbar,Container } from "react-bootstrap"
export const ProfileNav = ()=>{
    return(
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                  <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}