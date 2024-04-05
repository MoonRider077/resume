import React from 'react';
import headerStyles from './header.module.scss';
import Hamburger from './Hamburger';

const Header: React.FC = () => {

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className='max-sm:h-[150px] max-sm:w-[375px] fixed top-0 left-0 right-0 z-40 w-[100%] h-[60px] bg-[#111111] shadow-xl'>
      <div className='flex justify-between max-w-[1366px] m-auto h-[30px]'>
        <div>
          <h2 className='max-sm:text-[50px] max-sm:pt-[35px] text-[#cc58cc] pl-[25px] pt-[10px] font-bold text-[25px]'><i>Moon Rider</i></h2>
        </div>
        <div>
          <Hamburger handleScroll={handleScroll}/>
        </div>
        <div className={`text-[#cc58cc] flex pr-[35px] gap-[25px] pt-[15px] font-medium list-none relative ${headerStyles['hidden']}`}>
          <a href="#about" onClick={(event) => handleScroll(event, 'about')}>
            <li className='cursor-pointer hover:text-[#a069d3] duration-1000 relative'>
              <div className={headerStyles.underline}></div>
              <i>About me</i>
            </li>
          </a>
          <a href="#skills" onClick={(event) => handleScroll(event, 'skills')}>
            <li className='cursor-pointer hover:text-[#a069d3] duration-1000 relative'>
              <div className={headerStyles.underline}></div>
              <i>Skills</i>
            </li>
          </a>
          <a href="#portfolio" onClick={(event) => handleScroll(event, 'portfolio')}>
            <li className='cursor-pointer hover:text-[#a069d3] duration-1000 relative'>
              <div className={headerStyles.underline}></div>
              <i>Portfolio</i>
            </li>
          </a>
          <a href="#contact" onClick={(event) => handleScroll(event, 'contact')}>
            <li className='cursor-pointer hover:text-[#a069d3] duration-1000 relative'>
              <div className={headerStyles.underline}></div>
              <i>Contact me</i>
            </li>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
