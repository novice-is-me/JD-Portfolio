import React from 'react'
import { bsu } from '../constant/image'

const Educ = ({content, img, value, spec, school}) => {

  return (
    <section className='col-12 col-md-6 flex items-center justify-center'>
        <div className={` ${value === 1 ? ' bg-blue' : ''} relative border-4 border-blue p-3 flex flex-col items-center rounded-[20px]`}>
            <div className='flex absolute top-[-50px] justify-center'>
                <img src={img} alt="" className=' img-fluid w-75' />
            </div>
            <div className={`${value === 1 ? 'mt-0 text-white p-md-3' : 'mt-20'} ${spec === 1 ? ' !mt-[100px]' : ''} p-2`}>
              <p className='font-Poppins text-center mb-2 font-bold'>{school}</p>
              <p className='font-Poppins text-center' style={{whiteSpace: 'pre-line'}}>
                  {content}
              </p>
            </div>
        </div>
    </section>
  )
}

export default Educ
