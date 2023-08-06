import React, { Component } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Experience from '../../container/Experience/Experience'

export class ExperiencePage extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Experience/>
        </div>
    )
  }
}

export default ExperiencePage