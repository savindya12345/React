import React from "react";
import './login.css';
import { Row, Col } from 'react-bootstrap';


const Footer=()=>{
    return(
        <div className="footer">
            <Row>
                <Col>
                    <h4 className="f-1">About us</h4>
                    <p className="f-2">Suwa Shanthi hospital has been famous for its professional 
                    services that are on par with world class standards. We are 
                    recognised for our world class treatments, affordability 
                    and care. Located in one of the most accessible locations 
                    in the Anuradhapura City limit we pride ourselves in keeping a 
                    team of professionals who take care of your every need, making your visit, 
                    stay or simple diagnosis literally a home away from home.</p>
                </Col>
                <Col>
                    <h4 className="f-1">Follow us</h4>
                    <Row>
                        <Col><img src="/image/facebook.png" alt="First slide"/></Col>
                        <Col><img src="/image/instagram.png" alt="First slide"/></Col>
                        <Col><img src="/image/linkedin.png" alt="First slide"/></Col>
                        <Col><img src="/image/twitter.png" alt="First slide"/></Col>
                    </Row>
                </Col>
                <Col>
                    <h4 className="f-1">Contact</h4>
                    <p className="f-2">Email info@suwashanthi.lk</p>
                    <p className="f-2">Hot line +94 25 222 3000</p>
                    <p className="f-2">Address NO 11, MAITHREPALA SENANAYAKA MAWATHA, ANURADHAPURA </p>
                </Col>
            </Row>
            <div className="f-3">
                <Row>
                <Col></Col>
                <Col className="f-4">Copywrite © Suwa Shanthi Hospital. All Rights Reserved
                Design & Developed by Savindya Thathsarani</Col>
                <Col></Col>
                </Row>
            </div>
        </div>
    );
}

export default Footer;