(function (window, document) {
	function initDocSliderTab(selector) {
    console.log(selector);
	
	jQuery(selector).slick({
		slidesToShow: 4,
	  	slidesToScroll: 3,
	  	arrows: true, 
	  	dots: true, 
	  	infinite: true,
		prevArrow: jQuery('.our-doctors-slider-prev'),
        nextArrow: jQuery('.our-doctors-slider-next'),
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
	
		jQuery(sliderSelector).slick({
		slidesToShow: 3,
	  	slidesToScroll: 3,
	  	arrows: true,
	  	dots: false,
	  	infinite: true,
		focusOnSelect: true,
		prevArrow: jQuery(prev),
    	nextArrow: jQuery(next),
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
	function initSlickSlider(sliderSelector) {
    jQuery(sliderSelector).slick({
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


	var docCount = 0, propCount = 0, packCount = 0, eqCount = 0;
    var isTouch = ('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

    function init() {
        var containers = Array.prototype.slice.call(document.querySelectorAll('[data-seo-tabs="true"]'));

        for (var i = 0, l = containers.length; i < l; i++) {
            var tabs = Array.prototype.slice.call(containers[i].querySelectorAll('[data-tabtop="true"]'));
            
            for (var j = 0, tabsLength = tabs.length; j < tabsLength; j++) {
                tabs[j].addEventListener(isTouch ? 'touchend' : 'click', switchTab);
            }
        }
    }

    function switchTab(e) {
        var el = e.target;
        var isAnchor = (el.tagName === 'A');
        var isTabTop = (el.getAttribute('data-tabtop') === 'true');

        if (isAnchor && isTabTop) {
            if (el.parentElement && el.parentElement.getAttribute('data-hashable') !== 'true') {
                cancelEvent(e);
            }

            var tabBoxId = el.href.split("#").pop();
            var container = el.closest('[data-seo-tabs="true"]');
            var tabBoxToActivate = container.querySelector('#' + tabBoxId);
			console.log(tabBoxId);	
			if (tabBoxId == 'doctorss' && !docCount) {
				initDocSliderTab('#doctorss .our-doctors-slider');
				docCount++;
			} else if (tabBoxId == 'proposals' && !propCount){
				initSlickSlider('#proposals .services-slick-2');
				propCount++;
			}	else if (tabBoxId == 'packages' && !packCount){
				 initSlickSlider('#packages .main-services-slider');
				packCount++; 
			} else if (tabBoxId == 'equipment' && !eqCount){
				initGallerySlider('#equipment .slider-second', '.arr-next-2', '.arr-prev-2');
				eqCount++;
			}
            if (tabBoxToActivate) {
                var isActive = (tabBoxToActivate.getAttribute('data-active') === 'true');

                // Deactivate all currently active tabs within the same container
                var currentlyActive = container.querySelectorAll('[data-active="true"]');
                for (var i = 0; i < currentlyActive.length; i++) {
                    currentlyActive[i].removeAttribute('data-active');
                }

                if (!isActive) {
                    el.setAttribute('data-active', 'true');
                    tabBoxToActivate.setAttribute('data-active', 'true');
                }
            }
        }
    }

    function cancelEvent(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        e.stopPropagation();
    }

    window.addEventListener('DOMContentLoaded', init);

}(window, document));
