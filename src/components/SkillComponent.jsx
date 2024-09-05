import React from 'react'

const SkillComponent = ({title, text, style }) => {

  return (
    <div className={`relative border-4 ${style} mb-10 p-3 border-4 border-blue`}>
        <div className=' absolute top-[-20px] left-1/2 transform -translate-x-1/2 border-4 border-blue bg-white p-[10px]'>
            <h2 className=' font-Poppins font-bold text-[20px] md:text-[35px] text-black text-center'>{title}</h2>
        </div>
        <div className=' mt-16 md:mt-12 text-center'>
        {text.map((data, i) => (
            <ul key={i} className=' mb-2'>
                <li>
                    <p className=' font-Poppins font-bold'>{data.type}</p>
                    {Array.isArray(data.content) ? (
                    data.content.map((text, j) => (
                        <p key={j} className=' font-Poppins text-sm' >{text}</p>
                    ))
                    ) : (
                    <p>{data.content}</p>
                    )}
                </li>
            </ul>
        ))}
        </div>
    </div>
  )
}

export default SkillComponent
