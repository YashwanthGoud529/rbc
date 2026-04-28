
import React from 'react';
import { contactImages } from '../../data/projects';
import './contact.css';

const Contact = () => {
  return (
    <div>
      <div className="page-wrapper">
        <main data-taxi="" className="main-wrapper">
          <div data-taxi-view="" className="page_view">
            <section className="section contact">

              <div className="container contact">
                <div className="contact_w">
                  <div className="card_contact_w_absolute">
                    <div className="contact-info_w"></div>
                    <div className="card-contact_project is-contact hide-tab">
                      <div className="svg-border-left w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 270 324" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_iiii_4718_1229)" style={{ mixBlendMode: 'overlay' }}>
                            <path d="M536.5 3.5V320.5H3.5V3.5H536.5Z" stroke="black" strokeOpacity="0.01" strokeWidth="7" />
                          </g>
                        </svg>
                      </div>
                      <div className="svg-border-right w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 270 324" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_iiii_4718_965)" style={{ mixBlendMode: 'overlay' }}>
                            <path d="M266.5 3.5V320.5H-266.5V3.5H266.5Z" stroke="black" strokeOpacity="0.01" strokeWidth="7" />
                          </g>
                        </svg>
                      </div>
                      <div className="news-letter-card is-contact">
                        <div className="text-block-2">Let’s get in touch</div>
                        <div className="form w-form">
                          <form id="email-form" name="email-form" data-name="Email Form" method="get" className="news-form">
                            {/* Name Field */}
                            <input
                              className="field-form w-input"
                              maxLength="256"
                              name="name"
                              data-name="Name"
                              placeholder="Your name"
                              type="text"
                              id="name"
                              required=""
                            />

                            {/* Email Field */}
                            <input
                              className="field-form w-input"
                              maxLength="256"
                              name="email"
                              data-name="Email"
                              placeholder="Your email"
                              type="email"
                              id="email"
                              required=""
                            />

                            {/* Phone Number Field */}
                            <input
                              className="field-form w-input"
                              maxLength="20"
                              name="phone"
                              data-name="Phone"
                              placeholder="Your phone number"
                              type="tel"
                              id="phone"
                              required=""
                            />

                            {/* Text Area */}
                            <textarea
                              className="field-form w-input"
                              name="message"
                              data-name="Message"
                              placeholder="Your message"
                              id="message"
                              rows="4"
                              required=""
                              style={{ resize: 'vertical' }}
                            ></textarea>

                            <div className="fake-submit_w">
                              <input type="submit" data-wait="Wait..." className="submit-btn w-button" value="Send" />
                              <div className="arrow-submit-form w-embed">
                                <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                </svg>
                              </div>
                            </div>
                          </form>
                          <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </div>
                      </div>
                      <div className="card-svg_w is-contact">
                        <img
                          src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c870fd66c6966c9776_MS%20(-)%20Creme.webp"
                          loading="lazy"
                          sizes="(max-width: 864px) 100vw, 864px"
                          srcSet="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c870fd66c6966c9776_MS%20(-)%20Creme-p-500.webp 500w, https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c870fd66c6966c9776_MS%20(-)%20Creme.webp 864w"
                          alt=""
                          className="card-ms-svg is-contact"
                        />
                        <div className="card-line-svg is-contact w-embed">
                          <svg width="29" height="64" viewBox="0 0 29 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_ddii_4502_1015)">
                              <path d="M18 6H23V46H18V6Z" fill="#AAA798" fillOpacity="0.01" shapeRendering="crispEdges" />
                            </g>
                          </svg>
                        </div>
                        <div className="card-address">Royal Bullion <br /> Capital </div>
                      </div>
                    </div>
                    <div reveal-op="" className="card-contact_project show-mob-footer contact">
                      <div className="card_contact_w">
                        <div className="news-letter-card is-footer">
                          <div className="text-block-2">Let’s get in touch</div>
                          <div className="form w-form">
                            <form id="email-form-mobile" name="email-form" method="get" className="news-form">
                              <input className="field-form w-input" maxLength="256" name="name" placeholder="Your name" type="text" required="" />
                              <input className="field-form w-input" maxLength="256" name="email" placeholder="Your email" type="email" required="" />
                              <input className="field-form w-input" maxLength="20" name="phone" placeholder="Your phone number" type="tel" required="" />
                              <textarea className="field-form w-input" name="message" placeholder="Your message" rows="3" required=""></textarea>
                              <div className="fake-submit_w">
                                <input type="submit" className="submit-btn w-button" value="Send" />
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="card-svg_w">
                          <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c870fd66c6966c9776_MS%20(-)%20Creme.webp" loading="lazy" alt="" className="card-ms-svg" />
                          <div className="card-address">12 Bd Raspail<br />Paris 7</div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer-w contact">
                      <div className="card-contact_project is-footer">
                        <div className="card_contact_w">
                          <div className="news-letter-card is-footer">
                            <div className="text-block-2">Let’s get in touch</div>
                            <div className="form w-form">
                              <form id="email-form-footer" name="email-form" method="get" className="news-form">
                                <input className="field-form w-input" maxLength="256" name="name" placeholder="Your name" type="text" required="" />
                                <input className="field-form w-input" maxLength="256" name="email" placeholder="Your email" type="email" required="" />
                                <input className="field-form w-input" maxLength="20" name="phone" placeholder="Your phone number" type="tel" required="" />
                                <textarea className="field-form w-input" name="message" placeholder="Your message" rows="3" required=""></textarea>
                                <div className="fake-submit_w">
                                  <input type="submit" className="submit-btn w-button" value="Send" />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="card-svg_w">
                            <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c870fd66c6966c9776_MS%20(-)%20Creme.webp" loading="lazy" alt="" className="card-ms-svg" />
                            <div className="card-address">12 Bd Raspail<br />Paris 7</div>
                          </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 540 324" fill="none" preserveAspectRatio="none" height="100%" className="cadre-contact is-project">
                          <g filter="url(#filter0_iii_4502_1010)">
                            <path d="M536.5 3.5V320.5H3.5V3.5H536.5Z" stroke="currentColor" strokeWidth="7"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="contact-info_w">
                      <div className="text-block-4">Have Any Questions</div>
                      <a href="mailto:support@royalbullioncapital.com" className="text-block-4-copy">support@royalbullioncapital.com</a>
                      <a href="tel:+97145752082" className="text-block-4-copy off">+971 4 575 2082</a>
                      <div style={{ marginTop: '20px', opacity: 0.7 }}>
                        Al Kheeran Dubai Festival City Dubai <br /> United Arab Emirates
                      </div>
                    </div>
                  </div>

                  <div className="contact_list_w hide-tab w-dyn-list">
                    <div role="list" className="contact_list w-dyn-items">
                      {contactImages.map((image) => (
                        <div key={image.id} role="listitem" className="contact_item w-dyn-item">
                          <div className="contact_item_w">
                            <img
                              src={image.src}
                              loading="lazy"
                              alt=""
                              sizes="100vw"
                              srcSet={image.srcSet}
                              className="contact-img"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;