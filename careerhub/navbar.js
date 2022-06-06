$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
          $(".navbar").css("background-color", "white");
        }
        else{
            $(".navbar").css("background-color","grey");
        }
    })
  })