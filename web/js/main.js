$(function() {
			$inner = $(".inner");
		    $(window).bind('keydown', function(event) {
		    	console.log(event.which, $inner.css("left"));
		    	if (event.which == 38) {
		        	$inner.css("top", parseInt($inner.css("top"), 10) + 5 + "px");
      			} else if(event.which == 40) {
					$inner.css("top", parseInt($inner.css("top"), 10) - 5 + "px");
   				} else if(event.which == 37) {
					$inner.css("left", parseInt($inner.css("left"), 10) + 5 + "px");
   				} else if(event.which == 39) {
					$inner.css("left", parseInt($inner.css("left"), 10) - 5 + "px");
   				}
		    });
		    $(".wall,.ground").click(function(){
				$(this).toggleClass("ground wall");
		    });
		});
