 var yan1 = document.querySelector(".yan1");
	yan1.onclick = function () {
		yan1.style.background = "rgba(106, 204, 181, 0)"
	}
	var yan2 = document.querySelector(".yan2");
	yan2.onclick = function () {
		yan2.style.background = "rgba(106, 204, 181, 0)"
	}
	var yan3 = document.querySelector(".yan3");
	yan3.onclick = function () {
		yan3.style.background = "rgba(106, 204, 181, 0)"
	}
	var yan4 = document.querySelector(".yan4");
	yan4.onclick = function () {
		yan4.style.background = "rgba(106, 204, 181, 0)"
	}
	
	window.onscroll = function () {
		var sc = document.documentElement.scrollTop;
		var headernav = document.querySelector("#header_nav");
		if (sc > 20) {
			headernav.style.padding = "0";
			headernav.style.background = "rgba(106, 204, 181,1)"
		}else{
			headernav.style.padding = "30px";
			headernav.style.background = "rgba(106, 204, 181,0.7)";
		}
		var butn = document.querySelector(".butn");
		if (sc > 400) {
			butn.style.bottom = "20px";
			butn.style.transform = 'matrix(1,0,0,1,0,0)'
		} else{
			butn.style.transform  = 'matrix(1,0,0,-0.001,0,0)'
		}
		butn.onclick = function () {
			window.scrollTo({
			top: 0,
		    behavior: 'smooth',
		});
		}
	
	}
	$(function(){
				$(".bigimg").click(function(){
					$(".big-box").fadeIn(1000).removeClass("active");
					return false;
				})
				$(".span").click(function(){
					$(".big-box").css("display","none").fadeOut(1000)
				})
				$(".spanda").click(function(){
					$(".bbox-1>img").css("transform","scale(1.5)")
				})
				$(".spanxiao").click(function(){
					$(".bbox-1>img").css("transform","scale(1)")
				})
				$(".btnnext").click(function(){
					$(".sbreak").addClass("fruits")
					$(".xfruits").removeClass("fruits")
				})
				$(".prevbtn").click(function(){
					$(".xfruits").addClass("fruits")
					$(".sbreak").removeClass("fruits")
				})
				
			})