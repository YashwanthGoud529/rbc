import React from 'react';
import './company.css'; // Optional: for custom styles if you want to separate, but we'll use inline styles or module

const Company = () => {
    return (
        <div>
            <div className="page-wrapper">
                <div data-taxi="" className="main-wrapper">
                    <div data-taxi-view="" className="page_view">
                        <div className="container landing">
                            {/* Team Grid Section */}
                            <div className="ms-anime_w">
                                <div className="grid-info-text">
                                    {/* FRAME 1: Image Block - occupies 1fr */}
                                    <div className="image-frame">
                                        <img
                                            loading="lazy"
                                            data-reveal-clip=""
                                            alt="Meryl Motyka Portrait - Royal Bullion Capital leadership"
                                            className="meryl-img new"
                                            src="https://royalbullioncapital.com/wp-content/uploads/2026/01/Gemini_Generated_Image_lvgc7ylvgc7ylvgc-e1769779256588.png"
                                            style={{ clipPath: 'inset(0%)' }}
                                        />
                                    </div>

                                    {/* FRAME 2: Text Content Card - occupies 1fr */}
                                    <div id="w-node-_316e9b7a-9c37-69fb-821a-eefccda2e4ab-89c72768" className="info-simon">
                                        {/* Mobile-specific image (hidden on desktop by CSS) */}
                                        <img
                                            loading="lazy"
                                            alt="Company Overview - mobile visual"
                                            className="meryl-img mob"
                                            src="https://royalbullioncapital.com/wp-content/uploads/2026/01/Gemini_Generated_Image_lvgc7ylvgc7ylvgc-e1769779256588.png"
                                        />

                                        {/* Company Name with animated line-mask effect */}
                                        <h2 line="" className="info-mersi-name" aria-label="Company Overview">
                                            <div className="line-mask-child-mask" aria-hidden="true">
                                                <div className="line-child">Company Overview</div>
                                            </div>
                                        </h2>

                                        {/* badge / tagline for refinement */}
                                        <div className="company-badge">Since 2014 </div>

                                        {/* Main descriptive content */}
                                        <h3>
                                            RBC is more than just a business, It is a trusted partner in your journey toward financial growth and security.
                                            <br /><br />

                                        </h3>

                                        {/* Extra info / trust indicators */}
                                        <div className="info-footer">
                                            <span className="info-tag">
                                                With over a decade of experience in the bullion industry, Royal Bullion Capital stands as a beacon of excellence and reliability. Our deep-rooted expertise spans across gold mining, refining, and trading, allowing us to offer a comprehensive suite of services that meet the highest industry standards.
                                            </span>

                                        </div>
                                        <div className="info-footer">

                                            <span className="info-tag">
                                                Our seasoned team of professionals brings a wealth of knowledge and a track record of success, ensuring that every transaction is executed with precision and care.


                                            </span>
                                        </div>







                                        <div className="second-item">
                                            <h2 line="" className="info-mersi-name" aria-label="Company Overview">
                                                <div className="line-mask-child-mask" aria-hidden="true">
                                                    <div className="line-child">Sponsors & Partners</div>
                                                </div>
                                            </h2>


                                            <h3>
                                             MGC 2026 is supported by organisations that strengthen trust across the precious metals ecosystem.
                                                <br /><br />

                                            </h3>

                                            <div className="info-footer">
                                                <span className="info-tag">
                                                   Organised by the Malaysia Gold Association (MGA) and supported by MATRADE and MyCEB, with Emirates Gold as Title Sponsor and Public Gold as Platinum Sponsor. 
                                                </span>

                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;

