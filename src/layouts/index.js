import React from 'react'

import Nav from '../components/Nav/Nav';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <Nav />
      )
    } else {
      header = (
        <Nav />
      )
    }
    return (
      <div>
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
