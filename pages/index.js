import React from 'react'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Portfolio Page</title>
          <meta property="og:title" content="Portfolio Page" />
        </Head>
        <div className="navbar-container">
          <div className="navbar">
            <span className="card-Heading heading">Logo</span>
            <div className="links-container">
              <span className="link navbar-Link">About</span>
              <span className="link1 navbar-Link">Experience</span>
              <span className="link2 navbar-Link">Portofolio</span>
              <span className="navbar-Link">Contact</span>
            </div>
            <div className="burger-menu">
              <svg viewBox="0 0 1024 1024" className="icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="section-separator"></div>
        <div className="section-separator1"></div>
        <div className="container01">
          <div className="hero">
            <div className="hero-text-container">
              <h1 className="heading1 section-Heading">
                I help startups deliver the right message to their customers
              </h1>
              <span className="text section-Text">
                <span>
                  c. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </span>
              </span>
              <div className="cta-btn-container">
                <button className="cta-btn anchor thqButton">
                  <span className="text02">MY WORK</span>
                </button>
                <button className="cta-btn1 anchor thqButton">ABOUT ME</button>
              </div>
            </div>
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="image"
            />
          </div>
        </div>
        <div className="features">
          <div className="heading-container">
            <h2 className="text03 section-Heading">Deliverables</h2>
            <span className="text04 section-Text">
              Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </span>
          </div>
          <div className="cards-container">
            <div className="card">
              <div className="icon-container">
                <svg viewBox="0 0 1170.2857142857142 1024" className="icon02">
                  <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
                </svg>
              </div>
              <div className="content-container">
                <span className="heading2 card-Heading">Diagrams</span>
                <span className="text05 card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="card1">
              <div className="icon-container1">
                <svg viewBox="0 0 1024 1024" className="icon04">
                  <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
                </svg>
              </div>
              <div className="content-container1">
                <span className="heading3 card-Heading">Wireframes</span>
                <span className="text06 card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="card2">
              <div className="icon-container2">
                <svg viewBox="0 0 865.7188571428571 1024" className="icon06">
                  <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
                </svg>
              </div>
              <div className="content-container2">
                <span className="heading4 card-Heading">Design</span>
                <span className="text07 card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="max-content-width-container">
            <div className="heading-container1">
              <h1 className="section-Heading text08">
                Professional experience
              </h1>
            </div>
            <div className="content-container3">
              <div className="about-1">
                <div className="container02">
                  <svg viewBox="0 0 1024 1024" className="icon08">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="text09 card-Text">
                    Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                    imperdiet.
                  </span>
                </div>
                <div className="container03">
                  <svg viewBox="0 0 1024 1024" className="icon10">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="text10 card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className="container04">
                  <svg viewBox="0 0 1024 1024" className="icon12">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="text11 card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
              </div>
              <div className="about-11">
                <div className="container05">
                  <svg viewBox="0 0 1024 1024" className="icon14">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="text12 card-Text">
                    <span>
                      Lorem ipsum dolor sit amet aulla quis sem at nibh
                      elementum
                    </span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <div className="container06">
                  <svg viewBox="0 0 1024 1024" className="icon16">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="text16 card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className="container07">
                  <svg viewBox="0 0 1024 1024" className="icon18">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="text17 card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
              </div>
            </div>
            <button className="button anchor thqButton">CHECK MY WORK</button>
          </div>
        </div>
        <div className="section-separator2"></div>
        <div className="clients">
          <div className="heading-container2">
            <h1 className="text18 section-Heading">Clients</h1>
            <span className="text19 section-Text">
              Here we will put your clients&apos; or partners&apos; logos
            </span>
          </div>
          <div className="logo-container">
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="logo"
            />
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="logo1"
            />
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="logo2"
            />
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="logo3"
            />
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="logo4"
            />
          </div>
        </div>
        <div className="pricing">
          <div className="heading-container3">
            <h1 className="text20 section-Heading">Ask for a quote</h1>
            <span className="text21 section-Text">
              Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </span>
          </div>
          <div className="pricing-card-container">
            <div className="card3">
              <div className="card-heading">
                <span className="type anchor">Minimal</span>
                <span className="section-Heading">Basic</span>
              </div>
              <div className="card-content">
                <div className="feature">
                  <span className="card-Text">Feature one</span>
                  <span className="limit card-Text">TBD</span>
                </div>
                <div className="feature1">
                  <span className="card-Text">Feature two</span>
                  <span className="limit1 card-Text">TBD</span>
                </div>
                <div className="feature2">
                  <span className="card-Text">Feature three</span>
                  <span className="limit2 card-Text">UNLIMITED</span>
                </div>
                <div className="feature3">
                  <span className="card-Text">Feature four</span>
                  <span className="limit3 card-Text">UNLIMITED</span>
                </div>
                <button className="choose anchor thqButton">CHOOSE</button>
              </div>
            </div>
            <div className="card4">
              <div className="card-heading1">
                <span className="type1 anchor">medium</span>
                <span className="section-Heading">Complex</span>
              </div>
              <div className="card-content1">
                <div className="container08">
                  <span className="card-Text">Feature one</span>
                  <span className="text23 card-Text">TBD</span>
                </div>
                <div className="container09">
                  <span className="card-Text">Feature two</span>
                  <span className="text25 card-Text">TBD</span>
                </div>
                <div className="container10">
                  <span className="card-Text">Feature three</span>
                  <span className="text27 card-Text">UNLIMITED</span>
                </div>
                <div className="container11">
                  <span className="card-Text">Feature four</span>
                  <span className="text29 card-Text">UNLIMITED</span>
                </div>
                <button className="button1 anchor thqButton">CHOOSE</button>
              </div>
            </div>
            <div className="card5">
              <div className="card-heading2">
                <span className="type2 anchor">Premium</span>
                <span className="section-Heading">Professional</span>
              </div>
              <div className="card-content2">
                <div className="container12">
                  <span className="card-Text">Feature one</span>
                  <span className="text31 card-Text">TBD</span>
                </div>
                <div className="container13">
                  <span className="card-Text">Feature two</span>
                  <span className="text33 card-Text">TBD</span>
                </div>
                <div className="container14">
                  <span className="card-Text">Feature three</span>
                  <span className="text35 card-Text">UNLIMITED</span>
                </div>
                <div className="container15">
                  <span className="card-Text">Feature four</span>
                  <span className="text37 card-Text">UNLIMITED</span>
                </div>
                <button className="button2 anchor thqButton">CHOOSE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="section-separator3"></div>
        <div className="section-separator4"></div>
        <div className="faqs">
          <h2 className="text38 section-Heading">
            Check the most common questions
          </h2>
          <div className="content-container4">
            <div className="faq">
              <div className="question-container">
                <span className="question">
                  Here you would write a frequently asked question?
                </span>
              </div>
              <div className="answer-container">
                <span className="answer card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet. Here you would give the
                  answer. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Integer nec odio. Praesent libero. Sed cursus ante
                  dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum
                  imperdiet.
                </span>
                <span className="card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="faq1">
              <div className="question-container1">
                <span className="question1">
                  Here you would write a frequently asked question?
                </span>
              </div>
              <div className="answer-container1">
                <span className="answer2 card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
                <span className="card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero.
                </span>
              </div>
            </div>
            <div className="faq2">
              <div className="question-container2">
                <span className="question2">
                  Here you would write a frequently asked question?
                </span>
              </div>
              <div className="answer-container2">
                <span className="answer4 card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
                <span className="card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-separator5"></div>
        <div className="subscribe">
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="image1"
          />
          <div className="container16">
            <div className="heading-container4">
              <h1 className="text39 section-Heading">
                Get our guide to crafting digital products
              </h1>
              <span className="section-Text text40">
                We will send you our monthly freebies on your email. We will not
                share your email address or use it for promotional goals.
              </span>
            </div>
            <input
              type="text"
              required="true"
              placeholder="E-mail"
              className="textinput section-Text thqTextInput"
            />
            <button className="button3 anchor thqButton">SEND</button>
          </div>
        </div>
        <div className="section-separator6"></div>
        <div className="footer-container">
          <div className="footer">
            <div className="social-links">
              <svg viewBox="0 0 950.8571428571428 1024" className="icon20">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="icon22">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="icon24">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
            <div className="copyright-container">
              <svg viewBox="0 0 1024 1024" className="icon26">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
              </svg>
              <span className="anchor">Copyright, 2021</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .navbar-container {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .link {
            margin-right: var(--dl-space-space-tripleunit);
          }
          .link1 {
            margin-right: var(--dl-space-space-tripleunit);
          }
          .link2 {
            margin-right: var(--dl-space-space-tripleunit);
          }
          .burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .icon {
            width: 36px;
            height: 36px;
          }
          .section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-tenunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .container01 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f1f1f1;
          }
          .hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            background-color: #f1f1f1;
          }
          .hero-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .heading1 {
            color: #040404;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .cta-btn-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .cta-btn {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: #c9c9c9;
          }
          .text02 {
            color: #101010;
          }
          .cta-btn1 {
            color: var(--dl-color-gray-black);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-white);
          }
          .image {
            width: 40%;
            object-fit: cover;
          }
          .features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .text03 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .text04 {
            text-align: center;
          }
          .cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .card {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .icon02 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .content-container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text05 {
            text-align: center;
          }
          .card1 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .icon04 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .content-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text06 {
            text-align: center;
          }
          .card2 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .icon06 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .content-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .heading4 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text07 {
            text-align: center;
          }
          .about {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .max-content-width-container {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .heading-container1 {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .content-container3 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .about-1 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-900);
          }
          .container02 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .icon08 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text09 {
            text-align: left;
          }
          .container03 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .icon10 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text10 {
            text-align: left;
          }
          .container04 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .icon12 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text11 {
            text-align: left;
          }
          .about-11 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-900);
          }
          .container05 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .icon14 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text12 {
            text-align: left;
          }
          .container06 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .icon16 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text16 {
            text-align: left;
          }
          .container07 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .icon18 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text17 {
            text-align: left;
          }
          .button {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .clients {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .heading-container2 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .text18 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .text19 {
            text-align: center;
          }
          .logo-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .logo {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .logo1 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .logo2 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .logo3 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .logo4 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .pricing {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .heading-container3 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .text20 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .text21 {
            text-align: center;
          }
          .pricing-card-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .card3 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .card-heading {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .type {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .card-content {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .feature {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .limit {
            color: var(--dl-color-gray-700);
          }
          .feature1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .limit1 {
            color: var(--dl-color-gray-700);
          }
          .feature2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .limit2 {
            color: var(--dl-color-gray-700);
          }
          .feature3 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .limit3 {
            color: var(--dl-color-gray-700);
          }
          .choose {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .card4 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .card-heading1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .type1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .card-content1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .container08 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .text23 {
            color: var(--dl-color-gray-700);
          }
          .container09 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .text25 {
            color: var(--dl-color-gray-700);
          }
          .container10 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .text27 {
            color: var(--dl-color-gray-700);
          }
          .container11 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .text29 {
            color: var(--dl-color-gray-700);
          }
          .button1 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .card5 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .card-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .type2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .card-content2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .container12 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .text31 {
            color: var(--dl-color-gray-700);
          }
          .container13 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .text33 {
            color: var(--dl-color-gray-700);
          }
          .container14 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .text35 {
            color: var(--dl-color-gray-700);
          }
          .container15 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .text37 {
            color: var(--dl-color-gray-700);
          }
          .button2 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .section-separator4 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .faqs {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .text38 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .content-container4 {
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .question-container {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .question {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .answer-container {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .answer {
            margin-bottom: var(--dl-space-space-unit);
          }
          .faq1 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .question-container1 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .question1 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .answer-container1 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .answer2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .faq2 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .question-container2 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .question2 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .answer-container2 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .answer4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .section-separator5 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .subscribe {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image1 {
            width: 50%;
            object-fit: cover;
          }
          .container16 {
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .heading-container4 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .text39 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .textinput {
            width: 50%;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .button3 {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .section-separator6 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .footer-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .social-links {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .icon20 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .icon22 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .icon24 {
            width: 24px;
            height: 24px;
          }
          .copyright-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .icon26 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .heading {
              text-align: center;
            }
            .hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .hero-text-container {
              width: 80%;
              align-items: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .heading1 {
              text-align: center;
            }
            .text {
              text-align: center;
            }
            .image {
              width: 100%;
            }
            .text03 {
              text-align: center;
            }
            .pricing-card-container {
              justify-content: center;
            }
            .card3 {
              margin-right: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .card4 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .links-container {
              display: none;
            }
            .burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-tripleunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .icon {
              fill: var(--dl-color-gray-white);
            }
            .cta-btn {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .cta-btn1 {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .heading-container {
              width: 100%;
            }
            .cards-container {
              align-items: center;
              flex-direction: column;
            }
            .card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .heading-container1 {
              width: 100%;
            }
            .text08 {
              text-align: center;
            }
            .content-container3 {
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: center;
            }
            .about-1 {
              width: 65%;
            }
            .about-11 {
              width: 65%;
            }
            .heading-container2 {
              width: 100%;
            }
            .heading-container3 {
              width: 100%;
            }
            .card3 {
              margin-right: 0px;
            }
            .content-container4 {
              width: 100%;
              flex-direction: column;
            }
            .faq {
              width: 100%;
            }
            .faq1 {
              width: 100%;
            }
            .faq2 {
              width: 100%;
            }
            .subscribe {
              flex-direction: column;
            }
            .image1 {
              width: 70%;
            }
            .container16 {
              width: 100%;
              align-items: center;
            }
            .heading-container4 {
              width: 100%;
            }
            .text39 {
              text-align: center;
            }
            .text40 {
              text-align: center;
            }
            .textinput {
              width: 100%;
            }
            .button3 {
              width: 70%;
            }
          }
          @media (max-width: 479px) {
            .burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .hero-text-container {
              width: 100%;
            }
            .card {
              width: 100%;
            }
            .card1 {
              width: 100%;
            }
            .card2 {
              width: 100%;
            }
            .about-1 {
              width: 100%;
            }
            .about-11 {
              width: 100%;
            }
            .text18 {
              text-align: center;
            }
            .text20 {
              text-align: center;
            }
            .content-container4 {
              padding-left: 0px;
            }
            .image1 {
              width: 100%;
            }
            .container16 {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .button3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
