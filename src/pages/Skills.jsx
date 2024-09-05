import React from 'react'
import { Container } from 'react-bootstrap'
import { skillsData } from '../constant/data'
import SkillComponent from '../components/SkillComponent'

const Skills = () => {
  return (
    <Container fluid className=' mt-5'>
        {skillsData.map((data, i) => {
            const style = i === 0 ? 'bg-blue text-white' : 'bg-white text-black';
            return (
                <SkillComponent key={i} {...data} style={style}/>
            )
        })}
    </Container>
  )
}

export default Skills
