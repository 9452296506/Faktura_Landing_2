jQuery(document).ready(function ($) {
	// set text to select company logo 
  $("#resume").after("<span class='file_placeholder'>Файл не обрано</span>");
  // on change
  $('#resume').change(function() {
    //  show file name 
    if ($("#resume").val().length > 0) {
      $(".file_placeholder").hide();
      $('#resume').removeClass('vendor_logo_hide').addClass('vendor_logo');
      console.log($("#resume").val());
    } else {
      // show select company logo
      $('#resume').removeClass('vendor_logo').addClass('vendor_logo_hide');
      $("#resume").after("<span class='file_placeholder'>Файл не обрано</span>");
    }

  });

	
	
	
	
	
	
	
	//  --- direction menu ------------
	const subMenuContainer = $('.sub-menu-container');
	const directionMenuItems = $('#directions-overlay-menu .first-row-menu.menu-item');

	directionMenuItems.on( "mouseenter", handlerIn ).on( "mouseleave", handlerOut );


	function handlerIn() {
		const subMenuClone = $(this).children('.sub-menu').clone(true);
		subMenuContainer.empty();
		subMenuContainer.append(subMenuClone);
	}
	function handlerOut() {
	}
	// --------------------------------

	/*--- Price page mansory ---*/
	$('.directions-grid_price .directions-col').click(function() {
		const parent = $(this).parent();
		const panel = $(this).children('.panel');
		const title = $(this).find('.directions-title');

		if (!$(this).hasClass('service-active-parent')) {
			parent.css('grid-template-columns', '1fr');
			$(this).addClass('service-active-parent');
			title.addClass('service-active');
			panel.css('display', 'block');

			$('.directions-grid_price .directions-col').each(function() {
				if (!$(this).hasClass('service-active-parent')) {
					$(this).hide();
				}
			});

			$('html, body').animate({
				scrollTop: $('.directions-grid_price').offset().top - 200
			}, 500);

		} else {
			parent.removeAttr('style');
			$(this).removeClass('service-active-parent');
			$(this).find('.panel').css('display', 'none');
			$(this).find('.service-accordion').removeClass('service-active');
			title.removeClass('service-active');

			$('.directions-grid_price .directions-col').each(function() {
				if (!$(this).hasClass('service-active-parent')) {
					$(this).show();
				}
			});
		}
		
	});

	$('.directions-grid_price .pricing-items').click(function(e) {
		e.stopPropagation();
	});

	$('.directions-grid_price .single-item.with-booking').click(function(e) {
		$(this).children('.booking-btn').toggle();
	});
	

	/*--- Dropdown ---*/
	$('.dropdown-toggle').click(function(){
		if($(this).hasClass("open")) {
	          $(this).removeClass('open');
	        } else {
				$('.dropdown-toggle').removeClass('open');
	           $(this).addClass('open');
	        }
	}); 
	
	
	
	$('#moreBtn').click(function(){

		var readMore = "Більш детально...";
		var readLess = "Менш детально..."
		var moreText = $("#more");
		var btn = $("moreBtn");
		//; .classList.toggle("active-bottompannel");
		this.classList.toggle("collapsed");
		
		if (moreText[0].style.display === "block") {
		  moreText[0].style.display = "none";
		  this.innerHTML = readMore;
		} else {
		  moreText[0].style.display = "block";
		  this.innerHTML = readLess;
		}
		
	});  


///*mobile second menu*/

$(function() {
  $(".menu-list .accordion-toggle").click(function(e) {
    e.stopPropagation(); // Prevent the event from propagating to parent elements

    var $submenu = $(this).next(".accordion-content");
    $submenu.toggleClass("open");

    // Toggle the active class on the clicked menu item
    $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

    // Close other open submenus
    $(".menu-list .accordion-content").not($submenu).removeClass("open");
    $(".menu-list .accordion-toggle").not($(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
  });
});
 // jQuery load

	
 // tabbed content
 
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
  
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  

    });
	//doc-filter new styles
	$('.mdf_input_container_block.mdf_input_container_block_0').addClass('vi-grid vi-grid-2'); 
	$('.mdf_shortcode_submit_button').addClass('btn-block');
	$('.mdf_button').addClass('wpcf7-submit');
	/*
    $(".tab_container").css("min-height", function(){ 
      return $(".tabs").outerHeight() + 50;
    });
	*/
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });

	
	/*--- Modal ---*/
	$('a[href*="#call-back"]').on('click', function(e) {
	  e.preventDefault();
	  $('.call-back').toggleClass('is-visible');
	  $('body').css('overflow', 'hidden');
	});
	/*vacancy modal*/
	$('a[href*="#apply-vacancy"]').on('click', function(e) {
	  e.preventDefault();
	  $('.apply-vacancy').toggleClass('is-visible');
	  $('body').css('overflow', 'hidden');
	});
	
	
	/*book with select*/
	
	
	$('.widget-services-tabs .single-item.with-booking > p').on('click', function(e) {
		e.preventDefault();
		$(this).siblings('.booking-btn').slideToggle(200);
	});

	$('.widget-services-tabs .single-item.with-booking').on('click', function(e) {
		e.preventDefault();
		$(this).children('.booking-btn').slideToggle(200);
	});
	
	
	$('a[href*="#booking-online"]').on('click', function(e) {
	  e.preventDefault();
	  $('.booking-online').toggleClass('is-visible');
	  $('body').css('overflow', 'hidden');
	  var docNameElement = $(this).closest('.widget-single-doctor-card').find('.doc-name');
	  var docNameSingle	= $(this).closest('.left-part').find('.doc-name');	
	  var docPageElement	= $(this).closest('.single-doctor-page__doctor-card').find('.doc-name');
	  var bookServiceHome = $(this).closest('.online-consultation').find('strong');
	  var docName = "";
	  var textArea = $('#order-service-textarea')[0];
	  
	  if (docNameElement[0]) {
		  docName = docNameElement[0].innerHTML;
	  } else if (docNameSingle[0]) {
		  docName = docNameSingle[0].innerHTML;
	  } else if (docPageElement[0]) {
		  docName = docPageElement[0].innerHTML;
	  }
	  if (textArea && docName) {
			textArea.innerHTML = "Лікар: " + docName + "\n";  		
		  } else	if (bookServiceHome[0]) {
			textArea.innerHTML = bookServiceHome[0].innerHTML + "\n";  
		}
	  
	});
	
		$('a[href*="#booking-online-noselect"]').on('click', function(e) {
	  e.preventDefault();
	  $('.booking-online-noselect').toggleClass('is-visible');
	  $('body').css('overflow', 'hidden');
	  var docNameElement, docNameSingle, docNameSingle, docPageElement, targetArea, packH, checkedPack, pageHome,consult, howTo, orderPrice,promoPack;
	  pageHome =  $(this).closest('.service-pack-page__home-diagnosys').find('h2');
	  docNameElement = $(this).closest('.widget-single-doctor-card').find('.doc-name');
	  docNameSingle	= $(this).closest('.left-part').find('.doc-name');	
	  docPageElement	= $(this).closest('.single-doctor-page__doctor-card').find('.doc-name');
	  bookServiceHome = $(this).closest('.online-consultation').find('strong');
	  howTo = $(this).closest('.howtoorder').find('h2');
	  consult = $(this).closest('.vi-widget-single-consultation').find('.subtitle');
	  orderPrice =	$(this).closest('.top-service');
	  orderBottomPrice = $(this).closest('.with-booking');
	  docName = "";
	  targetArea = $('#order-noservice-text')[0];
	  packH	= $(this).closest('.vi-widget-service-pack').find('.pack-heading');
	  promoPack	= $(this).closest('.vi-widget-single-promotion').find('.promotion-title');
	  checkedPack = $(this).closest('.newtabcontent').find('.checked-pack-name');
	  //console.log(orderPrice[0]);
	  if (docNameElement[0]) {
		  docName = docNameElement[0].innerHTML;
	  } else if (docNameSingle[0]) {
		  docName = docNameSingle[0].innerHTML;
	  } else if (docPageElement[0]) {
		  docName = docPageElement[0].innerHTML;
	  }
	  if (targetArea) {
		  if (docName) {
			targetArea.value = "Лікар: " + docName;  		
		  } else	if (bookServiceHome[0]) {
			targetArea.value = bookServiceHome[0].innerHTML;  
		} else if (packH[0]) {
			 targetArea.value =packH[0].innerText;
		} else if (promoPack[0]) {
			 targetArea.value =promoPack[0].innerText;
		} else if (checkedPack[0]) {
			 targetArea.value = checkedPack[0].innerText;
		}  else if (pageHome[0]) {
			 targetArea.value = pageHome[0].innerText;
		}else if (consult[0]) {
			let textIn =  	"Online " + consult[0].innerText;
			 targetArea.value = textIn;
		} else if (howTo[0]) {
			 targetArea.value = howTo[0].innerText;
		} else if (orderPrice[0]) {
			let p = orderPrice.find('.top-name-service')[0].innerText;
			let kod = orderPrice.find('.service-code')[0].innerText;
			
			targetArea.value = kod + " " + p;
		} else if (orderBottomPrice[0]) {
			let p = orderBottomPrice.find('p').eq(0).text();
			let kod = '';
			
			targetArea.value = p;
		}
	  }
	  
	});
	
	$('a[href*="#dyrector-notification"]').on('click', function(e) {
	  e.preventDefault();
	  $('.dyrector-notification').toggleClass('is-visible');
	});
	$('a[href*="#mob-menu-modal"]').on('click', function(e) {
	  e.preventDefault();
	  $('.mob-menu-modal').toggleClass('is-visible');
	  $('body').css('overflow', 'hidden');
	}); 
	//'#directions-mobile
	$('a[href*="#directions-mobile"]').on('click', function(e) {
	  e.preventDefault();
	  $('.mob-directionsmenu-modal').toggleClass('is-visible');
	}); 
	
	//
	$('a[href*="#сomplaint"]').on('click', function(e) {
	  e.preventDefault();
	  $('.сomplaint').toggleClass('is-visible');
	});$('a[href*="#qrmodal"]').on('click', function(e) {
	  e.preventDefault();
	  $(this).closest('li').addClass('active');
	  $('.qr-modal').addClass('is-visible');
	});
	$('.modal-overlay, .modal-close').on('click', function(e) {
		e.preventDefault();	
		let qr = $('.qr-icon');
	  $('.modal').removeClass('is-visible');
	  if (qr) {
		  qr.removeClass('active');
		console.log(qr);
	  }
	  
	   $('body').css('overflow', 'auto');
	});
	$('.modal-toggle').on('click', function() {
		$('body').css('overflow', 'hidden');
	});

	/*--- /Modal ---*/

	$(document).mouseup(function (e) {
		var container = $(".dropdown-list");
		if (container.has(e.target).length === 0){
			$('.dropdown-toggle').removeClass('open');
		}
	});
	$(document).on('keyup', function(e) {
		if ( e.key == "Escape" ) {
			$('.dropdown-toggle').removeClass('open');
		}
	});
	/*--- /Dropdown ---*/
	//mobile directions


