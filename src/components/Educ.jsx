import React from 'react'
import { bsu } from '../constant/image'

const Educ = ({content, img, value, spec}) => {

  return (
    <section className='col-12 col-md-6 flex items-center justify-center'>
        <div className={` ${value === 1 ? ' bg-blue' : ''} relative border-4 border-blue p-3 flex flex-col items-center rounded-[20px]`}>
            <div className='flex absolute top-[-50px] justify-center'>
                <img src={img} alt="" className=' img-fluid w-75' />
            </div>
            <p className={`${value === 1 ? 'mt-0 text-white p-md-3' : 'mt-20'} ${spec === 1 ? ' !mt-[100px]' : ''} font-Poppins text-center p-2 `} style={{whiteSpace: 'pre-line'}}>
                {content}
            </p>
        </div>
    </section>
  )
}

export default Educ
