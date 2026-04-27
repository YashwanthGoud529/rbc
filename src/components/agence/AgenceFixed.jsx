import React from 'react'

const AgenceFixed = () => {
  // Contact links data
  const contactLinks = [
    { label: 'mail', href: 'mailto:hello@mersi-architecture.com', type: 'email' },
    { label: 'whatsapp', href: 'https://wa.me/+33609872775', type: 'external' },
    { label: 'phone', href: 'tel:+33172682228', type: 'phone' }
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
                    src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697cca1c3cbe3aa2a465d7d5_heroabout.webp"
                    loading="lazy" alt="" className="img-scale" />
                  <div className="about-hero-bottom">
                    <h1 line="" className="h1-project-temp">Quiet luxury <br />interiors shaped <br />by true
                      stories</h1>
                    <div className="hero-about-info-bottom center"><img
                      src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/6980841a996c4449bea3f947_MS%20(-)%20Creme.webp"
                      loading="lazy" alt="" className="logo-hero-agence left" />
                      <h2 line="" className="h2-subtitle-about">Every project is born from a simple intention
                        :<br />to create spaces that are right, elegant, and lasting.</h2><img
                        src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/6980841a996c4449bea3f947_MS%20(-)%20Creme.webp"
                        loading="lazy" alt="" className="logo-hero-agence" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="space-150"></div>
            <section className="section">
              <div className="container ms-anime">
                <div className="about-infos">
                  <div className="flex-col">
                    <h2 line="" className="desc-about">We believe in spaces that stand the test of time.<br />In
                      interior architecture that doesn't seek <br />ostentation, but the
                      precision, driven by <br />an obsession for detail.<br />‍<br />Spaces conceived
                      as a whole, <br />where proportions, materials and uses find <br />a
                      natural alignment and give birth <br />to inhabited spaces, carrying a
                      soul <br />and a story. <br />‍<br />Our approach combines architectural
                      rigor, <br />aesthetic sensitivity <br />and operational mastery, at the
                      service of functional, unique and timeless projects.</h2>
                    <div className="space-20"></div>
                    <div className="space-20"></div><a reveal-op="" href="/contact"
                      className="contact-footer w-inline-block">
                      <div>let's talk</div>
                      <div className="arrow-contact-link w-embed"><svg width="100%" height="100%"
                        viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M6.97361 0.199952L0.200012 0.199951L0.200012 1.42636L6.10593 1.42636L0.412716 7.11956L1.2804 7.98725L6.97361 2.29404L6.97361 8.19995L8.20001 8.19995L8.20001 1.42636L8.20001 0.199953L6.97361 0.199952Z"
                          fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="0.4" />
                      </svg></div>
                    </a>
                  </div>
                  <h2 line="" className="mersi-copyright">®26 MERSI</h2>
                </div>
                <div className="space-150"></div>
                <div className="ms-anime_w">
                  <div className="grid-info-text">
                    <div className="info-meryl"><img
                      src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697ce4ddeeb4769065831add_Meryl.webp"
                      loading="lazy" alt="" className="meryl-img mob" />
                      <h2 line="" className="info-mersi-name">Meryl Motyka</h2>
                      <h2 line="" className="info-mersi-p">Meryl Motyka embodies architectural rigor and precision. 
                        A state-certified architect (HMONP), trained at the École Spéciale d'Architecture in
                        Paris, she develops a practice deeply rooted in detail, the
                        technique and the quality of execution.<br />‍<br />Her gaze focuses on what
                        structures a project over time: the proportions, the assemblies, the
                        finishes. A silent, demanding approach, where sophistication is born from
                        mastery.</h2>
                    </div><img
                      src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/69a6faa5ab03407782717954_CC_MERSI%20x%20SEGUR-28%201.webp"
                      loading="lazy" reveal-clip="" alt="" className="meryl-img new" />
                    <div id="w-node-_316e9b7a-9c37-69fb-821a-eefccda2e4ab-89c72768" className="info-simon"><img
                      src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697ce4dd60b336c22023695d_Simon.webp"
                      loading="lazy" alt="" className="meryl-img mob" />
                      <h2 line="" className="info-mersi-name">Simon Mimoun</h2>
                      <h2 line="" className="info-mersi-p">Simon Mimoun develops a sensitive and
                        global vision of the project. A self-taught interior architect, he seeks singularity
                        in the ordinary, revealing the potential of places through the choice of materials,
                        textures and balance.<br />‍<br />He supports each project in all
                        its dimensions — aesthetic, financial, operational — with a fine understanding
                        of technique and the construction site. An instinctive but controlled approach,
                        as attentive to what is seen as to what is felt.</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="space-150"></div>
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
                  </div><a data-hover-link-ignore="" href="/contact" className="bg-video_w w-inline-block">
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
                      <div data-posterUrl="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a%2F6980906b61a44a7d683a427b_Showreel-CUT-1-SD_poster.0000000.jpg"
                        data-videoUrls="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a%2F6980906b61a44a7d683a427b_Showreel-CUT-1-SD_mp4.mp4,https://cdn.prod.website-files.com/69689842a40a17ac45e5418a%2F6980906b61a44a7d683a427b_Showreel-CUT-1-SD_webm.webm"
                        data-autoplay="true" data-loop="true" data-wf-ignore="true"
                        className="video-talk w-background-video w-background-video-atom"><video
                          id="068fd7b2-be2f-b2b6-704e-180551d02c69-video" autoPlay="" loop=""
                          style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/69689842a40a17ac45e5418a%2F6980906b61a44a7d683a427b_Showreel-CUT-1-SD_poster.0000000.jpg")' }}
                          muted="" playsInline="" data-wf-ignore="true" data-object-fit="cover">
                          <source
                            src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a%2F6980906b61a44a7d683a427b_Showreel-CUT-1-SD_mp4.mp4"
                            data-wf-ignore="true" />
                          <source
                            src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a%2F6980906b61a44a7d683a427b_Showreel-CUT-1-SD_webm.webm"
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
                          <div className="card-address">12 Bd Raspail<br />Paris 7</div>
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
                <div className="container-bottom-footer">
                  <div className="footer-link-left">
                    {footerLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        data-taxi-link=""
                        className="footer-link"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <div className="code-embed-5 w-embed">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.71354 10C4.62674 9.43576 4.375 8.82812 3.95833 8.17708C3.55035 7.52604 2.96875 6.91406 2.21354 6.34115C1.44965 5.75955 0.711806 5.39931 0 5.26042V4.71354C0.720486 4.54861 1.41927 4.22743 2.09635 3.75C2.77344 3.27257 3.34635 2.70399 3.8151 2.04427C4.28385 1.37587 4.58333 0.694444 4.71354 0H5.26042C5.33854 0.442708 5.49479 0.889757 5.72917 1.34115C5.97222 1.79253 6.28038 2.22656 6.65365 2.64323C7.02691 3.05122 7.43924 3.42014 7.89062 3.75C8.57639 4.23611 9.27951 4.55729 10 4.71354V5.26042C9.51389 5.3559 9.01476 5.55121 8.5026 5.84635C7.99913 6.14149 7.53038 6.48871 7.09635 6.88802C6.66233 7.28733 6.30642 7.70833 6.02865 8.15104C5.6033 8.82812 5.34722 9.44444 5.26042 10H4.71354ZM4.89583 9.6875H5.07812C5.12153 9.23611 5.19097 8.78472 5.28646 8.33333C5.39062 7.87326 5.50781 7.44792 5.63802 7.05729C5.77691 6.66667 5.92014 6.34549 6.06771 6.09375C6.36285 5.92882 6.71441 5.77691 7.1224 5.63802C7.53906 5.49913 7.96875 5.38194 8.41146 5.28646C8.86285 5.19097 9.27951 5.13021 9.66146 5.10417V4.92187C9.27951 4.88715 8.85851 4.82205 8.39844 4.72656C7.94705 4.6224 7.51302 4.50087 7.09635 4.36198C6.67969 4.21441 6.33681 4.0625 6.06771 3.90625C5.92014 3.64583 5.77691 3.32465 5.63802 2.94271C5.50781 2.55208 5.39062 2.13542 5.28646 1.69271C5.19097 1.24132 5.12153 0.78993 5.07812 0.338541H4.89583C4.86111 0.746527 4.79601 1.17187 4.70052 1.61458C4.61372 2.04861 4.50087 2.46528 4.36198 2.86458C4.22309 3.26389 4.07118 3.61111 3.90625 3.90625C3.62847 4.0625 3.28559 4.21441 2.8776 4.36198C2.46962 4.50087 2.03993 4.6224 1.58854 4.72656C1.13715 4.82205 0.711806 4.88715 0.3125 4.92187V5.10417C0.711806 5.13021 1.13281 5.19097 1.57552 5.28646C2.01823 5.38194 2.44358 5.49913 2.85156 5.63802C3.25955 5.77691 3.61111 5.92882 3.90625 6.09375C4.07118 6.37153 4.21875 6.71441 4.34896 7.1224C4.48785 7.5217 4.60503 7.94705 4.70052 8.39844C4.79601 8.84115 4.86111 9.27083 4.89583 9.6875Z"
                        fill="#1A1A1A" />
                    </svg>
                  </div>
                  <div className="footer-link-right">
                    <a href="https://www.linkedin.com/in/clementmerouani/" target="_blank" className="footer-link w-inline-block">
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
  )
}

export default AgenceFixed