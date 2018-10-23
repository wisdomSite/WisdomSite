/**
 * 
 * @param {*} ele swiper容器选择器
 * opts 自定义配置参数
 */
let swiperContainer = document.getElementsByClassName('swiper-container')[0]
console.log(swiperContainer)
console.log(swiperContainer.width)
let setSwiper = function(ele,opts) {
    let _default = {//默认配置项
        width: swiperContainer.width
    }
    let options = opts
    let swiper = new Swiper(ele,options)
    return swiper;
}
//============================================================
let swiperProject = document.getElementById('swiper-project')
let swiperProjectOpts = {
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: true
}
let mySwiper = setSwiper(swiperProject,swiperProjectOpts);

//=======================================================
let swiperSecurity = document.getElementById('swiper-security')
let swiperSecurityOpts = {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    autoplay: true,
    slidesPerView : 4,
    centeredSlides : true,
    slidesPerGroup: 1
}
let mySwiper1 = setSwiper(swiperSecurity,swiperSecurityOpts)
//=============================================================
let swiperProject1 = document.getElementById('swiper-project1')
let swiperProjectOpts1 = {
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: true
}
// let mySwiper1 = setSwiper(swiperProject1,swiperProjectOpts1);
