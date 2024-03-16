import React from 'react'
import styles from './styles.module.scss';


const FirstSection = () => {
    
  return (
    <div id="about" className={styles.container}>
        <div className='pl-[50px] pt-[80px] text-[white]'>
            <div className='w-[700px] h-[565px] bg-transparent backdrop-blur-[15px] rounded-[35px] p-2 border border-[#733a94]'>
            <div className='pl-[5px]'>
                <h2 className={styles.text}>Hello, I'm Yusufjon !</h2>
            </div>
            <div>
                <p className='leading-[30px] text-[18px] pt-[5px] pl-[5px]'>
                    <i>
                    I'm a front-end developer based in Uzbekistan. I specialize in React.js, <br /> focusing on creating user experiences that make a difference. <br /> I enjoy the challenges that come with web development <br /> and take pride in my attention to detail and problem-solving skills. <br /> In my spare time, I enjoy exploring new design trends and experimenting <br /> with different techniques to further enhance the user experience. <br /> Continuous learning and improvement are important to me, <br /> both personally and professionally. <br /> Right now I'm studying at Amity University 2023 - 2026.
                    </i>
                </p>
                <div className='pl-[5px]'>
                <h2 className={styles.text2}>
                    Experience
                </h2>
                </div>
                <p className='leading-[30px] text-[18px] pt-[5px] pl-[5px]'>
                    <i>
                    I completed an 8-month React.js course at Najot Talim. Equipped with a solid understanding of React.js principles, I'm eager to contribute to projects, collaborate with teams, and deliver impactful solutions. Committed to continuous improvement, I stay updated with industry trends to excel in web development.</i>  
                </p>
            </div>
        </div>
        </div>
        <div className='mt-[150px] ml-[130px] w-[300px] h-[422px] border-2 border-[#e09ea9] rounded-[15px] hover:border-[#3434b4] duration-1000 hover:scale-[1.05] cursor-pointer'>
            <img src="/images/hacker.jpg" alt="Hacker" className='rounded-[12px]'/> 
        </div>
    </div>
  )
}

export default FirstSection