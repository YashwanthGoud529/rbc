


import React from 'react'
import './divisions_content.css'

const Divisions = () => {
    // Data for the sticky animation steps (Process Steps 01-07)
    const processSteps = [
        {
            id: '8c3e6568-ad90-cca6-2a7e-ce466ffb8435',
            img: '/images/home-slider/Mine1.jpg',
            title: 'RBC Gold &amp; Mine',
            num: '01',
            desc: 'Royal Bullion Capital operates its own gold mines — the origin of everything. <br />Every ounce of gold in our supply chain is extracted from RBC-owned concessions, giving us complete control over quality, traceability, and output from the very first step.',
            flipImg: '/images/home-slider/Mine2.jpg',
            stepClass: ''
        },
        {
            id: '701424e4-9d68-d1e9-174b-c5edae7e4574',
            img: '/images/home-slider/refine1.jpg',
            title: 'RBC Gold &amp; Refinery',
            num: '02',
            desc: 'Once extracted, gold ore moves directly into our own in-house refinery. <br />We process, purify and certify every batch to 999.9 purity — four nines — with zero reliance on external refiners.',
            flipImg: '/images/home-slider/refine2.jpg',
            stepClass: 'cream'
        },
        {
            id: '1abe8661-5e7b-efc6-9086-9c5a48d1ede0',
            img: '/images/home-slider/Trading1.jpg',
            title: 'RBC Bullion &amp; Trading',
            num: '03',
            desc: 'Certified gold bars move from the refinery to our professional trading desk. <br />RBC distributes investment-grade bullion to institutional buyers, family offices, and global partners — at competitive, direct prices with no intermediary margin.',
            flipImg: '/images/home-slider/Trading2.jpg',
            stepClass: ''
        },
        {
            id: '0968e337-2088-e1b0-9dec-d8efffa5397f',
            img: '/images/home-slider/1mg1.jpg',
            title: '1mg Gold &amp; App',
            num: '04',
            desc: 'The 1mg Gold consumer app brings gold investing to everyone. <br />Users can buy physical gold from as little as 1 milligram, track live prices, and request delivery from 10 grams — all backed by real gold in RBC\'s insured Dubai vault.',
            flipImg: '/images/home-slider/1mg2.jpg',
            stepClass: 'cream'
        },
        {
            id: 'a54e9091-9819-1ea8-1bba-ea42a3a35e1d',
            img: '/images/home-slider/Mine2.jpg',
            title: 'Full Chain &amp; Custody',
            num: '05',
            desc: 'Gold never leaves the RBC environment between mine and market. <br />This full-chain custody eliminates third-party risk entirely — delivering a level of transparency and security that no gold company using external partners can match.',
            flipImg: '/images/home-slider/Mine1.jpg',
            stepClass: ''
        },
        {
            id: 'b2988c5f-0e90-61d8-9ada-8da02bdc1600',
            img: '/images/home-slider/refine2.jpg',
            title: 'Purity &amp; Certification',
            num: '06',
            desc: 'Every bar that leaves our refinery is hallmarked, documented, and traceable by a unique identifier in the RBC custody system. <br />Our process is fully accredited — ensuring worldwide market acceptance for institutional clients.',
            flipImg: '/images/home-slider/refine1.jpg',
            stepClass: 'cream'
        },
        {
            id: '7e3b3493-eebd-0db5-8ece-d8e3215a92f6',
            img: '/images/home-slider/Trading2.jpg',
            title: 'Secure &amp; Vaulted',
            num: '07',
            desc: 'All certified gold is stored in RBC\'s fully insured and audited Dubai vault. <br />Available for withdrawal by institutional clients, accessible to 1mg Gold app users, and ready for delivery orders globally — secured at every step.',
            flipImg: '/images/home-slider/Trading1.jpg',
            stepClass: ''
        }
    ];

    // Data for the Parcours (Residential, Investor, Retail)
    const parcoursItems = [
        {
            id: '1',
            title: 'Residential',
            subTitle: 'for user',
            desc: 'Tailor-made support, step by step.<br />‍<br />We move forward in co-construction, with validation at each key stage.<br /><br />The project is built progressively, in integrating your feedback and your way of living in the spaces.',
            listItems: [
                'In-depth analysis of your uses and priorities',
                'Definition of architectural intentions',
                'Successive adjustments of plans and volumes',
                'Guided selections of materials and atmospheres',
                'Continuous budget trade-offs',
                '<strong>Creation of administrative files</strong><strong> : </strong>requests to the management company, necessary authorizations, exchanges with urban planning if applicable',
                'Support until delivery'
            ],
            footerText: 'A reassuring process, designed to allow you to decide with serenity.'
        },
        {
            id: '2',
            title: 'Residential',
            subTitle: 'for investor',
            desc: 'A more efficient approach, value and desirability-oriented.<br /><br />We quickly propose a first, already advanced version of the project, aligned with the brief and the budget.',
            listItems: [
                'Strategic analysis of the property and its potential',
                'Clear and immediately usable concept proposal',
                'Optimization of plans and uses',
                'Choice of durable and desirable materials',
                'Precise trade-offs oriented towards profitability and attractiveness',
                'Assembly of administrative files necessary for the project (management company, urban planning as applicable)',
                'Smooth and controlled implementation'
            ],
            footerText: 'A method designed to create distinctive spaces, without superfluity.'
        },
        {
            id: '3',
            title: 'Retail concept',
            subTitle: 'for brand',
            desc: 'A process adapted to the challenges of brand, visibility and operation.<br /><br />We design spaces that tell an identity, attract attention and function daily.<br /><br />The pace is often faster, constraints multiple, and requirements high.',
            listItems: [
                'Immersion in the brand\'s world and values',
                'Translation of identity into space',
                'Design of the customer journey and flows',
                'Integration of technical, regulatory and operational constraints',
                '<strong>Management of administrative authorizations</strong> : facade, signage, ERP security, PMR accessibility',
                'Coordination with different stakeholders and respect for the opening schedule'
            ],
            footerText: 'Every detail is thought out to serve the image, the usage and regulatory compliance at the same time.'
        }
    ];

    // Data for the Footer Support List
    const supportListItems = [
        'Artistic direction and material board',
        'Detailed design plans and drawings',
        'Realistic 3D projections and renderings',
        'Consultation file for construction preparation',
        'Administrative authorization file',
        'Construction site support and execution monitoring',
        'Furniture and decoration selections'
    ];

    // Data for the Projects Grid
    const projectImages = [
        'https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a859206f8dac87c4c0b553_MERSI%20x%20LEVALLOIS-2%20(1).webp',
        'https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c648569d5ab75b8d1a3_MERSI%20x%20MAURICE_-6.webp',
        'https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c20c68e51f70e07786b_CC_MERSIxBERRI-24%20(1).webp',
        'https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16.webp',
        'https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85beae7ee6ecaf8863ba3_CC_Mersi%20x%20Restaurant%20COOK-2.webp',
        'https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ec2802ca327082f12fb8c_Cover%20R.webp',
        'https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcffd7c4bc95194bed857_Cover%20R.webp',
        'https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a858a21313048249c36dc2_MERSI%20x%20AURE%CC%81LIEN%20COHEN-4%20(1).webp',
        'https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd9281a44841220d126ec_Cover%20R.webp',
        'https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd34dddd61db985f47bed_Cover%20R.webp'
    ];

    return (
        <div>
            <div class="page-wrapper">
                <main data-taxi="" class="main-wrapper">
                    <div data-taxi-view="" class="page_view">
                        <section class="section about">
                            <div class="container about-hero">
                                <div class="hero-about_w process">
                                    <div></div>
                                    <div class="h1-about_w">
                                        <div class="img-to-scale-process"><img
                                            src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697ce16e9f8274e0039ec7ae_Frame%20-%20Process%20-%20Header.webp"
                                            loading="lazy" alt="" class="cadre-hero-agence process" /><img
                                                src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/69a552a790116dace0e230c7_MERSI_TONNEMANI-16.webp"
                                                loading="lazy" sizes="(max-width: 2800px) 100vw, 2800px"
                                                srcset="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/69a552a790116dace0e230c7_MERSI_TONNEMANI-16-p-500.webp 500w, https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/69a552a790116dace0e230c7_MERSI_TONNEMANI-16-p-800.webp 800w, https://royalbullioncapital.com/wp-content/uploads/2026/03/5571.jpg 1080w, https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/69a552a790116dace0e230c7_MERSI_TONNEMANI-16-p-1600.webp 1600w, https://royalbullioncapital.com/wp-content/uploads/2026/03/5571.jpg 2000w, https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/69a552a790116dace0e230c7_MERSI_TONNEMANI-16-p-2600.webp 2600w, https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/69a552a790116dace0e230c7_MERSI_TONNEMANI-16.webp 2800w"
                                                alt="" /></div>
                                    </div>
                                    <div class="about-hero-bottom">
                                        <h1 reveal-letter="" class="h1-process">
                                            Three Divisions. One
                                            <span className='text-gold'>  Gold </span> Standard.
                                        </h1>

                                    </div>
                                </div>
                                <div class="after-clip">
                                    <div class="fakediv"></div>
                                    <div class="hero-about-info-bottom hide-tab">
                                        <h2 class="title-after-clip">RBC Gold Mine</h2>
                                        <h2 line="" class="h2-subtitle-process">our process</h2>
                                        <h2 class="title-after-clip">RBC Gold Refinery</h2>

                                    </div>
                                    <div class="etiquette-after-clip">
                                        <div class="home-slider_btn process-after-clip"><img
                                            src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/6982218d53b938ebc5c249ac_M.webp"
                                            loading="eager" alt="" class="ms-svg-banner process" />
                                            <div class="info-project-left">
                                                <h2 class="h2-project-btn process">
                                                    RBC is the only gold institution in Dubai that owns the full chain from the mine that extracts the gold, to the refinery that purifies it, to the trading desk that distributes it globally. Three divisions, zero intermediaries.
                                                </h2>
                                            </div><img
                                                src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/698221a58719a7f778685a66_S.webp"
                                                loading="eager" alt="" class="ms-svg-banner project-list" />
                                        </div>
                                    </div>
                                    <div class="hero-about-info-bottom">
                                        <h2 class="title-after-clip">RBC Bullion Trading</h2>
                                        <h2 line="" class="h2-subtitle-process hide-tab">our process</h2>
                                        <h2 class="title-after-clip">1mg Gold App</h2>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="division-section">
                            <div className="container">
                                <div className="division-grid">
                                    {/* Left Column: Image Gallery */}
                                    <div className="division-content-left">
                                        <div className="image-gallery">
                                            <div className="gallery-item-large">
                                                <img
                                                    src="https://royalbullioncapital.com/wp-content/uploads/2024/08/GoldRefinery-Slide.jpg"
                                                    alt="Gold Refining"
                                                    className="gallery-img"
                                                />
                                            </div>
                                            <div className="gallery-item-small">
                                                <img
                                                    src="https://royalbullioncapital.com/wp-content/uploads/2024/07/gold-mine-e1773676294903.jpg"
                                                    alt="Gold Mine Operations"
                                                    className="gallery-img"
                                                />
                                            </div>
                                            <div className="gallery-item-small">
                                                <img
                                                    src="https://royalbullioncapital.com/wp-content/uploads/2025/01/gold-mine-2.jpg"
                                                    alt="Gold Mine Exploration"
                                                    className="gallery-img"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Headline & Features */}
                                    <div className="division-content-right">
                                        <h1 className="headline-main">We Own the <span className='text-gold'>Source.</span></h1>

                                        <h3 className="subheadline-mine">What Does It Mean to Own a Gold Mine?</h3>
                                        <p className="content-paragraph">
                                            A gold mine is where gold-bearing rock called ore is extracted from the earth. Most companies buy this from a third-party operator. RBC does not. By owning and operating our own mines, we control the entire upstream of the gold supply chain.
                                        </p>
                                        <p className="content-paragraph">
                                            This means full traceability on every ounce of gold from the moment it leaves the ground — which translates to better pricing, complete transparency, and zero supply chain uncertainty for every partner and investor downstream.
                                        </p>

                                        <div className="feature-cards-container">
                                            {/* Geological Surveying */}
                                            <div className="feature-card">
                                                <div className="feature-icon-wrapper">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                </div>
                                                <div className="feature-content">
                                                    <h3>Geological Surveying</h3>
                                                    <p>Modern surveys identify high-grade gold zones. RBC continuously surveys adjacent land across all concessions to find new high-potential targets.</p>
                                                </div>
                                            </div>

                                            {/* Extraction */}
                                            <div className="feature-card">
                                                <div className="feature-icon-wrapper">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                                                </div>
                                                <div className="feature-content">
                                                    <h3>Extraction</h3>
                                                    <p>Advanced, sustainable extraction technology removes ore from the earth with precision — minimising waste, environmental impact, and energy usage.</p>
                                                </div>
                                            </div>

                                            {/* On-Site Processing */}
                                            <div className="feature-card">
                                                <div className="feature-icon-wrapper">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                                </div>
                                                <div className="feature-content">
                                                    <h3>On-Site Processing</h3>
                                                    <p>Initial separation of gold-bearing material from waste rock. Concentrated output is prepared for transfer to the RBC refinery.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="section">
                            <div class="container sticky-anim">
                                {processSteps.map((step) => (
                                    <div class="step__w" key={step.id}>
                                        <img
                                            src={step.img}
                                            loading="lazy"
                                            sizes="(max-width: 1024px) 100vw, 1024px"
                                            srcset={step.imgSrcSet || `${step.img} 1024w`}
                                            alt="" class="step-img" />
                                        <div id={`w-node-_${step.id}-5f60def8`} class={`step-info ${step.stepClass}`}>
                                            <div class="step-title">
                                                <h2 class="heading-3" dangerouslySetInnerHTML={{ __html: step.title }}></h2>
                                                <h2 class="heading-3">{step.num}</h2>
                                            </div>
                                            <div class="div-block-7">
                                                <h2 class="h2-project-btn process">our</h2>
                                                <div class="block-img-process-info">
                                                    <div class="test-block in">
                                                        <div class="img-project-flip">
                                                            <img loading="lazy" src={step.flipImg} alt="" class="img-projet-left" />
                                                        </div>
                                                    </div>
                                                    <div class="code-embed-2 w-embed">
                                                        {/* SVG is static, keeping it inline for simplicity or could be component */}
                                                        <svg width="100%" height="100%" viewBox="0 0 234 284" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_iiii_4403_1604)">
                                                                <path d="M230.5 3.5V280.5H3.5V3.5H230.5Z" stroke="black" strokeOpacity="0.01" strokeWidth="7" />
                                                            </g>
                                                            <defs>
                                                                <filter id="filter0_iiii_4403_1604" x="-6" y="-10" width="250" height="300" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="3" dy="-3" />
                                                                    <feGaussianBlur stdDeviation="1.5" />
                                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                                                                    <feBlend mode="hard-light" in2="shape" result="effect1_innerShadow_4403_1604" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="10" dy="-10" />
                                                                    <feGaussianBlur stdDeviation="5" />
                                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                                                    <feBlend mode="hard-light" in2="effect1_innerShadow_4403_1604" result="effect2_innerShadow_4403_1604" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="-3" dy="3" />
                                                                    <feGaussianBlur stdDeviation="1.5" />
                                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.38 0" />
                                                                    <feBlend mode="overlay" in2="effect2_innerShadow_4403_1604" result="effect3_innerShadow_4403_1604" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="-6" dy="6" />
                                                                    <feGaussianBlur stdDeviation="5" />
                                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0" />
                                                                    <feBlend mode="overlay" in2="effect3_innerShadow_4403_1604" result="effect4_innerShadow_4403_1604" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <h2 class="h2-project-btn process">process</h2>
                                            </div>
                                            <div class="info-p-process">
                                                <h2 class="h2-project-btn info-process" dangerouslySetInnerHTML={{ __html: step.desc }}></h2>
                                                <div class="space-120"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <footer class="footer">
                            <div class="container-footer">
                                <div class="container-top-footer">

                                    <div class="flex-40">
                                        <a href="mailto:support@royalbullioncapital.com" class="contact-footer w-inline-block">
                                            <div>mail</div>
                                            <div class="arrow-contact-link w-embed">
                                                <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="https://wa.me/+97145752082" target="_blank" class="contact-footer w-inline-block">
                                            <div>whatsapp</div>
                                            <div class="arrow-contact-link w-embed">
                                                <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="tel:+97145752082" class="contact-footer w-inline-block">
                                            <div>phone</div>
                                            <div class="arrow-contact-link w-embed">
                                                <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="grid-footer">
                                    <div class="card-footer-w">
                                        <div class="card-contact_project is-footer">
                                            <div class="card_contact_w">
                                                <div class="news-letter-card is-footer">
                                                    <div class="text-block-2">Newsletter</div>
                                                    <div class="form w-form">
                                                        <form id="email-form" name="email-form" data-name="Email Form" method="get" class="news-form" data-wf-page-id="698217da6a7a7c705f60def8" data-wf-element-id="5e027ad4-b014-d339-980c-fee44f66646b">
                                                            <input class="field-form w-input" maxlength="256" name="email" data-name="Email" type="email" id="email" required="" placeholder="Your email" />
                                                            <div class="fake-submit_w">
                                                                <input type="submit" data-wait="Wait..." class="submit-btn w-button" value="" />
                                                                <div class="arrow-submit-form w-embed">
                                                                    <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <div class="success-message w-form-done">
                                                            <div>Thank you! Your submission has been received!</div>
                                                        </div>
                                                        <div class="error-message w-form-fail">
                                                            <div>Oops! Something went wrong while submitting the form.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-svg_w">
                                                    <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c870fd66c6966c9776_MS%20(-)%20Creme.webp" loading="lazy" alt="" class="card-ms-svg" />
                                                    <div class="card-line-svg w-embed">
                                                        <svg width="29" height="64" viewBox="0 0 29 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_ddii_4502_1015)">
                                                                <path d="M18 6H23V46H18V6Z" fill="#AAA798" fillOpacity="0.01" shapeRendering="crispEdges" />
                                                            </g>
                                                            <defs>
                                                                <filter id="filter0_ddii_4502_1015" x="0" y="0" width="29" height="66" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="-3" dy="3" />
                                                                    <feGaussianBlur stdDeviation="1.5" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4502_1015" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="-6" dy="6" />
                                                                    <feGaussianBlur stdDeviation="6" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                                                    <feBlend mode="normal" in2="effect1_dropShadow_4502_1015" result="effect2_dropShadow_4502_1015" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_4502_1015" result="shape" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dx="-3" dy="4" />
                                                                    <feGaussianBlur stdDeviation="1" />
                                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                                                    <feBlend mode="overlay" in2="shape" result="effect3_innerShadow_4502_1015" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="20" />
                                                                    <feGaussianBlur stdDeviation="15" />
                                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                                    <feBlend mode="overlay" in2="effect3_innerShadow_4502_1015" result="effect4_innerShadow_4502_1015" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <div class="card-address">Royal Bullion<br />Capital</div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 540 324" fill="none" preserveAspectRatio="none" height="100%" class="cadre-contact is-project">
                                                <g filter="url(#filter0_iii_4502_1010)">
                                                    <path d="M536.5 3.5V320.5H3.5V3.5H536.5Z" stroke="currentColor" strokeWidth="7"></path>
                                                </g>
                                                <defs>
                                                    <filter x="-3" y="-10" width="551" height="336" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                                        <feblend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                                        <fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></fecolormatrix>
                                                        <feoffset dx="4" dy="-2"></feoffset>
                                                        <fegaussianblur stdDeviation="1.5"></fegaussianblur>
                                                        <fecomposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></fecomposite>
                                                        <fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></fecolormatrix>
                                                        <feblend mode="overlay" in2="shape" result="effect1_innerShadow_4502_1010"></feblend>
                                                        <fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></fecolormatrix>
                                                        <feoffset dx="8" dy="-10"></feoffset>
                                                        <fegaussianblur stdDeviation="7.5"></fegaussianblur>
                                                        <fecomposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></fecomposite>
                                                        <fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></fecolormatrix>
                                                        <feblend mode="overlay" in2="effect2_innerShadow_4502_1010" result="effect2_innerShadow_4502_1010"></feblend>
                                                        <fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></fecolormatrix>
                                                        <feoffset dx="-3" dy="2"></feoffset>
                                                        <fegaussianblur stdDeviation="1.5"></fegaussianblur>
                                                        <fecomposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></fecomposite>
                                                        <fecolormatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></fecolormatrix>
                                                        <feblend mode="normal" in2="effect2_innerShadow_4502_1010" result="effect3_innerShadow_4502_1010"></feblend>
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <div class="cadre-contact is-project is-footer w-embed">
                                                <svg width="100%" height="100%" viewBox="0 0 540 324" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g filter="url(#filter0_iii_4502_1010)">
                                                        <path d="M536.5 3.5V320.5H3.5V3.5H536.5Z" stroke="black" strokeWidth="7" />
                                                    </g>
                                                    <defs>
                                                        <filter id="filter0_iii_4502_1010" x="-3" y="-10" width="551" height="336" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                            <feOffset dx="4" dy="-2" />
                                                            <feGaussianBlur stdDeviation="1.5" />
                                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                                            <feBlend mode="overlay" in2="shape" result="effect1_innerShadow_4502_1010" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                            <feOffset dx="8" dy="-10" />
                                                            <feGaussianBlur stdDeviation="7.5" />
                                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                            <feBlend mode="overlay" in2="effect2_innerShadow_4502_1010" result="effect2_innerShadow_4502_1010" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                            <feOffset dx="-3" dy="2" />
                                                            <feGaussianBlur stdDeviation="1.5" />
                                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                                                            <feBlend mode="normal" in2="effect2_innerShadow_4502_1010" result="effect3_innerShadow_4502_1010" />
                                                        </filter>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/699c216505338d828d1b32cb_Footer-Wide-2.svg" loading="lazy" alt="" class="bg-footer cream hide-tab" />
                                    <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/699c216505338d828d1b32cb_Footer-Wide-2.svg" loading="lazy" alt="" class="bg-footer green hide-tab" />
                                </div>

                            </div>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Divisions