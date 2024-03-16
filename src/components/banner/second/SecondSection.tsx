import React from 'react'
import SkillsWrapper from './SkillsWrapper'
import SoftSkills from './SoftSkills'
import styles from './styles.module.scss'
import JobExperience from './JobExperience'

const SecondSection = () => {

  return (
    <div className={styles.container} id="skills">
     <div className='flex'>
     <div>
     <h2 className='text-[35px] text-[white] pl-[30px] pt-[15px]'>
        My Front end development skills
      </h2>
      <div>
      <SkillsWrapper />
      </div>
     </div>
     <div>
     <h2 className='text-[35px] text-[white] pl-[50px] pt-[15px]'>
        Soft Skills
      </h2>
      <div>
        <SoftSkills />
      </div>
     </div>
     </div >
     <JobExperience />
    </div>
  )
}

export default SecondSection