import React from 'react'

const JobExperience = () => {
  return (
    <div>
        <div className='flex items-center justify-center'>
        <div className='w-[370px] h-[60px] flex items-center justify-center bg-[transparent] backdrop-blur-[2px] mt-[20px] rounded-[15px]'>
        <h2 className='text-[35px] text-[white]'>
            My work experience
        </h2>
        </div>
        </div>
        <div className='flex gap-6'>
        <div>
        <div className='w-[600px] h-[310px] bg-[transparent] backdrop-blur-[30px] ml-[40px] mt-[10px] rounded-[15px] border border-[purple]'>
            <h3 className='text-white text-medium text-[21px] pl-[15px] pt-[10px]'>Online Marketing Assistant</h3>
            <p className='text-[#e99191] text-medium text-[19px] pl-[25px] pt-[10px]'>2020 - 2023</p>
            <ul className='text-[white] list-disc pl-[25px]'>
                <li className='pt-[10px]'>Promoted ICO and IPO projects, responsible for increasing chat activity.</li>
                <li className='pt-[10px]'>Worked closely with the marketing team to develop and implement customer acquisition strategies.</li>
                <li className='pt-[10px]'>Participated in planning and executing marketing campaigns aimed at attracting new investors.</li>
                <li className='pt-[10px]'>Actively engaged with the community, managing and maintaining communication in the chat.</li>
            </ul>
        </div>
        </div>
        <div>
        <div className='w-[600px] h-[310px] bg-[transparent] backdrop-blur-[30px] ml-[30px] mt-[10px] rounded-[15px] border border-[purple]'>
            <h3 className='text-white text-medium text-[21px] pl-[15px] pt-[10px]'>Administrative Assistant</h3>
            <p className='text-[#e99191] text-medium text-[19px] pl-[25px] pt-[10px]'>2023 January - 2023 May</p>
            <ul className='text-[white] list-disc pl-[25px]'>
                <li className='pt-[10px]'>Responsible for data entry in an office environment.</li>
                <li className='pt-[10px]'>Ensured accuracy and timeliness of data entry into the system.</li>
                <li className='pt-[10px]'>Participated in coordinating workflow and maintaining communication within the office.</li>
                <li className='pt-[10px]'>Identify and report any discrepancies or errors in data entry.</li>
                <li className='pt-[10px]'>Assist with other administrative tasks as needed to support office operations.</li>
            </ul>
        </div>
        </div>
        </div>
    </div>
  )
}

export default JobExperience