/*
    $('#directions-mobile').click(function (e) {
		
        $(this).toggleClass('directions-open');
        $('#directions-mobilemenu').toggleClass('menu-open');
    });
*/

	/*--- Menu ---*/
	$('#toggle').click(function() {
	   $(this).toggleClass('active');
	   $('#overlay').toggleClass('open');
	   $('.directions-sub-menu').removeClass('open');
	});
	
	$('.directions-sub-menu').click(function() {
	   $('#toggle').removeClass('active');
	   $('#overlay').removeClass('open');
	});
	/*--- /Menu ---*/
	function scrollToTop() {
        window.scrollTo(0, 0);
      }


	/*--- /load more single doctor ---*/

	  $('.load-more').click(function(){
		if($(this).parent().hasClass("open")) {
				$(this).parent().removeClass('open');
				$(".load-more-text").text("Показати більше");
			  } else {
				 $(this).parent().addClass('open');
				 $(".load-more-text").text("Показати менше");
				  var servicesBlock = document.querySelector('.doctor-category-page__services .container.open .services-block');
				  servicesBlock.style.maxHeight = 'none';
			  }
	  });

	  /*service-bubbl*/
	  //.doctor-category-page__services .container.open .services-block 
	  if (window.innerWidth < 600) {
  // Get the first child element with the class "service-item"
  var firstServiceItem = document.querySelector('.single-service:first-child');
  var servicesBlock = document.querySelector('.doctor-category-page__services .container:not(.open) .services-block');

  // Check if the element exists
  if (firstServiceItem && servicesBlock) {
        // Get the height of the first service item
        var height = firstServiceItem.offsetHeight;

        // Set the height of the services block
        servicesBlock.style.maxHeight = height + 'px';
    } 
}
	
	/*--- /read more services ---*/

	$('.read-more-services').click(function(){
		if($(this).parent().hasClass("open")) {
				$(this).parent().removeClass('open');
				$(".read-more-services-text").text("Показати більше");
			  } else {
				 $(this).parent().addClass('open');
				 $(".read-more-services-text").text("Показати менше");
			  }
	  });
	  
	/* font page directions*/  
	
	$('#directions-more-button').click(function(e){
		 e.preventDefault();
		 $('.directions-grid').css('height', 'auto');
		 $(this).css('display', 'none');
	  });

});

