import React, { Component } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Resume from '../../container/Resume/Resume'

export class ResumePage extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Resume/>
        </div>
    )
  }
}

export default ResumePage