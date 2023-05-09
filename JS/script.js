
jQuery(document).ready(function(){
    "user strick"
    $('.slider').ripples({
        dropRadius: 15,
        perturbance: 0.01,
        
    });

    $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });


      $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();

        var section = $(this).attr("href");

        $('html,body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
      });


      var navbar = document.getElementById("myNavbar");

    // When the user scrolls down 50px from the top of the document, hide the navbar
    window.onscroll = function() {
        if (window.pageYOffset > 650) {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "block";
        }
    };
    
    
});