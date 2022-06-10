import React from 'react';

const About = () => {
    return (
        <div className='container'>
            <div className='row  my-5 py-5'>
            <div className='col-lg-5 col-sm-12 d-flex justify-content-center align-content-center'>
                    <img className='img-fluid' src="https://i.pinimg.com/originals/e7/26/c7/e726c74ac081eed50feee1433d12c998.gif" alt="" />
                    {/* https://c.tenor.com/AlUkiGkR2j8AAAAM/new-game-ahagon-umiko-programming.gif */}
                </div>
            <div className='col-lg-7 col-lag-12 p-4'>
                <h1>About Me <hr /></h1>
        <p>I’m Nipa Akter. I’m from Gazipur, Bangladesh. I have completed Bsc. in computer science and engineering from <a className='myColor' rel='noreferrer' target='_blank' href="https://iubat.edu/"> International University of Business Agriculture and Thechnology (IUBAT)</a> , Uttara.</p>
        <p>I have learned from last two years a few web-related technologies and programming languages like HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js, MaterialUI,Node Expresss.js , MongoDB, and firebase Authentication system.</p>
        <p>While in love with JavaScript, my preference is to learn and adapt to popular frameworks, libraries, and packages in order to keep pace with the changing web environment. <a className='myColor' target='_blank' rel='noreferrer' href="https://github.com/nipaaa"> My GitHub Link</a></p>
            </div>
            </div>
           

              
        </div>
    );
};

export default About;