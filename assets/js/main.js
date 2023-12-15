$(function() {
    const swiper = new Swiper('.slider-banner-container', {
        // Optional parameters
        loop: true,
        rewind: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
   
    const swiper2 = new Swiper('.content-product-container', {
        loop: true,
        rewind: true,
        spaceBetween: 16,
        slidesPerView: 3,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // breakpoints: {
        //     768: {
        //         slidesPerView: 2,
        //         spaceBetween: 40,
        //     },
        //     1200: {
        //         slidesPerView: 3,
        //         spaceBetween: 50,
        //     },
        // },
    });
    $('#mobile-preview').on('click', function () {
        handleCheckSizeOfLayout(576)
    })
    $('#tablet-preview').on('click', function () {
        handleCheckSizeOfLayout(768)
    })
    $('#laptop-preview').on('click', function () {
        handleCheckSizeOfLayout(1200)
        
    })
    $('#pc-preview').on('click', function () {
        handleCheckSizeOfLayout(1600)
    })
    
    const handleCheckSizeOfLayout = (getSizeLayout) => {
        $('#content-preview').animate({
            scrollTop: 0
        }, 'smooth');
        switch (getSizeLayout) {
            case 576:
                handleLayoutInMobile()
                break
            case 768:
                handleLayoutInTablet()
                break
            case 1200:
                break
            case 1600:
                handleLayoutInPC()
                break
            default:
                break
        }
    }
    const handleLayoutInMobile = () => {
        swiper2.params.slidesPerView = 1
        $('.main-content .content-preview').css({
            display: 'flex',
            justifyContent: 'center'
        })
        $('.main-content .content-preview .content-container').css({
            width: '390px'
        })
        $('.content-preview .content-container .content-header .header-layout').css({
            height: '32px'
        })
        $('.content-preview .content-container .content-header .header-layout > div:not(.header-e-profile-name) h2').css({
            fontSize: '1.2rem'
        })
        $('.content-preview .content-container .content-header .header-layout > div:nth-child(2) h2').css({
            fontSize: '2rem'
        })
        $('.content-container .content-slider-image .slider-banner-container .slider-box img').css({
            height: '300px'
        })
        $('.content-container .content-slider-image').css({
            height: 'auto'
        })
        $('.content-sapo, .content-title').css({
            padding: '2rem 1rem'
        })
        $('.content-sapo .sapo-detail .sapo-text, .content-partner-information .partner-introduce .introduce, .content-partner-information .partner-information ul li, .content-description .description, .content-video .description, .content-product-container .product-card .product-description .product-introduce').css({
            fontSize: '12px',
            lineHeight: '22px'
        })
        $('.content-sapo .sapo-detail .sapo-text .sapo-quote').css({
            fontSize: '24px',
        })
        $('.content-title, .content-box').css({
            marginTop: '0',
        })
        $('.content-title .title').css({
            fontSize: '18px',
        })
        $('.content-partner-information .partner-introduce, .content-partner-information .partner-information, .content-video .description, .content-video .video').css({
            gridColumn: 'span 5 / span 5'
        })
        $('.content-box .about-us').css({
            fontSize: '14px',
            marginBottom: '18px'
        })
        $('.content-product-container .product-card .product-image').css({
            height: '350px'
        })
        $('.content-product-container .product-card .product-description .product-name').css({
            fontSize: '16px',
        })
        $('.content-product-layout .content-product-container').css({
            padding: '2rem 1rem 3rem'
        })
        $('.partner-contact-container').css({
            margin: '0'
        })
        $('.partner-contact-container .partner-address-map, .partner-contact-container .partner-form').css({
            gridColumn: 'span 2 / span 2'
        })
        $('.partner-contact-container .partner-address-map').css({
            height: '300px'
        })
        $('.content-social-medial-container').css({
            display: 'grid',
            gap: '14px',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
        })
        $('.content-social-medial-container .social-link').css({
            gridColumn: 'span 1 / span 1',
            fontSize: '12px',
            justifyContent: 'flex-start',
            gap: '0',
            marginLeft: '16px'
        })
        $('.content-box .content-social-medial-container .social-link i').css({
            fontSize: '16px'
        })
    }
    const handleLayoutInTablet = () => {
        swiper2.params.slidesPerView = 2
        $('.main-content .content-preview').css({
            display: 'flex',
            justifyContent: 'center'
        })
        $('.main-content .content-preview .content-container').css({
            width: '768px'
        })
        $('.content-preview .content-container .content-header .header-layout').css({
            height: ''
        })
        $('.content-preview .content-container .content-header .header-layout > div:not(.header-e-profile-name) h2').css({
            fontSize: ''
        })
        $('.content-preview .content-container .content-header .header-layout > div:nth-child(2) h2').css({
            fontSize: ''
        })
        $('.content-sapo, .content-title').css({
            padding: '2rem 6rem'
        })
        $('.content-box').css({
            marginBottom: '2rem'
        })
        $('.content-container .content-box .content-partner-information').css({
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
        })
        $('.content-container .content-box .content-partner-information .partner-introduce').css({
            gridColumn: 'span 2 / span 2'
        })
        $('.content-container .content-box .content-partner-information .partner-information').css({
            gridColumn: 'span 2 / span 2'
        })
        $('.content-container .content-box .content-video').css({
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
        })
        $('.content-container .content-box .content-video .description ').css({
            gridColumn: 'span 2 / span 2'
        })
        $('.content-container .content-box .content-video .video').css({
            gridColumn: 'span 2 / span 2'
        })
        $('.content-box .partner-contact-container').css({
            gap: '18px',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
        })
        $('.partner-contact-container .partner-address-map, .partner-contact-container .partner-form').css({
            gridColumn: 'span 1 / span 1'
        })
        $('.content-social-medial-container').css({
            display: '',
            gap: '',
            gridTemplateColumns: ''
        })
        $('.content-social-medial-container .social-link').css({
            gridColumn: '',
            fontSize: '',
            justifyContent: '',
            gap: '',
            marginLeft: ''
        })
        $('.content-box .content-social-medial-container .social-link i').css({
            fontSize: ''
        })
    }
    handleLayoutInTablet()
    const handleLayoutInPC = () => {
        swiper2.params.slidesPerView = 3
        $('.main-content .content-preview').css({
            display: '',
            justifyContent: ''
        })
        $('.main-content .content-preview .content-container').css({
            width: ''
        })
        $('.content-preview .content-container .content-header .header-layout').css({
            height: ''
        })
        $('.content-container .content-header .header-layout > div:first-child img').css({
            height: ''
        })
        $('.content-preview .content-container .content-header .header-layout > div:not(.header-e-profile-name) h2').css({
            fontSize: ''
        })
        $('.content-preview .content-container .content-header .header-layout > div:nth-child(2) h2').css({
            fontSize: ''
        })
        $('.content-container .content-slider-image .slider-banner-container .slider-box img').css({
            height: ''
        })
        $('.content-container .content-slider-image').css({
            height: ''
        })
        $('.content-sapo, .content-title').css({
            padding: ''
        })
        $('.content-sapo .sapo-detail .sapo-text, .content-partner-information .partner-introduce .introduce, .content-partner-information .partner-information ul li, .content-description .description, .content-video .description, .content-product-container .product-card .product-description .product-introduce').css({
            fontSize: '',
            lineHeight: ''
        })
        $('.content-sapo .sapo-detail .sapo-text .sapo-quote').css({
            fontSize: '',
        })
        $('.content-title, .content-box').css({
            marginTop: '',
        })
        $('.content-title .title').css({
            fontSize: '',
        })
        $('.content-partner-information .partner-introduce, .content-partner-information .partner-information, .content-video .description, .content-video .video').css({
            gridColumn: ''
        })
        $('.content-box .about-us').css({
            fontSize: '',
            marginBottom: ''
        })
        $('.content-product-container .product-card .product-image').css({
            height: ''
        })
        $('.content-product-container .product-card .product-description .product-name').css({
            fontSize: '',
        })
        $('.content-product-layout .content-product-container').css({
            padding: ''
        })
        $('.partner-contact-container').css({
            margin: ''
        })
        $('.partner-contact-container .partner-address-map, .partner-contact-container .partner-form').css({
            gridColumn: ''
        })
        $('.partner-contact-container .partner-address-map').css({
            height: ''
        })
        $('.content-social-medial-container').css({
            display: '',
            gap: '',
            gridTemplateColumns: ''
        })
        $('.content-social-medial-container .social-link').css({
            gridColumn: '',
            fontSize: '',
            justifyContent: '',
            gap: '',
            marginLeft: ''
        })
        $('.content-box .content-social-medial-container .social-link i').css({
            fontSize: ''
        })
        $('.content-container .content-box .content-partner-information').css({
            gridTemplateColumns: ''
        })
        $('.content-container .content-box .content-video').css({
            gridTemplateColumns: ''
        })
        $('.content-container .content-box .content-video .description').css({
            gridColumn: 'span 3 / span 3'
        })
        $('.content-container .content-box .content-video .video').css({
            gridColumn: 'span 2 / span 2'
        })
    }

});
