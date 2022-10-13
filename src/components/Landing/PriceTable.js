import * as React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import shape7 from "../../images/shape/shape-7.png"

import { Link } from "gatsby"

const PriceTable = () => {
  return (
    <>
      <div id="pricing" className="pricing-area bg-color-f8f8f8 pt-100 pb-70">
        <div className="container">
          <div className="sass-section-title">
            <span>Price Table</span>
            <h2>No Hidden Charges - Choose Your Package</h2>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="tab">
                {/* <Tabs>
                  <TabList>
                    <Tab>Monthly</Tab>
                    <Tab>Yearly</Tab>
                  </TabList>

                  <TabPanel> */}
                <div className="row justify-content-center">
                  <div
                    className="col-lg-4 col-sm-6"
                    data-aos="zoom-in-down"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                    data-aos-once="true"
                  >
                    <div className="single-pricing-box">
                      <div className="pricing-content">
                        <h3>Knowledge Package</h3>
                        <h1>$97</h1>
                        <p>One Time Fee</p>
                        <p>
                          <strong>Webinars with the following content:</strong>
                        </p>
                        <div className="pricing-list">
                          <ul>
                            <li>
                              <i className="flaticon-check"></i>Career Advice
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Career
                              Networking
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Interviewing
                              Tips
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Personal
                              Development
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Personal Advice
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Professional
                              Education
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Financial Advice
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Personal Finance
                            </li>
                          </ul>
                        </div>

                        <Link to="#contact" className="pricing-btn">
                          Let's Do It!
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6"
                    data-aos="zoom-in-down"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                    data-aos-once="true"
                  >
                    <div className="single-pricing-box active">
                      <div className="pricing-content">
                        <h3>Abilities Package</h3>
                        <h1>$97</h1>
                        <p>One Time Fee</p>
                        <p>
                          <strong>
                            Videos and webinars with the following content:
                          </strong>
                        </p>

                        <div className="pricing-list">
                          <ul>
                            <li>
                              <i className="flaticon-check"></i> Equity Research
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Financial
                              Consulting
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Financial
                              Services
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Investment
                              Banking
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Hedge Funds
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Private Equity
                            </li>
                            <li>
                              <i className="flaticon-check"></i>Financial
                              Instruments
                            </li>
                          </ul>
                        </div>

                        <Link to="#contact" className="pricing-btn">
                          Let's Do It!
                        </Link>
                      </div>
                      <span className="popular">Popular</span>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-sm-6"
                    data-aos="zoom-in-down"
                    data-aos-duration="1200"
                    data-aos-delay="600"
                    data-aos-once="true"
                  >
                    <div className="single-pricing-box">
                      <div className="pricing-content">
                        <h3>Skills</h3>
                        <h1>$97</h1>
                        <p>One Time Fee</p>
                        <p>
                          <strong>
                            Videos and webinars with the following content:
                          </strong>
                        </p>

                        <div className="pricing-list">
                          <ul>
                            <li>
                              <i className="flaticon-check"></i>
                              Financial Modeling
                            </li>
                            <li>
                              <i className="flaticon-check"></i>
                              Use of Financial Software
                            </li>
                            <li>
                              <i className="flaticon-check"></i>
                              Valuation Services
                            </li>
                            <li>
                              <i className="flaticon-check"></i>
                              Leveraged Buy-outs
                            </li>
                            <li>
                              <i className="flaticon-check"></i>
                              Mergers and Acquisitions
                            </li>
                            <li>
                              <i className="flaticon-check"></i>
                              Portfolio Management
                            </li>
                            <li>
                              <i className="flaticon-check"></i>
                              Real Estate
                            </li>
                          </ul>
                        </div>

                        <Link to="#contact" className="pricing-btn">
                          Let's Do It!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*</TabPanel>

                   <TabPanel>
                    <div className="row justify-content-center">
                      <div
                        className="col-lg-4 col-sm-6"
                        data-aos="zoom-in-down"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        data-aos-once="true"
                      >
                        <div className="single-pricing-box">
                          <div className="pricing-content">
                            <h3>Standard</h3>
                            <h1>$449</h1>
                            <p>Per Year, Billed Yearly</p>

                            <div className="pricing-list">
                              <ul>
                                <li>
                                  <i className="flaticon-check"></i> Military
                                  GradeServer Protection
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>All
                                  Dashboard Features
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>API And
                                  Webhook Access
                                </li>
                              </ul>
                            </div>

                            <Link to="#contact" className="pricing-btn">
                              Get Started
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-4 col-sm-6"
                        data-aos="zoom-in-down"
                        data-aos-duration="1200"
                        data-aos-delay="400"
                        data-aos-once="true"
                      >
                        <div className="single-pricing-box active">
                          <div className="pricing-content">
                            <h3>Premium</h3>
                            <h1>$1249</h1>
                            <p>Per Year, Billed Yearly</p>

                            <div className="pricing-list">
                              <ul>
                                <li>
                                  <i className="flaticon-check"></i> 8 Team
                                  Members
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>Custom
                                  Analytics Filters
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>API And
                                  Webhook Access
                                </li>
                              </ul>
                            </div>

                            <Link to="#contact" className="pricing-btn">
                              Get Started
                            </Link>
                          </div>
                          <span className="popular">Popular</span>
                        </div>
                      </div>

                      <div
                        className="col-lg-4 col-sm-6"
                        data-aos="zoom-in-down"
                        data-aos-duration="1200"
                        data-aos-delay="600"
                        data-aos-once="true"
                      >
                        <div className="single-pricing-box">
                          <div className="pricing-content">
                            <h3>Professional</h3>
                            <h1>$599</h1>
                            <p>Per Year, Billed Yearly</p>

                            <div className="pricing-list">
                              <ul>
                                <li>
                                  <i className="flaticon-check"></i> Military
                                  GradeServer Protection
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>All
                                  Dashboard Features
                                </li>
                                <li>
                                  <i className="flaticon-check"></i>API And
                                  Webhook Access
                                </li>
                              </ul>
                            </div>

                            <Link to="#contact" className="pricing-btn">
                              Get Started
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs> */}
              </div>
            </div>
          </div>

          <img src={shape7} className="pricing-shape" alt="Image" />
        </div>
      </div>
    </>
  )
}

export default PriceTable
