import * as React from "react"
import { Link } from "gatsby"

import bannerMainImg from "../../images/banner/banner.png"
import bannerBGImg from "../../images/banner/banner-bg-3.png"
import imgDollar from "../../images/chart-dollars.webp"

const MainBanner = () => {
  return (
    <>
      <div
        id="home"
        className="consulting-banner-area"
        style={{ backgroundImage: `url(${bannerBGImg})` }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="consulting-banner-content">
                <span>
                  Build a Career in Finance on Wall Street |{" "}
                  <strong>Start Today!</strong>
                </span>

                <h1>
                  Getting a Job on Wall Street Will Earn You LOTS of Money
                </h1>

                <p>
                  The Road to Wall Street teaches people how to get 6-figure+
                  jobs on Wall Street without a fancy Ivy League Education,
                  contacts, a pedigree or any prior knowledge of Finance.
                </p>

                <p>
                  I will teach you the Knowledge, Skills & Actions to get a
                  Front Office Finance Job on Wall Street
                </p>
                <Link
                  to="#pricing"
                  className="consulting-default-btn btn mr-20"
                >
                  Get Started <i className="flaticon-right-arrow-3"></i>
                </Link>

                {/* <Link to="#" className="join-us-btn">
                  <i className="flaticon-paper-plane"></i> Join Us On Telegram
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="consulting-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <img src={bannerMainImg} alt="Image" />

                <div className="careear">
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-money-management"></i>
                    </div>
                    <p>
                      Expand Your Career Opportunities with Our Financial
                      Coaching
                    </p>
                  </div>
                </div>

                {/* Animated Images */}
                <img src={imgDollar} className="banner-shape-1" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
