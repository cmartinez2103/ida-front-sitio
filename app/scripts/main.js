$(document).ready(function () {

    $('#area-biografia').keyup(function () {
        var $textarea = $(this),
            maxlength = parseInt($textarea.attr('maxlength')),
            valuelength = $textarea.val().length;

        $('#max-biografia').text(maxlength - valuelength);
    });
    $('#area-presentacion').keyup(function () {
        var $textarea = $(this),
            maxlength = parseInt($textarea.attr('maxlength')),
            valuelength = $textarea.val().length;

        $('#max-presentacion').text(maxlength - valuelength);
    });

    var $textbuscar = 'Búsqueda';
    var $textcancelar = 'Cancelar';
    $('#buscar').click(function () {
        $('#search-box--desktop').slideToggle(200);
        $(this).parent().toggleClass('active');
        $('.icon-elem', this).toggleClass('icon-elem--search');
        $('.icon-elem', this).toggleClass('icon-elem--close');
        $('.text-btn', this).text(function (i, text) {
            return text === $textcancelar ? $textbuscar : $textcancelar;
        });
    });

    $('.list-dropdown__list').hide();
    $('.list-dropdown__trigger').click(function () {
        $('.list-dropdown__list').slideToggle();
        $('.icon-elem', this).toggleClass('animate');
        $(this).toggleClass('active');
    });

    //navegacion
    var menu = $('[data-role="nav-body"]');
    $('[data-role="nav-deployer"]').click(function(){
      $(menu).toggleClass('open-menu');
    });

    var item = $('[data-role="nav-item"]');
    $('[data-role="nav-deployer"]').click(function(){
      $(item).toggleClass('open-item');
    });

    //Siempre que salgamos de un campo de texto, se chequeará esta función
    $(".form input").keyup(function() {
        var form = $('[data-module="common-form"]' );
        var check = checkCampos(form);
        if(check) {
            $(".btn-form").prop("disabled", false);
        }
        else {
            $(".btn-form").prop("disabled", true);
        }
    });


//Función para comprobar los campos de texto
function checkCampos(obj) {
    var camposRellenados = true;
    obj.find("input").each(function() {
    var $this = $(this);
            if( $this.val().length <= 0 ) {
                camposRellenados = false;
                return false;
            }
    });
    if(camposRellenados == false) {
        return false;
    }
    else {
        return true;
    }
  };

  // cambiar a por clase si es necesario

$('.link-scroll[href^="#"]').on('click', function (e) {
     e.preventDefault();
     var target = this.hash;
    var $target = $(target);
     $('html, body').stop().animate({
        'scrollTop': $target.offset().top
     }, 900, 'swing', function () {
         window.location.hash = target;
     });
   });
});
