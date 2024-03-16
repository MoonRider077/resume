import React from 'react'
import { hardSkills } from './data'

const SkillsWrapper = () => {
  return (
        <div className='grid grid-cols-3 gap-4 w-[600px] ml-[30px] mt-[15px]'>
        {hardSkills.map((skill, index) => {
            return (
                <a key={index} href={skill.link}>
                    <div className='cursor-pointer w-[150px] h-[40px] bg-[#3e1e44] border border-[blue] rounded-[15px] flex justify-center items-center hover:bg-[#553282] hover:border-[#db35db] hover:shadow-md hover:scale-105 transition duration-300'>
                        <p className='text-white'>{skill.name}</p>
                    </div>
                </a>
            )
        })}
    </div>
  )
}

export default SkillsWrapper