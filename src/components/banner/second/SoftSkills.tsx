import React from 'react'
import { softSkills } from './data'
import Languages from './Languages'

const SoftSkills = () => {
  return (
        <div>
            <div className='grid grid-cols-3 gap-4 w-[600px] ml-[50px] mt-[15px]'>
        {softSkills.map((skill, index) => {
            return (
                    <div key={index} className='cursor-pointer w-[180px] h-[40px] bg-[#3e1e44] border border-[blue] rounded-[15px] flex justify-center items-center hover:bg-[#553282] hover:border-[#db35db] hover:shadow-md hover:scale-105 transition duration-300'>
                        <p className='text-white'>{skill.name}</p>
                    </div>
            )
        })}
    </div>
        <h2 className='text-[35px] text-[white] pl-[50px] pt-[60px]'>
            Languages
        </h2>
        <Languages />
    </div>
  )
}

export default SoftSkills