function doctorDetail(evt, tabName) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

	
  }
 
  
  var acc = document.getElementsByClassName("service-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */

		e.stopPropagation();

    this.classList.toggle("service-active");
	var parrentWrap = this.closest('.single-service');
	parrentWrap.classList.toggle('service-active-parent');
	var kSub = parrentWrap.closest('.single-service:not(.subcategory-container)');
	

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
	acc[i].click();
}

function bottomPanelOpen() {
	var elms = document.getElementsByClassName("call-doctor-panel__hidden-items");
	var btn = document.querySelector('.panel-open-btn');
	var mainWrap = document.querySelector('.vi-site-bottom-panel');
	btn.classList.toggle("opened");
	mainWrap.classList.toggle("active-bottompannel");
	Array.from(elms).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })

  }
  
jQuery(document).ready(function ($) { 
	
	$('.mainSlider').slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	dots: true,
	  	infinite: true
	});


	$('.mainRightSlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		infinite: true
	});


function initSlickSlider(sliderSelector) {
    $(sliderSelector).slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true
                }
            }
        ]
    });
}


function initDocSliderTab(selector) {
    
	
	$(selector).slick({
		slidesToShow: 4,
	  	slidesToScroll: 3,
	  	arrows: true,
	  	dots: true,
	  	infinite: true,
		prevArrow: $('.our-doctors-slider-prev'),
        nextArrow: $('.our-doctors-slider-next'),
		responsive: [
			{
				breakpoint: 1300,
			  settings: {
				  slidesToShow: 3,
					slidesToScroll: 3
			  }
			  
		  },
		{
		  	breakpoint: 991,
			settings: {
				slidesToShow: 2,
	  			slidesToScroll: 2
			}
			
		},
		{
		  	breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true
			}
			
		}
	  ]
	});
}


