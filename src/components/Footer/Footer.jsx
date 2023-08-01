import React from "react";
import './footer.css'

function Footer() {
  return (
    <footer id="footer" className="footer-1  mx-auto ">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">To-Do App<span></span></h5>
                <p> Your Daily Routine
</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Quick Links<span></span></h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content"><a href="#.">#</a></div>
                  </li>
                  <li>
                    <div className="thumb-content"><a href="#.">#</a></div>
                  </li>
                  <li>
                    <div className="thumb-content"><a href="#.">#</a></div>
                  </li>
                
                </ul>
              </div>
            </div>

       
        

            </div>
            </div>
            </div>
            
            <div className="footer-copyright">
            <div className="container">
            <div className="row">
            <div className="col-md-12 text-center">
            <p>Copyright To-Do-App © 2023. All rights reserved.</p>
            </div>
            </div>
            </div>
            </div>
        </footer>

    )
}

export default Footer;