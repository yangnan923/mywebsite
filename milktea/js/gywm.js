$(function(){
	
	
	$(".li-1").click(function () {
		
		
		$(this).addClass("active").siblings().removeClass("active")
		$(".boss1").eq($(this).index()).css("display","block").siblings(".boss1").css("display","none")
		
})
	
})
$(".suibian").smoove({
		offset:'10%'
	})
		
	