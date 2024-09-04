import React from 'react'

const Exp = ({img, title, date, text}) => {
  return (
    <div className='flex items-center mt-5'>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='border-4 border-blue p-3'>
            <div>
                <p className=' font-Poppins font-semibold text-[20px]'>{title}</p>
                <p className=' font-Poppins font-semibold text-[18px]'>{date}</p>
            </div>
            <ul className=' border'>
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
