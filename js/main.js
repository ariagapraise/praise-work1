(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("purchaseModal");
    const closeBtn = document.querySelector(".close");
    const productNameSpan = document.getElementById("productName");

    document.querySelectorAll(".purchaseBtn").forEach(btn => {
        btn.addEventListener("click", function () {
            const product = this.dataset.product; // get product name from button
            const price = this.dataset.price;     // optional, if you want price in popup

            productNameSpan.textContent = product; // update popup
            modal.style.display = "block";         // show modal
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});




document.getElementById("purchaseForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const country = document.getElementById("country").value;
    const location = document.getElementById("location").value;

    const phoneNumber = "2348012345678"; // <-- your WhatsApp number

    // Get the product name and price dynamically from the modal
    const product = document.getElementById("productName").textContent;
    const price = document.getElementById("productPrice") ? document.getElementById("productPrice").textContent : "";

    const message = `Hello, I have made a payment.%0A
Name: ${name}%0A
Country: ${country}%0A
Location: ${location}%0A
Product: ${product}%0A
Price: ${price}%0A
Please ensure you attach your payment receipt with this message.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
});



// document.querySelectorAll(".purchaseBtn").forEach(btn => {
//   btn.addEventListener("click", () => {
//     alert("Button clicked");
//   });
// });




