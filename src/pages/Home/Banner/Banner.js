import React from 'react';
import '../../shared/Header/Header.css'

const Banner = () => {
    return (
        <div className='container my-5'>
            <div className='row'>

                <div className='col-lg-7 col-sm-12 my-5'>
                    <h6 className='myColor'>Hi, my name is</h6>
                    <h1>Nipa Akter</h1>
                    <h2  className='myColor'>Web Developer</h2>
                    <p>Being interested to explore technologies I found web development as my passion. I am aspiring to bring that passion to a full-time role.</p>
                    <div className='d-block'>
                    <a target='_blank' href='images/NipaAkter.pdf' download rel="noreferrer" className='resume text-decoration-none text-white p-2 my-1 rounded-2'>Download My Resume</a>
                    </div>
                  
                </div>


                
                <div className='col-lg-5 col-sm-12 my-5 d-flex justify-content-center '>
                    <img className='w-50 img-fluid' src="images/nipa.jpg" alt="" />
                </div>

            </div>
            
        </div>
    );
};

export default Banner;