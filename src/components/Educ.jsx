import React from 'react'
import { bsu } from '../constant/image'

const Educ = ({content, img}) => {
  return (
    <section>
        <div className=' relative border-4 border-blue w-50 p-3 flex flex-col items-center rounded-[20px]'>
            <div className='flex absolute top-[-50px] justify-center'>
                <img src={img} alt="" className=' img-fluid w-75' />
            </div>
            <p className=' font-Poppins mt-20 text-center'>
                {content}
            </p>
        </div>
    </section>
  )
}

export default Educ
