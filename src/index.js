var $ = require('jquery');
require('style-loader!css-loader!./css/style.css');



function menu(){
    $('nav.mobile h3').on('click', () => {
        $('nav.mobile').find('ul').slideToggle();
    })
}

menu();


function scrollSlide(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var  offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
        
    })
}

scrollSlide();


function bannerPiada(){
    // Verifica se o banner estava aberto
    const bannerState = localStorage.getItem('bannerState');
    if(bannerState === 'open') {
        $('.banner-piada').show();
    }

    function abrirJanela(){
        $('.btn-ver-piada a').click(function(e){
            e.stopPropagation();
            $('.banner-piada').fadeIn();
            localStorage.setItem('bannerState', 'open');
        })
    }
    
    function verificarCliqueFechar(){
        var el = $('body, .frase');

        el.click(function(){
            $('.banner-piada').fadeOut();
            localStorage.setItem('bannerState', 'closed');
        })

        $('.frase').click(function(e){
            e.stopPropagation();
        })
    }    

    abrirJanela();
    verificarCliqueFechar();
    
}

bannerPiada();


function sendWhatsapp(event){
    if(event) event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;

    if(!name && !email && !msg){
        alert('Preencha pelo menos um dos campos antes de enviar.');
        return;
    }

    const phoneNumber = '5511954407568';
    const message = `*Nome:* ${name}\n*Email:* ${email}\n*Mensagem:* ${msg}\n`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const win = window.open(url, '_blank');
    if(win) win.opener = null;
}

// garante que o form chame a função sem recarregar
$(document).ready(function(){

    $('#formulario').on('submit', sendWhatsapp);

    $('.enviar').on('click', function(e){
        e.preventDefault();
        sendWhatsapp();
    });

    window.sendWhatsapp = sendWhatsapp;
});


