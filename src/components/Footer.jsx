import React from 'react'

import "../css/footer.min.css"
import yt from "../assets/svg/youtube-icon.svg"
import instagram from "../assets/svg/instagram-icon.svg"
import fb from "../assets/svg/facebook-icon.svg"
import linkedin from "../assets/svg/linkedin-icon.svg"
import x from "../assets/svg/x-icon.svg"


const Footer = () => {
  return (

      <div class="container footer pb-5">
        <div class="row gap-5">
          <div class="col footer-sitemap d-flex"> 
              <div class="col fw-bolder h5">BookStore</div>
              <div class="col">
                <div class="site-header">Navigation</div>
                <div class="site-map">  
                  <div>
                    <a href="#">Shop</a>
                  </div>
                  <div>
                    <a href="#"> Contact Us</a>
                  </div>
                  <div>
                    <a href="#">Shipping </a>
                  </div>
                  <div>
                    <a href="#"> Returns</a>
                  </div>
                </div>
              </div>
              <div class="col ">
                <div class="help-header">Help Center</div>
                <div class="help-map">  
                  <div>
                    <a href="#">Account</a>
                  </div>
                  <div>
                    <a href="#">Wishlist </a>
                  </div>
                  <div>
                    <a href="#">My Orders</a>
                  </div>
                  <div>
                    <a href="#">Payment Options</a>
                  </div>
                </div>
                  
              </div>
              <div class="col ">
                <div class="info-header">Info</div>
                  <div class="info-map">
                    <div>
                      <a href="#">About Us</a>
                    </div>
                    <div>
                      <a href="#">Become Member</a>
                    </div>
                    <div>
                      <a href="#">Popular Products</a>
                    </div>
                    <div>
                      <a href="#">Gift Card</a>
                    </div>
                  </div>
              </div>
          </div>
          <div class="col-4  footer-cta">
            <div class="footer-cta-header">Subscribe</div>
            <div class="footer-cta-text fw-light">
              Join our community to receive updates on new releases and exclusive offers
            </div>
            <div class="footer-cta-input my-4">
              <div class="row m-0 gap-3">
                <div class="col-6 ">
                  <input class="w-100 h-100 p-2 input-cta" type="text" placeholder="Enter email adress"/>
                </div>
                <div class="col  text-center my-auto">
                  <button  type="button" class="btn custom-btn fs-6 px-4">Subscribe</button>
                </div>
              </div>
            </div>

    <div class="footer-cta-agreement fw-light">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from us
            </div>
          </div>
        </div>
        <div class="row">
          <div class="footer-underline my-5"></div>
            <div class="col-8">
            <div class="underline-map fw-light">
              <div class="underline-copyright">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2c2c2c"><path d="M408-312h144q20.4 0 34.2-13.8Q600-339.6 600-360v-72h-72v48h-96v-192h96v48h72v-72q0-20.4-13.8-34.2Q572.4-648 552-648H408q-20.4 0-34.2 13.8Q360-620.4 360-600v240q0 20.4 13.8 34.2Q387.6-312 408-312Zm72.28 216Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>
                2024 BookStore. All rights reserverd
            </div>
              <div class="privacy">
                <a href="#">Privacy Policy</a>
              </div>
              <div class="terms">
                <a href="#">Terms and Conditions</a>
              </div>
              <div class="cookies">
                <a href="#">Cookie Policy</a>
              </div>
            </div>
            </div>
          <div class="col text-end d-flex flex-row-reverse gap-3">
            <a href="#">
              <img src={yt} alt="youtube-icon"/>
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin-icon"/>
            </a>
            <a href="#">
              <img src={x} alt="x-icon"/>
            </a>
            <a href="#">
              <img src={instagram} alt="instagram-icon"/>
            </a>
            <a href="#">
              <img src={fb} alt="facebook-icon"/>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Footer
