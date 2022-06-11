import React from 'react';

const ProjectDetailsBaby = () => {
    return (
        <div className='container'>
            <h1 className='my-4'>Project Details</h1>
            <div className=' row py-5'>
                <div className='col-lg-6 col-sm-12'><img className="img-fluid" height={400}  src="images/babyHome.png" alt=""></img></div>
                <div className='col-lg-6 col-sm-12'>
                    <img className='img-fluid mb-3' src="images/blog.png" alt=""></img>
                <img className='img-fluid' src="images/login.png" alt=""></img></div>
              
            </div>

            <div className='my-4 py-5'>
                <h3 className='text-2xl font-bold text-secondary text-center'>Usage Technology</h3>

                <div className='py-2 px-8'>
                    <li>ReactJs for making UI</li>
                    <li>React Router for making it a single page application</li>
                    <li>React Bootstrap for make it responsive and use their component</li>
                    <li>MongoDb for Database</li>
                    <li>Firebase for authentication and hosting</li>
                    <li>Font awesome for use icon</li>
                </div>

            </div>

            <div className='my-4 py-5'>
                <h3 className='text-2xl font-bold text-secondary text-center'>Project feature</h3>

                <div className='py-2 px-8'>
                    <li>This project is an individual provide services site.</li>
                    <li>Users can sign up and log in to this website using google account and email.</li>
                    <li>Anyone can’t go to some pages without login, which is developed by React Router.</li>
                    <li>They have to pay to confirm their order</li>
                    <li className='my-3'>  <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://independent-service-prov-8c99d.web.app/"><i class="fa-solid fa-pen-to-square"></i> Live</a>
                    <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/Independent-service-provider"><i class="fa-brands fa-github"></i> Github</a></li>


                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsBaby;