import React from 'react'

import "../../css/herobooks.min.css";
import Button from "../Button";


const HeroBooks = () => {
  return (
    <div id="carouselIndicators" className="carousel slide mx-auto container">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1598301257942-e6bde1d2149b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="hero-book-example"/>
            <div className="carousel-caption d-none d-md-block">
                <h2 className="w-75">Discover the Bestsellers and New arrivals</h2>
                <p className="mt-5 w-50">It's time to choose a book that will change your mindset and fantasy</p>
                <Button name={"Explore"} className="mt-4"/>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="hero-book-example 2"/>
            <div className="carousel-caption d-none d-md-block" >
                <h2 className="w-75">Discover the Bestsellers and New arrivals</h2>
                <p className="mt-5 w-50" >It's time to choose a book that will change your mindset and fantasy</p>
                <Button name={"Explore"} className="mt-4"/>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="hero-book-example 3"/>
            <div className="carousel-caption d-none d-md-block">
                <h2 className="w-75">Discover the Bestsellers and New arrivals</h2>
                <p className="mt-5 w-50">It's time to choose a book that will change your mindset and fantasy</p>
                <Button name={"Explore"} className="mt-4"/>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default HeroBooks
