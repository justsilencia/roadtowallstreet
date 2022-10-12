import * as React from "react"

const Features = () => {
  return (
    <>
      <div id="features" className="consulting-features-area ptb-100">
        <div className="container">
          <div className="consulting-section-title">
            <span>WELCOME</span>
            <h2>We Are An Consulting Company</h2>
          </div>

          <div
            className="features-content"
            data-aos="flip-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="consulting-features-card">
                  <div className="icon">
                    <i className="flaticon-money-management"></i>
                  </div>
                  <h3>Wall Street Knowledge</h3>
                  <p>
                    It all starts with knowledge. I will supply the content and
                    coaching to equip you with the tools needed to succeed in
                    the financial industry.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="consulting-features-card">
                  <div className="icon">
                    <i className="flaticon-technical-support-1"></i>
                  </div>
                  <h3>Financial Abilities</h3>
                  <p>
                    With knowledge comes the ability to navigate advanced
                    financial topics. I will show you how to apply the knowledge
                    you have gained.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="consulting-features-card">
                  <div className="icon">
                    <i className="flaticon-user-1"></i>
                  </div>
                  <h3>Becoming a Skillful Financier</h3>
                  <p>
                    After we have established a solid foundation, I will teach
                    you to skillfully use the tools of the trade and set
                    yourself apart in the competitive world of finance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
