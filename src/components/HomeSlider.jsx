import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const HomeSlider = () => {
  const navigate = useNavigate();
  

  const handleProjectClick = (slug) => {
    if (slug === '1-mg') {
      navigate('/1-mg');
    } else {
      navigate(`/${slug}`);
    }
  };

  return (
    <div>
      <div className="page-wrapper">
        <main data-taxi="" className="main-wrapper">
          <div data-taxi-view="" className="page_view">
            <div className="voile"></div>
            <div className="home-slider_w">
              <div className="home-slider_list_w left w-dyn-list">
                <div role="list" className="home-slider_list w-dyn-items">
                  {projects.map((project, index) => (
                    <div key={index} slider-name={project.name} role="listitem" className="home-slider_item w-dyn-item">
                      <div className="slider-left">
                        <img
                          src={project.leftImage}
                          loading="lazy"
                          fetchPriority="high"
                          alt={project.name}
                          sizes="100vw"
                          srcSet={project.leftImageSet}
                          className="image-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="home-slider_list_w right w-dyn-list">
                <div role="list" className="home-slider_list w-dyn-items">
                  {projects.map((project, index) => (
                    <div key={index} slider-name={project.name} role="listitem" className="home-slider_item w-dyn-item">
                      <div className="slider-right">
                        <img
                          src={project.rightImage}
                          loading="lazy"
                          alt={project.name}
                          sizes="100vw"
                          srcSet={project.rightImageSet}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="home-slider_btn_w">
                <div className="home-slider_btn_list_w w-dyn-list">
                  <div role="list" className="home-slider_btn_list w-dyn-items">
                    {projects.map((project, index) => (
                      <div key={index} slider-name={project.name} role="listitem" className="home-slider_btn_item w-dyn-item">
                        <div
                          data-hover-link-ignore=""
                          flip-transition=""
                          onClick={() => handleProjectClick(project.slug)}
                          className="home-slider-link w-inline-block"
                          style={{ cursor: 'pointer' }}
                        >
                          <div style={{ backgroundColor: project.bgColor }} className="home-slider_btn">
                            <div id="w-node-_4e9b3e44-3442-f550-c0f8-7dd75039ff88-45e54186" className="info-project-left">
                              <h2 className="h2-project-btn">{project.name}</h2>
                              <div className="hide-tab">{project.location}</div>
                            </div>
                            <div id="w-node-d0ae970f-2a45-ff3c-4275-6092087c13d3-45e54186" className="hide-desk">{project.locationDesk}</div>
                            <div id="w-node-c1a0c1b1-3397-8312-a74c-41bab103eaa2-45e54186" className="code-embed-9 w-embed">
                              <svg width="100%" height="100%" viewBox="0 0 192 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g style={{ mixBlendMode: 'overlay' }} filter="url(#filter0_iiii_5096_5483)">
                                  <path d="M53.8383 31.0883H48.1706V62.1766H53.8383V31.0883Z" fill="#EDE7DE" fillOpacity="0.01" />
                                  <path d="M0 0H48.1706L48.1706 31.0883H34.9857C33.1876 31.0883 31.73 32.5537 31.73 34.3614V79.9999H0V0Z" fill="#EDE7DE" fillOpacity="0.01" />
                                  <path d="M102 1.6376e-06V80H70.2792V34.3614C70.2792 32.5537 68.8215 31.0883 67.0234 31.0883L53.8383 31.0883L53.8384 1.6376e-06H102Z" fill="#EDE7DE" fillOpacity="0.01" />
                                  <path d="M152.005 34.3066V40.0046H127.581C118.976 40.0046 112 33.0288 112 24.4239V15.5807C112 6.97567 118.976 0 127.581 0H192V34.3066H152.005Z" fill="#EDE7DE" fillOpacity="0.01" />
                                  <path d="M152.005 45.6935V40.0046H176.419C185.024 40.0046 192 46.9803 192 55.5853V64.4193C192 73.0243 185.024 80 176.419 80H112V45.6935H152.005Z" fill="#EDE7DE" fillOpacity="0.01" />
                                </g>
                                <defs>
                                  <filter id="filter0_iiii_5096_5483" x="-10" y="-10" width="212" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="3" dy="-3" />
                                    <feGaussianBlur stdDeviation="1.5" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5096_5483" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="10" dy="-10" />
                                    <feGaussianBlur stdDeviation="7.5" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="effect1_innerShadow_5096_5483" result="effect2_innerShadow_5096_5483" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="-3" dy="3" />
                                    <feGaussianBlur stdDeviation="1.5" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                                    <feBlend mode="normal" in2="effect2_innerShadow_5096_5483" result="effect3_innerShadow_5096_5483" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="-10" dy="10" />
                                    <feGaussianBlur stdDeviation="7.5" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="effect3_innerShadow_5096_5483" result="effect4_innerShadow_5096_5483" />
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                            <div id="w-node-_67582081-cd7d-f625-6238-f42de9ee53db-45e54186" className="info-project-right">
                              <div className="info-project-arrow hide-tab w-embed">
                                <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                </svg>
                              </div>
                              <div className="info-etiquette">
                                <div className="hide-tab">{project.type}</div>
                                <div className="hide-tab">{project.year}</div>
                                <div className="hide-desk">{project.type}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeSlider;