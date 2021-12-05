import React from 'react'
import './footer.css'

export default function Footer() {
  return (

    <div>
      <div className="newsletter bg-warning">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
						<div className="newsletter_title_container">
							<div className="newsletter_icon"><img src="assets/img/send.png" alt=""/></div>
							<div className="newsletter_title">Sign up for Newsletter</div>
							<div className="newsletter_text">
								<p>...and receive %20 coupon for first shopping.</p>
							</div>
						</div>
						<div className="newsletter_content clearfix ">
							<form action="#" className="newsletter_form">
								<input type="email" className="newsletter_input" required="required" placeholder="Enter your email address"/>
								<button className="newsletter_button btn-my">Subscribe</button>
							</form>
							<div className="newsletter_unsubscribe_link"><a href="#">unsubscribe</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
      <footer id="footer">
        <div className="footer-top text-warning">
          <div className="container">
            <div className="row">

              {/* <div className="col-md-12 footer-info">
                <h3>TutShow</h3>
                <p className="text-center">TutShow is the best educational website all over the world based on multiple-choice questions. We are researching new things which we can include in our study material. We always give 100% of our work.</p>
              </div> */}

              <div className="col-md-3 footer-links">
                <h4>Popular Links</h4>
                <ul>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">Contact Us</a></li>
                </ul>
              </div>

              <div className="col-md-3 footer-links">
                <h4>Support Links</h4>
                <ul>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
                  <li><i className="ion-ios-arrow-right"></i> <a href="#">Solutions</a></li>
                </ul>
              </div>

              <div className="col-md-6 footer-contact">
                {/* <h4>Contact Us</h4> */}
                <div style={{width: 180}}>
                  <img src="https://www.indiantradebird.com/Content/L2022/assets/images/icon/brand-logo/7.png" alt="Indiantradebird" />
                </div>
                <p>
                Indian TradeBird is India's upcoming online platform that helps Manufacturers, Suppliers & Exporters to exchange with each other at a typical, dependable and straightforward stage. Get quality industrial products and trade leads in India, here. <br/>
                  <strong>Phone:</strong> +91 1234 5678 90<br/>
                  <strong>Email:</strong> info@tutshow.com<br/>
                </p>

                <div className="social-links">
                  <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                  <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                  <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                  <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>Company</strong>. All Rights Reserved
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
    </div>
  )
}
