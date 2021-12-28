import React from "react";
import './login.css';
import { Carousel } from 'react-bootstrap';


const About=()=>{
    return(
        <div className="container">
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/image/about.jpeg" rounded
                alt="First slide"
                />
            </Carousel.Item>
            </Carousel>
            <br/>
            <div className="abou">
                <p>Suwa shanthi Hospital is the most accredited hospital in the north central province healthcare sector. Since 1997, suwa shanthi Hospital has revolutionized the healthcare industry through infrastructure development and advancement of products and services, with a view to deliver healthcare that is on par with national medical standards.</p>
                <h3>Vision</h3>
                <p>"Country with physical and mental well being is for healthy and vigorous future’"</p>
                <h3>Mission</h3>
                <p>"To contribute for building a prosperous motherland by providing a quality and efficient health service at an affordable basis to the citizen in the north central province"</p>
            </div>
        </div>
    );
}

export default About;