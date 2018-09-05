import React from 'react'
import '../Nav/nav.css'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../../utils/typography'

const li = {
  padding:'.5rem 1rem'
}

class Nav extends React.Component {
  render() {
    return (
      <div style={{
        width:'100%',
        paddingRight:'15px',
        paddingLeft:'15px',
        marginRight:'auto',
        marginLeft:'auto'
      }}
      >
        <nav style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
          alignItems:'center',
          marginTop:'15px'
        }}>
          <h1 style={{ marginTop:0 }}>Christopher Rivera</h1>
          <ul style={{
            listStyle:'none',
            display:'flex',
            marginBottom:'1rem',
            marginLeft:'auto'
          }}>
            <li style={li}><a href='/'>Home</a></li>
            <li style={li}><a href='/'>About</a></li>
            <li style={li}><a href='/'>Projects</a></li>
            <li style={li}><a href='/'>Contact</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
