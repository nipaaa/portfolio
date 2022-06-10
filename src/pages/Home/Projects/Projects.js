import React from 'react';


const Projects = () => {
    return (
        <div className='container my-5'>
            <h1 className='my-4'>Some of My Recent Projects</h1>
             <div className='row gap-4 mx-0'>
            <div className='col-lg-4 col-sm-12 resume p-4 rounded-3'>
                <img className='img-fluid rounded-3' src="./images/car.png" alt="" />
                <h5 className='myColor'>Parts Manufacturer</h5>
                <p><span className='myColor'>Description:</span>This is a full stack app.This project has an admin panel. Where an admin can add product, make other user as an admin. An admin can able to change the status of a placed order.This app also used firebase authentication. Email/password login, Google loginTechnologies (frameworks, libraries): React, React Router Dom, React Firebase Hooks, Firebase, Font Awesome, Mongodb, Node, Express, DaisyUI.</p>
                <a target='_blank'rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://parts-manufacturer-e24ae.web.app/"><i class="fa-solid fa-pen-to-square"></i> Live</a>
                <a target='_blank'rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/manufacturer-website-client-side"><i class="fa-brands fa-github"></i> Client</a>
                <a target='_blank'rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/manufacturer-website-server-side"><i class="fa-brands fa-github"></i> Server</a>
            </div>
            <div className='col-lg-4 col-sm-12 resume p-4 rounded-3'>
                <img className='img-fluid' src="./images/dream.png" alt="" />
                <h5 className='myColor'>Dream of Style</h5>
                <p><span className='myColor'>Description:</span>This project is about warehouse management system. Users can sign up and log in to this website using google account and gmail. Anyone 
can’t go to some pages without login, which is developed by React Router.Users can add items, see their items list and also delete their items.Technologies (frameworks, libraries): React, React Router Dom, React Firebase Hooks, Firebase, React Bootstrap, Font Awesome, MongoDb.</p>
                <a target='_blank'rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://assignment-11-404c7.web.app/"><i class="fa-solid fa-pen-to-square"></i> Live</a>
                <a target='_blank'rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/warehouse-management-system"><i class="fa-brands fa-github"></i> Client</a>
                <a target='_blank'rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/warehouse-management-system-server-side"><i class="fa-brands fa-github"></i> Server</a>
            </div>
            <div className='col-lg-4 col-sm-12 resume p-4 rounded-3'>
                <img className='img-fluid' src="./images/baby.png" alt="" />
                <h5 className='myColor'>Babies Island</h5>
                <p><span className='myColor'>Description:</span> This project is an individual provide services site. It is an individual photographer website. Users can sign up and log in to this website using google account and email.Anyone can’t go to some pages without login, which is developed by React Router.Technologies (frameworks, libraries): React, React Router Dom, React Firebase Hooks, Firebase, React Bootstrap, Font Awesome</p>
                <a target='_blank'rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://independent-service-prov-8c99d.web.app/"><i class="fa-solid fa-pen-to-square"></i> Live</a>
                <a target='_blank'rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/Independent-service-provider"><i class="fa-brands fa-github"></i> Github</a>
            </div>
           
        </div>

        </div>
       
    );
};

export default Projects;