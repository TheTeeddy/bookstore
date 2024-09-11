import React from 'react'

import "../../css/calltoaction.min.css"
import Button from "../Button"

const CallToAction = () => {
  return (
    <div className="container subscribe py-4">
        <div className="row">
          <div className="col-12 subscribe-header w-75 display-5 fw-bold">
            Stay Updated with Exclusive Offers
          </div>
          <div className="col-12 subscribe-text mt-4">
            Sign up for our newsletter to receive updates and special offers
          </div>
          <div className="col-12 subscribe-btns mt-5 d-flex gap-4">
            <Button name={"Subscribe"} size={22}/>
            <Button name={"Learn More"} size={22} />
          </div>
        </div>
       </div>
  )
}

export default CallToAction
