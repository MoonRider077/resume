import React from 'react'
import styles from './styles.module.scss'
import { myContact } from '../banner/second/data'

const Footer = () => {
  return (
    <div id='contact' className={styles.container}>
        <h2 className='text-[35px] text-[white] text-center pt-[15px]'>Contact me</h2>
        <div className='flex w-[1000px] m-auto mt-[15px] gap-[130px]'>
        {
          myContact.map((el, index) => {
            return (
              <div key={index}>
                <a href={el.link}>
                <div className='w-[150px] h-[150px] border border-none rounded-[50%] bg-blue-500 hover:scale-105 hover:bg-blue-600 transition duration-300 ease-in-out'>
                    <div className='flex justify-center items-center h-[150px]'>
                      <img src={el.image} alt="icon" className='w-[90px] h-[80px]'/>
                    </div>
                  </div>
                </a>
                <p className='text-white text-[22px] text-center pt-[15px]'>{el.name}</p>
                <a href={el.link}>
                  <p className='text-white text-[15px] text-center pt-[10px]'>{el.title}</p>
                </a>
              </div>
            );
          })
        }
        </div>
        <p className='text-right text-black'>&copy; {new Date().getFullYear()} Moon Rider</p>
    </div>
  )
}

export default Footer