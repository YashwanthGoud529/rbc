import React from 'react';

const Projects = () => {
    // Filter categories data
    const filterCategories = [
        { name: "Residential" },
        { name: "Retail" },
        { name: "Hospitality" }
    ];

    const projectImages = [
        {
            id: 1,
            src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a859206f8dac87c4c0b553_MERSI%20x%20LEVALLOIS-2%20(1).webp",
            srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a859206f8dac87c4c0b553_MERSI%20x%20LEVALLOIS-2%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a859206f8dac87c4c0b553_MERSI%20x%20LEVALLOIS-2%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a859206f8dac87c4c0b553_MERSI%20x%20LEVALLOIS-2%20(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a859206f8dac87c4c0b553_MERSI%20x%20LEVALLOIS-2%20(1).webp 1333w"
        },
        {
            id: 2,
            src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c648569d5ab75b8d1a3_MERSI%20x%20MAURICE_-6.webp",
            srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c648569d5ab75b8d1a3_MERSI%20x%20MAURICE_-6-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c648569d5ab75b8d1a3_MERSI%20x%20MAURICE_-6-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c648569d5ab75b8d1a3_MERSI%20x%20MAURICE_-6.webp 1080w"
        },
        {
            id: 3,
            src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c20c68e51f70e07786b_CC_MERSIxBERRI-24%20(1).webp",
            srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c20c68e51f70e07786b_CC_MERSIxBERRI-24%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c20c68e51f70e07786b_CC_MERSIxBERRI-24%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c20c68e51f70e07786b_CC_MERSIxBERRI-24%20(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c20c68e51f70e07786b_CC_MERSIxBERRI-24%20(1).webp 1333w"
        },
        {
            id: 4,
            src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16.webp",
            srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16-p-1600.webp 1600w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16-p-2000.webp 2000w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16.webp 2430w"
        },
        {
            id: 5,
            src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85beae7ee6ecaf8863ba3_CC_Mersi%20x%20Restaurant%20COOK-2.webp",
            srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85beae7ee6ecaf8863ba3_CC_Mersi%20x%20Restaurant%20COOK-2-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85beae7ee6ecaf8863ba3_CC_Mersi%20x%20Restaurant%20COOK-2-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85beae7ee6ecaf8863ba3_CC_Mersi%20x%20Restaurant%20COOK-2.webp 1080w"
        },
        {
            id: 6,
            src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ec2802ca327082f12fb8c_Cover%20R.webp",
            srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ec2802ca327082f12fb8c_Cover%20R-p-500.webp 500w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ec2802ca327082f12fb8c_Cover%20R-p-800.webp 800w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ec2802ca327082f12fb8c_Cover%20R-p-1080.webp 1080w, https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ec2802ca327082f12fb8c_Cover%20R.webp 1440w"
        },

        // New Images
        {
            id: 7,
            src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcffd7c4bc95194bed857_Cover%20R.webp",
            srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcffd7c4bc95194bed857_Cover%20R.webp 1440w"
        },
        {
            id: 8,
            src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a858a21313048249c36dc2_MERSI%20x%20AURE%CC%81LIEN%20COHEN-4%20(1).webp",
            srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a858a21313048249c36dc2_MERSI%20x%20AURE%CC%81LIEN%20COHEN-4%20(1).webp 1440w"
        },
        {
            id: 9,
            src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd9281a44841220d126ec_Cover%20R.webp",
            srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd9281a44841220d126ec_Cover%20R.webp 1440w"
        },
        {
            id: 10,
            src: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd34dddd61db985f47bed_Cover%20R.webp",
            srcSet: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd34dddd61db985f47bed_Cover%20R.webp 1440w"
        }
    ];
    // Full projects data for the second grid
    const projects = [
        {
            id: 1,
            name: "Naya",
            category: "Residential",
            bgColor: "hsla(16, 58.87%, 42.88%, 1.00)",
            href: "/projets/naya",
            image: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a859206f8dac87c4c0b553_MERSI%20x%20LEVALLOIS-2%20(1).webp"
        },
        {
            id: 2,
            name: "Maurice Cafe St-Honore",
            category: "Hospitality",
            bgColor: "#657b69",
            href: "/projets/cafe-maurice-saint-honore",
            image: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c648569d5ab75b8d1a3_MERSI%20x%20MAURICE_-6.webp"
        },
        {
            id: 3,
            name: "Berri",
            category: "Residential",
            bgColor: "#aaa798",
            href: "/projets/berri",
            image: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85c20c68e51f70e07786b_CC_MERSIxBERRI-24%20(1).webp"
        },
        {
            id: 4,
            name: "Maurice Cafe Victor Hugo",
            category: "Hospitality",
            bgColor: "#657b69",
            href: "/projets/cafe-maurice-victor-hugo",
            image: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85dced45ab84536e7cd04_MERSI%20x%20MAURICE_-16.webp"
        },
        {
            id: 5,
            name: "Cook",
            category: "Hospitality",
            bgColor: "#dc633f",
            href: "/projets/cook",
            image: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a85beae7ee6ecaf8863ba3_CC_Mersi%20x%20Restaurant%20COOK-2.webp"
        },
        {
            id: 6,
            name: "Segur",
            category: "Residential",
            bgColor: "#918f7a",
            href: "/projets/segur",
            image: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699ec2802ca327082f12fb8c_Cover%20R.webp"
        },

        // NEW ITEMS
        {
            id: 7,
            name: "Project Seven",
            category: "Residential",
            bgColor: "#999",
            href: "/projets/project-seven",
            image: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dcffd7c4bc95194bed857_Cover%20R.webp"
        },
        {
            id: 8,
            name: "Aurelien Cohen",
            category: "Residential",
            bgColor: "#888",
            href: "/projets/aurelien-cohen",
            image: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/69a858a21313048249c36dc2_MERSI%20x%20AURE%CC%81LIEN%20COHEN-4%20(1).webp"
        },
        {
            id: 9,
            name: "Project Nine",
            category: "Residential",
            bgColor: "#777",
            href: "/projets/project-nine",
            image: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd9281a44841220d126ec_Cover%20R.webp"
        },
        {
            id: 10,
            name: "Project Ten",
            category: "Residential",
            bgColor: "#666",
            href: "/projets/project-ten",
            image: "https://cdn.prod.website-files.com/697096b6dde8a7564252bfdd/699dd34dddd61db985f47bed_Cover%20R.webp"
        }
    ];

    return (
        <div>
            <div className="page-wrapper">
                <main data-taxi="" className="main-wrapper">
                    <div data-taxi-view="" className="page_view">
                        <div className="filtre_w_flip"></div>
                        <section className="section projets">
                            <div className="container project-hero">
                                <div className="fake-mob"></div>
                                <div className="hero-projects_w">
                                    <div className="h1-project_w">
                                        <h1 line="" className="h1-project-temp">Quiet luxury <br />interiors shaped <br />by true stories</h1>
                                    </div>
                                    <div className="filtre_w w-dyn-list">
                                        <div reveal-op="" role="list" className="filtre_list w-dyn-items">
                                            {filterCategories.map((category, index) => (
                                                <div key={index} role="listitem" className="filtre_item w-dyn-item">
                                                    <div filter-name={category.name}>{category.name}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div reveal-clip-group="" role="list" className="grid__state__1 w-dyn-items">
                                        {projectImages.map((project) => (
                                            <div key={project.id} role="listitem" className="project-grid_item w-dyn-item">
                                                <img
                                                    src={project.src}
                                                    loading="eager"
                                                    alt=""
                                                    sizes="100vw"
                                                    srcSet={project.srcSet}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="project" className="section projets-copy">
                            <div className="container project-hero template">
                                <div className="collection-list-wrapper w-dyn-list">
                                    <div role="list" className="grid__state_2 w-dyn-items">
                                        {projects.map((project) => (
                                            <div
                                                key={project.id}
                                                filter-name={project.name}
                                                role="listitem"
                                                className="grid__state__2__item w-dyn-item"
                                            >
                                                <a
                                                    data-hover-link-ignore=""
                                                    href={project.href}
                                                    className="grid__state__2__link w-inline-block"
                                                >
                                                    <div className="etiquette-project_list">
                                                        <div
                                                            style={{ backgroundColor: project.bgColor }}
                                                            className="home-slider_btn project-list"
                                                        >
                                                            <div className="info-project-left">
                                                                <h2 className="h2-project-btn project-list">{project.name}</h2>
                                                                <div>{project.category}</div>
                                                            </div>
                                                            <img
                                                                src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697787feb77e66ac9ab5b2f7_MS%20(%2B)%20Color.webp"
                                                                loading="lazy"
                                                                sizes="(max-width: 767px) 100vw, 768px"
                                                                srcSet="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697787feb77e66ac9ab5b2f7_MS%20(%2B)%20Color-p-500.png 500w, https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697787feb77e66ac9ab5b2f7_MS%20(%2B)%20Color.webp 768w"
                                                                alt=""
                                                                className="ms-svg-banner project-list"
                                                            />
                                                        </div>
                                                    </div>
                                                    <img
                                                        src={project.image}
                                                        loading="lazy"
                                                        alt=""
                                                        sizes="100vw"
                                                        srcSet={project.imageSrcSet}
                                                        className="image-7"
                                                    />
                                                </a>
                                                <div className="flex-grid-info">
                                                    <div className="text-block-3">{project.name}</div>
                                                    <div className="info-cat">{project.category}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="space-150"></div>
                        <footer className="footer">
                            <div className="container-footer">
                                <div className="container-top-footer">
                                    <h2 className="desc-projet">
                                        We design unique spaces, thought to be lived in, and designed to
                                        stand the test of time.
                                    </h2>
                                    <div className="flex-40">
                                        <a href="mailto:hello@mersi-architecture.com" className="contact-footer w-inline-block">
                                            <div>mail</div>
                                            <div className="arrow-contact-link w-embed">
                                                <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z"
                                                        fill="#1A1A1A"
                                                        stroke="#1A1A1A"
                                                        strokeWidth="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="https://wa.me/+33609872775" target="_blank" rel="noreferrer" className="contact-footer w-inline-block">
                                            <div>whatsapp</div>
                                            <div className="arrow-contact-link w-embed">
                                                <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z"
                                                        fill="#1A1A1A"
                                                        stroke="#1A1A1A"
                                                        strokeWidth="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="tel:+33172682228" className="contact-footer w-inline-block">
                                            <div>phone</div>
                                            <div className="arrow-contact-link w-embed">
                                                <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z"
                                                        fill="#1A1A1A"
                                                        stroke="#1A1A1A"
                                                        strokeWidth="0.4"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="grid-footer">
                                    <div className="card-footer-w">
                                        <div className="card-contact_project is-footer">
                                            <div className="card_contact_w">
                                                <div className="news-letter-card is-footer">
                                                    <div className="text-block-2">Newsletter</div>
                                                    <div className="form w-form">
                                                        <form id="email-form" name="email-form" data-name="Email Form" method="get" className="news-form">
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
                                                            <div className="fake-submit_w">
                                                                <input type="submit" data-wait="Wait..." className="submit-btn w-button" value="" />
                                                                <div className="arrow-submit-form w-embed">
                                                                    <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            clipRule="evenodd"
                                                                            d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z"
                                                                            fill="#1A1A1A"
                                                                            stroke="#1A1A1A"
                                                                            strokeWidth="0.4"
                                                                        />
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
                                                    <img
                                                        src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c870fd66c6966c9776_MS%20(-)%20Creme.webp"
                                                        loading="lazy"
                                                        alt=""
                                                        className="card-ms-svg"
                                                    />
                                                    <div className="card-line-svg w-embed">
                                                        <svg width="29" height="64" viewBox="0 0 29 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_ddii_4502_1015)">
                                                                <path d="M18 6H23V46H18V6Z" fill="#AAA798" fillOpacity="0.01" shapeRendering="crispEdges" />
                                                            </g>
                                                            <defs>
                                                                <filter
                                                                    id="filter0_ddii_4502_1015"
                                                                    x="0"
                                                                    y="0"
                                                                    width="29"
                                                                    height="66"
                                                                    filterUnits="userSpaceOnUse"
                                                                    colorInterpolationFilters="sRGB"
                                                                >
                                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix
                                                                        in="SourceAlpha"
                                                                        type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha"
                                                                    />
                                                                    <feOffset dx="-3" dy="3" />
                                                                    <feGaussianBlur stdDeviation="1.5" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4502_1015" />
                                                                    <feColorMatrix
                                                                        in="SourceAlpha"
                                                                        type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha"
                                                                    />
                                                                    <feOffset dx="-6" dy="6" />
                                                                    <feGaussianBlur stdDeviation="6" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                                                    <feBlend
                                                                        mode="normal"
                                                                        in2="effect1_dropShadow_4502_1015"
                                                                        result="effect2_dropShadow_4502_1015"
                                                                    />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_4502_1015" result="shape" />
                                                                    <feColorMatrix
                                                                        in="SourceAlpha"
                                                                        type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha"
                                                                    />
                                                                    <feOffset dx="-3" dy="4" />
                                                                    <feGaussianBlur stdDeviation="1" />
                                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                                                    <feBlend mode="overlay" in2="shape" result="effect3_innerShadow_4502_1015" />
                                                                    <feColorMatrix
                                                                        in="SourceAlpha"
                                                                        type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha"
                                                                    />
                                                                    <feOffset dy="20" />
                                                                    <feGaussianBlur stdDeviation="15" />
                                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                                    <feBlend mode="overlay" in2="effect3_innerShadow_4502_1015" result="effect4_innerShadow_4502_1015" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <div className="card-address">12 Bd Raspail<br />Paris 7</div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 540 324" fill="none" preserveAspectRatio="none" height="100%" className="cadre-contact is-project">
                                                <g filter="url(#filter0_iii_4502_1010)">
                                                    <path d="M536.5 3.5V320.5H3.5V3.5H536.5Z" stroke="currentColor" strokeWidth="7"></path>
                                                </g>
                                                <defs>
                                                    <filter
                                                        x="-3"
                                                        y="-10"
                                                        width="551"
                                                        height="336"
                                                        filterUnits="userSpaceOnUse"
                                                        colorInterpolationFilters="sRGB"
                                                    >
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        ></feColorMatrix>
                                                        <feOffset dx="4" dy="-2"></feOffset>
                                                        <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                                                        <feBlend mode="overlay" in2="shape" result="effect1_innerShadow_4502_1010"></feBlend>
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        ></feColorMatrix>
                                                        <feOffset dx="8" dy="-10"></feOffset>
                                                        <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                                                        <feBlend
                                                            mode="overlay"
                                                            in2="effect2_innerShadow_4502_1010"
                                                            result="effect2_innerShadow_4502_1010"
                                                        ></feBlend>
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        ></feColorMatrix>
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
                                                        <filter
                                                            id="filter0_iii_4502_1010"
                                                            x="-3"
                                                            y="-10"
                                                            width="551"
                                                            height="336"
                                                            filterUnits="userSpaceOnUse"
                                                            colorInterpolationFilters="sRGB"
                                                        >
                                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                            <feColorMatrix
                                                                in="SourceAlpha"
                                                                type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha"
                                                            />
                                                            <feOffset dx="4" dy="-2" />
                                                            <feGaussianBlur stdDeviation="1.5" />
                                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                                            <feBlend mode="overlay" in2="shape" result="effect1_innerShadow_4502_1010" />
                                                            <feColorMatrix
                                                                in="SourceAlpha"
                                                                type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha"
                                                            />
                                                            <feOffset dx="8" dy="-10" />
                                                            <feGaussianBlur stdDeviation="7.5" />
                                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                            <feBlend
                                                                mode="overlay"
                                                                in2="effect2_innerShadow_4502_1010"
                                                                result="effect2_innerShadow_4502_1010"
                                                            />
                                                            <feColorMatrix
                                                                in="SourceAlpha"
                                                                type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha"
                                                            />
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
                                    <img
                                        src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/699c216505338d828d1b32cb_Footer-Wide-2.svg"
                                        loading="lazy"
                                        alt=""
                                        className="bg-footer cream hide-tab"
                                    />
                                    <img
                                        src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/699c216505338d828d1b32cb_Footer-Wide-2.svg"
                                        loading="lazy"
                                        alt=""
                                        className="bg-footer green hide-tab"
                                    />
                                </div>
                                <div className="container-bottom-footer">
                                    <div className="footer-link-left">
                                        <a href="/news" data-taxi-link="" className="footer-link">news</a>
                                        <a href="/mentions-legales" data-taxi-link="" className="footer-link no-wrap">Legal Notice</a>
                                    </div>
                                    <div className="code-embed-5 w-embed">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.71354 10C4.62674 9.43576 4.375 8.82812 3.95833 8.17708C3.55035 7.52604 2.96875 6.91406 2.21354 6.34115C1.44965 5.75955 0.711806 5.39931 0 5.26042V4.71354C0.720486 4.54861 1.41927 4.22743 2.09635 3.75C2.77344 3.27257 3.34635 2.70399 3.8151 2.04427C4.28385 1.37587 4.58333 0.694444 4.71354 0H5.26042C5.33854 0.442708 5.49479 0.889757 5.72917 1.34115C5.97222 1.79253 6.28038 2.22656 6.65365 2.64323C7.02691 3.05122 7.43924 3.42014 7.89062 3.75C8.57639 4.23611 9.27951 4.55729 10 4.71354V5.26042C9.51389 5.3559 9.01476 5.55121 8.5026 5.84635C7.99913 6.14149 7.53038 6.48871 7.09635 6.88802C6.66233 7.28733 6.30642 7.70833 6.02865 8.15104C5.6033 8.82812 5.34722 9.44444 5.26042 10H4.71354ZM4.89583 9.6875H5.07812C5.12153 9.23611 5.19097 8.78472 5.28646 8.33333C5.39062 7.87326 5.50781 7.44792 5.63802 7.05729C5.77691 6.66667 5.92014 6.34549 6.06771 6.09375C6.36285 5.92882 6.71441 5.77691 7.1224 5.63802C7.53906 5.49913 7.96875 5.38194 8.41146 5.28646C8.86285 5.19097 9.27951 5.13021 9.66146 5.10417V4.92187C9.27951 4.88715 8.85851 4.82205 8.39844 4.72656C7.94705 4.6224 7.51302 4.50087 7.09635 4.36198C6.67969 4.21441 6.33681 4.0625 6.06771 3.90625C5.92014 3.64583 5.77691 3.32465 5.63802 2.94271C5.50781 2.55208 5.39062 2.13542 5.28646 1.69271C5.19097 1.24132 5.12153 0.78993 5.07812 0.338541H4.89583C4.86111 0.746527 4.79601 1.17187 4.70052 1.61458C4.61372 2.04861 4.50087 2.46528 4.36198 2.86458C4.22309 3.26389 4.07118 3.61111 3.90625 3.90625C3.62847 4.0625 3.28559 4.21441 2.8776 4.36198C2.46962 4.50087 2.03993 4.6224 1.58854 4.72656C1.13715 4.82205 0.711806 4.88715 0.3125 4.92187V5.10417C0.711806 5.13021 1.13281 5.19097 1.57552 5.28646C2.01823 5.38194 2.44358 5.49913 2.85156 5.63802C3.25955 5.77691 3.61111 5.92882 3.90625 6.09375C4.07118 6.37153 4.21875 6.71441 4.34896 7.1224C4.48785 7.5217 4.60503 7.94705 4.70052 8.39844C4.79601 8.84115 4.86111 9.27083 4.89583 9.6875Z"
                                                fill="#1A1A1A"
                                            />
                                        </svg>
                                    </div>
                                    <div className="footer-link-right">
                                        <a href="https://www.linkedin.com/in/clementmerouani/" target="_blank" rel="noreferrer" className="footer-link w-inline-block">
                                            <div>Website by FLOT NOIR</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Projects;