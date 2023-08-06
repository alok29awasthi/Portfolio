import React, { Component } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Contact from '../../container/Contact/Contact'

export class ContactPage extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Contact/>
        </div>
    )
  }
}

export default ContactPage