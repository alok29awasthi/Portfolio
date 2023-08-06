import React from 'react';

import './Experience.css';
import Square from '../../components/Square/Square';

import morgan_stanley from '../../assets/morgan-stanley-logo.jpeg'
import oyo_rooms from '../../assets/oyo-rooms-logo.jpeg'

const Experience = () => (
  <div className='cv__experience'>
    <div className='cv__experience-heading'>
      <Square className='cv__experience-heading_square' height={18} width={18} color={{ r: 133, g: 29, b: 252 }} />
      <h1>Experience</h1>
    </div>

    <p className='cv__experience-summary'>As an experienced software developer, I have successfully worked on various aspects of regulatory reporting systems, including analyzing and optimizing legacy codebases. I am well-versed in comprehensive testing strategies, ensuring accurate and reliable reporting. Additionally, I actively contribute to agile methodologies and collaborate effectively with cross-functional teams to deliver high-quality solutions. Mentoring junior developers and fostering code quality standards are also integral parts of my professional experience.</p>
  
    <div className='cv__experience-ms cv__experience-comp'>
      <div className='cv__experience-ms_rect cv__experience-comp_rect'></div>
      <div className='cv__experience-comp_description'>
        <h2>Morgan Stanley</h2>
        <h3>Software Developer (Senior Associate)</h3>
        <ul>
          <li>Developed and maintained regulatory reporting systems, ensuring accurate and compliant reporting to regulatory bodies by collaborating with cross-functional teams.</li>
          <li>Implemented comprehensive testing strategies, including unit tests, integration tests, and QA tests, to guarantee reliable and precise reporting systems while adhering to high-quality coding standards.</li>
          <li>Analyzed and optimized legacy codebases, figuring out complex logic to enhance functionality and performance, and resolving production issues promptly to ensure smooth operations.</li>
          <li>Actively contributed to agile development methodologies, leveraging Scrum, while mentoring junior developers to foster code quality standards and best practices.</li>
        </ul>
      </div>
      <div className='cv__experience-comp_img-ms'>
        <img src={morgan_stanley} alt="ms-logo" />
      </div>
    </div>

    <div className='cv__experience-oyo cv__experience-comp'>
      <div className='cv__experience-oyo_rect cv__experience-comp_rect'></div>
      <div className='cv__experience-comp_description'>
        <h2>OYO Rooms</h2>
        <h3>Software Developer (SDE - 1)</h3>
        <ul>
          <li>Revised, modularized and updated old code bases to modern development standards, reducing operating costs and improving functionality.</li>
          <li>Discussed and developed code with team for the requirements of the end-user.</li>
          <li>Wrote unit tests for the APIs that were already integrated into the project to increase the code coverage from 19% to 72%.</li>
        </ul>
      </div>
      <div className='cv__experience-comp_img-oyo'>
        <img src={oyo_rooms} alt="oyo-logo" />
      </div>
    </div>

    <div className='cv__experience-oyo_intern cv__experience-comp'>
      <div className='cv__experience-oyo_intern_rect cv__experience-comp_rect'></div>
      <div className='cv__experience-comp_description'>
        <h2>OYO Rooms</h2>
        <h3>Software Developer (Intern)</h3>
        <ul>
          <li>Participated in code reviews and maintained high-quality standards throughout codebase.</li>
          <li>Produced clean, validation-ready code for project needs.</li>
        </ul>
      </div>
      <div className='cv__experience-comp_img-oyo'>
        <img src={oyo_rooms} alt="oyo-logo" />
      </div>
    </div>
  </div>
);

export default Experience;
