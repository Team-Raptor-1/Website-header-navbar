import React, { Component } from 'react';
import "../styles/Navbar.css";
import image from './example6.png'
class Navbar extends Component {

  state = { clicked: false };
  handleclick = ()=>{
    this.setState({clicked: !this.state.clicked});
  }

  render() {

    return (
      <>
        <nav>
        <img src={image} alt="alternative" className='logo'/>
          <div>
            <ul id='navbar' className={this.state.clicked  ? "active": ''}>
              <li ><a href="/">Blogs</a></li>
              <li ><a href="/">Stories</a></li>
              <li ><a href="/">Contact</a></li>
              <li><a href="/"><button id='btn'>User</button></a></li>
              
            </ul>
          </div>

          <div id="mobile" onClick={this.handleclick}>
            <i id='bar' className={this.state.clicked ? "bx bx-x" : "bx bx-menu"}></i>
            {/* <i class='bx bx-x'></i> */}
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar

