import React from 'react';

import './Resume.css';
import Square from '../../components/Square/Square';
import Button from '../../components/Button/Button';
import resume from '../../assets/resume.pdf'

function Resume() {

  return (
    <div className='cv__resume'>
      <div className='cv__resume-heading'>
        <Square className='cv__resume-heading_square' height={18} width={18} color={{ r: 133, g: 29, b: 252 }} />
        <h1>Resume</h1>
      </div>

      <div className='cv__resume-summary'>
        <div className='cv__resume-summary_heading'>
          <h2>Summary</h2>
          <a href={resume} download='resume.pdf'>
            <Button name='DOWNLOAD CV' className='downloadCV' textColor='#ffffff' backgroundColor='#8a2be2' borderColor='#725AC1' boxShadowColor='#725AC1' hoverTextColor='#725AC1' hoverBoxShadowColor='#ffffff00'  />
          </a>
        </div>
        <div className='cv__resume-summary_description'>
          <p>Dedicated to improving skills through hands-on learning and development work. Adept at a number of programming languages including JAVA, C++ and Python.  Well-organised and collaborative team player with strong communication and analytical abilities. </p>
        </div>
      </div>

      <div className='cv__resume-education'>
        <h2>Education</h2>
        <div className='cv__resume-education_description'>
          <div className='cv__resume-education_description-college'>
            <h3>2017 - 2021</h3>
            <div className='cv__resume-education_description-college_right'>
              <h3>Vellore Institute of Technology</h3>
              <p>B. Tech (Electronics & Communication Engineering)</p>
              <p>9.11 / 10</p>
            </div>
          </div>
          <div className='cv__resume-education_description-school'>
            <h3>2016 - 2017</h3>
            <div className='cv__resume-education_description-school_right'>
              <h3>Prabhu Dayal Public School</h3>
              <p>Higher Secondary School</p>
              <p>95.6%</p>
            </div>
          </div>
        </div>
      </div>

      <div className='cv__resume-skills_language'>
        <h2>Skillset</h2>
        <ul className='cv__resume-skills_language-list'>
          <li>JAVA</li>
          <li>C++</li>
          <li>Python</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>DSA</li>
          <li>Spring Boot</li>
          <li>Load Testing</li>
          <li>JUnit5</li>
          <li>Kafka</li>
          <li>ReactJS</li>
          <li>CSS</li>
        </ul>

        <h2>Language</h2>
        <ul className='cv__resume-skills_language-list'>
          <li>Hindi (navtive)</li>
          <li>English</li>
        </ul>
      </div>
    </div>
)};

export default Resume;