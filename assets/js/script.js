$(document).ready(function () {
	
	$('.nav-link').on('click',function(e){
		// e.preventDefault()
		

		let href = $(this).attr('href');
		let element = $(href);

		$('html,body').animate({
			scrollTop:element.offset().top -80
		},1250,'swing')
		e.preventDefault()
	})

	$(window).on('scroll',function(){
		// ambil tinggi scroll atas
		let scrollTop = $(this).scrollTop();
		// ambil tinggi navbar
		let navHeight = $('nav').outerHeight() + 10;

		if($('#services').offset().top >= scrollTop){
			$('#navbarSide').find('a').removeClass('active');
		}
		$('section').each(function(){

			let top = $(this).offset().top - navHeight;
			let bottom = top + $(this).outerHeight();

			if(scrollTop >= top && scrollTop <= bottom){
				$('#navbarSide').find('a').removeClass('active');
				$('#navbarSide').find('a[href="#'+$(this).attr('id')+'"]').addClass('active')
			}

		})
	})
});