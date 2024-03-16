import React from 'react';
import underline from './underline.module.scss';

const Header: React.FC = () => {

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-40 max-w-[1366px] m-auto h-[60px] bg-[#111111] shadow-xl'>
      <div className='flex justify-between'>
        <div>
          <h2 className='text-[#cc58cc] pl-[35px] pt-[10px] font-bold text-[25px]'><i>Moon Rider</i></h2>
        </div>
        <div className='text-[#cc58cc] flex pr-[35px] gap-[25px] pt-[15px] font-medium list-none relative'>
          <a href="#about" onClick={(event) => handleScroll(event, 'about')}>
            <li className='cursor-pointer hover:text-[#a069d3] duration-1000 relative'>
              <div className={underline.underline}></div>
              <i>About me</i>
            </li>
          </a>
          <a href="#skills" onClick={(event) => handleScroll(event, 'skills')}>
            <li className='cursor-pointer hover:text-[#a069d3] duration-1000 relative'>
              <div className={underline.underline}></div>
              <i>Skills</i>
            </li>
          </a>
          <a href="#portfolio" onClick={(event) => handleScroll(event, 'portfolio')}>
            <li className='cursor-pointer hover:text-[#a069d3] duration-1000 relative'>
              <div className={underline.underline}></div>
              <i>Portfolio</i>
            </li>
          </a>
          <a href="#contact" onClick={(event) => handleScroll(event, 'contact')}>
            <li className='cursor-pointer hover:text-[#a069d3] duration-1000 relative'>
              <div className={underline.underline}></div>
              <i>Contact me</i>
            </li>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
