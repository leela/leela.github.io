/*
* Theme Name: Blend
* Author: Okathemes
* Version: 1.0.0
*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

/* 01 Sticky Header
================================================== */
$(document).ready(function () {
"use strict";
var menu = $('.header-nav'),
    pos = menu.offset();

$(window).scroll(function () {
    if ($(this).scrollTop() > pos.top + menu.height() && menu.hasClass('set') && $(this).scrollTop() > 100) {
        menu.fadeOut('fast', function () {
            $(this).removeClass('set').addClass('sticky').fadeIn('fast');
        });
    } else if ($(this).scrollTop() <= pos.top + 100 && menu.hasClass('sticky')) {
        menu.fadeOut(0, function () {
            $(this).removeClass('sticky').addClass('set').fadeIn(0);
        });
    }
});

/* 02 Banner Animation
================================================== */
var cnt =0;
    
function updateImage(cnt){
    if(cnt<5){
        
        $('#large-header').css('background-image','url(images/banner/Banner-'+cnt+'.png)');
    }
    else {
        cnt=1;
        $('#large-header').css('background-image','url(images/banner/Banner-'+cnt+'.png)');
    };
}    
 $("#js-rotating").Morphext({
    animation: "zoomIn", // Overrides default "bounceIn"
   // separator: "|", // Overrides default ","
    speed: 8000, // Overrides default 2000
    complete: function () {
        console.log("test"+cnt);
       updateImage(cnt++);
       
 }
});
    

/* 04 COntact Form
================================================== */

   var $contactform  = $('#contact-form'),
        $success      = '<strong>Success!</strong> Your message was sent.';

    // Validate form on keyup and submit
    $contactform.validate({
        rules: {
            fname: {
                required    : true,
                minlength   : 1
            },
			lname: {
                required    : true,
                minlength   : 1
            },
            email: {
                required    : true,
                email       : true
            },
            message: {
                required    : true,
                minlength   : 1
            }
        },
        messages: {
            fname: {
                required    : "<span class='alert alert-warning'>Please enter first name</span>",
                minlength   : jQuery.format("Your name needs to be at least {0} characters")
            },
			lname: {
                required    : "<span class='alert alert-warning'>Please enter last name</span>",
                minlength   : jQuery.format("Your name needs to be at least {0} characters")
            },
            email: {
                required    : "<span class='alert alert-warning'>Please enter your email address</span>",
                minlength   : "<span class='alert alert-warning'>You entered an invalid email address</span>"
            },
            message: {
                required    : "<span class='alert alert-warning'>Please enter a message</span>",
                minlength   : jQuery.format("Enter at least {0} characters")
            }
        }
    });

    // Send the email
    $contactform.submit(function(){
        if ($contactform.valid()){
            $.ajax({
                type: "POST",
                url: "php/contact.php",
                data: $(this).serialize(),
                success: function(msg) {
                    if (msg == 'SEND') {
                        response = '<div class="alert alert-success">'+ $success +'</div>';
                    }
                    else {
                        response = '<div class="alert alert-success">'+ msg +'</div>';
                    }
                    $(".alert-warning,.alert-success").remove();
                    $contactform.prepend(response);
                }
             });
            return false;
        }
        return false;
    });

/* 05 Data Rel
================================================== */
$('a[data-rel]').each(function () {
"use strict";
    $(this).attr('rel', $(this).data('rel'));
});
    
 
$('.nav').onePageNav({
    
 currentClass: 'current',
 changeHash: false,
 scrollSpeed: 750
});

/*$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
    
        $(".nav li").removeClass('current');
        $(this).parent().addClass('current');

	    var target = this.hash,
	    $target = $(target);
        
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});    
  */  
    
});

/* 06 Preloader
================================================== */
$(window).load(function() { // makes sure the whole site is loaded
"use strict";
    $('.spinner').fadeOut(); // will first fade out the loading animation
    $('.loader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
});
		

