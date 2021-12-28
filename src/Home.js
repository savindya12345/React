import React from "react";
import { Carousel, Card, Button } from 'react-bootstrap';
import './navBar.css';

const Home=()=>{
    return(
        <div className="container">
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/image/home1.jpeg" rounded
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/image/home2.jpeg" rounded
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
                src="/image/home3.jpeg" rounded
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <br />
            <div className="row">
            <Card style={{ width: '16rem' }} className="h-1">
            <Card.Img variant="top" src="/image/1.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '16rem' }} className="h-1">
            <Card.Img variant="top" src="/image/2.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '16rem'}} className="h-1">
            <Card.Img variant="top" src="/image/3.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '16rem' }} className="h-1"> 
            <Card.Img variant="top" src="/image/4.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
            </Card>
            </div>

            <div className="row">
            <Card style={{ width: '16rem' }} className="h-1">
            <Card.Img variant="top" src="/image/4.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '16rem' }} className="h-1">
            <Card.Img variant="top" src="/image/3.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '16rem'}} className="h-1">
            <Card.Img variant="top" src="/image/2.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '16rem' }} className="h-1"> 
            <Card.Img variant="top" src="/image/1.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
            </Card>
            </div>
        </div>
    );
}

export default Home;