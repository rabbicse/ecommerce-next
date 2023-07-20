import React from "react";

const Footer = () => {
  return (
    <>
      <section className="subs-sec">
        <div className="container">
          <div className="sub-outr">
            <div className="row">
              <div className="col-md-6">
                <div className="sub-lft">
                  <p>Join The Community</p>
                  <div className="social-innr">
                    <ul></ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sub-rgt">
                  <form
                    method="POST"
                    action="https://www.aipaze.com/subscribers"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="rePNGZaUQsGfzZAkbSyf8LNQsNfNTWRDvYO9fSfX"
                    />{" "}
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="ENTER EMAIL ADDRESS"
                        className="form-control"
                      />
                      <div className="submit-inn">
                        <input
                          type="submit"
                          value="Subscribe"
                          className="subs-btn"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-sec">
        <div className="container">
          <div className="footer-outr">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="ftr-innr">
                  <h5>SUPPORT</h5>
                  <ul>
                    <li>
                      <a href="#"> Contact Us </a>
                    </li>
                    <li>
                      <a href="#"> Order FAQ </a>
                    </li>
                    <li>
                      <a href="#"> Store Locatore </a>
                    </li>
                    <li>
                      <a href="#">Buying Guide </a>
                    </li>
                    <li>
                      <a href="#"> Frame Size </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="ftr-innr">
                  <h5>company-info</h5>
                  <ul>
                    <li>
                      <a href="/about"> About Us </a>
                    </li>
                    <li>
                      <a href="#"> We are Hiring</a>
                    </li>
                    <li>
                      <a href="#">Refer &amp; Earn </a>
                    </li>
                    <li>
                      <a href="#">Site Map </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-3">
                <div className="ftr-innr">
                  <h5>company-info</h5>
                  <ul>
                    <li>
                      <a href="#"> T&amp;C </a>
                    </li>
                    <li>
                      <a href="#"> Disclaimer</a>
                    </li>
                    <li>
                      <a href="#"> Privacy </a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Aipaze Coupons</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy text-center">
          <div className="container">
            <p>© Copyright 2022 Status.. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
