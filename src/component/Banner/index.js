import React from 'react';

const Banner = () => {
    return (
         <section className="hero-slider hero-style-1" id="home">
            <div className="swiper-container">
                <div className="slide-main-text">
                    <div className="container">
                        <div className="slide-title">
                            <h2><span>Thanh Sơn</span> <i className="ti-heart"></i> <span>Tống Hiền</span></h2>
                        </div>
                        <div className="wedding-date">
                            <span>23 Tháng 9 2023</span>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                  
                </div>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image" data-background="https://cdn.biihappy.com/ziiweb/website/629d7539aca2fd1bbc07ffc9/templates/6174ef83a62963738e0a367c/f45c0bd54dbb96f59d66983e17aef8dd.jpg"></div> 
                    </div>
                    <div className="swiper-slide">
                        <div className="slide-inner slide-bg-image" data-background="https://cdn.biihappy.com/ziiweb/website/629d7539aca2fd1bbc07ffc9/templates/6174ef83a62963738e0a367c/d08539e8152025ba9798d4ce811153fb.jpg"></div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </section>
    );
}

export default Banner;
