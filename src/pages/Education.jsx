import React from 'react'
import Educ from '../components/Educ'
import { Container } from 'react-bootstrap'
import { educData } from '../constant/data'
import { bsu } from '../constant/image'

const Education = () => {
    console.log(educData[0]);
  return (
    <Container fluid className=' p-5'>
      <Educ content={educData[0]} img={bsu}/>
    </Container>
  )
}

export default Education
