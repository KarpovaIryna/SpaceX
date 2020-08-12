"use strict";
var instance = new vidbg('.ba-video', {
	mp4: 'video/world.mp4', // URL or relative path to MP4 video
	webm: 'video/world.webm', // URL or relative path to webm video
	poster: 'video/poster.jpg', // URL or relative path to fallback image
	overlay: false, // Boolean to display the overlay or not
});

var rellax = new Rellax('.ba-rocket');
if (document.body.clientWidth < 1024){
	rellax.destroy();
};
AOS.init();
let menuBtn = document.querySelector('.ba-menu-toggle');
		let menu = document.querySelector('.ba-main-nav');
		menuBtn.addEventListener('click', () => menu.classList.toggle('open'));