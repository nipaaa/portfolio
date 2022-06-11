import React from 'react';

const ProjectDetailsDream = () => {
    return (
        <div className='container'>
            <h1 className='my-4'>Project Details</h1>
            <div className=' row py-5'>
                <div className='col-lg-4 col-sm-12'><img className="img-fluid" height={400}  src="images/dress.png" alt=""></img></div>
                <div className='col-lg-4 col-sm-12'>
                    <img className='img-fluid mb-3' src="images/additem.png" alt=""></img>
                    <img className='img-fluid' src="images/manages.png" alt=""></img>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <img className='img-fluid mb-3' src="images/contact.png" alt=""></img>
                    <img className='img-fluid' src="images/details.png" alt=""></img>
                    </div>
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
                    <li>Its an warehouse management Website</li>
                    <li>Users can sign up and log in to this website using google account and gmail</li>
                    <li>Anyone can’t go to some pages without login, which is developed by React Router.</li>
                    <li>Users can add items, see their items list and also delete their items.</li>
                    
                    <li className='my-3'> <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://assignment-11-404c7.web.app/"><i class="fa-solid fa-pen-to-square"></i> Live</a>
                    <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/warehouse-management-system"><i class="fa-brands fa-github"></i> Client</a>
                    <a target='_blank' rel="noreferrer" className='my-auto text-white text-decoration-none resume px-2 py-1 rounded-2 ms-4' href="https://github.com/nipaaa/warehouse-management-system-server-side"><i class="fa-brands fa-github"></i> Server</a></li>


                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsDream;