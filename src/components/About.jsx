import React from 'react'
import { Container } from 'react-bootstrap'
import { profile } from '../constant/image'

const About = () => {
  return (
    <Container fluid className='p-5 bg-blue flex'>
        <div className=' hidden lg:flex flex-1 justify-content-center '>
            <img src={profile} alt="" />
        </div>
        <div className=' flex flex-1 flex-col justify-center text-center text-lg-start'>
            <h3 className=' text-white font-Inter md:text-[30px] font-bold mb-4 text-[35px]'>About Me</h3>
            <p className=' text-white md:text-[20px]'>I am a skilled Virtual Assistant with a strong background in technology, customer service, and communication. My expertise includes programming, proficiency with tools like Microsoft Office Suite, Figma, and Canva, and experience with cloud platforms such as Saturn Cloud. I excel in managing social media, handling customer communications, and ensuring order accuracy. With strong analytical and communication skills, I am proficient in both written and verbal tasks and fluent in Filipino and English. My attention to detail and adaptability make me a reliable and efficient Virtual Assistant.</p>
        </div>
    </Container>
  )
}

export default About
