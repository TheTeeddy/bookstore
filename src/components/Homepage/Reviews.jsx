import React from 'react'

import "../../css/reviews.min.css"
import star from "../../assets/svg/star.svg"

const Reviews = () => {
  return (
    <div className="container reviews">
        <div className="row">
          <div className="col-8 reviews-header d-flex">
            <div className="display-6 fw-bold me-3">Voices from Our Community</div>
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2c2c2c"><path d="m363-390 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
            </div>
          </div>
          <div className="col-12 reviews-text  mt-4">
            Read what our customers have to say about us
          </div>
          <div className="col-12 reviews-layout d-flex mt-3 ">
            <div className="col-5 customer-review">
              <div className="col-12 customer-review-stars ">
                <img src={star} alt="star-review"/>
                <img src={star} alt="star-review"/>
                <img src={star} alt="star-review"/>
                <img src={star} alt="star-review"/>
                <img src={star} alt="star-review"/>
              </div>
              <div className="col-12 customer-review-text mt-4">
                Our experience with BookStore has been amazing. The quality of their books is exceptional.
              </div>
              <div className="col-12 customer-review-author  d-flex mt-4">
                <div className="avatar-img">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar-img" className="w-100"/>
                </div>
                <div className="author-info d-flex flex-column justify-content-evenly ms-4">
                  <div className="col-12 author-name fw-bold">John Doe</div>
                  <div className="col-12 author-about fw-light">Book Reviewer, Bookworms Inc.</div>
                </div>
              </div>
            </div>
            <div className="col-2 reviews-separator position-relative">
              <div className="line-separator position-absolute"></div>
            </div>
            <div className="col-5 customer-review">
                <div className="col-12 customer-review-stars ">
                  <img src={star} alt="star-review"/>
                  <img src={star} alt="star-review"/>
                  <img src={star} alt="star-review"/>
                  <img src={star} alt="star-review"/>
                  <img src={star} alt="star-review"/>
                </div>
                <div className="col-12 customer-review-text  mt-4">
                  Our experience with BookStore has been amazing. The quality of their books is exceptional.
                </div>
                <div className="col-12 customer-review-author d-flex mt-4">
                  <div className="avatar-img">
                    <img src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar-img" className="w-100"/>
                  </div>
                  <div className="author-info d-flex flex-column justify-content-evenly ms-4">
                    <div className="col-12 author-name fw-bold">Jane Smith</div>
                    <div className="col-12 author-about fw-light">Editor, best Reads Magazine.</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="row text-center mt-4">
          <div className="col reviews-btn">
            <button type="button" className="btn custom-btn fs-5 px-3">Leave a Review</button>
          </div>
        </div>
      </div>
  )
}

export default Reviews;
