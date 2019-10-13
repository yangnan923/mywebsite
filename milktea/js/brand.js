$(function(){
	$(".li").hover(function () {
		$(".li>div").eq($(this).index()).css("box-shadow","#666666 2px 2px 4px")
		$(".li>div>img").eq($(this).index()).css({"transition":"all 0.8s","transform":"scale(1.05)"})
		$(".li>div>a").eq($(this).index()).stop(true,true).animate({height:"60px"}).css({"display":"block","line-height":"60px"});
		},function(){
			$(".li>div").eq($(this).index()).css("box-shadow","none")
			$(".li>div>img").eq($(this).index()).css({"transition":"all 0.8s","transform":"scale(1)"})
			$(".li>div>a").eq($(this).index()).stop(true,true).animate({height:"0px"});
})
//切换小
	$(".box2>ul>li>div>img").click(function(){
		$(this).attr('src');
		
		$(".mtimg").attr("src",$(this).attr('src'));
		$(".xiaomotai").fadeIn(1000).removeClass("xiao")
	})
	$(".guanbi").click(function(){
		$(".xiaomotai").css("display","none")
		index = $(this).index()
//		return index
		for (i = 0; i < config.doms.boxImg.length; i++) {
            config.doms.boxImg[i].style.opacity = "0"
            config.doms.disLi[i].style.opacity = "0"
            config.doms.samllImg[i].className = ""

        }
        config.doms.boxImg[index].style.opacity = "1"
        config.doms.disLi[index].style.opacity = "1"
        config.doms.samllImg[index].className = "active"
	
})
	//点击向下and恢复
	$(".yc").click(function(){
		$(".fixdown").toggleClass("fix1")
	})

	})	
//	console.log($(this).index())
//切换
var config = {
        doms: {
            boxImg: document.querySelectorAll(".boxmotai li"),
            disLi: document.querySelectorAll(".dis li"),
            samllImg: document.querySelectorAll(".samllbox li"),
            prev: document.querySelector(".prev"),
            next: document.querySelector(".next"),
        },
    }

//  console.log(config.doms.samllImg)
    var index = 0;
  
    config.doms.prev.addEventListener("click", function() {
        if (index == 0) {
            index = 5
        } else {
            index--
        }
        for (i = 0; i < config.doms.boxImg.length; i++) {
            config.doms.boxImg[i].style.opacity = "0"
            config.doms.disLi[i].style.opacity = "0"
            config.doms.samllImg[i].className = ""

        }
        config.doms.boxImg[index].style.opacity = "1"
        config.doms.disLi[index].style.opacity = "1"
        config.doms.samllImg[index].className = "active"

    })

    function next1() {
        config.doms.next.addEventListener("click", function(e) {
            if (index == 5) {
                index = 0
            } else {
            	index++;
			}
                for (i = 0; i < config.doms.boxImg.length; i++) {
                	
                    config.doms.boxImg[i].style.opacity = "0"
                    config.doms.disLi[i].style.opacity = "0"
                    config.doms.samllImg[i].className = ""
					
                }
          	config.doms.boxImg[index].style.opacity="1"
            config.doms.disLi[index].style.opacity = "1"
            config.doms.samllImg[index].className = "active"
            
        })
    }
    
//  console.log(config.doms.samllImg)
    for (i = 0; i < config.doms.samllImg.length; i++) {
        config.doms.samllImg[i].addEventListener("click", function() {
            var thisIndex = this.getAttribute("index");
            index = thisIndex;
            
            for (i = 0; i < config.doms.boxImg.length; i++) {
                config.doms.boxImg[i].style.opacity = "0"
                config.doms.disLi[i].style.opacity = "0"
                config.doms.samllImg[i].className = ""

            }
            config.doms.boxImg[index].style.opacity = "1"
            config.doms.disLi[index].style.opacity = "1"
            config.doms.samllImg[index].className = "active"
        })
    }
next1()
   