function initGallerySlider(sliderSelector, next, prev) {
	
		$(sliderSelector).slick({
		slidesToShow: 3,
	  	slidesToScroll: 3,
	  	arrows: true,
	  	dots: false,
	  	infinite: true,
		focusOnSelect: true,
		prevArrow: $(prev),
    	nextArrow: $(next),
		responsive: [
		{
		  	breakpoint: 991,
			settings: {
				slidesToShow: 2,
	  			slidesToScroll: 2
			}
			
		},
		{
		  	breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true
			}
			
		}
	  ]
	});
}
//galery tabs



    // Initialize SlickSlider for the first tab
    initSlickSlider('#news .services-slick');

	initGallerySlider('.slider-first', '.arr-next','.arr-prev');

	
	
	$('.testimonials-slider').slick({
		slidesToShow: 3,
	  	slidesToScroll: 3,
	  	arrows: true,
	  	dots: true,
	  	infinite: true,
		autoplay: true,
		centerMode: true,
		responsive: [
		{
		  	breakpoint: 991,
			settings: {
				slidesToShow: 2,
	  			slidesToScroll: 2
			}
			
		},
		{
		  	breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true
			}
			
		}
	  ]
	});
	
	$('.clinics-slider').slick({
		slidesToShow: 2,
	  	slidesToScroll: 2,
	  	arrows: true,
	  	dots: true,
	  	infinite: false,
		responsive: [
		{
		  	breakpoint: 991,
			settings: {
				slidesToShow: 1,
	  			slidesToScroll: 1
			}
			
		}
	  ]
	});
	
	
});
  
  
jQuery(document).ready(function($) {
	//mobile-menu
$(document).ready(function() {
    // Hide all sub-menus initially
    $('#directions-mobilemenu .sub-menu').hide();    
    $('#mobile-second-menu .sub-menu').hide();

    $('.finger').click(function(e) {
        e.stopPropagation(); // Prevent the event from propagating to parent elements
		var $parentTab = $(this).closest('[class^="first-row-menu"], [class^="second-row-menu"], [class^="third-row-menu"], [class^="four-row-menu"]');

		var mainrow = this.closest('.main-category-wrap');
		if (mainrow) {
			$('.main-category-wrap').removeClass('active'); 
			$(this).closest('.main-category-wrap').siblings('.sub-menu').slideToggle();
			$parentTab.siblings().find('.finger').removeClass('active');
			$parentTab.siblings().find('.sub-menu').slideUp();
			$(this).closest('.main-category-wrap').toggleClass("active");
			$(this).toggleClass("active");
		} else {
        $(this).siblings('.sub-menu').slideToggle();
        $parentTab.siblings().find('.finger').removeClass('active');
        $parentTab.siblings().find('.sub-menu').slideUp();
        $(this).toggleClass("active");
		}
    });
});

	
	
	
    // Initialize the Slick slider
    $('.certyficat-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
		variableWidth: true,
        arrows: true,
        dots: true,
		focusOnSelect: true,
  		asNavFor: '.certyficat-slider-lightbox',
        prevArrow: $('.sertificate-slider-prev'),
        nextArrow: $('.sertificate-slider-next'),
        responsive: [
            
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
					variableWidth: false
                }
            }
        ]
    });

	$('.certyficat-slider-lightbox').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		prevArrow: $('.sertificate-slider-lightbox-prev'),
		nextArrow: $('.sertificate-slider-lightbox-next')
	});

	$('.certyficat-slider .slick-slide, #close-button-lightbox').click(function(){
		if($('.certyficat-lightbox').hasClass("active")) {
				$('.certyficat-lightbox').removeClass('active');
			  } else {
				 $('.certyficat-lightbox').addClass('active');
			  }
	  });

    // Listen for the beforeChange event
    $('.certyficat-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // Check if the next slide is the one to be wider
        if (nextSlide === 1) { // 1 is the index for the second slide
            // Add a class to the slide to make it wider
            $('.certyficat-slider .slick-slide[data-slick-index="' + nextSlide + '"]').addClass('wider-slide');
        } else {
            // Remove the class if it's not the wider slide
            $('.certyficat-slider .slick-slide.wider-slide').removeClass('wider-slide');
        }
    });
	
	$('.video-slider').slick({
		slidesToShow: 3,
	  	slidesToScroll: 3,
	  	arrows: true,
	  	dots: true,
	  	infinite: true,

		prevArrow: $('.video-slider-prev'),
        nextArrow: $('.video-slider-next'),
		responsive: [
		{
		  	breakpoint: 991,
			settings: {
				slidesToShow: 2,
	  			slidesToScroll: 2
			}
			
		},
		{
		  	breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true
			}
			
		}
	  ]
	});
    $('.healthy-lifestyle-slider').slick({
		slidesToShow: 3,
	  	slidesToScroll: 3,
	  	arrows: true,
	  	dots: true,
	  	infinite: true,

		prevArrow: $('.healthy-lifestyle-slider-prev'),
        nextArrow: $('.healthy-lifestyle-slider-next'),
		responsive: [
		{
		  	breakpoint: 991,
			settings: {
				slidesToShow: 2,
	  			slidesToScroll: 2
			}
			
		},
		{
		  	breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true
			}
			
		}
	  ]
	});
	Fancybox.bind('[data-fancybox="video-gallery_single-doctor"]', {
        Carousel: {
          Navigation: false,
        },
        Thumbs: false
    });

	Fancybox.bind('[data-fancybox="gallery-masonry"]', {});

	$('#our-doctors-slider').slick({
		slidesToShow: 4,
	  	slidesToScroll: 3,
	  	arrows: true,
	  	dots: true,
	  	infinite: true,
		prevArrow: $('.our-doctors-slider-prev'),
        nextArrow: $('.our-doctors-slider-next'),
		responsive: [
		{
		  	breakpoint: 1300,
			settings: {
				slidesToShow: 3,
	  			slidesToScroll: 3
			}
			
		},
		{
			breakpoint: 991,
		  settings: {
			  slidesToShow: 2,
				slidesToScroll: 2
		  }
		  
	  },
		{
		  	breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true
			}
			
		}
	  ]
	});
	$('.category-news-slider').slick({
		slidesToShow: 3,
	  	slidesToScroll: 1,
	  	arrows: true,
	  	dots: true,
	  	infinite: true,
		prevArrow: $('.category-news-slider-prev'),
        nextArrow: $('.category-news-slider-next'),
		responsive: [
		{
		  	breakpoint: 991,
			settings: {
				slidesToShow: 2,
	  			slidesToScroll: 2
			}
			
		},
		{
		  	breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true
			}
			
		}
	  ]
	});
	$('.single-doc-news-slider').slick({
		slidesToShow: 3,
	  	slidesToScroll: 1,
	  	arrows: true,
	  	dots: true,
	  	infinite: true,
		prevArrow: $('.single-doc-news-slider-prev'),
        nextArrow: $('.single-doc-news-slider-next'),
		responsive: [
		{
		  	breakpoint: 991,
			settings: {
				slidesToShow: 2,
	  			slidesToScroll: 2
			}
			
		},
		{
		  	breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true
			}
			
		}
	  ]
	});
	$('.consultation-steps-slider').slick({
		slidesToShow: 4,
	  	slidesToScroll: 3,
	  	arrows: false,
	  	dots: true,
		swipe: true,
	  	infinite: true,
		
		responsive: [
		{
		  	breakpoint: 991,
			settings: {
				slidesToShow: 2,
	  			slidesToScroll: 2
			}
			
		},
		{
		  	breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true
			}
			
		}
	  ]
	});
	$('.checkup-steps-slider').slick({
		slidesToShow: 4,
	  	slidesToScroll: 3,
	  	arrows: false,
	  	dots: true,
		swipe: true,
	  	infinite: true,
		
		responsive: [
		{
		  	breakpoint: 991,
			settings: {
				slidesToShow: 2,
	  			slidesToScroll: 2
			}
			
		},
		{
		  	breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true
			}
			
		}
	  ]
	});
	$('.other-checkup-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true
                }
            }
        ]
    });
	
	$('input[name="tel-161"]').inputmask('+371 (99) 999-99-99');
	
