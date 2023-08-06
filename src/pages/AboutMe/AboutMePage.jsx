import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import AboutMe from '../../container/AboutMe/AboutMe'

export class AboutMePage extends React.Component {
  render() {
    return (
        <div>
            <Navbar/>
            <AboutMe/>
        </div>
    )
  }
}

export default AboutMePage