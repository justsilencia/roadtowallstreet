import * as React from "react"

import cityImg from "../../images/city-street.png"

const AboutMe = () => {
  return (
    <>
      <div id="about" className="data-analysis bg-color-f8f8f8 ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="sass-data-content">
                <div className="data-section-title">
                  <span>About Me</span>
                  <h2>Ken Freeman</h2>
                  <p>
                    I grew up in a small town to a lower middle class family. My
                    parents divorced when I was 7 years old and every
                    disagreement was over money. This made me realize that I
                    needed to find a career where money would not be an issue.
                  </p>
                  <p>
                    I decided that I wanted to work on Wall Street in Investment
                    Banking. Even though I did not have an Ivy league education,
                    no pedigree, no network and no contacts, I made it onto Wall
                    Street and you can too!!! Let me show you how.
                  </p>
                  <p>
                    There is a set of very specific Knowledge, Skills and
                    Actions needed to get a job on Wall Street and this website
                    will demonstrate all that you need to secure a highly
                    coveted 6-figure+ job at some of the most well known
                    Financial Institutions in the World.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="consulting-section-title">
                <span>Qualifications</span>
                <h2>Certified Financial Accountant (CFA)</h2>
              </div>
              <div className="sass-data-content">
                <div className="data-list">
                  <ul>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                      data-aos-once="true"
                    >
                      <div className="icon">
                        <i className="flaticon-design"></i>
                      </div>
                      Accredited in Business Valuation (ABV)
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="400"
                      data-aos-once="true"
                    >
                      <div className="icon">
                        <i className="flaticon-app-store"></i>
                      </div>
                      Certified in Entity and Intangible Valuations (CEIV)
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="600"
                      data-aos-once="true"
                    >
                      <div className="icon">
                        <i className="flaticon-project"></i>
                      </div>
                      Certified Valuation Analyst (CVA)
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div
                className="data-img"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <img src={cityImg} alt="Image" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
