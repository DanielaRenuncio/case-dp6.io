// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

$(document).ready(function() {

     /* elementos da página index.html */

    $('.menu-lista-contato').on('click', function() {             
        ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');       
     });

     $('.menu-lista-download').on('click', function() {                  
        ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');       
     });
     
      /* elementos da página analise.html */      

     $('.card-montadoras').on('click', function() {
        let card_conteudo = $(this).attr('data-name');                  
        ga('send', 'event', 'analise', 'ver_mais', card_conteudo);   
      });
    
      /* elementos da página sobre.html */

    let inputs = document.querySelectorAll('.contato input');
    inputs.forEach(function(element){
    element.addEventListener('change', function () {           
        if(element.value){               
             ga('send', 'event', 'contato', element.id, 'preencheu'); 
         }
      });
    });     
   
    let submit_form = document.querySelector('form.contato');
    submit_form.addEventListener('submit',function(){
        alert("Formulário foi enviado!");     
        ga('send', 'event', 'contato', 'enviado', 'enviado'); 
    });    
 
});