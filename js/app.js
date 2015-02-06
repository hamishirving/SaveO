$( document ).ready(function() {

	console.log('ready');
	toggleAboutText();
	
	function toggleAboutText () {
		var aboutTitle = $('.about-title');
		var aboutContent = $('.about-content');

		console.log("Title: " + aboutTitle + " Conent: " + aboutContent);
	}


})