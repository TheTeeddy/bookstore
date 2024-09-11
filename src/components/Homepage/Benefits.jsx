import React from 'react'

import "../../css/benefits.min.css"
import Button from "../Button"

const Benefits = () => {
  return (
    <div className="container benefits">
        <div className="row gap-5">
          <div className="col d-flex flex-column justify-content-around">
            <div className="benefits-header fs-2">
              Shopping with Us
            </div>
            <div className="benefits-text">
              At BookStore, we offer a range of advantages to enhance your shopping experience. Enjoy exclusive discounts, membership benefits, and early acces to new releases
            </div>
            <div className="benefits-discount row  m-0 gap-4">
              <div className="col">
                <p>5% Off</p>
                <span>Become a member and receive an extra discount on selected books forever</span>
              </div>
              <div className="col">
                <p>15% Off</p>
                <span>Exclusive discounts on new releases for our loyal customers</span>
              </div>
            </div>
            <div className="row features-buttons mx-0">
              <div className="col">
                <Button name={"Learn More"} size={20}/>
                <Button name={"Sign up >"} isTransparent={true} size={20}/>
              </div>
            </div>
          </div>
          <div className="col">
            <img src="https://images.pexels.com/photos/3786748/pexels-photo-3786748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="member-photo" className=" rounded"/>
          </div>
        </div>
      </div>
  )
}

export default Benefits
