import { Navbar,Container } from "react-bootstrap"
export const ProfileNav = ()=>{
    return(
        <Container fluid>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                  <Navbar.Brand >Navbar</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}