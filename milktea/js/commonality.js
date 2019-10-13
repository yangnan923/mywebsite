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
		var li_h3 = document.querySelector(".li>h3");
		var li_u = document.querySelector(".li>.u");
		var li_a = document.querySelector(".li>#a");
		var lj_img = document.querySelector(".lj>img")
		// console.log(sc)
		if(sc >1115 ){
			li_h3.style.marginLeft = 0;
			li_u.style.marginLeft = 0;
			li_a.style.marginLeft = 0;
			lj_img.style.marginLeft = 0;
		}
		if(sc > 1496){
			
		}
	}
	
	// 	$("#input").focus(function(){
	// 		$("#input").css({"border-color":"#6accb5"})
	// 	})
	// 	$("#input").blur(function(){
	// 		$("#input").css("border-color","")
	// 	})
	// 	
	// 
	// $(".shang1,.shang3,.shang5").smoove({
	// 	offset:'2%'
	// })
	// $(".shang2,.shang4").smoove({
	// 	offset:'5%'
	// })
	// $(".shang3,.shang5").smoove({
	// 	offset:'10%'
	// })