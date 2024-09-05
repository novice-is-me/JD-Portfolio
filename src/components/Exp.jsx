import React from 'react'

const Exp = ({img, title, date, text}) => {
  return (
    <div className='flex items-center mt-5 col-lg-6 justify-center'>
        <div className=' hidden md:block'>
            <img src={img} alt="" />
        </div>
        <div className='border-4 border-blue p-3 md:w-[60%]'>
            <div>
                <p className=' font-Poppins font-semibold text-[20px]'>{title}</p>
                <p className=' font-Poppins font-semibold text-[18px] mt-2'>{date}</p>
            </div>
            <ul className='mt-4'>
                {text.map((item, i) => {
                    return (
                        <li key={i} className=' font-Poppins text-[16px]'>• {item}</li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Exp
