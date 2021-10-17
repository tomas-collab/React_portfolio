import { Carousel, Container} from 'react-bootstrap'
import { ProfileFooter } from '../../component/Footer'
import './styles.css'


export const ProfileProject =()=>{
    return(
        <div className='profile-project'>
            <Container>
           <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://www.fluentu.com/blog/german/wp-content/uploads/sites/5/2020/04/fruits-in-german-e1586089752934.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                            <img
                            className="d-block w-100"
                            src="https://www.fluentu.com/blog/german/wp-content/uploads/sites/5/2020/04/fruits-in-german-e1586089752934.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.fluentu.com/blog/german/wp-content/uploads/sites/5/2020/04/fruits-in-german-e1586089752934.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>


          </Carousel>
            </Container>
          <ProfileFooter/>
        </div>
    )
}