if (window.innerWidth > 1100) {
	function _(e, t) {
    var o, n, r;
  /*  for (n = document.getElementsByClassName("second-sub-menu"),
    o = 0; o < n.length; o++)
        n[o].style.display = "none";*/
    for (r = document.getElementsByClassName("first-row-menu"),
    o = 0; o < r.length; o++)
        r[o].className = r[o].className.replace(" active", "");
    document.getElementById(t).style.display = "flex",
    e.currentTarget.className += " active"
}
	$(document).on("mouseenter", ".first-row-menu", function(e) {
		var t = $(this).data("tab");
		
		_(e, t)
	});
}
})


//tabs without scripts

function openSimpleTab(evt, tabName) {
  // Declare all variables
  evt.preventDefault();
  var i, newtabcontent, tablinks;

  // Get all elements with class="newtabcontent" and hide them
  newtabcontent = document.getElementsByClassName("newtabcontent");
  for (i = 0; i < newtabcontent.length; i++) {
    newtabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//filtetabs
  document.addEventListener('DOMContentLoaded', function () {
    // Default selections
    let selectedGender = 'men';
    let selectedLevel = 'basic';

    // Function to show/hide tabs based on selected buttons
    function showTab() {
      // Hide all tabs
      document.querySelectorAll('.checktabcontent').forEach(tab => {
        tab.style.display = 'none';
      });

      // Show the selected tab
      const selectedTabId = `${selectedGender}-${selectedLevel}`;
      let selTab = document.getElementById(selectedTabId);
      if(selTab) {
      	selTab.style.display = 'block';
	  }

      // Remove 'active' class from all gender buttons
      document.querySelectorAll('.filter-first').forEach(button => {
        button.classList.remove('active');
      });

      // Add 'active' class to the selected gender button
      let filFirst =  document.querySelector(`.filter-first[data-gender="${selectedGender}"]`);
      if(filFirst) {
		  filFirst.classList.add('active');
	  }

      // Remove 'active' class from all level buttons
      document.querySelectorAll('.filter-second').forEach(button => {
        button.classList.remove('active');
      });

      // Add 'active' class to the selected level button
      let filSecond =  document.querySelector(`.filter-second[data-level="${selectedLevel}"]`);
      if(filSecond) {
		  filSecond.classList.add('active');
	  }
    }

    // Function to handle gender button clicks
    function handleGenderButtonClick(gender) {
      selectedGender = gender;
      showTab();
    }

    // Function to handle level button clicks
    function handleLevelButtonClick(level) {
      selectedLevel = level;
      showTab();
    }

    // Attach click event listeners to gender buttons
    document.querySelectorAll('.filter-first').forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        const gender = button.getAttribute('data-gender');
        handleGenderButtonClick(gender);
      });
    });

    // Attach click event listeners to level buttons
    document.querySelectorAll('.filter-second').forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        const level = button.getAttribute('data-level');
        handleLevelButtonClick(level);
      });
    });

    // Show the default tab
    showTab();
  });

