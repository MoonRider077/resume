import React from 'react'
import { languages } from './data'

const Languages = () => {
    return (
            <div className='grid grid-cols-3 gap-1 w-[600px] ml-[50px] mt-[15px]'>
        {languages.map((skill, index) => {
            return (
                    <div key={index} className='cursor-pointer w-[150px] h-[40px] bg-[#3e1e44] border border-[blue] rounded-[15px] flex justify-center items-center hover:bg-[#553282] hover:border-[#db35db] hover:shadow-md hover:scale-105 transition duration-300'>
                        <p className='text-white'>{skill.name}:</p>
                        <p className='text-white pl-[10px]'>{skill.level}</p>
                    </div>
            )
        })}
    </div>
  )
}

export default Languages