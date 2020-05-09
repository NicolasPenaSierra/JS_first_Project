$(document).ready(function () {

    //slider
    if (window.location.href.indexOf('index.html') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }



    //POST
    if (window.location.href.indexOf('index.html') > -1) {
        var posts = [{
                title: 'Prueba titulo Uno',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
                content: `Maecenas at urna enim. Aliquam cursus vel nunc ut congue. In hac habitasse platea dictumst.
                        Pellentesque enim risus, convallis eget interdum quis, sodales a ex. Sed velit orci, vehicula
                        euismod gravida id, cursus ut lectus. Donec nisl nulla, congue nec sagittis quis, aliquet nec
                        arcu. Integer dapibus facilisis ligula vel condimentum. Praesent non orci vitae ligula luctus
                        tincidunt. Morbi elementum dolor sit amet ante molestie mattis. Phasellus interdum, sapien
                        varius varius elementum, est neque malesuada arcu, eu scelerisque ex turpis in ante. Nunc eget
                        justo quis eros dictum mattis eu vitae mi. Nam a libero vitae neque malesuada tincidunt.?`
            },
            {
                title: 'Prueba titulo Dos',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
                content: `Maecenas at urna enim. Aliquam cursus vel nunc ut congue. In hac habitasse platea dictumst.
                        Pellentesque enim risus, convallis eget interdum quis, sodales a ex. Sed velit orci, vehicula
                        euismod gravida id, cursus ut lectus. Donec nisl nulla, congue nec sagittis quis, aliquet nec
                        arcu. Integer dapibus facilisis ligula vel condimentum. Praesent non orci vitae ligula luctus
                        tincidunt. Morbi elementum dolor sit amet ante molestie mattis. Phasellus interdum, sapien
                        varius varius elementum, est neque malesuada arcu, eu scelerisque ex turpis in ante. Nunc eget
                        justo quis eros dictum mattis eu vitae mi. Nam a libero vitae neque malesuada tincidunt.?`
            },
            {
                title: 'Prueba titulo Tres',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
                content: `Maecenas at urna enim. Aliquam cursus vel nunc ut congue. In hac habitasse platea dictumst.
                        Pellentesque enim risus, convallis eget interdum quis, sodales a ex. Sed velit orci, vehicula
                        euismod gravida id, cursus ut lectus. Donec nisl nulla, congue nec sagittis quis, aliquet nec
                        arcu. Integer dapibus facilisis ligula vel condimentum. Praesent non orci vitae ligula luctus
                        tincidunt. Morbi elementum dolor sit amet ante molestie mattis. Phasellus interdum, sapien
                        varius varius elementum, est neque malesuada arcu, eu scelerisque ex turpis in ante. Nunc eget
                        justo quis eros dictum mattis eu vitae mi. Nam a libero vitae neque malesuada tincidunt.?`
            },

            {
                title: 'Prueba titulo Cuatro',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format('MMMM') + " del " + moment().format('YYYY'),
                content: `Maecenas at urna enim. Aliquam cursus vel nunc ut congue. In hac habitasse platea dictumst.
                        Pellentesque enim risus, convallis eget interdum quis, sodales a ex. Sed velit orci, vehicula
                        euismod gravida id, cursus ut lectus. Donec nisl nulla, congue nec sagittis quis, aliquet nec
                        arcu. Integer dapibus facilisis ligula vel condimentum. Praesent non orci vitae ligula luctus
                        tincidunt. Morbi elementum dolor sit amet ante molestie mattis. Phasellus interdum, sapien
                        varius varius elementum, est neque malesuada arcu, eu scelerisque ex turpis in ante. Nunc eget
                        justo quis eros dictum mattis eu vitae mi. Nam a libero vitae neque malesuada tincidunt.?`
            }
        ]

        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
        `;

            $('#posts').append(post);

        });
    }
    //SELECTOR DE TEMA
    var style = $("#theme")
    $("#toGreen").click(function () {
        style.attr('href', "css/green.css")
    });
    $("#toRed").click(function () {
        style.attr('href', "css/red.css")
    });
    $("#toBlue").click(function () {
        style.attr('href', "css/blue.css")
    });

    //Scroll Automatico

    $('.subir').click(function (e) {
        e.preventDefault();
        $("html , body").animate({
            scrollTop: 0
        }, 500);

        return false;
    });


    //LOGIN FALSO

    $("#login form").submit(function () {
        var formName = $("#formName").val();
        localStorage.setItem("formName", formName);

    });

    var formName = localStorage.getItem("formName");

    if (formName != null && formName != 'undefined') {
        var aboutParrafo = $("#about p");
        aboutParrafo.html("<strong>Bienvenido," + formName + "</strong>");
        aboutParrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");


        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });

    }

    //Acordeon JQuery UI

    if (window.location.href.indexOf('about.html') > -1) {
        $("#acordeon").accordion();
    }

    //Reloj
    if (window.location.href.indexOf('Reloj.html') > -1) {

        setInterval(() => {
            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);

    }
    //Validacion Formulario Contacto

    if (window.location.href.indexOf('contacto.html') > -1) {
        $("form input[name='date']").datepicker();
        
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });;
    }





});