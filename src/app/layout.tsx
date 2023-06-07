// import "./styles/bootstrap-rtl.min.css";
import "./styles/vendors.css";
// import "./globals.css";
import "./styles/aiz-core.css";
import "./styles/custom-style.css";

import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Navbar } from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="side-menu-closed">
        <div className="aiz-main-wrapper d-flex flex-column">
          {/* <Navbar /> */}

          <header className="main-head">
            <div className="hdr-top">
              <div className="custom-container">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <nav className="navbar">
                      <button
                        className="navbar-toggler navbar-toggler-main"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="stick"></span>
                      </button>
                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <button
                          className="navbar-toggler navbar-toggler-main"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="stick"></span>
                        </button>
                        <ul className="navbar-nav ms-auto">
                          <li>
                            <a href="https://www.aipaze.com">Home</a>
                          </li>
                          <li>
                            <a href="https://www.aipaze.com/categories">
                              Categories
                            </a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="/search?keyword=&category=6">PPE Kits</a>
                            <ul className="sub-menu">
                              <li className="">
                                <a href="/search?keyword=&category=23">
                                  Blue Reflective Jacket
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=24">
                                  Orange Reflective Jacket
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=27">
                                  Safety Helment
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=52">Shoe</a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=54">
                                  Hand Gloves
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="/search?keyword=&category=4">Fashion</a>
                            <ul className="sub-menu">
                              <li className="">
                                <a href="/search?keyword=&category=44">
                                  Men&#039;s wear
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=3">
                              Electronics
                            </a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="/search?keyword=&category=8">Foods</a>
                            <ul className="sub-menu">
                              <li className="">
                                <a href="/search?keyword=&category=25">
                                  Egg Roll
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=26">
                                  Egg Roll Chicken Mix
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=32">
                                  Chicken Lollipop
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=36">
                                  Sweets
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="/search?keyword=&category=35">
                              Fish, Chicken
                            </a>
                            <ul className="sub-menu">
                              <li className="">
                                <a href="/search?keyword=&category=45">
                                  Chicken
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=46">
                                  Mutton
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=48">Fish</a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=49">Crab</a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=50">
                                  Sea Crab
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="/search?keyword=&category=2">Vegetables</a>
                            <ul className="sub-menu">
                              <li className="">
                                <a href="/search?keyword=&category=20">
                                  new cate
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=37">
                                  Fruits
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=38">
                                  Vegetables
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="/search?keyword=&category=1">Grocery</a>
                            <ul className="sub-menu">
                              <li className="">
                                <a href="/search?keyword=&category=14">
                                  Staples
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=21">
                                  Mustard Oil
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=22">
                                  Refined Oil
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=28">
                                  Flour (Maida)
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=30">Spice</a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=70">
                                  ketchup
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=71">Dal</a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=74">Vim</a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=75">
                                  Parle-G
                                </a>
                              </li>

                              <li className="">
                                <a href="/search?keyword=&category=76">
                                  Dark Fantasy
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=9">
                              Ai Beverages
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=12">
                              Dairy Products Coming Soon
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=13">
                              Snacks &amp; Branded Foods
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=15">
                              Personal care
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=17">
                              Ready Made Foods
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=29">
                              Aashirvaad Select Sharbati Whole Wheat Atta 5 kg
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=33">Sweets</a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=34">Cakes</a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=40">Plants</a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=41">
                              Flowers (Organic Flower)
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=42">
                              Raksha Bandhan
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=43">
                              Vegetable Seed
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=47">Eggs</a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=53">
                              Safety Goggles
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=55">
                              Dry Fruits &amp; Seeds
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=58">All</a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=68">Liquid</a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=69">HARDWARE</a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=72">Detergent</a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=73">tide surf</a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=77">
                              Industrial
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=78">
                              Electrical
                            </a>
                          </li>
                          <li className="">
                            <a href="/search?keyword=&category=79">
                              Mechanical
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a className="logo" href="https://www.aipaze.com">
                        <img
                          src="https://www.aipaze.com/public/uploads/all/cgulrBA2ovfGpR6pPFcaUthWvcUyAe83K5oGCpgt.png"
                          alt="Aipaze"
                        />
                      </a>
                    </nav>
                  </div>

                  <div className="col-md-10">
                    <div className="hdr-top-rgt">
                      <div className="hdr-mddle">
                        <div className="choose-adrs">
                          <div className="choose-rgt">
                            <p>
                              <a href="https://www.aipaze.com/users/registration">
                                Vendor Register
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="hdr-form">
                          <form
                            action="https://www.aipaze.com/search"
                            method="GET"
                            className="stop-propagation"
                          >
                            <div className="d-flex position-relative align-items-center">
                              <div
                                className="d-lg-none"
                                data-toggle="className-toggle"
                                data-target=".front-header-search"
                              >
                                <button className="btn px-2" type="button">
                                  <i className="la la-2x la-long-arrow-left"></i>
                                </button>
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="search"
                                  name="keyword"
                                  placeholder="I am shopping for..."
                                  autoComplete="off"
                                />
                                <div className="all-selct">
                                  <select
                                    className="select-control"
                                    name="category"
                                    id="search_category"
                                  >
                                    <option value="0">All</option>
                                    <option value="29">
                                      Aashirvaad Select Sharbati Whole Wheat
                                      Atta 5 kg
                                    </option>
                                    <option value="9">Ai Beverages</option>
                                    <option value="58">All</option>
                                    <option value="34">Cakes</option>
                                    <option value="12">
                                      Dairy Products Coming Soon
                                    </option>
                                    <option value="72">Detergent</option>
                                    <option value="55">
                                      Dry Fruits &amp; Seeds
                                    </option>
                                    <option value="47">Eggs</option>
                                    <option value="78">Electrical</option>
                                    <option value="3">Electronics</option>
                                    <option value="4">Fashion</option>
                                    <option value="35">Fish, Chicken</option>
                                    <option value="41">
                                      Flowers (Organic Flower)
                                    </option>
                                    <option value="8">Foods</option>
                                    <option value="1">Grocery</option>
                                    <option value="69">HARDWARE</option>
                                    <option value="77">Industrial</option>
                                    <option value="68">Liquid</option>
                                    <option value="79">Mechanical</option>
                                    <option value="15">Personal care</option>
                                    <option value="40">Plants</option>
                                    <option value="6">PPE Kits</option>
                                    <option value="42">Raksha Bandhan</option>
                                    <option value="17">Ready Made Foods</option>
                                    <option value="53">Safety Goggles</option>
                                    <option value="13">
                                      Snacks &amp; Branded Foods
                                    </option>
                                    <option value="33">Sweets</option>
                                    <option value="73">tide surf</option>
                                    <option value="43">Vegetable Seed</option>
                                    <option value="2">Vegetables</option>
                                  </select>
                                </div>
                                <div className="srch-icon">
                                  <button
                                    className="border-0 bg-white"
                                    type="submit"
                                  >
                                    <img
                                      src="https://www.aipaze.com/public/theme/assets/images/srch.png"
                                      alt=""
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                          <div
                            className="typed-search-box stop-propagation document-click-d-none d-none bg-white rounded shadow-lg position-absolute left-0 top-100 w-100"
                            style={{ minHeight: `200px` }}
                          >
                            <div className="search-preloader absolute-top-center">
                              <div className="dot-loader">
                                <div></div>
                                <div></div>
                                <div></div>
                              </div>
                            </div>
                            <div className="search-nothing d-none p-3 text-center fs-16"></div>
                            <div
                              id="search-content"
                              className="text-left"
                            ></div>
                          </div>
                        </div>
                        <div className="country dropdown">
                          <button
                            type="button"
                            className="dropdown-btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <img
                              src="https://www.aipaze.com/public/theme/assets/images/india.png"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div className="hdr-rgt">
                        <ul>
                          <li>
                            <em>
                              <a href="https://www.aipaze.com/users/login">
                                Hello, Sign in
                              </a>
                            </em>
                            <p>
                              <a href="https://www.aipaze.com/users/login">
                                My Account &amp; Lists
                              </a>
                            </p>
                          </li>

                          <li>
                            <em>
                              <a href="https://www.aipaze.com/returnpolicy">
                                Return
                              </a>
                            </em>
                            <p>
                              <a href="https://www.aipaze.com/purchase_history">
                                &amp; Orders
                              </a>
                            </p>
                          </li>

                          <li>
                            <div
                              className="nav-cart-box dropdown h-100"
                              id="cart_items"
                            >
                              <a
                                href="javascript:void(0)"
                                className="d-flex align-items-center text-reset h-100"
                                data-toggle="dropdown"
                                data-display="static"
                              >
                                <img
                                  src="https://www.aipaze.com/public/theme/assets/images/cart.png"
                                  alt="cart"
                                />
                                <span className="flex-grow-1 ml-1">
                                  <span className="badge badge-primary badge-inline badge-pill cart-count">
                                    0
                                  </span>
                                  <span className="nav-box-text d-none d-xl-block opacity-70">
                                    Cart
                                  </span>
                                </span>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 stop-propagation">
                                <div className="text-center p-3">
                                  <i className="las la-frown la-3x opacity-60 mb-3"></i>
                                  <h3 className="h6 fw-700">
                                    Your Cart is empty
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="navbar-toggler collapsed"
              id="navoverlay"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>

            <div className="hdr-btm">
              <div className="container">
                <ul>
                  <li>
                    <a href="/search?keyword=&amp;category=1">
                      <figure>
                        <img
                          src=" https://www.aipaze.com/public/uploads/all/gLl6QUTTUT7lcToerwFLP5vdJ9HHZnVloJI3gZwc.png "
                          alt="Grocery"
                        />
                      </figure>
                      <h6>Grocery</h6>
                    </a>
                  </li>
                  <li>
                    <a href="/search?keyword=&amp;category=2">
                      <figure>
                        <img
                          src=" https://www.aipaze.com/public/uploads/all/LcgmRco4qiw9pckNxd7qTCM9e2Yq4aGYpVx1qw4R.png "
                          alt="Vegetables"
                        />
                      </figure>
                      <h6>Vegetables</h6>
                    </a>
                  </li>
                  <li>
                    <a href="/search?keyword=&amp;category=3">
                      <figure>
                        <img
                          src=" https://www.aipaze.com/public/uploads/all/Ggd98kPJndi90wCHrvYPKR0DcbxMGafB0p7YB8PO.png "
                          alt="Electronics"
                        />
                      </figure>
                      <h6>Electronics</h6>
                    </a>
                  </li>
                  <li>
                    <a href="/search?keyword=&amp;category=4">
                      <figure>
                        <img
                          src=" https://www.aipaze.com/public/uploads/all/KOd51dCpdRWKOs8OdFT0Ni0dRuF4NLdV7U4HMUrM.png "
                          alt="Fashion"
                        />
                      </figure>
                      <h6>Fashion</h6>
                    </a>
                  </li>
                  <li>
                    <a href="/search?keyword=&amp;category=6">
                      <figure>
                        <img
                          src=" https://www.aipaze.com/public/uploads/all/wVOHaamYKFUNQ5GRjXIwc4bw6WueQE2hgoNeMwEf.png "
                          alt="PPE Kits"
                        />
                      </figure>
                      <h6>PPE Kits</h6>
                    </a>
                  </li>
                  <li>
                    <a href="/search?keyword=&amp;category=8">
                      <figure>
                        <img
                          src=" https://www.aipaze.com/public/uploads/all/X1mvVmBH3bPoD8Fb2lVCbmftztlIwTjEL0kVaOMQ.png "
                          alt="Foods"
                        />
                      </figure>
                      <h6>Foods</h6>
                    </a>
                  </li>
                  <li>
                    <a href="/search?keyword=&amp;category=15">
                      <figure>
                        <img
                          src=" https://www.aipaze.com/public/uploads/all/ptLKNFBk3FCCUJtCuVAwVtMCdmj0q7wztJqe20vD.png "
                          alt="Personal care"
                        />
                      </figure>
                      <h6>Personal care</h6>
                    </a>
                  </li>
                  <li>
                    <a href="/search?keyword=&amp;category=35">
                      <figure>
                        <img
                          src=" https://www.aipaze.com/public/uploads/all/DcTjVBq6p69pr5bx42bQ2p5MO8WkrJi5l2xmCp4L.png "
                          alt="Fish, Chicken"
                        />
                      </figure>
                      <h6>Fish, Chicken</h6>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          {/* <Header /> */}

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

          <section className="category-sec">
            <div className="container">
              <div className="cate-outr">
                <div className="deal-top u-line">
                  <h4>Shop by category</h4>
                </div>

                <div className="cate-btm">
                  <div className="row">
                    <div className="col-xl-2 col-lg-4 col-sm-6 cate-col">
                      <div className="cate-innr text-center">
                        <a href="https://www.aipaze.com/category/fruit--vegetables-vo2rt">
                          <figure>
                            <img
                              src=" https://www.aipaze.com/public/uploads/all/LcgmRco4qiw9pckNxd7qTCM9e2Yq4aGYpVx1qw4R.png "
                              alt="Vegetables"
                            />
                          </figure>
                          <h6>Vegetables</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <button type="button" className="btn btn-primary">Primary</button> */}

          {/* {children} */}
        </div>

        <section className="advertise-sec cmn-gap">
          <div className="container">
            <div className="ad-outr">
              <div className="row ad-row">
                <div className="col-md-6 ad-col">
                  <div className="ad-inr">
                    <a href="javascript:void(0)">
                      <figure>
                        <img
                          src="https://www.aipaze.com/public/uploads/all/5lE4g7WFyljzM0H1dnjZopppQVvGm6gld7qyITWI.png"
                          alt="Aipaze promo"
                        />
                      </figure>
                    </a>
                    <div className="discount disc2-red">
                      <em>25%</em>
                      <span>off</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ad-col">
                  <div className="ad-inr">
                    <a href="javascript:void(0)">
                      <figure>
                        <img
                          src="https://www.aipaze.com/public/uploads/all/Jl7oGQ5zz1sbFOmQloo79in6YtgIa9woKRfElh5D.png"
                          alt="Aipaze promo"
                        />
                      </figure>
                    </a>
                    <div className="discount disc2-orng">
                      <em>25%</em>
                      <span>off</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ad-col">
                  <div className="ad-inr">
                    <a href="javascript:void(0)">
                      <figure>
                        <img
                          src="https://www.aipaze.com/public/uploads/all/Q3hV7xqwHd4Tk1dUG0CFCVIl6pqn9B8ooP8MTI9a.png"
                          alt="Aipaze promo"
                        />
                      </figure>
                    </a>
                    <div className="discount disc2-orng">
                      <em>25%</em>
                      <span>off</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ad-col">
                  <div className="ad-inr">
                    <a href="javascript:void(0)">
                      <figure>
                        <img
                          src="https://www.aipaze.com/public/uploads/all/ddQxWkT24ruV8gZett8T1yK7dQlH7LtfVLKoMANG.png"
                          alt="Aipaze promo"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
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
      </body>
    </html>
  );
}
