import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='container'>
            <h1>Contact Me</h1>
            <div className='row'>
                <div className='col-lg-5 col-sm-12 my-auto '>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="name@email.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Message"  rows={3} />
                        </Form.Group>
                       
                    </Form>
                   
                </div>
                <div className='col-lg-7 col-lag-12'>
                    <div className='resume rounded-2 p-5'>
                        <h6 className='myColor'>Contact Information</h6>
                        <hr />
                        <p><span className='myColor'>Name:</span> Nipa Akter</p>
                        <p><span className='myColor'>Address:</span> Gazipur, Bangladesh</p>
                        <p><span className='myColor'>Gmail:</span> akternipa941@gmail.com</p>
                        <p><span className='myColor'>WhatsApp:</span> +880 1700594282</p>
                        <p><span className='myColor'>Telegram:</span> <a className='textColor' target='_blank' rel='noreferrer' href="https://t.me/niipaaaaa"> https://t.me/niipaaaaa</a></p>
                        <p><span className='myColor'>LinkedIn:</span> <a className='textColor' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/nipa-akter/"> https://www.linkedin.com/in/nipa-akter/</a></p>
                        <p><span className='myColor'>Facebook:</span>  <a className='textColor' target='_blank' rel='noreferrer' href="https://www.facebook.com/profile.php?id=100031876121388"> https://www.facebook.com/profile.php?id=100031876121388</a></p>

                    </div>

                </div>
            </div>



        </div>
    );
};

export default Contact;