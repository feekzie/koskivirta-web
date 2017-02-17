



$(window).resize(function() {
			  if ($(window).width() > 800) {
                  $('.header-nav nav ul').fadeIn(100);
              } else {
                  $('.header-nav nav ul').fadeOut(100);
              }                 
            
			});



			$('.fa-bars').click(function(){
				$('.header-nav nav ul').fadeIn(100);
					$('.header-nav nav ul a').addClass('fade-in');
					$('.closey').addClass('fade-in');
			
			});

			$('.closey').click(function(){
				$('.header-nav nav ul').fadeOut(100);
			});
/*
		  if ($(window).width() <= 800) {
                $(".closey").css("display", "block");
            }
			*/
		/*	
			 $( window ).load(function() {*/
              
			    
			/*});*/
			
			
			              
						
			
			