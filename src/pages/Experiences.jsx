import React from 'react'
import { expData } from '../constant/data'
import Exp from '../components/Exp'
import { Container } from 'react-bootstrap'

const Experiences = () => {
  return (
    <Container className=' flex'>
        {expData.map((data, i) => {
            return (
                <Exp key={i} {...data} />
            )
        })}
    </Container>
  )
}

export default Experiences
