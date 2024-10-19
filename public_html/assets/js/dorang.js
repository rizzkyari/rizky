// Fungsi easing untuk efek scroll yang lebih halus
$.easing.easeInOutQuad = function (x, t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

// toggle 
$(document).ready(function(){
    
    $('.search-toggle').click(function(){
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function(){
        $('.modalBox').toggleClass('show');
    });

    $('.modalBox').click(function(){
        $(this).removeClass('show');
    });

    $('.spinner').click(function(){
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function(){
        $('body').addClass('light-theme');
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function(){
        $('body').toggleClass('dark-theme');
        $('body').removeClass('light-theme');
    });
});

// smooth scroll untuk navbar dan tombol scroll ke bawah
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, 'easeInOutQuad', function(){
                window.location.hash = hash;
            });
        } 
    });

    // Tombol scroll ke bawah
    $('.scroll-down').click(function(event) {
        event.preventDefault(); // Mencegah aksi default tombol
        
        $('html, body').animate({
            scrollTop: $(document).height() // Scroll ke bawah halaman
        }, 1500, 'easeInOutQuad'); // Durasi scroll 1500ms dengan easing yang lebih halus
    });
});
