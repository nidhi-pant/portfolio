$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }
        else{
            $(".sticky").removeClass("stickyadd");


        }
    })

    var typed = new Typed(".element",{
        strings: ["computer science student","web developer","art enthusiast"],
        smartBackspace: true,
        typeSpeed: 70,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    })

     
      $('.logo-area').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  infinite: true,
  speed: 250,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
      {
      breakpoint: 1024,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
      }
      },
      {
breakpoint: 600,
settings: {
  slidesToShow: 2,
  slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
  slidesToShow: 1,
  slidesToScroll: 1
}
}]
      });
    
                      
    
    
    

});

