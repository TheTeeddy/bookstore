import React from 'react'

import Button from "../Button"

import "../../css/features.min.css"

const Features = () => {


  return (
    <div className="container features py-4 px-0">
    <div className="row mx-auto">
      <div className="col text-center">
        <div className="fw-bold display-5 w-50 mx-auto">
          Find Your Next Favorite Book Online
        </div>
        <p className=" h5 fw-normal mt-2 features-paragraph">
          At BookStore, we offer a wide variety of genres to suit every reader’s taste. With our easy returns and fast delivery, you can enjoy the convenience of shopping for books online.
        </p>
      </div>
    </div>
    <div className="row text-center features-card gap-3">
      <div className="col">
        <div className="card mt-4" >
          <img src="https://images.unsplash.com/photo-1680449786212-de3b835dc467?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Browse Our Extensive Book Collection</h5>
            <p className="card-text fw-light">Explore our vast selection of books and discover new titles across various genres</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mt-4" >
          <img src="https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Enjoy Hassle-Free Shopping Experience</h5>
            <p className="card-text fw-light">Explore our vast selection of books and discover new titles across various genres</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mt-4" >
          <img src="https://media.istockphoto.com/id/484726640/photo/concept-of-fast-faq.jpg?s=1024x1024&w=is&k=20&c=WYqA6D4uCP5d264_DPwiVU-44p_zgBq7BUz1_XADfuA=" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Get Your Books Delivered Fast</h5>
            <p className="card-text fw-light" >Explore our vast selection of books and discover new titles across various genres</p>
          </div>
        </div>
      </div>
    </div>

    <div className="row features-buttons mt-4 gap-1">
      <div className="col text-end">
        <Button name={"Learn More"} size={20}/>
      </div>
      <div className="col ">
        <Button name={"Sign up >"} isTransparent={true} size={20}/>
      </div>
    </div>
  </div>
  )
}

export default Features
