import React from 'react'
import { Container } from 'react-bootstrap'
import { profile } from '../constant/image'
import resume from "../assets/resume.pdf"

const Hero = () => {

  return (
    <Container className="p-5 p-md-0 flex flex-column gap-y-5 justify-evenly flex-md-row mb-6">
      <div className='flex flex-col justify-center order-2 order-md-1 items-center align-items-md-start'>
        <div className=' text-center text-md-start'>
          <p className=' font-Poppins text-[20px] md:text-[30px] font-medium'>Hello, It's Me</p>
          <h2 className=' font-Poppins text-[35px] md:text-[40px] font-bold text-blue'>Divine Joyce Enero</h2>
          <p className=' font-Poppins text-[20px] md:text-[30px] font-medium'>I am a <span className=' text-blue'>Computer Engineer</span></p>
        </div>
        <div className=' mt-3'>
          <a href={resume} download='ENERO DIVINA JOYCE-Resume' className=' bg-blue px-10 py-2 text-white font-Poppins rounded-[5rem] text-[20px]'>Hire Me</a>
        </div>
      </div>
      <div className='flex order-1 order-md-2 justify-center'>
        <img src={profile} alt="" />
      </div>
    </Container>
  )
}

export default Hero
