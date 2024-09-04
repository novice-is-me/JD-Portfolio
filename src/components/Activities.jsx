import React from 'react'

const Activities = ({content}) => {
    console.log("from data", content)
  return (
    <>
        <p className=' font-Inter text-[12px] md:text-xl md:font-bold mb-4'>{content}</p>
    </>
  ) 
}

export default Activities
