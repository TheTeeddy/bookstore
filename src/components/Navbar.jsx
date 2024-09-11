import React from 'react'
import Button from "./Button"

import "../css/sidebar.min.css"

const Navbar = ({small}) => {
  return (
  <div className="nav-bar px-0 py-2 fixed-top">
      <div className="row">
        <div className="col-6  site-map d-flex align-items-center" >
          <div className="home mx-3">
            <a href="#" className="nav-link">
            Home
            </a>
          </div>
          <div className="best-sellers mx-2">
            <a href="#" className="nav-link">
            Best Sellers
            </a>
          </div>
          <div className="categories mx-3">
            <a href="#" className="nav-link">
            Categories
            </a>
          </div>
        </div>
       
        <div className="logo">
          Book Store
        </div>
        <div className="col-6 site-actions d-flex justify-content-end align-items-center">
          <div className="search mx-3">
            <input type="text"  placeholder="Search for a book..."/>
          </div>
          <div className="cart mx-2 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="currentcolor"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
          </div>
          <div className="authorization mx-3">
            <Button name={"Sign In"} className="custom-btn"/>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar
