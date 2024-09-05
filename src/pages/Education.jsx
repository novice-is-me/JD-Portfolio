import React from 'react'
import Educ from '../components/Educ'
import { Container, Row, Col } from 'react-bootstrap'
import { actData, educData } from '../constant/data'
import { bsu, matatag } from '../constant/image'
import Activities from '../components/Activities'

const Education = () => {
 
  return (
    <Container fluid className='p-5 d-grid gap-20 mt-5 mt-md-2'>
      <div className='row gap-y-4'>
          <Educ content={educData[0].content} school={educData[0].school} img={bsu} value={0}/>
          <Educ content={educData[1].content} value={1}/>
      </div>
      <div className=' row gap-y-4'>
          <Educ content={educData[2].content} school={educData[2].school} img={matatag} value={0} spec={1}/>
          <Educ content={educData[3].content} value={1} />
      </div>
      <div>
          <div>
            <h2 className='font-Inter text-[25px] md:text-[30px] text-blue font-bold mb-8 text-center text-md-start'>LEADERSHIP AND ACTIVITIES:</h2>
            <p className='font-Inter text-[18px] md:text-[25px] font-bold'>Vice President of the YES-O Organization</p>
            <p className=' font-Inter text-[18px] md:text-[25px] font-bold'>2017 - 2018</p>
          </div>
          <div className=' mt-4'>
            {actData.map((data, index) => {
              return (
                <Activities key={index} content={data.content}/>
              )
            })}
          </div>
      </div>
    </Container>
  )
}

export default Education
