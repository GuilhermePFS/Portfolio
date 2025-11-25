$('nav.mobile h3').click(function(){
    $('nav.mobile').find('ul').slideToggle();
})

function scrollSlide(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var  offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
        
    })
}

scrollSlide();

