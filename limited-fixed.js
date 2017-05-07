$(document).ready(function(){
	
	var container_offset = $('.container').offset().top;
	var container_height = $('.container').height();
	var limited_fixed_height = $('.limited-fixed').height();
	var fix_end_point = container_height + container_offset - limited_fixed_height;
    
    //while scrolling...
    $(window).scroll(function() {
	    
	    //limited-fixed div anchors to top of container btwn window top and container_offset
	    if ($(this).scrollTop() < container_offset) { 
		     $('.limited-fixed').css({
			   'position' : 'absolute',
			   'top' : ''
			});
			
		//limited-fixed div anchors to the bottom btwn fix_end_point and window bottom
		} else if ($(this).scrollTop() > fix_end_point) { 
	        console.log('here!');
	        $('.limited-fixed').css({
			   'position' : 'absolute',
			   'top' : '',
			   'bottom' : '0'
			});
			
		//limited-fixed div is fixed position btwn container_offset and fix_end_point
	    } else {
	        $('.limited-fixed').css({
			   'position' : 'fixed',
			   'top' : 0,
			   'bottom' : ''
			});		    
	    }
	});

});