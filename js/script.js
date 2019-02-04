$(document).ready(function(){
	$(".modal__wrap, .modal__ul, .modal__form").niceScroll({
		cursorcolor: "#8d3098",
		cursoropacitymin: 1,
		cursorwidth: "4px",
		cursorborderradius: "5px",
		cursorborder: 0,
		background: "#ececec",
		horizrailenabled: false
	});

	imagesLoaded($('.want-gallery'), function() {
	  	$('.want-gallery').masonry({
	   	columnWidth: ".want-gallery__item",
	   	transitionDuration: '0.5s',
	   	horizontalOrder: true,
	   	itemSelector: '.want-gallery__item'
		});
	});

	$(".data-user__block--friends").click(function(){
		$(".modal-bg, .modal--friend").show();
	});

	$(".header__icon--envelope").click(function(){
		$(".modal-bg, .modal--notification").show();
	});

	$(".header__icon--plus").click(function(){
		$(".modal-bg, .modal--add-wish").show();
	});

	$(".modal__close, .modal-bg").click(function(){
		$(".modal, .modal-bg").hide();
	});

	$("a[href='#']").click(function(e){
		e.stopPropagation();
		e.preventDefault();
	});
})