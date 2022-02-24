$(document).ready(function () {
    // alert("Hello world!");

    // MENU DE NAVEGACION
    var active = true;

    $(".btn-menu").on("click", function () {
        

        // INTERCALAR ICONOS
        $(".btn-menu i").toggleClass("fa-times");


        // ANIMACION MENU
        if (active) {
            $(".list-container").animate({
                left: "0px"
            }, 500);

            active = false;
        }else{
            active = true;

            $(".list-container").animate({
                left: "-100%"
            }, 500);

            active = true;
        }
    });

    // INTERCALAR CLASE 'ACTIVE' ENLACES DE NAVEGACIÓN
    var enlaces = document.querySelectorAll(".lists li a");

    enlaces.forEach((element) => {
        element.addEventListener("click", (event) => {
            enlaces.forEach((link) => {
                link.classList.remove("active");
            });
            event.target.classList.add("active");
        });
    });

    // SCROLL EFECT

    var prevScrollPos = window.pageYOffset;

    window.onscroll = () =>{

        // OCULTAR Y MOSTRAR MENU AL HACER SCROLL
        var currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos ) {
            $(".menu").css("top", "0px");
            $(".menu").css("transition", "0.5s");

        }else{
            $(".menu").css("top", "-60px");
            $(".menu").css("transition", "0.5s");
        }
        prevScrollPos = currentScrollPos;

        // CONDICIONES
        var posicion = window.pageYOffset;

        if (posicion <= 600) {
            // OCULTAR ESTILOS MENU SCROLL
            $(".menu").css("borderBottom", "none");
            
            // OCULTAR IR ARRIBA
            $(".go-top").css("right", "-100%");
        }else{
            // MOSTRAR ESTILOS MENU SCROLL
            $(".menu").css("borderBottom", "3px solid #ff2e63");
             // MOSTRAR IR ARRIBA
             $(".go-top").css("right", '10px');
             $(".go-top").css("transition", "500ms");
        }
    }

    // FUNCION IR ARRIBA
    $('.go-top').on('click', function () {
        $('body, html').animate({
            scrollTop: '0'
        }, 500);
    });

    // FUNCION VER ABAJO
    $('#down').on('click', function () {
        $('body, html').animate({
            scrollTop: '750px'
        }, 500);
    });
});