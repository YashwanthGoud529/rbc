import React from 'react';

// Destructure isLoading from props
const Loader = ({ isLoading }) => {
    return (
        // Add dynamic styles based on isLoading state
        <div 
            className="container-loader loader"
            style={{
                opacity: isLoading ? 1 : 0,
                visibility: isLoading ? 'visible' : 'hidden',
                pointerEvents: isLoading ? 'all' : 'none',
                transition: isLoading ? 'none' : 'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out'
            }}
        >
            <div className="div-block-9">
                <div>Quiet luxury interiors</div>
            </div>
            <div className="div-ms-loader load">
                <div className="ms-fake w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 550 237" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="innerShapesClip1">
                                <path d="M153.124 95.8847H138.899V173.606H153.124V95.8847Z" />
                                <path
                                    d="M18 18.1641H138.899L138.899 95.8847H105.807C101.294 95.8847 97.636 99.5484 97.636 104.068V218.164H18V18.1641Z" />
                                <path
                                    d="M274 18.1641V218.164H194.387V104.068C194.387 99.5482 190.728 95.8847 186.216 95.8847L153.124 95.8847L153.124 18.1641H274Z" />
                                <path
                                    d="M431.012 103.766V118.011H369.341C347.614 118.011 330 100.572 330 79.0597V56.9518C330 35.4392 347.614 18 369.341 18H532V103.766H431.012Z" />
                                <path
                                    d="M431.012 132.234V118.011H492.659C514.386 118.011 532 135.451 532 156.963V179.048C532 200.561 514.386 218 492.659 218H330V132.234H431.012Z" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#innerShapesClip1)">
                            <image
                                href="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/6982158da1b631a43a1ec092_e2bacb2dacffe777f4803957bb34c9b0_texture%20test1.webp"
                                x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                        </g>
                    </svg>
                </div>
                <div className="ms-fake w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 550 237" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="innerShapesClip2">
                                <path d="M153.124 95.8847H138.899V173.606H153.124V95.8847Z" />
                                <path
                                    d="M18 18.1641H138.899L138.899 95.8847H105.807C101.294 95.8847 97.636 99.5484 97.636 104.068V218.164H18V18.1641Z" />
                                <path
                                    d="M274 18.1641V218.164H194.387V104.068C194.387 99.5482 190.728 95.8847 186.216 95.8847L153.124 95.8847L153.124 18.1641H274Z" />
                                <path
                                    d="M431.012 103.766V118.011H369.341C347.614 118.011 330 100.572 330 79.0597V56.9518C330 35.4392 347.614 18 369.341 18H532V103.766H431.012Z" />
                                <path
                                    d="M431.012 132.234V118.011H492.659C514.386 118.011 532 135.451 532 156.963V179.048C532 200.561 514.386 218 492.659 218H330V132.234H431.012Z" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#innerShapesClip2)">
                            <image
                                href="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/6982158dffe74e62f89a4811_46b7ce628074b53c8d8a440fa54bb871_texture%20test2.webp"
                                x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                        </g>
                    </svg>
                </div>
                <div className="ms-fake w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 550 237" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="innerShapesClip3">
                                <path d="M153.124 95.8847H138.899V173.606H153.124V95.8847Z" />
                                <path
                                    d="M18 18.1641H138.899L138.899 95.8847H105.807C101.294 95.8847 97.636 99.5484 97.636 104.068V218.164H18V18.1641Z" />
                                <path
                                    d="M274 18.1641V218.164H194.387V104.068C194.387 99.5482 190.728 95.8847 186.216 95.8847L153.124 95.8847L153.124 18.1641H274Z" />
                                <path
                                    d="M431.012 103.766V118.011H369.341C347.614 118.011 330 100.572 330 79.0597V56.9518C330 35.4392 347.614 18 369.341 18H532V103.766H431.012Z" />
                                <path
                                    d="M431.012 132.234V118.011H492.659C514.386 118.011 532 135.451 532 156.963V179.048C532 200.561 514.386 218 492.659 218H330V132.234H431.012Z" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#innerShapesClip3)">
                            <image
                                href="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/6982158d898097cf0b32b96d_6b4e6c83fcbc67af2acca8e73eb7f805_texture%20test3.webp"
                                x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                        </g>
                    </svg>
                </div>
                <div className="ms-fake w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 550 237" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="innerShapesClip4">
                                <path d="M153.124 95.8847H138.899V173.606H153.124V95.8847Z" />
                                <path
                                    d="M18 18.1641H138.899L138.899 95.8847H105.807C101.294 95.8847 97.636 99.5484 97.636 104.068V218.164H18V18.1641Z" />
                                <path
                                    d="M274 18.1641V218.164H194.387V104.068C194.387 99.5482 190.728 95.8847 186.216 95.8847L153.124 95.8847L153.124 18.1641H274Z" />
                                <path
                                    d="M431.012 103.766V118.011H369.341C347.614 118.011 330 100.572 330 79.0597V56.9518C330 35.4392 347.614 18 369.341 18H532V103.766H431.012Z" />
                                <path
                                    d="M431.012 132.234V118.011H492.659C514.386 118.011 532 135.451 532 156.963V179.048C532 200.561 514.386 218 492.659 218H330V132.234H431.012Z" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#innerShapesClip4)">
                            <image
                                href="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/6982158dd52cb45c968cac81_76a3ee7534c9f15eb33f68370adbba71_texture%20test4.webp"
                                x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                        </g>
                    </svg>
                </div>
                <div className="ms-fake w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 550 237" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="innerShapesClip5">
                                <path d="M153.124 95.8847H138.899V173.606H153.124V95.8847Z" />
                                <path
                                    d="M18 18.1641H138.899L138.899 95.8847H105.807C101.294 95.8847 97.636 99.5484 97.636 104.068V218.164H18V18.1641Z" />
                                <path
                                    d="M274 18.1641V218.164H194.387V104.068C194.387 99.5482 190.728 95.8847 186.216 95.8847L153.124 95.8847L153.124 18.1641H274Z" />
                                <path
                                    d="M431.012 103.766V118.011H369.341C347.614 118.011 330 100.572 330 79.0597V56.9518C330 35.4392 347.614 18 369.341 18H532V103.766H431.012Z" />
                                <path
                                    d="M431.012 132.234V118.011H492.659C514.386 118.011 532 135.451 532 156.963V179.048C532 200.561 514.386 218 492.659 218H330V132.234H431.012Z" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#innerShapesClip5)">
                            <image
                                href="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/6982158da320687db8a09b17_6b993d9487f22cf98e332697fb09d69e_texture%20test5.webp"
                                x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
                        </g>
                    </svg>
                </div>
                <div className="ms-real w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 550 237" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g style={{ mixBlendMode: "normal" }}>
                            <g filter="url(#filter0_ddii_4661_2064)">
                                <path d="M153.124 95.8847H138.899V173.606H153.124V95.8847Z" fill="#EDE7DE"
                                    fillOpacity="0.01" />
                                <path
                                    d="M18 18.1641H138.899L138.899 95.8847H105.807C101.294 95.8847 97.636 99.5484 97.636 104.068V218.164H18V18.1641Z"
                                    fill="#EDE7DE" fillOpacity="0.01" />
                                <path
                                    d="M274 18.1641V218.164H194.387V104.068C194.387 99.5482 190.728 95.8847 186.216 95.8847L153.124 95.8847L153.124 18.1641H274Z"
                                    fill="#EDE7DE" fillOpacity="0.01" />
                                <path
                                    d="M431.012 103.766V118.011H369.341C347.614 118.011 330 100.572 330 79.0597V56.9518C330 35.4392 347.614 18 369.341 18H532V103.766H431.012Z"
                                    fill="#EDE7DE" fillOpacity="0.01" />
                                <path
                                    d="M431.012 132.234V118.011H492.659C514.386 118.011 532 135.451 532 156.963V179.048C532 200.561 514.386 218 492.659 218H330V132.234H431.012Z"
                                    fill="#EDE7DE" fillOpacity="0.01" />
                            </g>
                            <g filter="url(#filter1_iiii_4661_2064)">
                                <path
                                    d="M550 121.767H537.746C545.412 131.432 550 143.639 550 156.963V179.048C550 210.67 524.157 236 492.658 236H312V114.233H324.236C316.581 104.571 312 92.3731 312 79.0596V56.9521C312 25.33 337.843 0 369.342 0H550V121.767ZM369.342 7C341.643 7 319 29.2615 319 56.9521V79.0596C319 96.8432 328.34 112.387 342.359 121.233H319V229H492.658C520.357 229 543 206.739 543 179.048V156.963C543 139.163 533.643 123.609 519.603 114.767H543V7H369.342Z"
                                    fill="#EDE7DE" fillOpacity="0.01" />
                                <path
                                    d="M292 236.164H176.387V113.885H171.124V191.605H120.898V113.885H115.636V236.164H0V0.164062H292V236.164ZM7 7.16406V229.164H108.636V106.885H127.898V184.605H164.124V106.885H183.387V229.164H285V7.16406H7Z"
                                    fill="#EDE7DE" fillOpacity="0.01" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_ddii_4661_2064" x="0" y="12" width="538" height="226.164"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-3" dy="3" />
                                <feGaussianBlur stdDeviation="1.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4661_2064" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-6" dy="6" />
                                <feGaussianBlur stdDeviation="6" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect1_dropShadow_4661_2064"
                                    result="effect2_dropShadow_4661_2064" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_4661_2064"
                                    result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-3" dy="4" />
                                <feGaussianBlur stdDeviation="10" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0" />
                                <feBlend mode="normal" in2="shape" result="effect3_innerShadow_4661_2064" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="20" />
                                <feGaussianBlur stdDeviation="15" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="effect3_innerShadow_4661_2064"
                                    result="effect4_innerShadow_4661_2064" />
                            </filter>
                            <filter id="filter1_iiii_4661_2064" x="-9" y="-10" width="567" height="250.164"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="4" dy="-2" />
                                <feGaussianBlur stdDeviation="1.5" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4661_2064" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="8" dy="-10" />
                                <feGaussianBlur stdDeviation="7.5" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                <feBlend mode="normal" in2="effect1_innerShadow_4661_2064"
                                    result="effect2_innerShadow_4661_2064" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-3" dy="2" />
                                <feGaussianBlur stdDeviation="1.5" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                                <feBlend mode="normal" in2="effect2_innerShadow_4661_2064"
                                    result="effect3_innerShadow_4661_2064" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-9" dy="4" />
                                <feGaussianBlur stdDeviation="7.5" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="effect3_innerShadow_4661_2064"
                                    result="effect4_innerShadow_4661_2064" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="div-block-10">
                <div>shaped by true stories</div>
            </div>
        </div>
    );
};

export default Loader;