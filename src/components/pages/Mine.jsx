import React from 'react'

const Mine = () => {

  const ecuadorProjects = [
    {
      id: "megarmi",
      name: "MEGARMI",
      description: "Located in a mineral-rich zone, this project includes open-pit and underground mining rights, currently in advanced exploration with promising geological surveys indicating high-grade ore reserves suitable for commercial-scale tokenization.",
      location: "https://www.google.com/maps?q=-4.107,-78.645"
    },
    {
      id: "nueva-fortuna",
      name: "NUEVA FORTUNA",
      description: "An established concession with a proven track record of consistent gold output over the past decade. Recent technological upgrades and strategic positioning enhance its processing capabilities and offer low-cost extraction potential.",
      location: "https://www.google.com/maps/place/1%C2%B006'00.0%22S+77%C2%B056'06.0%22W/@-1.1,-77.9375749,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-1.1!4d-77.935?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      id: "diamante",
      name: "DIAMANTE",
      description: "A newly licensed operation with significant potential for both gold and polymetallic minerals. Exploration data highlights deep vein structures, and the site is prepared for immediate pilot extraction and token-backed expansion funding.",
      location: "https://www.google.com/maps?q=-3.756,-78.631"
    },
    {
      id: "zamora-minerzam",
      name: "ZAMORA MINERZAM",
      description: "A newly licensed operation with significant potential for both gold and polymetallic minerals. Exploration data highlights deep vein structures, and the site is prepared for immediate pilot extraction and token-backed expansion funding.",
      location: "https://www.google.com/maps?q=-3.756,-78.631"
    },
    {
      id: "aluvi",
      name: "ALUVI",
      description: "Proyecto Minero - Aluvi Ecuaminas Nangaritza. An alluvial gold project with extensive surface deposits, ideal for eco-friendly extraction techniques. This project lends itself well to phased development, community-based crowdfunding, and sustainable practices.",
      location: "https://www.google.com/maps?q=-4.107,-78.645"
    },
    {
      id: "ruta-de-cobre",
      name: "RUTA DE COBRE",
      description: "Primarily a copper mine, this project offers valuable gold by-products in its composition, providing an excellent opportunity for diversification and tokenization. RBC will be responsible for securing operational rights, permits, and licenses.",
      location: "https://www.google.com/maps?q=-4.107,-78.645"
    }
  ];

  const services = ecuadorProjects.map(p => p.name);
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
                          <div line="">Mine</div>
                          <div line="">2025</div>
                        </div>
                        <div className="test-block">
                          <div className="test-block in project">
                            <div className="img-project-flip">
                              <img loading="lazy"
                                src="/images/home-slider/Mine1.jpg"
                                alt="" sizes="100vw"
                                srcSet="/images/home-slider/Mine1.jpg"
                                className="img-projet-left" />
                            </div>
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
                   
                      </div>
                      <h1 reveal-letter="" className="h1-project text-gold">Mine</h1>
                    </div>
                    <div className="project-hero-right">
                      <img
                        src="images/home/about-banner/Mining.svg"
                        loading="lazy" alt="" sizes="100vw"
                        srcSet="images/home/about-banner/Mining.svg"
                        className="project-hero-left-img" />
                      <div className="voile-project"></div>
                    </div>
                  </section>
                  <section className="section-h">
                    <div className="container desc-project">
                      <h2 line="" className="desc-projet">
                        Our Ecuador Projects: A Foundation of Rich Potential
                      </h2>
                      <p className="desc-projet-sub" style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '40px', maxWidth: '800px', color: '#1a1a1a', opacity: '0.8' }}>
                        The Joint Venture Agreement  <br />  specifically targets five exceptional  mining projects   <br />  The Joint Venture Agreement specifically  <br />  targets five exceptional mining projects
                      </p>
                      <div className="list-services">
                        <div className="services_list_w w-dyn-list">
                          <div className="services_list w-dyn-items" style={{ display: 'flex', flexDirection: 'column', padding: '20px 0' }}>
                            {services.map((item, index) => (
                              <div key={index} className="services_item w-dyn-item">
                                <div className="line bottom"></div>

                                <div className="div-block-3">
                                  <div className="code-embed-3 w-embed">
                                    {/* SVG */}
                                  </div>

                                  <a href={`#${ecuadorProjects[index].id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <h3 className="heading">{item}</h3>
                                  </a>
                                </div>

                                <div className="rank">
                                  {String(index + 1).padStart(2, "0")}
                                </div>

                                {index === services.length - 1 && (
                                  <div className="line top"></div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </section>
                  <section className="section-h">
                    <div className="container">
                      <div className="projects-grid">
                        {ecuadorProjects.map(project => (
                          <div key={project.id} id={project.id} className="ecuador-project-item">
                            <h2 className="project-title">{project.name}</h2>
                            <p className="project-desc">{project.description}</p>
                            <a href={project.location} target="_blank" rel="noopener noreferrer" className="location-map-card">
                              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                              </svg>
                              <span className="label">Location Map</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                  <section className="section-h collaboration-section">
                    <div className="container">
                      <div className="collaboration-grid">
                        <div className="collaboration-left">
                          <h2 className="collaboration-title">Benefits of Our Ghana Collaborations</h2>
                          <div className="collaboration-text-wrapper">
                            <p className="collaboration-text">
                              <strong>Increased product and service offerings:</strong> Through our partnerships, we can offer a wider range of bullion-related products and services to meet the diverse needs of our industry.
                            </p>
                            <p className="collaboration-text">
                              <strong>Enhanced expertise:</strong> By collaborating with industry leaders, we gain access to their expertise and knowledge, which we can leverage to provide bullion investors with better investment instruments.
                            </p>
                            <p className="collaboration-text">
                              <strong>Global reach:</strong> Our partnerships allow us to expand our reach and service clients in new markets. <strong>Innovation:</strong> Through collaboration, we can foster innovation and develop new business models and services that benefit our clients.
                            </p>
                            <p className="collaboration-text">
                              <strong>Increased product and service offerings:</strong> Through our partnerships, we can offer a wider range of bullion-related products and services to meet the diverse needs of our industry.
                            </p>
                          </div>
                        </div>
                        <div className="collaboration-right">
                          <img
                            src="https://royalbullioncapital.com/wp-content/uploads/2025/01/Cert-of-Incorporation_Crescent-Metals-Minerals-Ghana-Ltd-2-725x1024.jpg"
                            alt="Ghana Certificate of Incorporation"
                            className="collaboration-img"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="project-hero_w test">
                    <div className="gallery_list_w w-dyn-list">
                      <div role="list" className="gallery_list w-dyn-items">
                        <div role="listitem" className="gallery_item w-dyn-item w-dyn-repeater-item">
                          <img src="https://royalbullioncapital.com/wp-content/uploads/2026/04/Location-RBC-1024x592-1.jpg" loading="eager" reveal-clip="" alt="M" sizes="100vw" />
                        </div>
                        <div role="listitem" className="gallery_item w-dyn-item w-dyn-repeater-item">
                          <img src="/images/home-slider/Mine1.jpg" loading="eager" reveal-clip="" alt="M" sizes="100vw" />
                        </div>
                        <div role="listitem" className="gallery_item w-dyn-item w-dyn-repeater-item">
                          <img src="/images/home-slider/Mine2.jpg" loading="eager" reveal-clip="" alt="L" sizes="100vw" />
                        </div>
                        <div role="listitem" className="gallery_item w-dyn-item w-dyn-repeater-item">
                          <img src="/images/home-slider/Mine1.jpg" loading="eager" reveal-clip="" alt="S" sizes="100vw" />
                        </div>
                        <div role="listitem" className="gallery_item w-dyn-item w-dyn-repeater-item">
                          <img src="/images/home-slider/Mine2.jpg" loading="eager" reveal-clip="" alt="M" sizes="100vw" />
                        </div>
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
                                <div className="card-address">Place des Vosges, Paris 4</div>
                              </div>
                            </div>
                          </div>
                          <div className="list-contact_project">
                            <a href="mailto:support@royalbullioncapital.com" className="link-contact w-inline-block">
                              <div className="line bottom"></div>
                              <div className="contact-link-project">
                                <div>
                                  <div line="" className="title-link-contact">Mail</div>
                                  <div line="" className="content-link-contact">support@royalbullioncapital.com</div>
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
                            <a href="https://wa.me/+9715752082" target="_blank" className="link-contact w-inline-block">
                              <div className="line bottom"></div>
                              <div className="contact-link-project">
                                <div>
                                  <div line="" className="title-link-contact">WhatsApp</div>
                                  <div line="" className="content-link-contact">Let's talk</div>
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
                            <a href="tel:+97145752082" className="link-contact w-inline-block">
                              <div className="line bottom"></div>
                              <div className="contact-link-project">
                                <div>
                                  <div line="" className="title-link-contact">Phone</div>
                                  <div line="" className="content-link-contact">+971 4 575 2082</div>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="project-slider_w">
                    <div className="project-slider_list_w left w-dyn-list">
                      <div role="list" className="project-slider_list w-dyn-items">
                        <div slider-name="Mine" role="listitem" className="project-slider_item w-dyn-item">
                          <div className="slider-left project"><img src="/images/home-slider/Mine1.jpg" loading="eager" alt="" sizes="100vw" /></div>
                        </div>
                        <div slider-name="Refine" role="listitem" className="project-slider_item w-dyn-item">
                          <div className="slider-left project"><img src="/images/home-slider/refine1.jpg" loading="eager" alt="" sizes="100vw" /></div>
                        </div>
                        <div slider-name="Trading" role="listitem" className="project-slider_item w-dyn-item">
                          <div className="slider-left project"><img src="/images/home-slider/Trading1.jpg" loading="eager" alt="" sizes="100vw" /></div>
                        </div>
                        <div slider-name="1 MG" role="listitem" className="project-slider_item w-dyn-item">
                          <div className="slider-left project"><img src="/images/home-slider/1mg1.jpg" loading="eager" alt="" sizes="100vw" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="project-slider_list_w right w-dyn-list">
                      <div role="list" className="project-slider_list w-dyn-items">
                        <div slider-name="Mine" role="listitem" className="project-slider_item w-dyn-item">
                          <div className="slider-right project"><img src="/images/home-slider/Mine2.jpg" loading="eager" alt="" sizes="100vw" /></div>
                        </div>
                        <div slider-name="Refine" role="listitem" className="project-slider_item w-dyn-item">
                          <div className="slider-right project"><img src="/images/home-slider/refine2.jpg" loading="eager" alt="" sizes="100vw" /></div>
                        </div>
                        <div slider-name="Trading" role="listitem" className="project-slider_item w-dyn-item">
                          <div className="slider-right project"><img src="/images/home-slider/Trading2.jpg" loading="eager" alt="" sizes="100vw" /></div>
                        </div>
                        <div slider-name="1 MG" role="listitem" className="project-slider_item w-dyn-item">
                          <div className="slider-right project"><img src="/images/home-slider/1mg2.jpg" loading="eager" alt="" sizes="100vw" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="project-slider_btn_w">
                      <div className="project-slider_btn_list_w w-dyn-list">
                        <div role="list" className="project-slider_btn_list w-dyn-items">
                          <div slider-name="Mine" role="listitem" className="project-slider_btn_item w-dyn-item">
                            <a data-hover-link-ignore="" flip-transition="" href="/mine" className="project-slider-link w-inline-block">
                              <div className="project-slider_btn" style={{ backgroundColor: '#62a86fff' }}>
                                <div className="info-project-left">
                                  <h2 className="h2-project-btn">Mine</h2>
                                  <div className="hide-tab">Mine</div>
                                </div>
                                <div className="hide-desk">Mine</div>
                                <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697787feb77e66ac9ab5b2f7_MS%20(%2B)%20Color.webp" loading="lazy" alt="" className="ms-svg-banner project-list" />
                                <div className="info-project-right">
                                  <div className="info-project-arrow hide-tab w-embed">
                                    <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                    </svg>
                                  </div>
                                  <div className="info-etiquette">
                                    <div className="hide-tab">2025</div>
                                    <div>Residential</div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div slider-name="Refine" role="listitem" className="project-slider_btn_item w-dyn-item">
                            <a data-hover-link-ignore="" flip-transition="" href="/refine" className="project-slider-link w-inline-block">
                              <div className="project-slider_btn" style={{ backgroundColor: '#4e4846ff' }}>
                                <div className="info-project-left">
                                  <h2 className="h2-project-btn">Refine</h2>
                                  <div className="hide-tab">Refine</div>
                                </div>
                                <div className="hide-desk">Refine</div>
                                <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697787feb77e66ac9ab5b2f7_MS%20(%2B)%20Color.webp" loading="lazy" alt="" className="ms-svg-banner project-list" />
                                <div className="info-project-right">
                                  <div className="info-project-arrow hide-tab w-embed">
                                    <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                    </svg>
                                  </div>
                                  <div className="info-etiquette">
                                    <div className="hide-tab">2025</div>
                                    <div>Residential</div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div slider-name="Trading" role="listitem" className="project-slider_btn_item w-dyn-item">
                            <a data-hover-link-ignore="" flip-transition="" href="/trading" className="project-slider-link w-inline-block">
                              <div className="project-slider_btn" style={{ backgroundColor: '#f85656ff' }}>
                                <div className="info-project-left">
                                  <h2 className="h2-project-btn">Trading</h2>
                                  <div className="hide-tab">Trading</div>
                                </div>
                                <div className="hide-desk">Trading</div>
                                <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697787feb77e66ac9ab5b2f7_MS%20(%2B)%20Color.webp" loading="lazy" alt="" className="ms-svg-banner project-list" />
                                <div className="info-project-right">
                                  <div className="info-project-arrow hide-tab w-embed">
                                    <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                    </svg>
                                  </div>
                                  <div className="info-etiquette">
                                    <div className="hide-tab">2025</div>
                                    <div>Residential</div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div slider-name="1 MG" role="listitem" className="project-slider_btn_item w-dyn-item">
                            <a data-hover-link-ignore="" flip-transition="" href="/1-mg" className="project-slider-link w-inline-block">
                              <div className="project-slider_btn" style={{ backgroundColor: 'hsla(69, 100%, 64%, 1.00)' }}>
                                <div className="info-project-left">
                                  <h2 className="h2-project-btn">1 MG</h2>
                                  <div className="hide-tab">1 MG</div>
                                </div>
                                <div className="hide-desk">1 MG</div>
                                <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697787feb77e66ac9ab5b2f7_MS%20(%2B)%20Color.webp" loading="lazy" alt="" className="ms-svg-banner project-list" />
                                <div className="info-project-right">
                                  <div className="info-project-arrow hide-tab w-embed">
                                    <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                    </svg>
                                  </div>
                                  <div className="info-etiquette">
                                    <div className="hide-tab">2025</div>
                                    <div>Residential</div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
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

export default Mine

