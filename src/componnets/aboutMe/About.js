import React from 'react'
import Navbar from '../../Navbar'
import './AboutMe.css'
const About = () => {
  return (
<>
<Navbar/>
<div className='px-9 h-full leading-5'>
   
  <h1 className='text-white text-5xl my-20 text-center '>About Me</h1>
  <div className='centerMe'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubeot0A-KiQ4KstMfucu9L4xXfsCQEE0ZdA&s" className='   w-48 h-48 rounded-full' alt="" /></div>
   <h2 className='text-white text-4xl my-20 text-center'>
    Hi , My Name is Dhruv.
    <br />
    I am a young guy aiming to be an overall full stack web developer.
    <br />
    I try to makes things easier for those around me.
    I write <span className='text-blue-400'>Reliable</span> , <span className='text-blue-400'>easy to read</span> , and <span className='text-blue-400'>self-explainatory code</span> .
   </h2>
   <h2 className='text-white text-3xl text-center'>
    My Overall Domain of Languages include <span className='text-blue-500'>HTML</span>,
    <span  className='text-blue-500'>CSS</span>,<span  className='text-blue-500'>Javascript</span>
    <br />
    I have also learned <span  className='text-blue-500'>BootStrap </span> and <span  className='text-blue-500'>Tailwind CSS </span>
    along with Industry leading library of JavaScript called <span  className='text-blue-500'>React</span>..
   </h2>
</div>
</>
  
  )
}

export default About
