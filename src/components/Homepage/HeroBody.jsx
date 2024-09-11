import React from 'react'
import Button from '../Button'

import "../../css/herobody.min.css"

const HeroBody = () => {
  return (
    <div className="container  hero-body">
      <div className="row m-0">
        <div className="col my-5 d-flex flex-column justify-content-evenly align-items-start">
            <div className="hero-header ">
              Discover Your Next Adventure in Books
            </div>
            <div className="hero-paragraph mt-5 mb-5">
            Welcome to Bookstore, your online destination for the best selection of books. Whether you’re a fan of fiction, non-fiction, or self-help, we have something for everyone.
            </div>
            <Button name={"Explore"} />
        </div>
        <div className="col">
            <div className="hero-img my-5">
              <img src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero-book" 
              className="w-100"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBody
