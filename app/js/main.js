$(function() {
   
    $(".rate-star").rateYo({
        rating: 3,
        starWidth: "12px",
        readOnly:true,
        multiColor: {
            "startColor": "#FF0000", //RED
            "endColor": "#00FF00" //GREEN
        }
        
    });
    $('.product-slider__inner').slick({
        dots: true,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 3,
    });
    
   var mixer = mixitup('.products__inner-box')
})