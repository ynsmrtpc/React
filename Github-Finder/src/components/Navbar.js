import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-purple'>
        <div className="d-block m-0 p-0'">
          <small className='m-0 p-0 text-light'>Github</small> 
          <small className='d-block m-0 p-0 text-light'>Finder</small>
        </div>

        <a href="/" className='d-flex justify-content-center align-items-center m-auto'>
           <img  width={'64px'} src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"/>
        </a>
      </nav> 
    )
  }
}

// Default Parametre tanımlamak için kullanılır
// Navbar.defaultProps = {
//     icon: "fab fa-github",
//     title: 'Github Finder'
// }

// Kullanımın zorunlu olduğunu belirtmek için kullanılır
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired
// }

export default Navbar