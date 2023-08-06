import React from 'react';
import { Link } from 'react-router-dom';

import './AboutMe.css';
import mypic from '../../assets/mypic.jpeg'

import {images} from '../../constants'
import Button from '../../components/Button/Button';

const AboutMe = () => (
  <div className='cv__aboutme'>
    <div className='cv__aboutme-placeholder_rect'></div>
    <div className='cv__aboutme-placeholder'>
      <div className='cv__aboutme-placeholder_about'>
        <div className='cv__aboutme-placeholder_about-header'>
          <img src={mypic} alt="my-pic" />
          <h1>Alok</h1>
          <h1>Awasthi</h1>
          <div className='cv__aboutme-placeholder_about-line'></div>
          <p>SOFTWARE DEVELOPER</p>
        </div>
        <div className='cv__aboutme-placeholder_about-footer'>
          <ul className='cv__aboutme-placeholder_about-footer_social'>
            <li><a href='https://www.facebook.com/Aunny.12345/' target="_blank" rel="noreferrer noopener"><img src={images.facebook} alt="fb" className='social-media'/></a></li>
            <li><a href='https://twitter.com/Aunny_Awasthi' target="_blank" rel="noreferrer noopener"><img src={images.twitter} alt="tw" className='social-media'/></a></li>
            <li><a href='https://www.linkedin.com/in/alok-awasthi-93a862160/' target="_blank" rel="noreferrer noopener"><img src={images.linkedin} alt="li" className='social-media'/></a></li>
            <li><a href='https://www.instagram.com/alok_awasthi/' target="_blank" rel="noreferrer noopener"><img src={images.instagram} alt="in" className='social-media'/></a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className='cv__aboutme-description'>
      <h1>Hello</h1>
      <h3>Here's who I am & what I do</h3>
      <div className='cv__aboutme-description_buttons'>
        <Link to='/resume'><Button name='RESUME' className='resume' textColor='#ffffff' backgroundColor='#8a2be2' borderColor='#725AC1' boxShadowColor='#725AC1' hoverTextColor='#725AC1' hoverBoxShadowColor='#ffffff'  /></Link>
        <Link to='/experience'><Button name='EXPERIENCE' className='experience' textColor='#725AC1' borderColor='#725AC1' boxShadowColor='#725AC1' hoverTextColor='#FFFFFF' hoverBoxShadowColor='#8a2be2'  /></Link>
      </div>
      <p>Experienced software developer skilled in regulatory reporting systems, comprehensive testing, legacy code optimization, and agile methodologies. Collaborates effectively with cross-functional teams to ensure accurate, compliant, and seamless reporting. Dedicated to delivering high-quality solutions and fostering code quality standards.</p>
    </div>
  </div>
);

export default AboutMe;
