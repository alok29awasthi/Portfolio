import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './Contact.css';
import Square from '../../components/Square/Square';
import Button from '../../components/Button/Button';
import reset from '../../assets/reset.png'

const Contact = () => {

  const[formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    captchaImage: '',
    captcha: '',
  })
  const[errorData, setErrorData] = useState({
    firstName: false,
    lastName: false,
    email: false,
  })
  const[imgSrc, setImgSrc] = useState('')
  const[emailSent, setEmailSent] = useState('')
  const[isCaptchaCorrect, setIsCaptchaCorrect] = useState(true)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(validateForm()) {
      if(validateCaptcha()) {
        console.log('Captcha entered correctly')
        axios.post('http://localhost:8080/send-email', formData)
          .then(response => {
            setEmailSent(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error sending email:', error);
          })
      } else {
        console.error('CAPTCHA validation failed');
      }
    } else {
      console.error('Invalid Form')
    }
  }

  const validateCaptcha = async () => {
    console.log('Captcha entered:', formData.captcha);
    // return new Promise((resolve, reject) => {
      axios.post('http://localhost:8080/captcha-validation', formData.captcha)
      .then(response => {
        setIsCaptchaCorrect(response.data)
        return response.data;
      })
      .catch(error => {
        console.error('Error validating captcha: ', error)
        setIsCaptchaCorrect(false);
        return false;
      })
    // })
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  const fetchCaptchaImage = async () => {
    try {
      const response = await axios.get('http://localhost:8080/captcha');
      setFormData(prevData => ({ ...prevData, captchaImage: response.data }));
      setImgSrc('data:image/png;base64,' + response.data)
    } catch (error) {
      console.error('Error fetching CAPTCHA image:', error);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {};

    if (!formData.firstName.trim()) {
      updatedErrors.firstName = true
      isValid = false;
    } 

    if (!formData.lastName.trim()) {
      updatedErrors.lastName = true
      isValid = false;
    } 

    if (!formData.email.trim()) {
      updatedErrors.email = true
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      setErrorData({...errorData, email: false})
      isValid = false;
    }

    setErrorData((prevErrorData) => ({ ...prevErrorData, ...updatedErrors }));
    // console.error(errorData.firstName, errorData.lastName, errorData.email, isValid)
    return isValid;
  }

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    fetchCaptchaImage();
  }, []);

  return (
    <div className='cv__contact'>
      <div className='cv__contact-heading'>
        <Square className='cv__contact-heading_square' height={18} width={18} color={{ r: 133, g: 29, b: 252 }} />
        <h1>Let's talk</h1>
      </div>

      <div className='cv__contact-form'>
        <form action='/submit-form' onSubmit={handleSubmit}>
          <div className='cv__contact-row_1'>
            <div className='cv__contact-row_1-form_row cv__contact-form_row'>
              <label htmlFor="first-name" className={errorData.firstName ? 'error' : 'normal'}>First Name <span>*</span></label>
              <input type="text" name="firstName" id="first-name" onChange={handleInputChange} />
            </div>
            <div className='cv__contact-row_1-form_row cv__contact-form_row'>
              <label htmlFor="last-name" className={errorData.lastName ? 'error' : 'normal'}>Last Name <span>*</span></label>
              <input type="text" name="lastName" id="last-name" onChange={handleInputChange} />
            </div>
          </div>
          <div className='cv__contact-form_row'>
            <label htmlFor="email" className={errorData.email ? 'error' : 'normal'}>Email <span>*</span></label>
            <input type="email" name="email" id="email" onChange={handleInputChange} />
          </div>
          <div className='cv__contact-form_row'>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" onChange={handleInputChange} />
          </div>
          <div className='cv__contact-form_row'>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={5} onChange={handleInputChange} />
          </div>
          {formData.captchaImage && (
            <div className='cv__contact-form_captcha'>
              <img src={imgSrc} alt="captcha" />
              <img src={reset} alt="reset" onClick={fetchCaptchaImage} className='cv__contact-form_captcha-reset' />
              <input type="text" name="captcha" id="captcha" placeholder='Enter CAPTCHA' onChange={handleInputChange} onKeyDown={handleKeyPress} />
            </div>
          )}
          <Button name='SEND' className='send' textColor='#ffffff' backgroundColor='#8a2be2' borderColor='#725AC1' boxShadowColor='#725AC1' hoverTextColor='#725AC1' hoverBoxShadowColor='#ffffff'  />
        </form>
        {!isCaptchaCorrect && (
          <p className='cv__contact-form_sent'>Captcha incorrect</p>
        )}
        {isCaptchaCorrect && (
          <p className='cv__contact-form_sent'>{emailSent}</p>
        )}
      </div>
    </div>
)};

export default Contact;
