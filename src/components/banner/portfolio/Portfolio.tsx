import React from 'react'
import styles from './styles.module.scss'

const Portfolio = () => {
  return (
    <div id='portfolio' className={`${styles.container} max-sm:invisible`}>
        <div>
            <h2 className='text-[35px] text-[white] font-semibold pt-[50px] text-center'>
            My Portfolio
        </h2>
        <div className='grid grid-cols-2 w-[850px] m-auto mt-[50px] gap-10'>
        <a href="https://theshopify.vercel.app/">
            <div className='w-[390px] h-[210px] bg-[#472474] flex cursor-pointer justify-center items-center border border-none rounded-md hover:shadow-lg hover:scale-105 transition duration-300'>
                <img src="/images/sss1.png" alt="The shopify" className='w-[380px] h-[200px]'/>
            </div>
        </a>
        <a href="https://exam-2-ctw2bqq1a-itachi0777-mailru.vercel.app/">
            <div className='w-[390px] h-[210px] bg-[#472474] flex cursor-pointer justify-center items-center border border-none rounded-md hover:shadow-lg hover:scale-105 transition duration-300'>
                <img src="/images/sss2.png" alt="Responsive app" className='w-[380px] h-[200px]'/>
            </div>
        </a>
        <a href="https://todos-jet-theta.vercel.app/">
            <div className='w-[390px] h-[210px] bg-[#472474] flex cursor-pointer justify-center items-center border border-none rounded-md hover:shadow-lg hover:scale-105 transition duration-300'>
                <img src="/images/sss3.png" alt="Todo list" className='w-[380px] h-[200px]'/>
            </div>
        </a>
        <a href="https://weather-seven-sandy.vercel.app/">
            <div className='w-[390px] h-[210px] bg-[#472474] flex cursor-pointer justify-center items-center border border-none rounded-md hover:shadow-lg hover:scale-105 transition duration-300'>
                <img src="/images/sss4.png" alt="Weather app" className='w-[380px] h-[200px]'/>
            </div>
        </a>
        </div>
        </div>
    </div>
  )
}

export default Portfolio