import React from 'react'

import "../css/sidebar.min.css"

const Sidebar = () => {
  return (
    <div className="small-devices-bar position-relative">
          <div className="small-navbar d-flex p-3">
          <div className="logo position-absolute">Book Store</div>
          <div className="burger-icon">
              <a  data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#2c2c2c"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
              </a>
            </div>
            <button type="button" className="btn ms-auto custom-btn">Sign In</button>
          </div>
          
            
          <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body text-center">
              <div className="cart my-3">Cart</div>
                <div className="search">Search</div>
                <div className="discover mt-2 mb-2">Discover Books</div>
                <div className="best-sellers my-3">Best Sellers</div>
                <div className="categories my-3">Categories</div>
            </div>
          </div>
            
        
        </div>
  )
}

export default Sidebar
