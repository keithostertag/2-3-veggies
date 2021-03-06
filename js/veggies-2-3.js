// array to hold background images
var images = ['bg_images/bg1.jpg', 'bg_images/bg2.jpg','bg_images/bg3.jpg','bg_images/bg4.jpg','bg_images/bg5.jpg','bg_images/bg7-2.jpg','bg_images/bg7-3.jpg', 'bg_images/bg7-4.jpg', 'bg_images/bg7-5.jpg', 'bg_images/bg7-7.jpg', 'bg_images/bg7-6.jpg', 'bg_images/bg7-8.jpg', 'bg_images/bg8-2.jpg', 'bg_images/bg8-3.jpg', 'bg_images/bg10.jpg', 'bg_images/bg13.jpg', 'bg_images/bg15.jpg'];

/* present user a different random background image each visit */
function bgLoad() {
	var page = document.getElementsByTagName('html')[0];
	page.style.backgroundImage="url(" + images[Math.floor(Math.random() * images.length)] + ")";
}
bgLoad();

/************************************************/
/* the following code shrinks header depending on user scroll  */
/************************************************/
	window.addEventListener("scroll", function(){

/* ***  prepare variable to hold width of lostinspace image */
  	var widthLost = document.getElementById("lostinspace");

/***********  get number of pixels page has been scrolled ** */
	// var scrollTop = window.document.documentElement.scrollTop;
		var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

/** test if enough scrolling has occured **** **/
  	if (scrollTop > 200)  {
  	widthLost.style.width = "25%"; /* reduce size of lostinspace*/
		document.getElementsByTagName("header")[0].style.backgroundColor= "transparent";
  }
	else{	/** return lostinspace to original size and background color **/
		  widthLost.style.width = "40%";
			document.getElementsByTagName("header")[0].style.backgroundColor= "#000";
	}
}, false);
