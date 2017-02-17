$(document).ready(function(){
	$(".toggler-1").click(function(){ 
		$(this).css("background-color", "#339966");
	    $(".article-1").fadeIn(500);
	    $(".article-2").fadeOut(200)
		$(".toggler-2").css("background-color", "white");  
		$(".article-3").fadeOut(200); 
		$(".toggler-3").css("background-color", "white");
		$(".article-4").fadeOut(200);
		$(".toggler-4").css("background-color", "white"); 
		$(".article-5").fadeOut(200)
		$(".toggler-5").css("background-color", "white");

});




	$(".toggler-2").click(function(){
	$(this).css("background-color", "#339966");
	    $(".article-1").fadeOut(200);
		$(".toggler-1").css("background-color", "white");
		$(".toggler-3").css("background-color", "white");
		$(".toggler-4").css("background-color", "white"); 
		$(".toggler-5").css("background-color", "white");
	    $(".article-2").fadeIn(500);  
		$(".article-3").fadeOut(200); 
		$(".article-4").fadeOut(200); 
		$(".article-5").fadeOut(200)

});



	$(".toggler-3").click(function(){
		$(this).css("background-color", "#339966");
		$(".toggler-1").css("background-color", "white");
		$(".toggler-2").css("background-color", "white");
		$(".toggler-4").css("background-color", "white"); 
		$(".toggler-5").css("background-color", "white");
	    $(".article-1").fadeOut(200);
	    $(".article-2").fadeOut(200)  
		$(".article-3").fadeIn(500); 
		$(".article-4").fadeOut(200); 
		$(".article-5").fadeOut(200);

});

	$(".toggler-4").click(function(){
		$(this).css("background-color", "#339966");
		$(".toggler-1").css("background-color", "white");
		$(".toggler-2").css("background-color", "white");
		$(".toggler-3").css("background-color", "white"); 
		$(".toggler-5").css("background-color", "white");
	    $(".article-1").fadeOut(200)
	    $(".article-2").fadeOut(200);  
		$(".article-3").fadeOut(200) 
		$(".article-4").fadeIn(500) 
		$(".article-5").fadeOut(200)

});
	$(".toggler-5").click(function(){
		$(this).css("background-color", "#339966");
		$(".toggler-1").css("background-color", "white");
		$(".toggler-2").css("background-color", "white");
		$(".toggler-3").css("background-color", "white"); 
		$(".toggler-4").css("background-color", "white");
	    $(".article-1").fadeOut(200);
	    $(".article-2").fadeOut(200)  
		$(".article-3").fadeOut(200) 
		$(".article-4").fadeOut(200) 
		$(".article-5").fadeIn(500);

});

});