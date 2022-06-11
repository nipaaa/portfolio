import React from 'react';

const ProjectDetails = () => {
    return (
        <div className='container'>
            <h1 className='my-4'>Project Details</h1>
            <div className=' row py-5'>
                <div className='col-lg-4 col-sm-12'><img className="img-fluid" height={400}  src="images/home.png" alt=""></img></div>
                <div className='col-lg-4 col-sm-12'>
                    <img className='img-fluid mb-2' src="images/dashboard.png" alt=""></img>
                    <img className='img-fluid' src="images/manage.png" alt=""></img>
                    </div>
                <div className='col-lg-4 col-sm-12'>
                    <img className='img-fluid mb-2' src="images/signup.png" alt=""></img>
                    <img className='img-fluid' src="images/blogs.png" alt=""></img>
                </div>
            </div>

            <div className='my-4 py-5'>
                <h3 className='text-2xl font-bold text-secondary text-center'>Usage Technology</h3>

                <div className='py-2 px-8'>
                    <li>ReactJs for making UI</li>
                    <li>React Router for making it a single page application</li>
                    <li>Talwind css and Daisy UI for make it responsive and use their component</li>
                    <li>MongoDb for Database</li>
                    <li>Firebase for authentication and hosting</li>
                    <li>Font awesome for use icon</li>
                </div>

            </div>

            <div className='my-4 py-5'>
                <h3 className='text-2xl font-bold text-secondary text-center'>Project feature</h3>

                <div className='py-2 px-8'>
                    <li>Its an Manufecturer full stack Website</li>
                    <li>A autoparts maker company produce car autoparts</li>
                    <li>In this website a buyer can order autoparts from Elegent autoparts</li>
                    <li>They have to pay to confirm their order</li>
                    <li>They can cancel or delete their order before payment if they want</li>
                    <li>Customer can leave their feedback abot Elegent autoparts and the review will display in homepage</li>
                    <li>Their are some of feature are under constructed</li>
                    <li className='my-3'> <a target='_blank'rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://parts-manufacturer-e24ae.web.app/"><i class="fa-solid fa-pen-to-square"></i> Live</a>
                <a target='_blank'rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/manufacturer-website-client-side"><i class="fa-brands fa-github"></i> Client</a>
                <a target='_blank'rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/manufacturer-website-server-side"><i class="fa-brands fa-github"></i> Server</a></li>


                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;