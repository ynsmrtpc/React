import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-purple'>
        <a href="/" className='navbar-brand'>
           <img width={'48px'} src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"/>
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