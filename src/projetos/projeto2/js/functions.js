$('nav.desktop a').hover(function(){
    $('nav li').removeClass('selected');
    $(this).parent().addClass('selected');
});


function scrollSlide(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var  offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
        
    })
}

scrollSlide();



$('nav.mobile h3').click(function(){
    $('nav.mobile').find('ul').slideToggle();
})




