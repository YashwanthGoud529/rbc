import React from 'react';

const Shop = () => {
  // Trail images data
  const trailImages = [
    { id: 1, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418e63d33b54d21e6c27_1.avif", alt: "" },
    { id: 2, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418e96b368a7f2581961_2.avif", alt: "" },
    { id: 3, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418e3c6fe88a6d224def_3.avif", alt: "" },
    { id: 4, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418e25bc572725a8cea1_4.avif", alt: "" },
    { id: 5, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418f4ae806dd494fe1f7_5.avif", alt: "" },
    { id: 6, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418eeb31262df238f396_6.avif", alt: "" },
    { id: 7, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418f1d7e1c9e6908529f_7.avif", alt: "" },
    { id: 8, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418e01546f1d03388120_8.avif", alt: "" },
    { id: 9, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418f9bd7f470dd12074d_9.avif", alt: "" },
    { id: 10, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418f4ae806dd494fe20e_10.avif", alt: "" },
    { id: 11, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418fb7a843884e0321a3_11.avif", alt: "" },
    { id: 12, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418fbfe7403bf78e7fa6_12.avif", alt: "" },
    { id: 13, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418f6dc2e7d24de69584_13.avif", alt: "" },
    { id: 14, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418fd6206a1f99cfd5d0_14.avif", alt: "" },
    { id: 15, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418ffb74284175cbba5d_15.avif", alt: "" },
    { id: 16, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418f864f3e68ffcde83f_16.avif", alt: "" },
    { id: 17, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418f16bdcc4d2250e941_17.avif", alt: "" },
    { id: 18, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418fb7a843884e0321ba_18.avif", alt: "" },
    { id: 19, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b41905d77cd9bfa4df916_19.avif", alt: "" },
    { id: 20, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b41904ab6bfd85002593a_20.avif", alt: "" },
    { id: 21, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b418fad6f015230005458_21.avif", alt: "" },
    { id: 22, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b419042ef308da7167bb5_22.avif", alt: "" },
    { id: 23, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b41901e1d3064cb6aed1a_23.avif", alt: "" },
    { id: 24, src: "https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/696b419063d33b54d21e6c3f_24.avif", alt: "" }
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div data-taxi="" className="main-wrapper">
          <div data-taxi-view="" className="page_view">
            <div className="container landing">
              <div></div>
              <div className="div-ms-loader">
                <div id="w-node-_11700b16-6ed2-7df9-1fc0-9fbc44a17812-d69403f2" className="text-block-6">
                  Coming<span className="soon-mob"> soon</span>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c86edef1bdfa53ecf5_MS%20BIG%20-%20Creme.webp"
                  loading="lazy"
                  id="w-node-_42e37d97-2b9b-89b2-6439-e37118e48fbd-d69403f2"
                  sizes="(max-width: 1100px) 100vw, 1100px"
                  alt=""
                  srcSet="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c86edef1bdfa53ecf5_MS%20BIG%20-%20Creme-p-500.png 500w, https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c86edef1bdfa53ecf5_MS%20BIG%20-%20Creme-p-800.png 800w, https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c86edef1bdfa53ecf5_MS%20BIG%20-%20Creme-p-1080.png 1080w, https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c86edef1bdfa53ecf5_MS%20BIG%20-%20Creme.webp 1100w"
                  className="logo-landing-big"
                />
                <div id="w-node-_11700b16-6ed2-7df9-1fc0-9fbc44a17815-d69403f2" className="hide-tab">soon</div>
              </div>
              <div className="container-bottom-footer soon"></div>
            </div>
            <div data-trail="wrapper" className="trail-section">
              <div className="trail-wrap">
                <div className="trail-list">
                  {trailImages.map((image) => (
                    <div key={image.id} data-trail="item" className="trail-item">
                      <img
                        loading="lazy"
                        src={image.src}
                        alt={image.alt}
                        className="trail-item__img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;