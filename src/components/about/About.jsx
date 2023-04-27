import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>SDE Intern</h5>
              <small>DesiQnA</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Mentor</h5>
              <small>Dev Code Community</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>DSA</h5>
              <small>525+ Questions</small>
            </article>
          </div>
          <p>I am a sophomore student pursuing a degree in Computer Science with a strong interest in data 
            engineering and Web Development. I have a solid foundation in programming languages such as Python,Javascript
            and C++.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About