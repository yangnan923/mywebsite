$(function () {
	$(".nb>li").click(function () {
		$(this).addClass("activeq").siblings().removeClass("activeq");
		// return false;
		$(".jb").eq($(this).index()).css("display","block").siblings().css("display","none")
	})
})