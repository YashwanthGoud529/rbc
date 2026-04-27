import React from 'react';

const Contact = () => {
  // Contact images data
  const contactImages = [
    {
      id: 1,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd9281a44841220d126ec_Cover%20R.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd9281a44841220d126ec_Cover%20R-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd9281a44841220d126ec_Cover%20R-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd9281a44841220d126ec_Cover%20R-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd9281a44841220d126ec_Cover%20R.webp 1440w"
    },
    {
      id: 2,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a858a21313048249c36dc2_MERSI%20x%20AURE%CC%81LIEN%20COHEN-4%20(1).webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a858a21313048249c36dc2_MERSI%20x%20AURE%CC%81LIEN%20COHEN-4%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a858a21313048249c36dc2_MERSI%20x%20AURE%CC%81LIEN%20COHEN-4%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a858a21313048249c36dc2_MERSI%20x%20AURE%CC%81LIEN%20COHEN-4%20(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a858a21313048249c36dc2_MERSI%20x%20AURE%CC%81LIEN%20COHEN-4%20(1).webp 1333w"
    },
    {
      id: 3,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a859206f8dac87c4c0b553_MERSI%20x%20LEVALLOIS-2%20(1).webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a859206f8dac87c4c0b553_MERSI%20x%20LEVALLOIS-2%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a859206f8dac87c4c0b553_MERSI%20x%20LEVALLOIS-2%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a859206f8dac87c4c0b553_MERSI%20x%20LEVALLOIS-2%20(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a859206f8dac87c4c0b553_MERSI%20x%20LEVALLOIS-2%20(1).webp 1333w"
    },
    {
      id: 4,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16-p-1600.webp 1600w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16-p-2000.webp 2000w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16.webp 2430w"
    },
    {
      id: 5,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcffd7c4bc95194bed857_Cover%20R.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcffd7c4bc95194bed857_Cover%20R-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcffd7c4bc95194bed857_Cover%20R-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcffd7c4bc95194bed857_Cover%20R-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcffd7c4bc95194bed857_Cover%20R.webp 1440w"
    },
    {
      id: 6,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd34dddd61db985f47bed_Cover%20R.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd34dddd61db985f47bed_Cover%20R-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd34dddd61db985f47bed_Cover%20R-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd34dddd61db985f47bed_Cover%20R-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd34dddd61db985f47bed_Cover%20R.webp 1440w"
    },
    {
      id: 7,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ec2802ca327082f12fb8c_Cover%20R.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ec2802ca327082f12fb8c_Cover%20R-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ec2802ca327082f12fb8c_Cover%20R-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ec2802ca327082f12fb8c_Cover%20R-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ec2802ca327082f12fb8c_Cover%20R.webp 1440w"
    },
    {
      id: 8,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcbab408fccba081a1f1c_Cover%20R.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcbab408fccba081a1f1c_Cover%20R-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcbab408fccba081a1f1c_Cover%20R-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcbab408fccba081a1f1c_Cover%20R-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcbab408fccba081a1f1c_Cover%20R.webp 1440w"
    },
    {
      id: 9,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ebba4efcd5f43b914a5c5_Cover%20R.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ebba4efcd5f43b914a5c5_Cover%20R-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ebba4efcd5f43b914a5c5_Cover%20R-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ebba4efcd5f43b914a5c5_Cover%20R-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ebba4efcd5f43b914a5c5_Cover%20R.webp 1440w"
    },
    {
      id: 10,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699eb98028d9cd06e2cb399e_Cover%20R.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699eb98028d9cd06e2cb399e_Cover%20R-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699eb98028d9cd06e2cb399e_Cover%20R-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699eb98028d9cd06e2cb399e_Cover%20R-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699eb98028d9cd06e2cb399e_Cover%20R.webp 1440w"
    },
    {
      id: 11,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd5fdf3606de88b4daefc_Cover%20R.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd5fdf3606de88b4daefc_Cover%20R-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd5fdf3606de88b4daefc_Cover%20R-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd5fdf3606de88b4daefc_Cover%20R-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd5fdf3606de88b4daefc_Cover%20R.webp 1440w"
    },
    {
      id: 12,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85b30359cc357d0398c8b_MERSI_67%20boulevard%20Lannes_SALON_3_V2.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85b30359cc357d0398c8b_MERSI_67%20boulevard%20Lannes_SALON_3_V2-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85b30359cc357d0398c8b_MERSI_67%20boulevard%20Lannes_SALON_3_V2-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85b30359cc357d0398c8b_MERSI_67%20boulevard%20Lannes_SALON_3_V2.webp 1080w"
    },
    {
      id: 13,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85b088a42aed6e3703f9b_CC_MERSI%20x%20RUE%20DE%20LA%20PAIX-1.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85b088a42aed6e3703f9b_CC_MERSI%20x%20RUE%20DE%20LA%20PAIX-1-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85b088a42aed6e3703f9b_CC_MERSI%20x%20RUE%20DE%20LA%20PAIX-1-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85b088a42aed6e3703f9b_CC_MERSI%20x%20RUE%20DE%20LA%20PAIX-1.webp 1080w"
    },
    {
      id: 14,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd280f375c7f39c4d55d9_Cover%20R.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd280f375c7f39c4d55d9_Cover%20R-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd280f375c7f39c4d55d9_Cover%20R-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd280f375c7f39c4d55d9_Cover%20R-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd280f375c7f39c4d55d9_Cover%20R.webp 1440w"
    },
    {
      id: 15,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85beae7ee6ecaf8863ba3_CC_Mersi%20x%20Restaurant%20COOK-2.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85beae7ee6ecaf8863ba3_CC_Mersi%20x%20Restaurant%20COOK-2-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85beae7ee6ecaf8863ba3_CC_Mersi%20x%20Restaurant%20COOK-2-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85beae7ee6ecaf8863ba3_CC_Mersi%20x%20Restaurant%20COOK-2.webp 1080w"
    },
    {
      id: 16,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd810faa685c33ee9f5ca_Img%20R.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd810faa685c33ee9f5ca_Img%20R-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd810faa685c33ee9f5ca_Img%20R-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd810faa685c33ee9f5ca_Img%20R-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd810faa685c33ee9f5ca_Img%20R.webp 1440w"
    },
    {
      id: 17,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c20c68e51f70e07786b_CC_MERSIxBERRI-24%20(1).webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c20c68e51f70e07786b_CC_MERSIxBERRI-24%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c20c68e51f70e07786b_CC_MERSIxBERRI-24%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c20c68e51f70e07786b_CC_MERSIxBERRI-24%20(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c20c68e51f70e07786b_CC_MERSIxBERRI-24%20(1).webp 1333w"
    },
    {
      id: 18,
      src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c648569d5ab75b8d1a3_MERSI%20x%20MAURICE_-6.webp",
      srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c648569d5ab75b8d1a3_MERSI%20x%20MAURICE_-6-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c648569d5ab75b8d1a3_MERSI%20x%20MAURICE_-6-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c648569d5ab75b8d1a3_MERSI%20x%20MAURICE_-6.webp 1080w"
    }
  ];

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
                        <div className="text-block-2">Newsletter</div>
                        <div className="form w-form">
                          <form id="email-form" name="email-form" data-name="Email Form" method="get" className="news-form">
                            <input className="field-form w-input" maxLength="256" name="email" data-name="Email" placeholder="Your email" type="email" id="email" required="" />
                            <div className="fake-submit_w">
                              <input type="submit" data-wait="Wait..." className="submit-btn w-button" value="" />
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
                        <div className="card-address">12 Bd Raspail<br />Paris 7</div>
                      </div>
                    </div>
                    <div reveal-op="" className="card-contact_project show-mob-footer contact">
                      {/* Mobile contact card content - simplified for brevity */}
                      <div className="card_contact_w">
                        <div className="news-letter-card is-footer">
                          <div className="text-block-2">Newsletter</div>
                          <div className="form w-form">
                            <form id="email-form-mobile" name="email-form" method="get" className="news-form">
                              <input className="field-form w-input" maxLength="256" name="email" placeholder="Your email" type="email" required="" />
                              <div className="fake-submit_w">
                                <input type="submit" className="submit-btn w-button" value="" />
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
                            <div className="text-block-2">Newsletter</div>
                            <div className="form w-form">
                              <form id="email-form-footer" name="email-form" method="get" className="news-form">
                                <input className="field-form w-input" maxLength="256" name="email" placeholder="Your email" type="email" required="" />
                                <div className="fake-submit_w">
                                  <input type="submit" className="submit-btn w-button" value="" />
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
                      <div className="text-block-4">Let's get in touch</div>
                      <a href="mailto:hello@mersi-architecture.com" className="text-block-4-copy">hello@mersi-architecture.com</a>
                      <a href="tel:+33609872775" className="text-block-4-copy off">+33 6 09 87 27 75</a>
                      <a href="tel:+33609872775" className="text-block-4-copy off">+33 1 72 68 22 28 </a>
                    </div>
                  </div>

                  {/* Contact images section using map() */}
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