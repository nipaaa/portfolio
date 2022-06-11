import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'




const Projects = () => {
    return (
        <div className='container my-5'>
            <h1 className='my-4'>Some of My Recent Projects</h1>

            <div className='project'>
                <div class="card resume border" >
                    <img className='img-fluid rounded-3' src="./images/car.png" alt="" />
                    <div class="card-body">
                        <h5 class="card-title myColor">Parts Manufacturer</h5>
                        <p class="card-text">It's a manufacturer full stack website who produce car auto-parts. Registered user can order and pay here.</p>

                            <Link to="/projectDetails" className='text-center d-block w-100 text-decoration-none my-auto text-white resume px-4 py-1 rounded-2'>Details</Link>
                       
                    </div>
                </div>
                <div class="card resume border" >
                    <img className='img-fluid' src="./images/dream.png" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Dream of Style</h5>
                        <p class="card-text">It's a dress warehouse website, vendor can add their products here to sell and manage his product</p>
                        <Link to="/projectDetails1" className='w-100 text-center d-block my-auto text-decoration-none text-white resume px-4 py-1 rounded-2'>Details</Link>
                    </div>
                </div>
                <div class="card border" >
                    <img className='img-fluid' src="./images/baby.png" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Babies Island</h5>
                        <p class="card-text">Its a single person service provider website who give photography service and deliver to his customer.</p>
                        <Link to="/projectDetails2" className='text-center d-block w-100 text-white text-decoration-none resume px-4 py-1 rounded-2'>Details</Link>
                    </div>
                </div>


            </div>



            {/* <div className='row'>
                <div className='col-lg-6  col-sm-12 resume  rounded-3'>
                    <img className='img-fluid rounded-3' src="./images/car.png" alt="" />
                </div>
                <div className='col-lg-6 py-auto col-sm-12 resume  rounded-3'>
                    <h5 className='myColor'>Parts Manufacturer</h5>
                    <p>This is a full stack app.This project has admin and user panel.Where an admin can add product, make other user as an admin. An admin can able to change the status of a placed order.This app also used firebase authentication. Email/password login, Google .
                        Technologies (frameworks, libraries): React, React Router Dom, React Firebase Hooks, Firebase, Font Awesome, Mongodb, Node, Express, DaisyUI.</p>
                    <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://parts-manufacturer-e24ae.web.app/"><i class="fa-solid fa-pen-to-square"></i> Live</a>
                    <a className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="/projectDetails"> Details</a>
                    <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/manufacturer-website-client-side"><i class="fa-brands fa-github"></i> Client</a>
                    <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/manufacturer-website-server-side"><i class="fa-brands fa-github"></i> Server</a>
                </div>
                <div className='col-lg-6  col-sm-12 resume  rounded-3'>
                    <h5 className='myColor'>Dream of Style</h5>
                    <p><span className='myColor'>Description:</span>This project is about warehouse management system. Users can sign up and log in to this website using google account and gmail. Anyone
                        can’t go to some pages without login, which is developed by React Router.Users can add items, see their items list and also delete their items.Technologies (frameworks, libraries): React, React Router Dom, React Firebase Hooks, Firebase, React Bootstrap, Font Awesome, MongoDb.</p>
                    <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://assignment-11-404c7.web.app/"><i class="fa-solid fa-pen-to-square"></i> Live</a>
                    <a className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="/projectDetails"> Details</a>
                    <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/warehouse-management-system"><i class="fa-brands fa-github"></i> Client</a>
                    <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/warehouse-management-system-server-side"><i class="fa-brands fa-github"></i> Server</a>
                </div>
                <div className='col-lg-6  col-sm-12 resume  rounded-3'>
                    <img className='img-fluid' src="./images/dream.png" alt="" />
                </div>
                <div className='col-lg-6  col-sm-12 resume  rounded-3'>
                    <img className='img-fluid' src="./images/baby.png" alt="" />
                </div>
                <div className='col-lg-6  col-sm-12 resume  rounded-3'>
                    <h5 className='myColor'>Babies Island</h5>
                    <p><span className='myColor'>Description:</span> This project is an individual provide services site. It is an individual photographer website. Users can sign up and log in to this website using google account and email.Anyone can’t go to some pages without login, which is developed by React Router.Technologies (frameworks, libraries): React, React Router Dom, React Firebase Hooks, Firebase, React Bootstrap, Font Awesome</p>
                    <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://independent-service-prov-8c99d.web.app/"><i class="fa-solid fa-pen-to-square"></i> Live</a>
                    <a className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="/projectDetails"> Details</a>
                    <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/Independent-service-provider"><i class="fa-brands fa-github"></i> Github</a>
                </div>

            </div> */}

        </div>

    );
};

export default Projects;