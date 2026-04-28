import React, { useEffect } from 'react'
import { projects } from '../../data/projects'

const Trading = () => {
  // Find project by slug
  const project = projects.find(p => p.slug === 'trading') || projects[2];

  const services = project.services || []

  const galleryImages = project.galleryImages || []

  const contactLinks = [
    { title: "Mail", content: "support@royalbullioncapital.com", href: "mailto:support@royalbullioncapital.com" },
    { title: "WhatsApp", content: "Let's talk", href: "https://wa.me/+9715752082", external: true },
    { title: "Phone", content: "+971 4 575 2082", href: "tel:+97145752082" }
  ]

  const projectSlidesLeft = projects.map(p => ({
    name: p.name,
    img: p.leftImage,
    sizes: "500w, 800w, 1080w, 1333w"
  }))

  const projectSlidesRight = projects.map(p => ({
    name: p.name,
    img: p.rightImage,
    sizes: "500w, 800w, 1080w, 1333w"
  }))

  const projectButtons = projects.map(p => ({
    name: p.name,
    location: p.location,
    type: p.type,
    year: p.year,
    slug: p.slug === '1-mg' ? '/1-mg' : `/${p.slug}`
  }))

  return (
    <div>
      <div className="page-wrapper">
        <main data-taxi="" className="main-wrapper">
          <div data-taxi-view="" className="page_view">
            <div className="horizontal_w">
              <div className="horizontal_track">
                <div className="horizontal_section">
                  <section className="project-hero_w">
                    <div className="project-hero-left">
                      <div></div>
                      <div className="thumb_w">
                        <div className="info-date-project">
                          <div line="">{project.locationDesk || project.location}</div>
                          <div line="">{project.year}</div>
                        </div>
                        <div className="test-block">
                          <div className="test-block in project">
                            <div className="img-project-flip"><img loading="lazy"
                              src={project.leftImage}
                              alt="" sizes="100vw"
                              srcSet={project.leftImageSet}
                              className="img-projet-left" /></div>
                          </div>
                          <div className="code-embed-2 w-embed"><svg width="100%" height="100%" viewBox="0 0 234 284"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_iiii_4403_1604)">
                              <path d="M230.5 3.5V280.5H3.5V3.5H230.5Z" stroke="black" strokeOpacity="0.01"
                                strokeWidth="7" />
                            </g>
                            <defs>
                              <filter id="filter0_iiii_4403_1604" x="-6" y="-10" width="250" height="300"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="3" dy="-3" />
                                <feGaussianBlur stdDeviation="1.5" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                                <feBlend mode="hard-light" in2="shape" result="effect1_innerShadow_4403_1604" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="10" dy="-10" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                <feBlend mode="hard-light" in2="effect1_innerShadow_4403_1604"
                                  result="effect2_innerShadow_4403_1604" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-3" dy="3" />
                                <feGaussianBlur stdDeviation="1.5" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.38 0" />
                                <feBlend mode="overlay" in2="effect2_innerShadow_4403_1604"
                                  result="effect3_innerShadow_4403_1604" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-6" dy="6" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0" />
                                <feBlend mode="overlay" in2="effect3_innerShadow_4403_1604"
                                  result="effect4_innerShadow_4403_1604" />
                              </filter>
                            </defs>
                          </svg></div>
                        </div>
                        <div className="info-desc-project">
                          <div line="" className="courte-desc">{project.description}</div>
                        </div>
                      </div>
                      <h1 reveal-letter="" className="h1-project text-gold">{project.name}</h1>
                    </div>
                    <div className="project-hero-right">
                      <img
                        src="images/home/about-banner/trading.svg"
                        loading="lazy" alt="" sizes="100vw"
                        srcSet="images/home/about-banner/trading.svg"
                        className="project-hero-left-img" />
                      <div className="voile-project"></div>
                    </div>
                  </section>
                  <section className="section-h">
                    <div className="container desc-project">
                      <h2 line="" className="desc-projet">{project.description}</h2>
                      <div className="list-services">
                        <div className="services_list_w w-dyn-list">
                          <div role="list" className="services_list w-dyn-items">
                            {services.map((service, index) => (
                              <div key={index} role="listitem" className="services_item w-dyn-item">
                                <div className="line bottom"></div>
                                <div className="div-block-3">
                                  <div reveal-op="" className="code-embed-3 w-embed">
                                    <svg width="100%" height="100%" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M4.71354 10C4.62674 9.43576 4.375 8.82812 3.95833 8.17708C3.55035 7.52604 2.96875 6.91406 2.21354 6.34115C1.44965 5.75955 0.711806 5.39931 0 5.26042V4.71354C0.720486 4.54861 1.41927 4.22743 2.09635 3.75C2.77344 3.27257 3.34635 2.70399 3.8151 2.04427C4.28385 1.37587 4.58333 0.694444 4.71354 0H5.26042C5.33854 0.442708 5.49479 0.889757 5.72917 1.34115C5.97222 1.79253 6.28038 2.22656 6.65365 2.64323C7.02691 3.05122 7.43924 3.42014 7.89062 3.75C8.57639 4.23611 9.27951 4.55729 10 4.71354V5.26042C9.51389 5.3559 9.01476 5.55121 8.5026 5.84635C7.99913 6.14149 7.53038 6.48871 7.09635 6.88802C6.66233 7.28733 6.30642 7.70833 6.02865 8.15104C5.6033 8.82812 5.34722 9.44444 5.26042 10H4.71354ZM4.89583 9.6875H5.07812C5.12153 9.23611 5.19097 8.78472 5.28646 8.33333C5.39062 7.87326 5.50781 7.44792 5.63802 7.05729C5.77691 6.66667 5.92014 6.34549 6.06771 6.09375C6.36285 5.92882 6.71441 5.77691 7.1224 5.63802C7.53906 5.49913 7.96875 5.38194 8.41146 5.28646C8.86285 5.19097 9.27951 5.13021 9.66146 5.10417V4.92187C9.27951 4.88715 8.85851 4.82205 8.39844 4.72656C7.94705 4.6224 7.51302 4.50087 7.09635 4.36198C6.67969 4.21441 6.33681 4.0625 6.06771 3.90625C5.92014 3.64583 5.77691 3.32465 5.63802 2.94271C5.50781 2.55208 5.39062 2.13542 5.28646 1.69271C5.19097 1.24132 5.12153 0.78993 5.07812 0.338541H4.89583C4.86111 0.746527 4.79601 1.17187 4.70052 1.61458C4.61372 2.04861 4.50087 2.46528 4.36198 2.86458C4.22309 3.26389 4.07118 3.61111 3.90625 3.90625C3.62847 4.0625 3.28559 4.21441 2.8776 4.36198C2.46962 4.50087 2.03993 4.6224 1.58854 4.72656C1.13715 4.82205 0.711806 4.88715 0.3125 4.92187V5.10417C0.711806 5.13021 1.13281 5.19097 1.57552 5.28646C2.01823 5.38194 2.44358 5.49913 2.85156 5.63802C3.25955 5.77691 3.61111 5.92882 3.90625 6.09375C4.07118 6.37153 4.21875 6.71441 4.34896 7.1224C4.48785 7.5217 4.60503 7.94705 4.70052 8.39844C4.79601 8.84115 4.86111 9.27083 4.89583 9.6875Z"
                                        fill="#1A1A1A" />
                                    </svg>
                                  </div>
                                  <h3 line="" className="heading">{service.name}</h3>
                                </div>
                                <div reveal-letter="" className="rank">
                                  {service.id.toString().padStart(2, '0')}
                                </div>
                                <div className="line top"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="surface_w">
                        <div data-stagger="0.065" reveal-letter="" className="surface">{project.surface}</div>
                        <div reveal-op="" className="m2">m²</div>
                      </div>
                    </div>
                  </section>
                  <section className="project-hero_w test">
                    <div className="gallery_list_w w-dyn-list">
                      <div role="list" className="gallery_list w-dyn-items">
                        {galleryImages.map((image, index) => (
                          <div key={index} role="listitem" className="gallery_item w-dyn-item w-dyn-repeater-item">
                            <img
                              src={image.src}
                              loading="eager"
                              reveal-clip=""
                              alt={image.alt}
                              sizes="100vw"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                  <section className="section">
                    <div className="container is--full">
                      <div className="contact-project_w">
                        <div className="project-contact-info">
                          <h2 line="" className="desc-projet">We design unique spaces, thought to be lived in, and
                            designed to stand the test of time.</h2>
                        </div>
                        <div className="div-block-5">
                          <div reveal-op="" className="card-contact_project is-project">
                            <div className="cadre-contact is-project project w-embed"><svg width="100%" height="100%"
                              viewBox="0 0 540 324" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_iii_4502_1010)">
                                <path d="M536.5 3.5V320.5H3.5V3.5H536.5Z" stroke="black" strokeWidth="7" />
                              </g>
                              <defs>
                                <filter id="filter0_iii_4502_1010" x="-3" y="-10" width="551" height="336"
                                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                  <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                  <feOffset dx="4" dy="-2" />
                                  <feGaussianBlur stdDeviation="1.5" />
                                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                  <feBlend mode="overlay" in2="shape" result="effect1_innerShadow_4502_1010" />
                                  <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                  <feOffset dx="8" dy="-10" />
                                  <feGaussianBlur stdDeviation="7.5" />
                                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                  <feBlend mode="overlay" in2="effect2_innerShadow_4502_1010"
                                    result="effect2_innerShadow_4502_1010" />
                                  <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                  <feOffset dx="-3" dy="2" />
                                  <feGaussianBlur stdDeviation="1.5" />
                                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                                  <feBlend mode="normal" in2="effect2_innerShadow_4502_1010"
                                    result="effect3_innerShadow_4502_1010" />
                                </filter>
                              </defs>
                            </svg></div>
                            <div className="card_contact_w">
                              <div className="news-letter-card is-footer">
                                <div className="text-block-2">Newsletter</div>
                                <div className="form w-form">
                                  <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                    className="news-form">
                                    <input className="field-form w-input" maxLength="256" name="email" data-name="Email"
                                      placeholder="Your email" type="email" id="email" required="" />
                                    <div className="fake-submit_w">
                                      <input type="submit" data-wait="Wait..." className="submit-btn w-button" value="" />
                                      <div className="arrow-submit-form w-embed">
                                        <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fillRule="evenodd" clipRule="evenodd"
                                            d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z"
                                            fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                        </svg>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div className="card-svg_w">
                                <img
                                  src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c870fd66c6966c9776_MS%20(-)%20Creme.webp"
                                  loading="lazy" alt="" className="card-ms-svg" />
                                <div className="card-address">{project.address}</div>
                              </div>
                            </div>
                          </div>
                          <div className="list-contact_project">
                            <div className="footer-link-left"><a href="/news" className="footer-link">news</a><a
                              href="/legal-notice" className="footer-link no-wrap">Legal Notice</a></div>
                            {contactLinks.map((link, index) => (
                              <a key={index}
                                href={link.href}
                                {...(link.external && { target: "_blank" })}
                                className="link-contact w-inline-block">
                                <div className="line bottom"></div>
                                <div className="contact-link-project">
                                  <div>
                                    <div line="" className="title-link-contact">{link.title}</div>
                                    <div line="" className="content-link-contact">{link.content}</div>
                                  </div>
                                  <div className="arrow-submit-form w-embed">
                                    <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd"
                                        d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z"
                                        fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="line top"></div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="project-slider_w">
                    <div className="project-slider_list_w left w-dyn-list">
                      <div role="list" className="project-slider_list w-dyn-items">
                        {projectSlidesLeft.map((slide, index) => (
                          <div key={index} slider-name={slide.name} role="listitem" className="project-slider_item w-dyn-item">
                            <div className="slider-left project">
                              <img
                                src={slide.img}
                                loading="eager"
                                alt=""
                                sizes="100vw"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="project-slider_list_w right w-dyn-list">
                      <div role="list" className="project-slider_list w-dyn-items">
                        {projectSlidesRight.map((slide, index) => (
                          <div key={index} slider-name={slide.name} role="listitem" className="project-slider_item w-dyn-item">
                            <div className="slider-right project">
                              <img
                                src={slide.img}
                                loading="eager"
                                alt=""
                                sizes="100vw"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="project-slider_btn_w">
                      <div className="project-slider_btn_list_w w-dyn-list">
                        <div role="list" className="project-slider_btn_list w-dyn-items">
                          {projectButtons.map((projectBtn, index) => (
                            <div key={index} slider-name={projectBtn.name} role="listitem" className="project-slider_btn_item w-dyn-item">
                              <a data-hover-link-ignore="" flip-transition="" href={projectBtn.slug} className="project-slider-link w-inline-block">
                                <div className="project-slider_btn">
                                  <div className="info-project-left">
                                    <h2 className="h2-project-btn">{projectBtn.name}</h2>
                                    <div className="hide-tab">{projectBtn.location}</div>
                                  </div>
                                  <div className="hide-desk">{projectBtn.location}</div>
                                  <img
                                    src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697787feb77e66ac9ab5b2f7_MS%20(%2B)%20Color.webp"
                                    loading="lazy" alt="" className="ms-svg-banner project-list" />
                                  <div className="info-project-right">
                                    <div className="info-project-arrow hide-tab w-embed">
                                      <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                          d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z"
                                          fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                      </svg>
                                    </div>
                                    <div className="info-etiquette">
                                      <div className="hide-tab">{projectBtn.year}</div>
                                      <div>{projectBtn.type}</div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Trading
