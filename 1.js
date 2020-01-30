 $(function(){
 	var body=$("html,body");
 	// console.log($(".chapter1").offset().top); la vi tri cua phan tu do so voi dau trang
 	$(".menutren ul li:nth-child(1) a").on("click", function(event) {//$(tencuaphantu duoc click).on("click",function(){}) la xu ly su kien click chuot
 		event.preventDefault(); //event.preventDefault() la ngan chan chuyen den trang web khac nhu http:/google.com,.... khi kich vao the a, 

 		// .animate({scrollTop:900}) la ham hieu ung chuot cho body
 		// $(tenphantu).offset().top la ham tinh vi tri cua mot phan tu
 		//easeOutBounce,easeInBounce..., la thu vien gia toc cho jquery :search voi tu khoa:"easing jquery gsgd"
 		body.animate({ scrollTop : $(".chapter1").offset().top}, 1400,"easeOutBounce");//
 	}); 	
 	$(".menutren ul li:nth-child(2) a").on("click", function(event) {
 		event.preventDefault();

 		body.animate({scrollTop: $(".chapter2").offset().top}, 1400,"easeOutBounce");
 	}); 	
 	$(".menutren ul li:nth-child(3) a").on("click", function(event) {
 		event.preventDefault();

 		body.animate({scrollTop: $(".chapter3").offset().top}, 1400,"easeOutBounce");
 	}); 	
 	$(".menutren ul li:nth-child(4) a").on("click", function(event) {
 		event.preventDefault();

 		body.animate({scrollTop: $(".chapter4").offset().top}, 1400,"easeOutBounce");//$(tencuaphantu duoc click).on("click",function(){}) la xu ly su kien click chuot
 	});
	$(".nutlentren").on("click", function(event) {//$(tencuaphantu duoc click).on("click",function(){}) la xu ly su kien click chuot
	 		event.preventDefault();
	 		body.animate({scrollTop: 0}, 400,"easeOutElastic");
	 	});

});  
 