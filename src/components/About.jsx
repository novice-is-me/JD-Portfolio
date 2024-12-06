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
            <p className=' text-white md:text-[20px]'>I am a motivated and adaptable professional with a strong foundation in technology, programming, and customer engagement. My skill set includes proficiency in programming languages such as Python, Java, C#, C++, HTML, CSS, and PHP, alongside experience with frameworks and tools like .NET, AutoCAD, Apache NetBeans, Figma, Canva, and Microsoft Office Suite. Fluent in both Filipino and English, I excel in written and verbal communication, problem-solving, and adapting to new challenges. My combination of technical expertise and strong interpersonal skills makes me a versatile and reliable team member dedicated to achieving organizational success.</p>
        </div>
    </Container>
  )
}

export default About
