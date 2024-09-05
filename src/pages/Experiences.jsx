import React from 'react'
import { expData } from '../constant/data'
import Exp from '../components/Exp'
import { Container } from 'react-bootstrap'

const Experiences = () => {
  return (
    <Container fluid className='d-grid '>
      <div className='row p-3'>
        {expData.map((data, i) => {
              return (
                  <Exp key={i} {...data} />
              )
          })}
      </div>
    </Container>
  )
}

export default Experiences
