jQuery(function($) {
			$(window).scroll(function(){
			if($(this).scrollTop()>120&&$(this).width()>1180){
				$('#header1').css('display','none');
				$('#fixedheader').css({'display':'flex','position':'fixed','z-index':999,'width':'100%'});
				$('#main1').css({'margin-top':'100px'});
			}
			else if ($(this).scrollTop()<120&&$(this).width()>1180){
				$('#header1').css('display','block ');
				$('#fixedheader').css({'display':'none','position':'inherit','z-index':999,'width':'100%'});
				$('#main1').css({'margin-top':'0'});
			}
		});
			$(window).resize(function () {
				if($(this).width()<1131) {
					$('#fixedheader').css({'display':'none'});
					$('#main1').css({'margin-top':'0'});
				} else {
					$('#header1').css('display','block ');
				}
			})
	});

function validate(form) {
	var elems = form.elements;

	elems.userName.classList.remove('error')
	if (!elems.userName.value) {
		elems.userName.classList.add('error')
	}

	elems.userEmail.classList.remove('error')
	if (!elems.userEmail.value) {
		elems.userEmail.classList.add('error')
	}

	elems.userPosition.classList.remove('error')
	if (!elems.userPosition.value) {
		elems.userPosition.classList.add('error')
	}

	elems.userReview.classList.remove('error')
	if (!elems.userReview.value) {
		elems.userReview.classList.add('error')
	}
}
'use strict'
var butSlider = document.getElementById('down');
butSlider.onclick = function () {
	$.fn.fullpage.moveTo('portfolio', 1);
};

var butUp = document.getElementById('up');
butUp.onclick = function () {
	$.fn.fullpage.moveTo('header', 1);
};

var butBid = document.getElementById('fixedButton');
butBid.onclick = function () {
	document.getElementById('modal').removeAttribute('style');
}

var minMenu = document.getElementById('minMenu');
var again = true;
minMenu.onclick = function () {
	var nav = document.getElementById('header1')
	if (again===true) {
		nav.style.display = 'none';
		again=false;
} 
		else {
			nav.style.display = 'block';
			again=true;
		}
}
// var liElement = document.querySelectorAll('li.nav-menu');
// for (var i = 0; i < liElement.length; i++) {
// 	liElement[i].onclick = function () {
// 		for (var i = 0; i < liElement.length; i++) {
// 			liElement[i].classList.remove('selected')
// 		}
// 		for (var i = 0; i < liElement.length; i++) {
// 			if (liElement[i]===this) {
// 				if (i<6) {
// 					liElement[i+6].classList.add('selected')
// 				} else 
// 				liElement[i-6].classList.add('selected')
// 			}
// 		}
// 		this.classList.add('selected')
// 	}
// }

$('.owl-carousel').owlCarousel({
	items: 1,
	margin: 10,
	nav: true,
	navText: [''],
	loop: true,
	dots: true,
	dotsEach: true,
	animateOut: 'fadeOut'
})
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['header', 'main', 'portfolio', 'advantages', 'contacts','footer'],
		menu: '.myMenu',
		css3: false,
		autoScrolling:false,
		navigation: true,
		scrollBar: true,
		fitToSection: false,
		sectionSelector: '.section',
		scrollingSpeed: 1000
	});
});