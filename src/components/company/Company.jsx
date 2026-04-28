

import React from 'react'
import './company.css'

const Company = () => {
    // Contact links data
    const contactLinks = [
        { label: 'mail', href: 'mailto:support@royalbullioncapital.com', type: 'email' },
        { label: 'whatsapp', href: '#', type: 'external' },
        { label: 'phone', href: 'tel:+', type: 'phone' }
    ]

    // Footer links data
    const footerLinks = [
        { label: 'news', href: '/news' },
        { label: 'Legal Notice', href: '/mentions-legales' }
    ]

    return (
        <div>
            <div className="page-wrapper">
                <main data-taxi="" className="main-wrapper">
                    <div data-taxi-view="" className="page_view">
                        <section className="section about">
                            <div className="container about-hero">
                                <div className="hero-about_w">
                                    <div></div>
                                    <div className="h1-about_w-copy">
                                        <div className="img-to-scale"><img
                                            src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697ce16eaa5f60c38bd851f3_Frame%20-%20Agency%20-%20Header.webp"
                                            loading="lazy" alt="" className="cadre-hero-agence" /></div>
                                    </div><img
                                        src="https://royalbullioncapital.com/wp-content/uploads/2024/08/GoldRefinery-Slide.jpg"
                                        loading="lazy" alt="" className="img-scale" />
                                    <div className="about-hero-bottom">
                                        <h1 line="" className="h1-project-temp">Three Divisions.<br />One <span className='text-gold'>Gold</span> Standard. <br />
                                        </h1>
                                        <div className="hero-about-info-bottom center"><img
                                            src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/6980841a996c4449bea3f947_MS%20(-)%20Creme.webp"
                                            loading="lazy" alt="" className="logo-hero-agence left" />
                                            <h2 line="" className="h2-subtitle-about">RBC is the only gold institution in Dubai that owns the full chain from the mine that extracts the gold, to the refinery that purifies it, <br /> to the trading desk that distributes it globally. Three divisions, zero intermediaries.</h2><img
                                                src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/6980841a996c4449bea3f947_MS%20(-)%20Creme.webp"
                                                loading="lazy" alt="" className="logo-hero-agence" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="space-50"></div>
                        <section className="section">
                            <div className="container ms-anime">
                                <div className="about-infos">
                                    <div className="grid-info-text" style={{ gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'center' }}>
                                        {/* Text Column */}
                                        <div className="flex-col" style={{ alignItems: 'flex-start' }}>
                                            <h2 style={{ fontSize: '2rem', lineHeight: '1.2', color: '#004033', fontWeight: '500', marginBottom: '2rem' }}>
                                                RBC is more than just a business, It is a trusted partner in your journey toward financial growth and security.
                                            </h2>

                                            <div style={{ marginBottom: '1.5rem' }}>
                                                <p style={{ fontSize: '1.1rem', color: '#1a1a1a', lineHeight: '1.6', fontWeight: '400' }}>
                                                    With over a decade of experience in the bullion industry, Royal Bullion Capital stands as a beacon of excellence and reliability. Our deep-rooted expertise spans across gold mining, refining, and trading, allowing us to offer a comprehensive suite of services that meet the highest industry standards.
                                                </p>
                                            </div>

                                            <div style={{ marginBottom: '2.5rem' }}>
                                                <p style={{ fontSize: '1.1rem', color: '#1a1a1a', lineHeight: '1.6', fontWeight: '400' }}>
                                                    Our seasoned team of professionals brings a wealth of knowledge and a track record of success, ensuring that every transaction is executed with precision and care.
                                                </p>
                                            </div>

                                            <div>
                                                <h2 style={{ fontSize: '2rem', lineHeight: '1.2', color: '#004033', fontWeight: '500', marginBottom: '2rem' }}>
                                                    MGC 2026 is supported by organisations that strengthen trust across the precious metals ecosystem.
                                                </h2>

                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    <p style={{ fontSize: '1.1rem', color: '#1a1a1a', lineHeight: '1.6', fontWeight: '400' }}>
                                                        Organised by the Malaysia Gold Association (MGA) and supported by MATRADE and MyCEB, with Emirates Gold as Title Sponsor and Public Gold as Platinum Sponsor.
                                                    </p>
                                                </div>


                                            </div>

                                        </div>

                                        {/* Image Column */}
                                        <div className="image-frame">
                                            <img
                                                loading="lazy"
                                                alt="RBC Leadership"
                                                className="meryl-img new"
                                                src="https://royalbullioncapital.com/wp-content/uploads/2026/01/Gemini_Generated_Image_lvgc7ylvgc7ylvgc-e1769779256588.png"
                                                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <div className="space-50"></div>
                        <section className="section talk">
                            <div className="container talk">
                                <div className="div-block-6">
                                    <div className="hero-about-info-bottom hide-tab">
                                        <h2 className="h2-subtitle-about talk-left op">Quiet luxury interiors</h2>
                                        <div className="code-embed-8 w-embed"><svg width="125" height="64" viewBox="0 0 125 64"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g style={{ mixBlendMode: 'overlay' }} filter="url(#filter0_ddii_4768_666)">
                                                <path d="M44.9191 21.5441H42.0853V37.0883H44.9191V21.5441Z" fill="#AAA798"
                                                    fillOpacity="0.01" />
                                                <path
                                                    d="M18 6H42.0853L42.0853 21.5441H35.4928C34.5938 21.5441 33.865 22.2769 33.865 23.1807V46H18V6Z"
                                                    fill="#AAA798" fillOpacity="0.01" />
                                                <path
                                                    d="M69 6V46H53.1396V23.1807C53.1396 22.2768 52.4107 21.5441 51.5117 21.5441L44.9191 21.5441L44.9192 6H69Z"
                                                    fill="#AAA798" fillOpacity="0.01" />
                                                <path
                                                    d="M99.0023 23.1533V26.0023H86.7904C82.4879 26.0023 79.0001 22.5144 79.0001 18.2119V13.7904C79.0001 9.48783 82.4879 6 86.7904 6H119V23.1533H99.0023Z"
                                                    fill="#AAA798" fillOpacity="0.01" />
                                                <path
                                                    d="M99.0023 28.8468V26.0023H111.21C115.512 26.0023 119 29.4902 119 33.7926V38.2097C119 42.5122 115.512 46 111.21 46H79V28.8468H99.0023Z"
                                                    fill="#AAA798" fillOpacity="0.01" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_ddii_4768_666" x="0" y="0" width="125" height="66"
                                                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha" />
                                                    <feOffset dx="-3" dy="3" />
                                                    <feGaussianBlur stdDeviation="1.5" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix"
                                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                                        result="effect1_dropShadow_4768_666" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha" />
                                                    <feOffset dx="-6" dy="6" />
                                                    <feGaussianBlur stdDeviation="6" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix"
                                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0" />
                                                    <feBlend mode="normal" in2="effect1_dropShadow_4768_666"
                                                        result="effect2_dropShadow_4768_666" />
                                                    <feBlend mode="normal" in="SourceGraphic"
                                                        in2="effect2_dropShadow_4768_666" result="shape" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha" />
                                                    <feOffset dx="-3" dy="4" />
                                                    <feGaussianBlur stdDeviation="1" />
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                    <feColorMatrix type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                                    <feBlend mode="normal" in2="shape"
                                                        result="effect3_innerShadow_4768_666" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha" />
                                                    <feOffset dy="20" />
                                                    <feGaussianBlur stdDeviation="15" />
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                    <feColorMatrix type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                    <feBlend mode="normal" in2="effect3_innerShadow_4768_666"
                                                        result="effect4_innerShadow_4768_666" />
                                                </filter>
                                            </defs>
                                        </svg></div>
                                        <h2 className="h2-subtitle-about talk-right op">shaped by true stories</h2>
                                    </div>
                                    <a data-hover-link-ignore="" href="/contact" className="bg-video_w w-inline-block">
                                        <div className="talk-btn-left">let's</div>
                                        <div className="side-video"></div>
                                        <div className="bg-video"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                            viewBox="0 0 480 214" preserveAspectRatio="none" fill="none"
                                            className="cadre-video svg-osmo">
                                            <g filter="url(#filter0_iiii_4768_679)" STYLE={{ mixBlendMode: 'overlay' }}>
                                                <path d="M476.5 3.5V210.5H3.5V3.5H476.5Z" stroke="currentColor"
                                                    strokeOpacity="0.01" strokeWidth="7"></path>
                                            </g>
                                            <defs>
                                                <filter id="filter0_iiii_4768_679" x="-6" y="-10" width="496" height="230" filterUnits="userSpaceOnUse"
                                                    colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                        result="shape"></feBlend>
                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha"></feColorMatrix>
                                                    <feOffset dx="3" dy="-3"></feOffset>
                                                    <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1">
                                                    </feComposite>
                                                    <feColorMatrix type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="shape"
                                                        result="effect1_innerShadow_4768_679"></feBlend>
                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha"></feColorMatrix>
                                                    <feOffset dx="10" dy="-10"></feOffset>
                                                    <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1">
                                                    </feComposite>
                                                    <feColorMatrix type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="effect1_innerShadow_4768_679"
                                                        result="effect2_innerShadow_4768_679"></feBlend>
                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha"></feColorMatrix>
                                                    <feOffset dx="-3" dy="3"></feOffset>
                                                    <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1">
                                                    </feComposite>
                                                    <feColorMatrix type="matrix"
                                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="effect2_innerShadow_4768_679"
                                                        result="effect3_innerShadow_4768_679"></feBlend>
                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha"></feColorMatrix>
                                                    <feOffset dx="-6" dy="6"></feOffset>
                                                    <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1">
                                                    </feComposite>
                                                    <feColorMatrix type="matrix"
                                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="effect3_innerShadow_4768_679"
                                                        result="effect4_innerShadow_4768_679"></feBlend>
                                                </filter>
                                            </defs>
                                        </svg>
                                            <div className="cadre-video first w-embed"><svg width="100%" height="100%"
                                                viewBox="0 0 480 214" preserveAspectRatio="none" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_iiii_4768_679)" style={{ mixBlendMode: 'overlay' }}>
                                                    <path d="M476.5 3.5V210.5H3.5V3.5H476.5Z" stroke="black"
                                                        strokeOpacity="0.01" strokeWidth="7" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_iiii_4768_679" x="-6" y="-10" width="496"
                                                        height="230" filterUnits="userSpaceOnUse"
                                                        colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                            result="shape" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha" />
                                                        <feOffset dx="3" dy="-3" />
                                                        <feGaussianBlur stdDeviation="1.5" />
                                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                        <feColorMatrix type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                        <feBlend mode="normal" in2="shape"
                                                            result="effect1_innerShadow_4768_679" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha" />
                                                        <feOffset dx="10" dy="-10" />
                                                        <feGaussianBlur stdDeviation="5" />
                                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                        <feColorMatrix type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                                        <feBlend mode="normal" in2="effect1_innerShadow_4768_679"
                                                            result="effect2_innerShadow_4768_679" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha" />
                                                        <feOffset dx="-3" dy="3" />
                                                        <feGaussianBlur stdDeviation="1.5" />
                                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                        <feColorMatrix type="matrix"
                                                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                                                        <feBlend mode="normal" in2="effect2_innerShadow_4768_679"
                                                            result="effect3_innerShadow_4768_679" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha" />
                                                        <feOffset dx="-6" dy="6" />
                                                        <feGaussianBlur stdDeviation="5" />
                                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                        <feColorMatrix type="matrix"
                                                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0" />
                                                        <feBlend mode="normal" in2="effect3_innerShadow_4768_679"
                                                            result="effect4_innerShadow_4768_679" />
                                                    </filter>
                                                </defs>
                                            </svg></div>
                                            <div data-posterUrl=""
                                                data-videoUrls="https://royalbullioncapital.com/wp-content/uploads/2026/01/Malaysia-Gold-Conf-Promo-V1.mp4"
                                                data-autoplay="true" data-loop="true" data-wf-ignore="true"
                                                className="video-talk w-background-video w-background-video-atom"><video
                                                    id="068fd7b2-be2f-b2b6-704e-180551d02c69-video" autoPlay="" loop=""
                                                    style={{ backgroundImage: 'none' }}
                                                    muted="" playsInline="" data-wf-ignore="true" data-object-fit="cover">
                                                    <source
                                                        src="https://royalbullioncapital.com/wp-content/uploads/2026/01/Malaysia-Gold-Conf-Promo-V1.mp4"
                                                        data-wf-ignore="true" />
                                                </video></div>
                                        </div>
                                        <div className="side-video"></div>
                                        <div className="talk-btn-right">talk</div>
                                    </a>
                                    <div className="hero-about-info-bottom hide-tab">
                                        <h2 className="h2-subtitle-about talk-left">Quiet luxury interiors</h2>
                                        <div className="code-embed-6 w-embed"><svg width="125" height="64" viewBox="0 0 125 64"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g style={{ mixBlendMode: 'overlay' }} filter="url(#filter0_ddii_4768_666)">
                                                <path d="M44.9191 21.5441H42.0853V37.0883H44.9191V21.5441Z" fill="#AAA798"
                                                    fillOpacity="0.01" />
                                                <path
                                                    d="M18 6H42.0853L42.0853 21.5441H35.4928C34.5938 21.5441 33.865 22.2769 33.865 23.1807V46H18V6Z"
                                                    fill="#AAA798" fillOpacity="0.01" />
                                                <path
                                                    d="M69 6V46H53.1396V23.1807C53.1396 22.2768 52.4107 21.5441 51.5117 21.5441L44.9191 21.5441L44.9192 6H69Z"
                                                    fill="#AAA798" fillOpacity="0.01" />
                                                <path
                                                    d="M99.0023 23.1533V26.0023H86.7904C82.4879 26.0023 79.0001 22.5144 79.0001 18.2119V13.7904C79.0001 9.48783 82.4879 6 86.7904 6H119V23.1533H99.0023Z"
                                                    fill="#AAA798" fillOpacity="0.01" />
                                                <path
                                                    d="M99.0023 28.8468V26.0023H111.21C115.512 26.0023 119 29.4902 119 33.7926V38.2097C119 42.5122 115.512 46 111.21 46H79V28.8468H99.0023Z"
                                                    fill="#AAA798" fillOpacity="0.01" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_ddii_4768_666" x="0" y="0" width="125" height="66"
                                                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha" />
                                                    <feOffset dx="-3" dy="3" />
                                                    <feGaussianBlur stdDeviation="1.5" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix"
                                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                                        result="effect1_dropShadow_4768_666" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha" />
                                                    <feOffset dx="-6" dy="6" />
                                                    <feGaussianBlur stdDeviation="6" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix"
                                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0" />
                                                    <feBlend mode="normal" in2="effect1_dropShadow_4768_666"
                                                        result="effect2_dropShadow_4768_666" />
                                                    <feBlend mode="normal" in="SourceGraphic"
                                                        in2="effect2_dropShadow_4768_666" result="shape" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha" />
                                                    <feOffset dx="-3" dy="4" />
                                                    <feGaussianBlur stdDeviation="1" />
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                    <feColorMatrix type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                                    <feBlend mode="normal" in2="shape"
                                                        result="effect3_innerShadow_4768_666" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha" />
                                                    <feOffset dy="20" />
                                                    <feGaussianBlur stdDeviation="15" />
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                    <feColorMatrix type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                    <feBlend mode="normal" in2="effect3_innerShadow_4768_666"
                                                        result="effect4_innerShadow_4768_666" />
                                                </filter>
                                            </defs>
                                        </svg></div>
                                        <h2 className="h2-subtitle-about talk-right">shaped by true stories</h2>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="space-150"></div>
                        <footer className="footer">
                            <div className="container-footer">
                                <div className="container-top-footer">
                                    <h2 className="desc-projet">We design unique spaces, thought to be lived in, and
                                        designed to stand the test of time.</h2>
                                    <div className="flex-40">
                                        {contactLinks.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.href}
                                                {...(link.type === 'external' && { target: '_blank' })}
                                                className="contact-footer w-inline-block"
                                            >
                                                <div>{link.label}</div>
                                                <div className="arrow-contact-link w-embed">
                                                    <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                            d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z"
                                                            fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                                                    </svg>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid-footer">
                                    <div className="card-footer-w">
                                        <div className="card-contact_project is-footer">
                                            <div className="card_contact_w">
                                                <div className="news-letter-card is-footer">
                                                    <div className="text-block-2">Newsletter</div>
                                                    <div className="form w-form">
                                                        <form id="email-form" name="email-form" data-name="Email Form"
                                                            method="get" className="news-form"
                                                            data-wf-page-id="697cc97b2fe152b789c72768"
                                                            data-wf-element-id="5e027ad4-b014-d339-980c-fee44f66646b">
                                                            <input className="field-form w-input" maxLength="256" name="email"
                                                                data-name="Email" placeholder="Your email" type="email"
                                                                id="email" required="" />
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
                                                        <div className="success-message w-form-done">
                                                            <div>Thank you! Your submission has been received!</div>
                                                        </div>
                                                        <div className="error-message w-form-fail">
                                                            <div>Oops! Something went wrong while submitting the form.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-svg_w">
                                                    <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c870fd66c6966c9776_MS%20(-)%20Creme.webp"
                                                        loading="lazy" alt="" className="card-ms-svg" />
                                                    <div className="card-line-svg w-embed">
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
                                                    <div className="card-address">Royal Bullion<br />Capital</div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 540 324" fill="none" preserveAspectRatio="none" height="100%" className="cadre-contact is-project">
                                                <g filter="url(#filter0_iii_4502_1010)">
                                                    <path d="M536.5 3.5V320.5H3.5V3.5H536.5Z" stroke="currentColor" strokeWidth="7"></path>
                                                </g>
                                                <defs>
                                                    <filter id="filter0_iii_4502_1010" x="-3" y="-10" width="551" height="336" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                        <feOffset dx="4" dy="-2"></feOffset>
                                                        <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                                                        <feBlend mode="overlay" in2="shape" result="effect1_innerShadow_4502_1010"></feBlend>
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                        <feOffset dx="8" dy="-10"></feOffset>
                                                        <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                                                        <feBlend mode="overlay" in2="effect2_innerShadow_4502_1010" result="effect2_innerShadow_4502_1010"></feBlend>
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                        <feOffset dx="-3" dy="2"></feOffset>
                                                        <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                                                        <feBlend mode="normal" in2="effect2_innerShadow_4502_1010" result="effect3_innerShadow_4502_1010"></feBlend>
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <div className="cadre-contact is-project is-footer w-embed">
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
                                    <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/699c216505338d828d1b32cb_Footer-Wide-2.svg"
                                        loading="lazy" alt="" className="bg-footer cream hide-tab" />
                                    <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/699c216505338d828d1b32cb_Footer-Wide-2.svg"
                                        loading="lazy" alt="" className="bg-footer green hide-tab" />
                                </div>

                            </div>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Company