jQuery(document).ready(function($) {
    function openPopup(target) {
        console.log('Opening popup:', target);
        $(target).addClass('open');
        $('body').css('overflow', 'hidden');
    }

    function closePopup() {
        console.log('Closing popup');
        $('.modal').removeClass('open');
        $('body').css('overflow', '');
    }

    // Открытие попапа при клике на кнопку
    $(document).on('click', '.order-btn', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        console.log('Button clicked, target:', target);
        setTimeout(function() {
            openPopup(target);
        }, 100); // Задержка в 100 мс для завершения AJAX-запросов
    });

    // Закрытие попапа при клике на крестик
    $(document).on('click', '.modal-close', function(e) {
        e.preventDefault();
        closePopup();
    });

    // Функция фильтрации
    function fetchResults(page) {
        var $form = $('#doctors-filter');
        var $results = $('#doctors-results');
        var $loader = $('#loader');

        $results.html('');
        $loader.show();

        $.ajax({
            url: ajaxurl,
            type: 'GET',
            data: $form.serialize() + '&paged=' + page + '&action=filter_doctors',
            success: function(response) {
                if (response.success) {
                    $results.html(response.data);
                } else {
                    $results.html('<p>Ошибка загрузки данных.</p>');
                }
            },
            error: function() {
                $results.html('<p>Ошибка загрузки данных.</p>');
            },
            complete: function() {
                $loader.hide();
                // Реинициализация событий после загрузки новых данных
                $(document).trigger('contentUpdated');
            }
        });
    }

    // Обработка фильтрации
    $('#doctors-filter').submit(function(e) {
        e.preventDefault();
        fetchResults(1);
    });

    // Обработка пагинации
    $(document).on('click', '.pagination a', function(e) {
        e.preventDefault();
        var page = $(this).attr('href').split('paged=')[1];
        fetchResults(page);
    });

    // Загрузка постов при первой загрузке страницы
    fetchResults(1);

    // Реинициализация событий после обновления контента
    $(document).on('contentUpdated', function() {
        // Здесь можно добавить любые дополнительные инициализации, если потребуется
        console.log('Content updated, reinitializing events');
    });
});
