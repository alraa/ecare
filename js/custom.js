$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
$(function(){

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.menu').slideToggle(); 
		return false;
	});
	
	$('.box-phone__button').click(function(){$(this).parents('.box-phone').toggleClass('open'); return false;});
	
	$('input').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	
	$('input[type=text], textarea')
         .bind('focus', Function("if(this.value==this.defaultValue) this.value=''"))
         .bind('blur', Function("if(this.value=='') this.value=this.defaultValue"));
		 
	$('.js-styled').styler();
	
	
    $( "#datepicker" ).datepicker( );
	$( "#datepicker2" ).datepicker( );
	
	$('.button-top').click(function() {
	  $('html, body').animate({scrollTop: 0}, 1000);
	  return false;
	 });
    
});

var handler2 = function(){
	
	var height_footer = $('footer').height();	
	$('.content').css({'padding-bottom':height_footer+40});
	
}
$(window).bind('load', handler2);
$(window).bind('resize', handler2);



