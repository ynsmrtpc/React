import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-purple'>
          <Link to="/" className='navbar-brand'>
            <img  width={'64px'} src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span><i style={{fontSize:'23px'}} className="fa fa-bars"></i></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="about" className='nav-link'>About</Link>
            </li>
          </ul>
        </div>
      </nav> 
    )
  }
}

export default Navbar