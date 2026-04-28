import React from 'react';

const Blogs = () => {
    // Blog posts data
    const blogPosts = [
        {
            id: 1,
            href: "https://royalbullioncapital.com/emirates-islamic-gold-certificate-uae/",
            imgSrc: "https://royalbullioncapital.com/wp-content/uploads/2026/04/Emirates-Islamic-Gold-Certificate-How-It-Works-Shariah-Compliance-Fees-Risks-Investment-Guide-UAE.webp",
            srcSet: "https://royalbullioncapital.com/wp-content/uploads/2026/04/Emirates-Islamic-Gold-Certificate-How-It-Works-Shariah-Compliance-Fees-Risks-Investment-Guide-UAE.webp 1200w, https://royalbullioncapital.com/wp-content/uploads/2026/04/Emirates-Islamic-Gold-Certificate-How-It-Works-Shariah-Compliance-Fees-Risks-Investment-Guide-UAE-300x150.webp 300w, https://royalbullioncapital.com/wp-content/uploads/2026/04/Emirates-Islamic-Gold-Certificate-How-It-Works-Shariah-Compliance-Fees-Risks-Investment-Guide-UAE-1024x512.webp 1024w, https://royalbullioncapital.com/wp-content/uploads/2026/04/Emirates-Islamic-Gold-Certificate-How-It-Works-Shariah-Compliance-Fees-Risks-Investment-Guide-UAE-768x384.webp 768w, https://royalbullioncapital.com/wp-content/uploads/2026/04/Emirates-Islamic-Gold-Certificate-How-It-Works-Shariah-Compliance-Fees-Risks-Investment-Guide-UAE-600x300.webp 600w",
            category: "Gold Bullion",
            description: "Emirates Islamic Gold Certificate: How It Works, Shariah Compliance, Fees, Risks & Investment Guide UAE",
            author: "Royal Bullion Capital",
            date: "April 17, 2026"
        },
        {
            id: 2,
            href: "https://royalbullioncapital.com/buy-and-sell-gold-in-dubai-guide/",
            imgSrc: "https://royalbullioncapital.com/wp-content/uploads/2026/04/Buy-and-Sell-Gold-in-Dubai-Complete-2026-Guide-to-Prices-Markets-Taxes-and-Safe-Trading.webp",
            srcSet: "https://royalbullioncapital.com/wp-content/uploads/2026/04/Buy-and-Sell-Gold-in-Dubai-Complete-2026-Guide-to-Prices-Markets-Taxes-and-Safe-Trading.webp 1200w, https://royalbullioncapital.com/wp-content/uploads/2026/04/Buy-and-Sell-Gold-in-Dubai-Complete-2026-Guide-to-Prices-Markets-Taxes-and-Safe-Trading-300x150.webp 300w, https://royalbullioncapital.com/wp-content/uploads/2026/04/Buy-and-Sell-Gold-in-Dubai-Complete-2026-Guide-to-Prices-Markets-Taxes-and-Safe-Trading-1024x512.webp 1024w, https://royalbullioncapital.com/wp-content/uploads/2026/04/Buy-and-Sell-Gold-in-Dubai-Complete-2026-Guide-to-Prices-Markets-Taxes-and-Safe-Trading-768x384.webp 768w, https://royalbullioncapital.com/wp-content/uploads/2026/04/Buy-and-Sell-Gold-in-Dubai-Complete-2026-Guide-to-Prices-Markets-Taxes-and-Safe-Trading-600x300.webp 600w",
            category: "Gold Bullion",
            description: "Buy and Sell Gold in Dubai: Complete 2026 Guide to Prices, Markets, Taxes and Safe Trading",
            author: "Royal Bullion Capital",
            date: "April 2, 2026"
        },
        {
            id: 3,
            href: "https://royalbullioncapital.com/buying-gold-in-dubai-guide/",
            imgSrc: "https://royalbullioncapital.com/wp-content/uploads/2026/03/Buying-Gold-in-Dubai-2026-Guide-Prices-Best-Places-Taxes-and-Authenticity-Checks.webp",
            srcSet: "https://royalbullioncapital.com/wp-content/uploads/2026/03/Buying-Gold-in-Dubai-2026-Guide-Prices-Best-Places-Taxes-and-Authenticity-Checks.webp 1200w, https://royalbullioncapital.com/wp-content/uploads/2026/03/Buying-Gold-in-Dubai-2026-Guide-Prices-Best-Places-Taxes-and-Authenticity-Checks-300x150.webp 300w, https://royalbullioncapital.com/wp-content/uploads/2026/03/Buying-Gold-in-Dubai-2026-Guide-Prices-Best-Places-Taxes-and-Authenticity-Checks-1024x512.webp 1024w, https://royalbullioncapital.com/wp-content/uploads/2026/03/Buying-Gold-in-Dubai-2026-Guide-Prices-Best-Places-Taxes-and-Authenticity-Checks-768x384.webp 768w, https://royalbullioncapital.com/wp-content/uploads/2026/03/Buying-Gold-in-Dubai-2026-Guide-Prices-Best-Places-Taxes-and-Authenticity-Checks-600x300.webp 600w",
            category: "Gold Bullion",
            description: "Buying Gold in Dubai (2026 Guide): Prices, Best Places, Taxes and Authenticity Checks",
            author: "Royal Bullion Capital",
            date: "March 26, 2026"
        },
        {
            id: 4,
            href: "https://royalbullioncapital.com/emirates-gold-products-guide/",
            imgSrc: "https://royalbullioncapital.com/wp-content/uploads/2026/03/rbc-3.jpg",
            srcSet: "https://royalbullioncapital.com/wp-content/uploads/2026/03/rbc-3.jpg 1376w, https://royalbullioncapital.com/wp-content/uploads/2026/03/rbc-3-300x167.jpg 300w, https://royalbullioncapital.com/wp-content/uploads/2026/03/rbc-3-1024x572.jpg 1024w, https://royalbullioncapital.com/wp-content/uploads/2026/03/rbc-3-768x429.jpg 768w, https://royalbullioncapital.com/wp-content/uploads/2026/03/rbc-3-600x335.jpg 600w",
            category: "Gold Bullion",
            description: "Emirates Gold Products Guide: Bars, Coins and Cast Products",
            author: "Royal Bullion Capital",
            date: "March 17, 2026"
        },
        {
            id: 5,
            href: "https://royalbullioncapital.com/exploring-the-physical-gold-bullion-market-in-the-uae/",
            imgSrc: "https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-4-scaled.jpg",
            srcSet: "https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-4-scaled.jpg 2560w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-4-300x200.jpg 300w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-4-1024x683.jpg 1024w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-4-768x512.jpg 768w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-4-1536x1024.jpg 1536w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-4-2048x1365.jpg 2048w",
            category: "Gold Bullion",
            description: "Exploring the Physical Gold Bullion Market in the UAE",
            author: "Royal Bullion Capital",
            date: "July 20, 2024"
        },
        {
            id: 6,
            href: "https://royalbullioncapital.com/tips-for-successful-gold-bullion-trading-maximizing-returns-and-minimizing-risks/",
            imgSrc: "https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-3-scaled.jpg",
            srcSet: "https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-3-scaled.jpg 2560w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-3-300x200.jpg 300w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-3-1024x683.jpg 1024w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-3-768x512.jpg 768w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-3-1536x1024.jpg 1536w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-3-2048x1365.jpg 2048w",
            category: "Gold Bullion",
            description: "Tips for Successful Gold Bullion Trading: Maximizing Returns and Minimizing Risks",
            author: "Royal Bullion Capital",
            date: "January 6, 2024"
        },
        {
            id: 7,
            href: "https://royalbullioncapital.com/gold-bullion-trading-vs-other-investment-options-a-comparative-analysis/",
            imgSrc: "https://royalbullioncapital.com/wp-content/uploads/2023/09/BLog-4-1.jpg",
            srcSet: "https://royalbullioncapital.com/wp-content/uploads/2023/09/BLog-4-1.jpg 2560w, https://royalbullioncapital.com/wp-content/uploads/2023/09/BLog-4-1-300x200.jpg 300w, https://royalbullioncapital.com/wp-content/uploads/2023/09/BLog-4-1-1024x683.jpg 1024w, https://royalbullioncapital.com/wp-content/uploads/2023/09/BLog-4-1-768x512.jpg 768w, https://royalbullioncapital.com/wp-content/uploads/2023/09/BLog-4-1-1536x1024.jpg 1536w, https://royalbullioncapital.com/wp-content/uploads/2023/09/BLog-4-1-2048x1366.jpg 2048w",
            category: "Gold Bullion",
            description: "Gold Bullion Trading vs. Other Investment Options: A Comparative Analysis",
            author: "Royal Bullion Capital",
            date: "September 19, 2023"
        },
        {
            id: 8,
            href: "https://royalbullioncapital.com/introduction-to-gold-bullion-trading-a-comprehensive-overview/",
            imgSrc: "https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-1-scaled.jpg",
            srcSet: "https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-1-scaled.jpg 2560w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-1-300x200.jpg 300w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-1-1024x683.jpg 1024w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-1-768x512.jpg 768w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-1-1536x1024.jpg 1536w, https://royalbullioncapital.com/wp-content/uploads/2023/04/Blog-1-2048x1365.jpg 2048w",
            category: "Gold Bullion",
            description: "Introduction to Gold Bullion Trading: A Comprehensive Overview",
            author: "Royal Bullion Capital",
            date: "April 27, 2023"
        }
    ];

    // Arrow SVG component
    const ArrowIcon = () => (
        <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z"
                fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
        </svg>
    );

    return (
        <div>
            <div className="page-wrapper">
                <main data-taxi="" className="main-wrapper">
                    <div data-taxi-view="" className="page_view news">
                        <div className="filtre_w_flip"></div>
                        <section className="section projets">
                            <div className="container news-hero">
                                <div className="div-block-8">
                                    <div className="news-h1_w">
                                        <div reveal-letter="" className="fake-h1-news hide-tab">Blogs</div>
                                    </div>
                                    <div className="space-20"></div>
                                </div>
                                <div className="grid-news__list__w w-dyn-list">
                                    <div data-stagger="0.08" reveal-clip-group="" role="list" className="grid-news__list w-dyn-items">
                                        {/* Blog posts mapped */}
                                        {blogPosts.map((post) => (
                                            <div key={post.id} reveal="" role="listitem" className="grid-news__item w-dyn-item">
                                                <a data-hover-link-ignore="" className="grid-news-link w-inline-block">
                                                    <div className="grid-news__img_w">
                                                        <img
                                                            src={post.imgSrc}
                                                            loading="lazy"
                                                            alt={post.description}
                                                            sizes="100vw"
                                                            srcSet={post.srcSet}
                                                        />
                                                    </div>
                                                    <div className="titre-news-item">
                                                        <h2 reveal-op="" className="cat-news">{post.category}</h2>
                                                        <h2 reveal-op="" className="desc-thumb-news">{post.description}</h2>
                                                    </div>
                                                </a>
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
                                    <h2 className="desc-projet"></h2>
                                    <div className="flex-40">
                                        <a href="mailto:support@royalbullioncapital.com" className="contact-footer w-inline-block">
                                            <div>mail</div>
                                            <div className="arrow-contact-link w-embed">
                                                <ArrowIcon />
                                            </div>
                                        </a>
                                        <a href="https://wa.me/+97145752082" target="_blank" rel="noopener noreferrer" className="contact-footer w-inline-block">
                                            <div>whatsapp</div>
                                            <div className="arrow-contact-link w-embed">
                                                <ArrowIcon />
                                            </div>
                                        </a>
                                        <a href="tel:+97145752082" className="contact-footer w-inline-block">
                                            <div>phone</div>
                                            <div className="arrow-contact-link w-embed">
                                                <ArrowIcon />
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
                                                            <input className="field-form w-input" maxLength="256" name="email" data-name="Email" placeholder="Your email" type="email" id="email" required="" />
                                                            <div className="fake-submit_w">
                                                                <input type="submit" data-wait="Wait..." className="submit-btn w-button" value="" />
                                                                <div className="arrow-submit-form w-embed">
                                                                    <ArrowIcon />
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
                                                    <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c870fd66c6966c9776_MS%20(-)%20Creme.webp" loading="lazy" alt="" className="card-ms-svg" />
                                                    <div className="card-line-svg w-embed"></div>
                                                    <div className="card-address">Royal Bullion <br /> Capital</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/699c216505338d828d1b32cb_Footer-Wide-2.svg" loading="lazy" alt="" className="bg-footer cream hide-tab" />
                                    <img src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/699c216505338d828d1b32cb_Footer-Wide-2.svg" loading="lazy" alt="" className="bg-footer green hide-tab" />
                                </div>
                            </div>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Blogs;