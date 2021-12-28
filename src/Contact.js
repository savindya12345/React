import React from "react";
import './login.css';

import { Button, Form } from 'react-bootstrap';

const Contact=()=>{
    return(
        <div className="container">
            <h3>Location</h3><br/>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="1100" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=srilanka&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0"></iframe>
                    
                </div>
            </div><br/>
                <div>
                    <h3>Contact Us</h3>
                    <br/>
                    <Form className="contact">

                    <Form.Group className="mb-1" controlId="formBasicName">
                        <Form.Label>Full Name : </Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicNumber">
                        <Form.Label>Phone Number : </Form.Label>
                        <Form.Control type="text" placeholder="Enter number" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email address : </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicName">
                        <Form.Label>Your Massage : </Form.Label><br/>
                        <textarea style={{ width:"800px"}} placeholder="Enter massage"/>
                        
                    </Form.Group>

                    <br/>
                    <Button variant="success">Send Massage</Button>{' '}
                    
                    </Form>
                    </div>
        </div>
    );
}

export default Contact;