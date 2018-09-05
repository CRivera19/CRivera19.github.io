import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
        marginLeft:'auto',
        marginRight:'auto'
      }}>
        <img
          src={profilePic}
          alt={`Christopher Rivera`}
          style={{
            marginRight: rhythm(2 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
          }}/>
        <p>
          Hello, My name is Christopher Rivera who lives in California and works in Ontario building useful things.{' '}
          <a href="https://twitter.com/Majinfood">
            You should follow me on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
