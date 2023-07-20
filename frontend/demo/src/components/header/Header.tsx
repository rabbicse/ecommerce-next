import React from "react";

export const Header = () => {
  return (
      <section className="banner-sec">
        <div className="container">
          <div className="ban-slider slick-initialized slick-slider slick-dotted">
            <button
              className="slick-prev slick-arrow"
              aria-label="Previous"
              type="button"
            >
              Previous
            </button>
            <div
              className="slick-list draggable"
              style={{ padding: `0px`, height: `420px` }}
            >
              <div
                className="slick-track"
                style={{
                  opacity: `1`,
                  width: `23328px`,
                  transform: `translate3d(-3888px, 0px, 0px)`,
                }}
              >
                <div
                  className="ban-slide slick-slide slick-cloned"
                  data-slick-index="-2"
                  id=""
                  aria-hidden="true"
                  style={{ width: `1296px` }}
                >
                  <div className="ban-wrap">
                    <div className="banner-img">
                      <a href="">
                        <img
                          src="https://www.aipaze.com/public/uploads/all/M2Xnadz5RPIlvWsFXDDLhksCk5xogSTMYAA7Feyg.jpg"
                          alt="Aipaze promo"
                        />
                      </a>
                    </div>
                    <div className="inner-wrap hdr-clr text-center"></div>
                  </div>
                </div>
                <div
                  className="ban-slide slick-slide slick-cloned"
                  data-slick-index="-1"
                  id=""
                  aria-hidden="true"
                  style={{ width: `1296px` }}
                >
                  <div className="ban-wrap">
                    <div className="banner-img">
                      <a href="">
                        <img
                          src="https://www.aipaze.com/public/uploads/all/H9wm8ueG6Cv2CN89qYrEFl3uteuz4sBustw6JezR.jpg"
                          alt="Aipaze promo"
                        />
                      </a>
                    </div>
                    <div className="inner-wrap hdr-clr text-center">
                      <p>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="ban-slide slick-slide"
                  data-slick-index="0"
                  aria-hidden="true"
                  style={{ width: `1296px` }}
                  role="tabpanel"
                  id="slick-slide00"
                  aria-describedby="slick-slide-control00"
                >
                  <div className="ban-wrap">
                    <div className="banner-img">
                      <a href="">
                        <img
                          src="https://www.aipaze.com/public/uploads/all/Yhy9k9EPSQ5oyecZ7PnbgO8T7It3JpQmC3kupX9k.jpg"
                          alt="Aipaze promo"
                        />
                      </a>
                    </div>
                    <div className="inner-wrap hdr-clr text-center"></div>
                  </div>
                </div>
                <div
                  className="ban-slide slick-slide slick-current slick-active slick-center"
                  data-slick-index="1"
                  aria-hidden="false"
                  style={{ width: `1296px` }}
                  role="tabpanel"
                  id="slick-slide01"
                  aria-describedby="slick-slide-control01"
                >
                  <div className="ban-wrap">
                    <div className="banner-img">
                      <a href="https://www.aipaze.com/search?keyword=&amp;category=6">
                        <img
                          src="https://www.aipaze.com/public/uploads/all/3USDbNKYU8RfSCnpaRAV2mmYf9WgMy5XAkivE3gP.png"
                          alt="Aipaze promo"
                        />
                      </a>
                    </div>
                    <div className="inner-wrap hdr-clr text-center">
                      <p>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="ban-slide slick-slide"
                  data-slick-index="2"
                  aria-hidden="true"
                  style={{ width: `1296px` }}
                  role="tabpanel"
                  id="slick-slide02"
                  aria-describedby="slick-slide-control02"
                >
                  <div className="ban-wrap">
                    <div className="banner-img">
                      <a href="https://www.aipaze.com/search?keyword=&amp;category=1">
                        <img
                          src="https://www.aipaze.com/public/uploads/all/dK4SlRi7x6U2lbRW6N5QxfTMrWsXevQDIZSD8I75.png"
                          alt="Aipaze promo"
                        />
                      </a>
                    </div>
                    <div className="inner-wrap hdr-clr text-center"></div>
                  </div>
                </div>
                <div
                  className="ban-slide slick-slide"
                  data-slick-index="3"
                  aria-hidden="true"
                  style={{ width: `1296px` }}
                  role="tabpanel"
                  id="slick-slide03"
                  aria-describedby="slick-slide-control03"
                >
                  <div className="ban-wrap">
                    <div className="banner-img">
                      <a href="">
                        <img
                          src="https://www.aipaze.com/public/uploads/all/M2Xnadz5RPIlvWsFXDDLhksCk5xogSTMYAA7Feyg.jpg"
                          alt="Aipaze promo"
                        />
                      </a>
                    </div>
                    <div className="inner-wrap hdr-clr text-center"></div>
                  </div>
                </div>
                <div
                  className="ban-slide slick-slide"
                  data-slick-index="7"
                  aria-hidden="true"
                  style={{ width: `1296px` }}
                  role="tabpanel"
                  id="slick-slide07"
                  aria-describedby="slick-slide-control07"
                >
                  <div className="ban-wrap">
                    <div className="banner-img">
                      <a href="">
                        <img
                          src="https://www.aipaze.com/public/uploads/all/H9wm8ueG6Cv2CN89qYrEFl3uteuz4sBustw6JezR.jpg"
                          alt="Aipaze promo"
                        />
                      </a>
                    </div>
                    <div className="inner-wrap hdr-clr text-center">
                      <p>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="slick-next slick-arrow"
              aria-label="Next"
              type="button"
            >
              Next
            </button>
            <ul className="slick-dots" role="tablist">
              <li className="" role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control00"
                  aria-controls="slick-slide00"
                  aria-label="1 of 8"
                >
                  1
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
  );
};
