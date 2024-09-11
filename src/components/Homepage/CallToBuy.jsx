import React from 'react'

import "../../css/calltobuy.min.css"

const CallToBuy = () => {
  return (
    <div class="container cta-buy">
        <div class="row py-5">
          <div class="col">
            <div class="cta-header fw-bolder h1 mt-5">
              Discover Your Next Great Read
            </div>
            <div class="cta-text mt-3 fw-bold">
              Browse our extensive collection of books and find your next favorite.
            </div>
            <div class="cta-btn mt-5">
              <button type="button" class="btn custom-btn fs-5 px-5">Shop</button>
            </div>
          </div>
          <div class="col ">
            <div class="cta-img">
              <img src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="open-book" class="w-100 d-flex ms-auto"/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CallToBuy
