import React, { Component } from 'react'
import { Link,BrowserRouter } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return(
      
      <div className="col-sm-12">
      <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
         <ul className="navbar-nav">
          <li className="nav-item">
             <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/readLater" className="nav-link">ReadLater</Link>
          </li>
          </ul>
      </nav>
      </div>
    
    )
  }
}

export default NavBar
