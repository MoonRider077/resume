import { useState, useEffect, useRef } from 'react'
import headerStyles from './header.module.scss'

interface HamburgerProps {
    handleScroll: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => void;
  }

const Hamburger: React.FC<HamburgerProps> = ({ handleScroll }) => {

const [isOpen, setIsOpen] = useState<boolean>(false);
const burgerBlockRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const burgerBlock = burgerBlockRef.current;
  if (burgerBlock) {
    if (isOpen) {
      burgerBlock.style.height = '500px'; 
    } else {
      burgerBlock.style.height = '0'; 
    }
  }
}, [isOpen]);

const handleClick = () => {
    setIsOpen(!isOpen)
}

return (
    <div className='collapse max-sm:visible'>
        <div onClick={handleClick}>
            <img src={isOpen ? "/icons/x-icon.svg" : "/icons/brger-icon.svg"} 
                alt={isOpen ? "Close menu" : "Hamburger menu"} 
                className={`${headerStyles['burger']}`}/>
        </div>
        <div
            ref={burgerBlockRef}
            className={`${headerStyles['burger-block']}`}
            style={{
              overflow: 'hidden',
              transition: 'height 0.5s ease',
              height: isOpen ? '500px' : '0', 
            }}
            >
            <div className='text-[#cc58cc] text-[50px] ml-[50px] font-medium list-none relative'>
          <a href="#about" onClick={(event) => handleScroll(event, 'about')}>
            <li className='hover:text-[#a069d3] duration-1000 relative pt-[40px] w-[235px]'>
              <div className={headerStyles.underline}></div>
              <i>About me</i>
            </li>
          </a>
          <a href="#skills" onClick={(event) => handleScroll(event, 'skills')}>
            <li className='hover:text-[#a069d3] duration-1000 relative pt-[40px] w-[132px]'>
              <div className={headerStyles.underline}></div>
              <i>Skills</i>
            </li>
          </a>
          <a href="#portfolio" onClick={(event) => handleScroll(event, 'portfolio')}>
            <li className='hover:text-[#a069d3] duration-1000 relative pt-[40px] w-[212px]'>
              <div className={headerStyles.underline}></div>
              <i>Portfolio</i>
            </li>
          </a>
          <a href="#contact" onClick={(event) => handleScroll(event, 'contact')}>
            <li className='hover:text-[#a069d3] duration-1000 relative pt-[40px] w-[285px]'>
              <div className={headerStyles.underline}></div>
              <i>Contact me</i>
            </li>
          </a>
        </div>
        </div>
    </div>
  )
}

export default Hamburger