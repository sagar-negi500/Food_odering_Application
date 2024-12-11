import React from 'react'
import { useContext } from 'react'
import userContext from '../utils/userContext'
const About = () => {
  const {loggedinuser}=useContext(userContext)
  return (
    <div>
      this is about page
      <div>
        {loggedinuser}
      </div>
    </div>
  )
}

export default About
