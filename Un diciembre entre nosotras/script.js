
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // ELEMENTOS PRINCIPALES
    // ==========================================

    const portada = document.getElementById("portada");
    const calendario = document.getElementById("calendario");
    const comenzar = document.getElementById("comenzar");
    const volver = document.getElementById("volver");
    const sobres = document.getElementById("sobres");

    // ==========================================
    // CONTENIDO DEL CALENDARIO
    // ==========================================

    const mensajes = {
        1: {
            titulo: "Esto es para ti",
            texto: `Bienvenida a diciembre. Hoy empieza una aventura que preparé con muchísimo cariño para ti. Durante los próximos 24 días encontrarás recuerdos, sorpresas, momentos especiales y pequeños detalles que espero que consigan sacarte una sonrisa.

Sé de sobra que estas fechas no son fáciles ni pretendo que todos los días sean perfectos, pero espero que disfrutes de esto tanto como yo disfruté preparándolo.

Te quiero infinito, no lo olvides nunca.`
        },

        2: {
            titulo: "Mi suerte",
            texto: `No hay día en que no piense lo bonito que es coincidir con personas que hacen que la vida sea un poquito mejor. Tú eres una de ellas.

Por cada risa, cada conversación y cada momento compartido. Ojalá muchísimos más por vivir.

Qué suerte tenerte.`
        },

        3: {
            titulo: "Hoy te toca a ti",
            tipo: "preguntas"
        },

        4: {
            titulo: "Un desayuno pendiente",
            tipo: "vale"
        },

        5: {
            titulo: "Si pudiera volver...",
            tipo: "recuerdo"
        },

        6: {
            titulo: "Por si se te olvida...",
            texto: `No te imaginas lo orgullosa que estoy de ti. De la persona que eres, de cómo afrontas las cosas y de esa manera tan tuya de ser.

Si alguna vez pudieras verte desde fuera, aunque solo fuera durante unos segundos, entenderías muchas de las cosas que los demás vemos en ti.

Lo especial que eres y lo mucho que quieres a las personas que te quieren. Ojalá nunca pienses que tienes que ser diferente, hacer más o demostrar nada para merecer cosas bonitas.

Por algo eres mi mejor amiga. Ojalá te valores incluso en esos días en los que tú misma no consigues verlo. Y espero que la vida te permita descubrir, poquito a poco, todo lo bonito que tiene preparado para ti.

Ahí arriba hay alguien que está muy orgulloso de tener la hija que tiene. 🤍`
        },

        7: {
            titulo: "Una canción para ti",
            tipo: "cancion",
            texto: `Hay canciones que, cada vez que las escuchamos, nos recuerdan a alguien y nos transportan a donde de verdad fuimos felices.

Hoy quería compartir contigo una de ellas. Ojalá, cuando la escuches, sientas un poquito de nosotras cerca.`,
            cancion: "Saturno",
            artista: "Pablo Alborán",
            enlace: "https://open.spotify.com/search/Saturno%20Pablo%20Albor%C3%A1n"
        },

        8: {
            titulo: "Si fuéramos...",
            tipo: "juego-imagenes",
            texto: "Quiero que respondas lo primero que se te pase por la cabeza:",
            preguntas: [
                "Si fuéramos un dúo famoso, ¿cuál seríamos?",
                "Si nuestra amistad fuera una película, ¿qué título tendría?",
                "Si nos fuéramos de viaje mañana, ¿en dónde acabaríamos?"
            ],
            respuestas: [
                {
                    nombre: "Los Morancos",
                    imagen: "morancos.jfif"
                },
                {
                    nombre: "Mamma Mia!",
                    imagen: "mamma-mia.jfif"
                },
                {
                    nombre: "Nueva York",
                    imagen: "nueva-york.jfif"
                }
            ]
        },

        9: {
            titulo: "La vida no va en serio",
            texto: `A veces nos olvidamos de que no tenemos que hacerlo todo bien, tenerlo todo organizado ni cumplir con todas las expectativas que nos ponemos.

También está bien improvisar, cambiar de planes, hacer el ridículo, equivocarse y reírnos de nuestras propias tonterías.

Porque, al final, la vida ya es bastante complicada como para tomárnosla siempre tan en serio. Y si algo tengo claro es que algunos de los mejores momentos son precisamente esos que no teníamos planeados.

Así que ya sabes: menos pensar tanto y más vivir. 🤍`
        },

        10: {
            titulo: "Alguien especial",
            tipo: "carta-desplegable"
        },

        11: {
            titulo: "El tiempo",
            tipo: "capsula-tiempo"
        },
        12: {
  titulo: "¿De verdad me conoces?",
  tipo: "test-amistad"
},
13: {
  titulo: "Tu fortuna está escrita",
  tipo: "galleta-fortuna"
},
14: {
  titulo: "Manual de instrucciones para la vida",
  tipo: "manual-vida"
},
15: {
  titulo: "Ojalá",
  texto: "Ojalá nunca nos acostumbremos tanto a tenernos que se nos olvide la suerte que es compartir la vida. Que nunca nos falten las ganas de reírnos por cualquier tontería, de contarnos hasta lo más insignificante y de seguir creando recuerdos que algún día echaremos de menos."
},
16: {
  titulo: "Vale por una...",
  tipo: "vale-amistad"
},
17: {
  titulo: "¿Qué prefieres? Edición sin filtros",
  tipo: "que-prefieres"
},
18: {
  titulo: "You know you love me. XOXO",
  tipo: "gossip-girl"
},
19: {
  titulo: "Entre letras y nosotras",
  tipo: "sopa-letras"
},
20: {
  titulo: "Los astros hablan",
  tipo: "horoscopo"
},
21: {
  titulo: "Admiración",
  tipo: "libro-admiracion"
},
22: {
  titulo: "Tu número de la suerte",
  tipo: "loteria"
},
23: {
  titulo: "La última pista",
  tipo: "ultima-pista"
},
24: {
  titulo: "El sentido de todo",
  tipo: "gran-final"
}
    };

    // ==========================================
    // MODO PRUEBA
    // ==========================================

    // Cambiar a false antes de compartir.
    const MODO_PRUEBA = true;

    const DIAS_DE_PRUEBA = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
    ];

    // ==========================================
    // VENTANA DE LAS CARTAS
    // ==========================================

    const ventana = document.createElement("div");

    ventana.className = "ventana-carta";
    ventana.hidden = true;

    ventana.setAttribute("role", "dialog");
    ventana.setAttribute("aria-modal", "true");

    ventana.innerHTML = `
        <div class="fondo-carta"></div>

        <div class="carta">
            <button
                class="cerrar-carta"
                type="button"
                aria-label="Cerrar carta"
            >×</button>

            <p class="carta-etiqueta">
                UN DICIEMBRE ENTRE NOSOTRAS
            </p>

            <div class="carta-corazon" aria-hidden="true">
                ♡
            </div>

            <h2 class="carta-titulo"></h2>

            <div class="carta-contenido"></div>

            <p class="carta-firma">
                Con cariño ♡
            </p>
        </div>
    `;

    document.body.appendChild(ventana);

    const tituloCarta =
        ventana.querySelector(".carta-titulo");

    const contenidoCarta =
        ventana.querySelector(".carta-contenido");

    const firmaCarta =
        ventana.querySelector(".carta-firma");

    const corazonCarta =
        ventana.querySelector(".carta-corazon");

    const cerrarBoton =
        ventana.querySelector(".cerrar-carta");

    let ultimoSobre = null;

    // ==========================================
    // FUNCIONES GENERALES
    // ==========================================

    function cerrarCarta() {
        ventana.hidden = true;
        document.body.style.overflow = "";

        if (ultimoSobre) {
            ultimoSobre.focus();
        }
    }

    function abrirVentana() {
        ventana.hidden = false;
        document.body.style.overflow = "hidden";

        const carta = ventana.querySelector(".carta");
        carta.scrollTop = 0;

        cerrarBoton.focus({
            preventScroll: true
        });
    }

    function crearParrafo(
        texto,
        clase = "carta-texto"
    ) {
        const parrafo = document.createElement("p");

        parrafo.className = clase;
        parrafo.textContent = texto;

        return parrafo;
    }

    function mostrarCarta(
        titulo,
        texto,
        esMensaje = true
    ) {
        tituloCarta.textContent = titulo;
        contenidoCarta.innerHTML = "";

        contenidoCarta.appendChild(
            crearParrafo(texto)
        );

        firmaCarta.hidden = !esMensaje;
        corazonCarta.hidden = !esMensaje;

        abrirVentana();
    }

    function abrirWhatsApp(mensaje) {
        const enlace =
            "https://api.whatsapp.com/send?text=" +
            encodeURIComponent(mensaje);

        const nuevaVentana = window.open(
            enlace,
            "_blank"
        );

        if (!nuevaVentana) {
            window.location.href = enlace;
        }
    }

    // ==========================================
    // DÍA 3 - PREGUNTAS
    // ==========================================

    function mostrarPreguntas() {
        tituloCarta.textContent =
            mensajes[3].titulo;

        contenidoCarta.innerHTML = "";

        firmaCarta.hidden = true;
        corazonCarta.hidden = false;

        contenidoCarta.appendChild(
            crearParrafo(
                "Hoy es algo diferente. Tengo dos preguntas para ti:"
            )
        );

        const preguntas = [
            "¿Cuáles son las tres cosas que más te gustan de mí?",
            "Si pudieras regalarnos un día perfecto, ¿cómo sería?"
        ];

        const respuestas = [];

        preguntas.forEach(function (pregunta, indice) {
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta-pregunta";

            const titulo = document.createElement("h3");
            titulo.className = "pregunta-titulo";
            titulo.textContent = pregunta;

            const textarea = document.createElement("textarea");
            textarea.className = "pregunta-respuesta";
            textarea.placeholder = "Escribe aquí tu respuesta...";
            textarea.rows = 4;

            const clave =
                "adviento_yai_respuesta_" + (indice + 1);

            try {
                textarea.value =
                    localStorage.getItem(clave) || "";
            } catch (error) {
                textarea.value = "";
            }

            textarea.addEventListener("input", function () {
                try {
                    localStorage.setItem(
                        clave,
                        textarea.value
                    );
                } catch (error) {
                    // Conserva el texto.
                }
            });

            tarjeta.appendChild(titulo);
            tarjeta.appendChild(textarea);
            contenidoCarta.appendChild(tarjeta);

            respuestas.push(textarea);
        });

        contenidoCarta.appendChild(
            crearParrafo(
                "P. D.: Cuidadito con lo que dices, que todo se tiene en cuenta. 😉",
                "preguntas-posdata"
            )
        );

        const boton = document.createElement("button");

        boton.type = "button";
        boton.className = "boton-preguntas";
        boton.textContent = "ENVIAR MIS RESPUESTAS";

        boton.addEventListener("click", function () {
            const r1 = respuestas[0].value.trim();
            const r2 = respuestas[1].value.trim();

            if (!r1 || !r2) {
                alert("¡Primero responde a las dos preguntas! 🤎");
                return;
            }

            const mensaje =
                "💌 MIS RESPUESTAS DEL DÍA 3\n\n" +
                "1. " + preguntas[0] +
                "\n" + r1 + "\n\n" +
                "2. " + preguntas[1] +
                "\n" + r2 + "\n\n🤎";

            abrirWhatsApp(mensaje);
        });

        contenidoCarta.appendChild(boton);
        abrirVentana();
    }

    // ==========================================
    // DÍA 4 - VALE DESAYUNO
    // ==========================================

    function mostrarVale() {
        tituloCarta.textContent =
            mensajes[4].titulo;

        contenidoCarta.innerHTML = "";

        firmaCarta.hidden = false;
        corazonCarta.hidden = false;

        contenidoCarta.appendChild(
            crearParrafo(
                "Hoy no tienes que responder a nada. Simplemente quiero tener un detalle por todas las veces que lo haces tú por mí."
            )
        );

        const vale = document.createElement("div");
        vale.className = "vale-desayuno";

        vale.innerHTML = `
            <p class="vale-etiqueta">
                VALE CANJEABLE POR
            </p>

            <h3 class="vale-titulo">
                Un desayuno juntas
            </h3>

            <p class="vale-descripcion">
                Con todo lo que quieras incluido
                y sin fecha de caducidad.
            </p>

            <p class="vale-descripcion">
                Eso sí, no se admiten
                devoluciones. 😉
            </p>

            <div class="vale-datos">
                <span>PARA: YAI</span>
                <span>VÁLIDO: SIEMPRE</span>
            </div>
        `;

        contenidoCarta.appendChild(vale);

        const boton = document.createElement("button");

        boton.type = "button";
        boton.className = "boton-preguntas";
        boton.textContent = "CANJEAR MI DESAYUNO";

        boton.addEventListener("click", function () {
            abrirWhatsApp(
                "¡Hola! 🥐☕\n\n" +
                "Vengo a canjear mi vale por un desayuno juntas. " +
                "¡Y recuerda que puedo pedir todo lo que quiera! 😉🤎"
            );
        });

        contenidoCarta.appendChild(boton);
        abrirVentana();
    }

    // ==========================================
    // DÍA 5 - RECUERDOS
    // ==========================================

    function mostrarRecuerdo() {
        tituloCarta.textContent =
            mensajes[5].titulo;

        contenidoCarta.innerHTML = "";

        firmaCarta.hidden = true;
        corazonCarta.hidden = false;

        contenidoCarta.appendChild(
            crearParrafo(
                `De todos los momentos que hemos vivido juntas, seguro que hay alguno al que volverías aunque solo fuera por un ratito.

Hoy quiero que elijas una foto de ese momento que repetirías una y mil veces.

Yo ya he elegido la mía.`
            )
        );

        const polaroid = document.createElement("div");
        polaroid.className = "recuerdo-polaroid";

        const zonaImagen = document.createElement("div");
        zonaImagen.className = "recuerdo-imagen";
        zonaImagen.textContent = "Tu recuerdo va aquí ♡";

        const pie = crearParrafo(
            "Un momento para volver",
            "recuerdo-pie"
        );

        polaroid.appendChild(zonaImagen);
        polaroid.appendChild(pie);
        contenidoCarta.appendChild(polaroid);

        const selector = document.createElement("input");
        selector.type = "file";
        selector.accept = "image/*";
        selector.hidden = true;
        contenidoCarta.appendChild(selector);

        const botonElegir = document.createElement("button");
        botonElegir.type = "button";
        botonElegir.className = "boton-preguntas";
        botonElegir.textContent = "ELEGIR MI FOTO";
        contenidoCarta.appendChild(botonElegir);

        const botonCompartir = document.createElement("button");
        botonCompartir.type = "button";
        botonCompartir.className = "boton-recuerdo-secundario";
        botonCompartir.textContent = "COMPARTIR MI FOTO";
        botonCompartir.hidden = true;
        contenidoCarta.appendChild(botonCompartir);

        const botonDescubrir = document.createElement("button");
        botonDescubrir.type = "button";
        botonDescubrir.className = "boton-recuerdo-descubrir";
        botonDescubrir.textContent = "DESCUBRIR TU RECUERDO";
        botonDescubrir.disabled = true;
        contenidoCarta.appendChild(botonDescubrir);

        let fotoSeleccionada = null;
        let urlFoto = null;

        botonElegir.addEventListener("click", function () {
            selector.click();
        });

        selector.addEventListener("change", function () {
            const archivo = selector.files[0];

            if (!archivo || !archivo.type.startsWith("image/")) {
                return;
            }

            fotoSeleccionada = archivo;

            if (urlFoto) {
                URL.revokeObjectURL(urlFoto);
            }

            urlFoto = URL.createObjectURL(archivo);

            zonaImagen.innerHTML = "";

            const imagen = document.createElement("img");
            imagen.src = urlFoto;
            imagen.alt = "El recuerdo elegido por Yai";
            imagen.style.width = "100%";
            imagen.style.height = "100%";
            imagen.style.objectFit = "cover";

            zonaImagen.appendChild(imagen);

            botonCompartir.hidden = false;
            botonDescubrir.disabled = false;
        });

        botonCompartir.addEventListener(
            "click",
            async function () {
                if (!fotoSeleccionada) return;

                try {
                    if (
                        navigator.share &&
                        navigator.canShare &&
                        navigator.canShare({
                            files: [fotoSeleccionada]
                        })
                    ) {
                        await navigator.share({
                            files: [fotoSeleccionada],
                            title: "Mi recuerdo favorito",
                            text: "Este es el momento al que volvería contigo. 🤎"
                        });

                        return;
                    }
                } catch (error) {
                    if (error.name === "AbortError") {
                        return;
                    }
                }

                alert(
                    "Se abrirá WhatsApp. Adjunta allí la foto que acabas de elegir. 🤎"
                );

                abrirWhatsApp(
                    "📸 Este es el momento al que volvería contigo. 🤎\n\n" +
                    "Te mando la foto de mi recuerdo."
                );
            }
        );

        botonDescubrir.addEventListener("click", function () {
            if (!fotoSeleccionada) return;

            if (
                contenidoCarta.querySelector(
                    ".recuerdo-sorpresa"
                )
            ) {
                return;
            }

            const sorpresa = document.createElement("div");
            sorpresa.className = "recuerdo-sorpresa";

            const polaroidSecreta = document.createElement("div");
            polaroidSecreta.className = "recuerdo-polaroid";

            const imagen = document.createElement("img");
            imagen.className = "recuerdo-foto-secreta";
            imagen.src = "nuestro-recuerdo.jpg";
            imagen.alt = "Nuestro recuerdo juntas";

            const pieSecreto = crearParrafo(
                "Mi recuerdo contigo ♡",
                "recuerdo-pie"
            );

            polaroidSecreta.appendChild(imagen);
            polaroidSecreta.appendChild(pieSecreto);

            const dedicatoria = crearParrafo(
                `Escogí esta foto por muchas razones. Por el momento, porque nunca nos hacemos fotos juntas y porque simplemente estamos tú y yo.

No sé si es mi recuerdo favorito, pero sí uno de los que me gustaría repetir.`,
                "recuerdo-dedicatoria"
            );

            sorpresa.appendChild(polaroidSecreta);
            sorpresa.appendChild(dedicatoria);

            contenidoCarta.appendChild(sorpresa);
            botonDescubrir.hidden = true;

            sorpresa.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        });

        abrirVentana();
    }

    // ==========================================
    // DÍA 7 - CANCIÓN
    // ==========================================

    function mostrarCancion() {
        const dia = mensajes[7];

        tituloCarta.textContent = dia.titulo;
        contenidoCarta.innerHTML = "";

        firmaCarta.hidden = false;
        corazonCarta.hidden = false;

        contenidoCarta.appendChild(
            crearParrafo(dia.texto)
        );

        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-musical";

        tarjeta.innerHTML = `
            <img
                src="saturno.jpg"
                alt="Portada de Saturno de Pablo Alborán"
                class="musical-portada"
            >

            <p class="musical-etiqueta">
                UNA CANCIÓN PARA TI
            </p>

            <h3 class="musical-titulo">
                ${dia.cancion}
            </h3>

            <p class="musical-artista">
                ${dia.artista}
            </p>

            <div class="musical-linea"></div>

            <a
                class="musical-boton"
                href="${dia.enlace}"
                target="_blank"
                rel="noopener noreferrer"
            >
                ▶ ESCUCHAR EN SPOTIFY
            </a>
        `;

        contenidoCarta.appendChild(tarjeta);
        abrirVentana();
    }

    // ==========================================
    // DÍA 8 - SI FUÉRAMOS...
    // ==========================================

    function mostrarJuegoImagenes() {
        const dia = mensajes[8];

        tituloCarta.textContent = dia.titulo;
        contenidoCarta.innerHTML = "";

        firmaCarta.hidden = true;
        corazonCarta.hidden = false;

        contenidoCarta.appendChild(
            crearParrafo(dia.texto)
        );

        const campos = [];
        const tarjetas = [];

        dia.preguntas.forEach(function (pregunta, indice) {
            const tarjeta = document.createElement("div");
            tarjeta.className = "juego8-tarjeta";

            const numero = document.createElement("span");
            numero.className = "juego8-numero";
            numero.textContent = "PREGUNTA 0" + (indice + 1);

            const titulo = document.createElement("h3");
            titulo.className = "juego8-pregunta";
            titulo.textContent = pregunta;

            const respuesta = document.createElement("textarea");
            respuesta.className = "juego8-respuesta";
            respuesta.placeholder = "Tu respuesta...";
            respuesta.rows = 2;

            const clave =
                "adviento_yai_dia8_" + (indice + 1);

            try {
                respuesta.value =
                    localStorage.getItem(clave) || "";
            } catch (error) {
                respuesta.value = "";
            }

            respuesta.addEventListener("input", function () {
                try {
                    localStorage.setItem(
                        clave,
                        respuesta.value
                    );
                } catch (error) {
                    // Conserva el texto.
                }
            });

            tarjeta.appendChild(numero);
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(respuesta);

            contenidoCarta.appendChild(tarjeta);

            campos.push(respuesta);
            tarjetas.push(tarjeta);
        });

        const botonDescubrir = document.createElement("button");
        botonDescubrir.type = "button";
        botonDescubrir.className = "juego8-boton";
        botonDescubrir.textContent = "DESCUBRIR MIS RESPUESTAS";
        contenidoCarta.appendChild(botonDescubrir);

        const botonEnviar = document.createElement("button");
        botonEnviar.type = "button";
        botonEnviar.className = "juego8-boton-secundario";
        botonEnviar.textContent = "ENVIAR MIS RESPUESTAS";
        botonEnviar.hidden = true;
        contenidoCarta.appendChild(botonEnviar);

        function respuestasCompletas() {
            return campos.every(function (campo) {
                return campo.value.trim() !== "";
            });
        }

        botonDescubrir.addEventListener("click", function () {
            if (!respuestasCompletas()) {
                alert(
                    "¡Responde primero las tres preguntas para descubrir mis elecciones! 🤎"
                );
                return;
            }

            dia.respuestas.forEach(function (respuesta, indice) {
                const revelacion = document.createElement("div");
                revelacion.className = "juego8-revelacion";

                const etiqueta = document.createElement("p");
                etiqueta.className = "juego8-etiqueta";
                etiqueta.textContent = "MI RESPUESTA ♡";

                const marco = document.createElement("div");
                marco.className = "juego8-marco";

                const imagen = document.createElement("img");
                imagen.src = respuesta.imagen;
                imagen.alt = respuesta.nombre;
                imagen.className = "juego8-imagen";

                const nombre = document.createElement("p");
                nombre.className = "juego8-nombre";
                nombre.textContent = respuesta.nombre;

                marco.appendChild(imagen);
                marco.appendChild(nombre);

                revelacion.appendChild(etiqueta);
                revelacion.appendChild(marco);

                tarjetas[indice].appendChild(revelacion);
                campos[indice].readOnly = true;
            });

            botonDescubrir.hidden = true;
            botonEnviar.hidden = false;

            const primeraRevelacion =
                contenidoCarta.querySelector(
                    ".juego8-revelacion"
                );

            if (primeraRevelacion) {
                primeraRevelacion.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }
        });

        botonEnviar.addEventListener("click", function () {
            if (!respuestasCompletas()) {
                alert("Falta alguna respuesta. 🤎");
                return;
            }

            let texto = "🎀 DÍA 8 · SI FUÉRAMOS...\n\n";

            dia.preguntas.forEach(function (pregunta, indice) {
                texto +=
                    (indice + 1) +
                    ". " + pregunta + "\n" +
                    campos[indice].value.trim() +
                    "\n\n";
            });

            abrirWhatsApp(texto.trim());
        });

        abrirVentana();
    }

    // ==========================================
    // DÍA 10 - ALGUIEN ESPECIAL
    // ==========================================

    function mostrarCartaDesplegable() {
        tituloCarta.textContent = "Alguien especial";
        contenidoCarta.innerHTML = "";

        firmaCarta.hidden = true;
        corazonCarta.hidden = true;

        const contenedor = document.createElement("div");
        contenedor.className = "dia10-contenedor";

        contenedor.innerHTML = `
            <div class="dia10-papel-cerrado">
                <div class="dia10-adorno">♡</div>

                <p class="dia10-etiqueta">
                    OS QUIERO MUCHO
                </p>

                <div class="dia10-linea"></div>

                <p class="dia10-fecha">
                    10 · 12 · 2026
                </p>
            </div>

            <button
                type="button"
                class="dia10-boton-abrir"
            >
                DESPLEGAR CARTA
            </button>

            <div
                class="dia10-carta-abierta"
                hidden
            >
                <p class="dia10-fecha-interior">
                    10 de diciembre de 2026
                </p>

                <h3 class="dia10-saludo">
                    Querida Yai:
                </h3>

                <p>
                    Hoy es un día especial para ti.
                    Y, en parte, también para mí.
                </p>

                <p>
                    Hoy cumple años una persona que
                    las dos queremos muchísimo.
                    Valiente, fuerte y luchadora.
                    Tu madre es una de ellas.
                </p>

                <p>
                    Creo que a veces nos olvidamos de
                    lo afortunados que somos por poder
                    compartir días como hoy con las
                    personas que queremos. Por eso,
                    nunca deberiamos dar por hecho los
                    abrazos, las conversaciones, las
                    comidas en familia o esos pequeños
                    momentos que parecen tan cotidianos
                    y que, en realidad, son los que más
                    importan.
                </p>

                <p>
                    Ojalá nunca os falten motivos para
                    celebrar, disfrutar de quienes tenemos
                    cerca y crear recuerdos juntas.
                </p>

                <p class="dia10-despedida">
                    Os quiero mucho, a las dos.
                </p>
            </div>

            <button
                type="button"
                class="dia10-boton-cerrar"
                hidden
            >
                VOLVER A DOBLAR
            </button>
        `;

        contenidoCarta.appendChild(contenedor);

        const papelCerrado =
            contenedor.querySelector(".dia10-papel-cerrado");

        const cartaAbierta =
            contenedor.querySelector(".dia10-carta-abierta");

        const botonAbrir =
            contenedor.querySelector(".dia10-boton-abrir");

        const botonCerrar =
            contenedor.querySelector(".dia10-boton-cerrar");

        botonAbrir.addEventListener("click", function () {
            papelCerrado.hidden = true;
            botonAbrir.hidden = true;

            cartaAbierta.hidden = false;
            botonCerrar.hidden = false;

            ventana.querySelector(".carta").scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        botonCerrar.addEventListener("click", function () {
            cartaAbierta.hidden = true;
            botonCerrar.hidden = true;

            papelCerrado.hidden = false;
            botonAbrir.hidden = false;

            ventana.querySelector(".carta").scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        abrirVentana();
    }

    // ==========================================
    // DÍA 11 - EL TIEMPO
    // ==========================================

    function mostrarCapsulaTiempo() {
        tituloCarta.textContent = "El tiempo";
        contenidoCarta.innerHTML = "";

        firmaCarta.hidden = true;
        corazonCarta.hidden = true;

        const contenedor = document.createElement("div");
        contenedor.className = "dia11-contenedor";

        contenedor.innerHTML = `
            <p class="dia11-introduccion">
                Quiero que escribas una pequeña carta para tu yo de dentro de un año. Cuéntale cómo estás ahora, qué te preocupa, qué te hace ilusión, qué esperas que cambie y qué cosas te gustaría que siguieran igual.
            </p>

            <p class="dia11-introduccion">
                Guárdala bien y no la leas hasta diciembre del año que viene. Quién sabe dónde estaremos entonces y qué habrá pasado.
            </p>

            <div class="dia11-libreta">
                <p class="dia11-fecha">
                    11 / 12 / 2026 ♡
                </p>

                <label
                    for="dia11-escritura"
                    class="dia11-saludo"
                >
                    Querida yo:
                </label>

                <textarea
                    id="dia11-escritura"
                    class="dia11-escritura"
                    rows="11"
                    placeholder="Escribe aquí tu carta..."
                    aria-label="Carta a mi yo del futuro"
                ></textarea>

                <p class="dia11-firma">
                    Con cariño, tu yo de 2026 ♡
                </p>
            </div>

            <button
                class="dia11-boton-guardar"
                type="button"
            >
                GUARDAR MI CARTA
            </button>

            <p class="dia11-sello">
                NO ABRIR HASTA DICIEMBRE DE 2027 ♡
            </p>

            <p
                class="dia11-aviso"
                role="status"
                aria-live="polite"
            ></p>
        `;

        contenidoCarta.appendChild(contenedor);

        const escritura =
            contenedor.querySelector(".dia11-escritura");

        const aviso =
            contenedor.querySelector(".dia11-aviso");

        const clave =
            "adviento_yai_carta_dia11_2026";

        try {
            escritura.value =
                localStorage.getItem(clave) || "";
        } catch (error) {
            // La descarga sigue funcionando.
        }

        escritura.addEventListener("input", function () {
            try {
                localStorage.setItem(
                    clave,
                    escritura.value
                );
            } catch (error) {
                // El texto permanece en pantalla.
            }
        });

        const botonGuardar =
            contenedor.querySelector(".dia11-boton-guardar");

        botonGuardar.addEventListener("click", function () {
            const texto = escritura.value.trim();

            if (!texto) {
                aviso.textContent =
                    "Escribe primero tu carta para poder guardarla. ♡";
                escritura.focus();
                return;
            }

            const contenido =
                "EL TIEMPO\n" +
                "11 de diciembre de 2026\n\n" +
                "Querida yo:\n\n" +
                texto +
                "\n\nCon cariño, tu yo de 2026 ♡" +
                "\n\nNO ABRIR HASTA DICIEMBRE DE 2027";

            const archivo = new Blob(
                ["\uFEFF", contenido],
                { type: "text/plain;charset=utf-8" }
            );

            const url = URL.createObjectURL(archivo);

            const enlace = document.createElement("a");
            enlace.href = url;
            enlace.download =
                "Mi_carta_para_diciembre_2027.txt";

            document.body.appendChild(enlace);
            enlace.click();
            enlace.remove();

            setTimeout(function () {
                URL.revokeObjectURL(url);
            }, 1000);

            aviso.textContent =
                "Tu carta se ha descargado. Guárdala en un lugar seguro. ♡";
        });

        abrirVentana();
    }

function mostrarTestAmistad() {
  const preguntas = [
    {
      pregunta: "Si te digo «tenemos que hablar», ¿qué piensas?",
      opciones: [
        "¿Qué he hecho ahora? 😭",
        "Se viene un cotilleo de los buenos.",
        "Otra vez tiene una crisis existencial."
      ]
    },
    {
      pregunta: "Si nos vamos de viaje juntas, ¿qué es lo más probable que pase?",
      opciones: [
        "Nos perdemos hasta con Google Maps.",
        "Tardamos tres horas en decidir dónde comer.",
        "Acabamos viviendo una aventura que no estaba en el itinerario."
      ]
    },
    {
      pregunta: "Si participáramos juntas en un reality, ¿cómo acabaríamos?",
      opciones: [
        "Expulsadas por reírnos cuando no toca.",
        "Discutiendo por una tontería y reconciliándonos cinco minutos después.",
        "Ganando el programa, porque claramente somos las protagonistas."
      ]
    },
    {
      pregunta: "Si te llamo cinco veces seguidas, ¿qué ha pasado?",
      opciones: [
        "Tengo un cotilleo que no puede esperar.",
        "Me ha pasado algo y necesito contártelo YA.",
        "Simplemente me aburro y he decidido molestarte."
      ]
    },
    {
      pregunta: "¿Cuál es el verdadero secreto de nuestra amistad?",
      opciones: [
        "Que estamos igual de mal de la cabeza.",
        "Que nos aguantamos cosas que nadie más aguantaría.",
        "Que somos un pack indivisible, aunque estemos a kilómetros."
      ]
    }
  ];

  let preguntaActual = 0;

  tituloCarta.textContent = "¿De verdad me conoces?";
  contenidoCarta.innerHTML = "";
  firmaCarta.textContent = "";
  corazonCarta.textContent = "♡";

  abrirVentana();

  function mostrarPregunta() {
    contenidoCarta.innerHTML = "";

    if (preguntaActual >= preguntas.length) {
      mostrarResultado();
      return;
    }

    const pregunta = preguntas[preguntaActual];

    const contenedor = document.createElement("div");
    contenedor.className = "dia12-test";

    const contador = document.createElement("p");
    contador.className = "dia12-contador";
    contador.textContent =
      `PREGUNTA ${preguntaActual + 1} DE ${preguntas.length}`;

    const progreso = document.createElement("div");
    progreso.className = "dia12-progreso";

    const progresoInterior = document.createElement("div");
    progresoInterior.className = "dia12-progreso-interior";
    progresoInterior.style.width =
      `${(preguntaActual / preguntas.length) * 100}%`;

    progreso.appendChild(progresoInterior);

    const enunciado = document.createElement("h3");
    enunciado.className = "dia12-pregunta";
    enunciado.textContent = pregunta.pregunta;

    const opciones = document.createElement("div");
    opciones.className = "dia12-opciones";

    pregunta.opciones.forEach((texto, indice) => {
      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "dia12-opcion";
      boton.textContent =
        `${String.fromCharCode(65 + indice)}. ${texto}`;

      boton.addEventListener("click", () => {
        preguntaActual++;
        mostrarPregunta();
      });

      opciones.appendChild(boton);
    });

    contenedor.append(
      contador,
      progreso,
      enunciado,
      opciones
    );

    contenidoCarta.appendChild(contenedor);
  }

  function mostrarResultado() {
    contenidoCarta.innerHTML = "";

    const resultado = document.createElement("div");
    resultado.className = "dia12-resultado";

    const medalla = document.createElement("div");
    medalla.className = "dia12-medalla";
    medalla.textContent = "🏆";

    const etiqueta = document.createElement("p");
    etiqueta.className = "dia12-contador";
    etiqueta.textContent = "RESULTADO OFICIAL";

    const porcentaje = document.createElement("div");
    porcentaje.className = "dia12-porcentaje";
    porcentaje.textContent = "99,9 %";

    const titulo = document.createElement("h3");
    titulo.className = "dia12-pregunta";
    titulo.textContent = "MEJOR AMIGA CERTIFICADA";

    const mensaje = document.createElement("p");
    mensaje.className = "dia12-mensaje";
    mensaje.textContent =
      "Enhorabuena. Has superado este test de amistad de dudosa fiabilidad. El 0,1 % restante te lo quito porque alguna vez me has llevado la contraria y eso, evidentemente, es inadmisible.";

    const premio = document.createElement("p");
    premio.className = "dia12-premio";
    premio.textContent =
      "Tu premio: seguir aguantándome toda la vida. No se admiten cambios ni devoluciones. ♡";

    const repetir = document.createElement("button");
    repetir.type = "button";
    repetir.className = "dia12-repetir";
    repetir.textContent = "REPETIR EL TEST ↻";

    repetir.addEventListener("click", () => {
      preguntaActual = 0;
      mostrarPregunta();
    });

    resultado.append(
      medalla,
      etiqueta,
      porcentaje,
      titulo,
      mensaje,
      premio,
      repetir
    );

    contenidoCarta.appendChild(resultado);
  }

  mostrarPregunta();
}

/* DÍA 13 — SONIDO DE GALLETA */

function sonidoGalleta() {
  const AudioContexto =
    window.AudioContext || window.webkitAudioContext;

  if (!AudioContexto) return;

  const audio = new AudioContexto();
  const duracion = 0.22;
  const cantidad = Math.floor(audio.sampleRate * duracion);

  const buffer = audio.createBuffer(
    1,
    cantidad,
    audio.sampleRate
  );

  const datos = buffer.getChannelData(0);

  for (let i = 0; i < cantidad; i++) {
    const tiempo = i / audio.sampleRate;

    const golpe1 = Math.exp(-tiempo * 85);

    const golpe2 = tiempo > 0.065
      ? Math.exp(-(tiempo - 0.065) * 65) * 0.7
      : 0;

    datos[i] =
      (Math.random() * 2 - 1) * (golpe1 + golpe2);
  }

  const fuente = audio.createBufferSource();
  fuente.buffer = buffer;

  const filtro = audio.createBiquadFilter();
  filtro.type = "bandpass";
  filtro.frequency.value = 2200;
  filtro.Q.value = 0.8;

  const volumen = audio.createGain();
  volumen.gain.value = 0.35;

  fuente.connect(filtro);
  filtro.connect(volumen);
  volumen.connect(audio.destination);

  fuente.start();
  fuente.onended = () => audio.close();
}

/* DÍA 13 — GALLETA DE LA FORTUNA */

function mostrarGalletaFortuna() {
  const predicciones = [
    "Los astros anuncian un reencuentro, muchas risas y alguna foto que jamás podrá salir a la luz. 📸",
    "Una persona maravillosa está pensando en ti. Pista: soy yo, obviamente. 💅",
    "Próximamente tomarás una decisión cuestionable. Pero tendrás una amiga dispuesta a apoyarte (o a reírse contigo). 😂",
    "Tu futuro incluye planes improvisados, conversaciones interminables y una amistad que no caduca. ♡"
  ];

  let indice = -1;

  tituloCarta.textContent = "Tu fortuna está escrita";
  contenidoCarta.innerHTML = "";
  firmaCarta.textContent = "";
  corazonCarta.textContent = "✦";

  abrirVentana();

  const contenedor = document.createElement("div");
  contenedor.className = "dia13-contenedor";

  const etiqueta = document.createElement("p");
  etiqueta.className = "dia13-etiqueta";
  etiqueta.textContent = "EL ORÁCULO DE NUESTRA AMISTAD";

  const intro = document.createElement("p");
  intro.className = "dia13-intro";
  intro.textContent =
    "Dicen que el destino tiene algo que contarte. ¿Te atreves a descubrirlo?";

  const galleta = document.createElement("button");
  galleta.type = "button";
  galleta.className = "dia13-galleta";
  galleta.setAttribute(
    "aria-label",
    "Romper la galleta de la fortuna"
  );

  const dibujo = document.createElement("span");
  dibujo.className = "dia13-dibujo";

  const instruccion = document.createElement("p");
  instruccion.className = "dia13-instruccion";
  instruccion.textContent =
    "PULSA PARA ROMPER LA GALLETA ♡";

  const papel = document.createElement("div");
  papel.className = "dia13-papel";
  papel.hidden = true;

  const numero = document.createElement("p");
  numero.className = "dia13-numero";

  const texto = document.createElement("p");
  texto.className = "dia13-prediccion";

  papel.append(numero, texto);

  const nota = document.createElement("p");
  nota.className = "dia13-nota";
  nota.textContent =
    "Predicciones de dudosa procedencia, pero hechas con amor.";

  function actualizarGalleta() {
    const abierta = indice >= 0;

    galleta.classList.toggle("abierta", abierta);

    dibujo.innerHTML = abierta
      ? `
        <svg viewBox="0 0 240 155" aria-hidden="true">
          <ellipse cx="120" cy="137" rx="85" ry="9"
            fill="#C6AD92" opacity=".25"/>
          <path d="M29 103 Q23 47 92 34 L115 85 L85 122
            Q52 134 29 103Z"
            fill="#D89C56" stroke="#A66B38"
            stroke-width="3"/>
          <path d="M211 103 Q218 47 148 34 L125 85
            L155 122 Q188 134 211 103Z"
            fill="#D89C56" stroke="#A66B38"
            stroke-width="3"/>
          <rect x="76" y="72" width="88" height="34"
            rx="3" fill="#FFF9E9"
            stroke="#C5A77A" stroke-width="1.5"/>
          <path d="M100 84 H140 M108 92 H132"
            stroke="#722F37" stroke-width="2"
            stroke-linecap="round"/>
        </svg>`
      : `
        <svg viewBox="0 0 240 155" aria-hidden="true">
          <ellipse cx="120" cy="137" rx="85" ry="9"
            fill="#C6AD92" opacity=".25"/>
          <path d="M31 90 Q35 29 120 31 Q207 28 210 90
            Q170 137 120 100 Q74 140 31 90Z"
            fill="#D89C56" stroke="#A66B38"
            stroke-width="3"/>
          <path d="M48 88 Q72 61 120 96 Q166 62 194 88"
            fill="none" stroke="#F6D9A2"
            stroke-width="9" stroke-linecap="round"/>
          <path d="M31 90 Q120 118 210 90"
            fill="none" stroke="#A66B38"
            stroke-width="3"/>
          <path d="M66 53 Q118 20 169 52"
            fill="none" stroke="#F5C88D"
            stroke-width="7" stroke-linecap="round"
            opacity=".7"/>
        </svg>`;

    if (abierta) {
      numero.textContent =
        `TU PREDICCIÓN N.º ${indice + 1}`;

      texto.textContent = predicciones[indice];
      papel.hidden = false;
      instruccion.textContent = "OTRA PREDICCIÓN ↻";
    } else {
      papel.hidden = true;
      instruccion.textContent =
        "PULSA PARA ROMPER LA GALLETA ♡";
    }
  }

  galleta.addEventListener("click", function () {
    sonidoGalleta();

    indice = (indice + 1) % predicciones.length;

    galleta.classList.remove("dia13-animando");
    void galleta.offsetWidth;
    galleta.classList.add("dia13-animando");

    // Reiniciar la animación del papelito.
    papel.hidden = true;
    actualizarGalleta();

    papel.style.animation = "none";
    void papel.offsetWidth;
    papel.style.animation = "";
  });

  galleta.append(dibujo, instruccion);

  contenedor.append(
    etiqueta,
    intro,
    galleta,
    papel,
    nota
  );

  contenidoCarta.appendChild(contenedor);

  actualizarGalleta();
}

/* DÍA 14 — MANUAL DE INSTRUCCIONES */

function mostrarManualVida() {
  const paginas = [
    {
      tipo: "portada",
      titulo: "Manual de instrucciones",
      texto: "Para cuando la vida se ponga un poquito cuesta arriba"
    },
    {
      tipo: "intro",
      titulo: "Antes de empezar...",
      texto: "Este manual contiene algunas instrucciones importantes para cuando la vida se ponga un poquito cuesta arriba:"
    },
    {
      tipo: "regla",
      numero: "01",
      texto: "No tomar decisiones con hambre."
    },
    {
      tipo: "regla",
      numero: "02",
      texto: "Si algo sale mal, primero siempre llorar."
    },
    {
      tipo: "regla",
      numero: "03",
      texto: "No olvidar que una tarde de café puede arreglar muchas cosas."
    },
    {
      tipo: "regla",
      numero: "04",
      texto: "No queda otra opción que reírse de una misma."
    },
    {
      tipo: "regla",
      numero: "05",
      texto: "Siempre hay tiempo para empezar otra vez."
    },
    {
      tipo: "final",
      titulo: "P. D.",
      texto: "Si nada de esto funciona, hay que joderse. Si lo prefieres, llámame, siempre voy a estar :)"
    }
  ];

  let paginaActual = 0;

  tituloCarta.textContent = "Manual de instrucciones";
  contenidoCarta.innerHTML = "";
  firmaCarta.textContent = "";
  corazonCarta.textContent = "♡";

  abrirVentana();

  const contenedor = document.createElement("div");
  contenedor.className = "dia14-contenedor";

  contenedor.innerHTML = `
    <div class="dia14-superior">
      <span>14 DE DICIEMBRE</span>
      <span class="dia14-contador"></span>
    </div>

    <div class="dia14-libro">
      <div class="dia14-pagina"></div>
    </div>

    <div class="dia14-navegacion">
      <button class="dia14-anterior" type="button">
        ← Anterior
      </button>

      <div class="dia14-puntos"></div>

      <button class="dia14-siguiente" type="button">
        Siguiente →
      </button>
    </div>
  `;

  contenidoCarta.appendChild(contenedor);

  const hoja = contenedor.querySelector(".dia14-pagina");
  const contador = contenedor.querySelector(".dia14-contador");
  const anterior = contenedor.querySelector(".dia14-anterior");
  const siguiente = contenedor.querySelector(".dia14-siguiente");
  const puntos = contenedor.querySelector(".dia14-puntos");

  function dibujarPagina() {
    const pagina = paginas[paginaActual];

    let contenido = "";

    if (pagina.tipo === "portada") {
      contenido = `
        <div class="dia14-centro">
          <div class="dia14-icono">♡</div>
          <p class="dia14-volumen">VOL. 01</p>
          <h2>${pagina.titulo}</h2>
          <div class="dia14-linea"></div>
          <p class="dia14-subtitulo">${pagina.texto}</p>
          <p class="dia14-edicion">
            EDICIÓN ESPECIAL · DICIEMBRE
          </p>
        </div>
      `;
    }

    if (pagina.tipo === "intro") {
      contenido = `
        <div class="dia14-centro">
          <div class="dia14-icono">✦</div>
          <h2>${pagina.titulo}</h2>
          <div class="dia14-linea"></div>
          <p class="dia14-texto">${pagina.texto}</p>
        </div>
      `;
    }

    if (pagina.tipo === "regla") {
      contenido = `
        <div class="dia14-centro">
          <p class="dia14-volumen">INSTRUCCIÓN N.º</p>
          <div class="dia14-numero">${pagina.numero}</div>
          <div class="dia14-linea"></div>
          <p class="dia14-texto">${pagina.texto}</p>
          <div class="dia14-icono">♡</div>
        </div>
      `;
    }

    if (pagina.tipo === "final") {
      contenido = `
        <div class="dia14-centro">
          <div class="dia14-icono">♡</div>
          <h2>${pagina.titulo}</h2>
          <div class="dia14-linea"></div>
          <p class="dia14-texto dia14-posdata">
            ${pagina.texto}
          </p>
          <p class="dia14-edicion">
            CON CARIÑO, SIEMPRE ♡
          </p>
        </div>
      `;
    }

    hoja.innerHTML = `
      <div class="dia14-encabezado">
        <span>♡</span>
        <span>UN DICIEMBRE ENTRE NOSOTRAS</span>
        <span>✦</span>
      </div>

      ${contenido}

      <div class="dia14-pie">────── ♡ ──────</div>
    `;

    hoja.classList.remove("dia14-animacion");
    void hoja.offsetWidth;
    hoja.classList.add("dia14-animacion");

    contador.textContent =
      `${paginaActual + 1} / ${paginas.length}`;

    anterior.disabled = paginaActual === 0;

    siguiente.textContent =
      paginaActual === paginas.length - 1
        ? "Releer ↻"
        : "Siguiente →";

    puntos.innerHTML = "";

    paginas.forEach((_, indice) => {
      const punto = document.createElement("span");
      punto.className = "dia14-punto";

      if (indice === paginaActual) {
        punto.classList.add("activo");
      }

      puntos.appendChild(punto);
    });
  }

  anterior.addEventListener("click", function () {
    if (paginaActual > 0) {
      paginaActual--;
      dibujarPagina();
    }
  });

  siguiente.addEventListener("click", function () {
    if (paginaActual === paginas.length - 1) {
      paginaActual = 0;
    } else {
      paginaActual++;
    }

    dibujarPagina();
  });

  dibujarPagina();
}

/* DÍA 16 — VALE DE AMISTAD */

function mostrarValeAmistad() {
  tituloCarta.textContent = "Vale por una...";
  contenidoCarta.innerHTML = "";
  firmaCarta.textContent = "";
  corazonCarta.textContent = "♡";

  abrirVentana();

  const contenedor = document.createElement("div");
  contenedor.className = "dia16-contenedor";

  contenedor.innerHTML = `
    <div class="dia16-ticket">
      <div class="dia16-superior">
        <span>UN DICIEMBRE ENTRE NOSOTRAS</span>
        <span>✦ Nº 016 ✦</span>
      </div>

      <div class="dia16-corazon">♡</div>

      <p class="dia16-etiqueta">BONO ESPECIAL PARA YAI</p>

      <h2>VALE POR UNA...</h2>

      <p class="dia16-premio">
        Tarde juntas, sin prisas
      </p>

      <div class="dia16-separador">✂ ───────────── ✂</div>

      <p class="dia16-descripcion">
        Hay cosas que no se pueden envolver en papel de regalo,
        pero sí prometer.
        <br><br>
        Por eso, hoy tienes un vale que podrás canjear cuando
        quieras por una tarde juntas. Sin prisas, sin mirar el
        reloj y con tiempo de sobra para ponernos al día.
      </p>

      <div class="dia16-condiciones">
        <strong>CONDICIONES DE USO</strong>
        <p>
          No caduca. Incluye café y cotilleos ilimitados.
          Válido incluso cuando nos separen unos cuantos kilómetros.
        </p>
      </div>

      <div class="dia16-sello">VÁLIDO PARA SIEMPRE ♡</div>

      <button class="dia16-boton" type="button">
        Guardar mi vale ♡
      </button>

      <p class="dia16-confirmacion" hidden></p>
    </div>
  `;

  contenidoCarta.appendChild(contenedor);

  const boton = contenedor.querySelector(".dia16-boton");
  const confirmacion = contenedor.querySelector(
    ".dia16-confirmacion"
  );

  boton.addEventListener("click", function () {
    boton.textContent = "♡ VALE GUARDADO ♡";
    boton.disabled = true;

    confirmacion.hidden = false;
    confirmacion.textContent =
      "¡Este vale ya es tuyo! Hazle una captura y " +
      "guárdalo para cuando nos volvamos a ver. ♡";
  });
}

/* DÍA 17 — ¿QUÉ PREFIERES? EDICIÓN SIN FILTROS */

function mostrarQuePrefieres() {
  const preguntas = [
    [
      "Que tu ex vea todos tus mensajes hablando de él",
      "Que tú puedas leer todo lo que tu ex ha dicho de ti"
    ],
    [
      "Volver con tu ex durante un mes",
      "Que tu madre lea tus últimos 50 mensajes de WhatsApp"
    ],
    [
      "Descubrir quién ha hablado mal de ti a tus espaldas",
      "Saber quién ha estado enamorado de ti en secreto"
    ],
    [
      "Mandarle un «te echo de menos» a la última persona que besaste",
      "Subir por error una captura de vuestro chat más comprometedor"
    ],
    [
      "Saber toda la verdad aunque te duela",
      "Vivir feliz sin enterarte jamás de ciertos cotilleos"
    ]
  ];

  let preguntaActual = 0;
  let respuestas = {};

  tituloCarta.textContent = "¿Qué prefieres?";
  contenidoCarta.innerHTML = "";
  firmaCarta.textContent = "";
  corazonCarta.textContent = "♡";

  abrirVentana();

  const contenedor = document.createElement("div");
  contenedor.className = "dia17-contenedor";
  contenidoCarta.appendChild(contenedor);

  function dibujarJuego() {
    const completadas = Object.keys(respuestas).length;

    if (preguntaActual === preguntas.length) {
      contenedor.innerHTML = `
        <div class="dia17-final">
          <div class="dia17-final-icono">💋</div>
          <p class="dia17-etiqueta">CONFESIONARIO COMPLETADO</p>
          <h2>Salseómetro: nivel máximo</h2>
          <p>
            Tus respuestas quedan registradas. Ahora toca comentarlas todas, porque
            algunas decisiones necesitan una explicación URGENTE. 
          </p>
          <div class="dia17-final-mensaje">
            Hay cosas que solo se pueden contar a una mejor amiga.
            Y otras que es mejor que se queden entre nosotras. 
          </div>
          <button class="dia17-reiniciar" type="button">
            Volver a jugar ↻
          </button>
        </div>
      `;

      contenedor.querySelector(".dia17-reiniciar")
        .addEventListener("click", function () {
          preguntaActual = 0;
          respuestas = {};
          dibujarJuego();
        });

      return;
    }

    const opciones = preguntas[preguntaActual];
    const elegida = respuestas[preguntaActual];

    contenedor.innerHTML = `
      <div class="dia17-cabecera">
        <span>CONFESIONARIO DE MEJORES AMIGAS</span>
        <span>${preguntaActual + 1} / ${preguntas.length}</span>
      </div>

      <div class="dia17-progreso">
        <div class="dia17-barra"
          style="width: ${(completadas / preguntas.length) * 100}%">
        </div>
      </div>

      <p class="dia17-aviso">
        Prohibido responder «las dos». Aquí hay que mojarse.
      </p>

      <h2 class="dia17-pregunta">¿Qué prefieres...?</h2>

      <div class="dia17-opciones">
        <button class="dia17-opcion" data-opcion="0"
          type="button"></button>

        <span class="dia17-o">O</span>

        <button class="dia17-opcion" data-opcion="1"
          type="button"></button>
      </div>

      <div class="dia17-navegacion">
        <button class="dia17-anterior" type="button">
          ← Anterior
        </button>

        <button class="dia17-siguiente" type="button">
          ${preguntaActual === preguntas.length - 1
            ? "Ver resultado ♡"
            : "Siguiente →"}
        </button>
      </div>
    `;

    const botones = contenedor.querySelectorAll(".dia17-opcion");

    botones.forEach(function (boton, indice) {
      boton.textContent = opciones[indice];

      if (elegida === indice) {
        boton.classList.add("seleccionada");
      }

      boton.addEventListener("click", function () {
        respuestas[preguntaActual] = indice;
        dibujarJuego();
      });
    });

    const anterior = contenedor.querySelector(".dia17-anterior");
    const siguiente = contenedor.querySelector(".dia17-siguiente");

    anterior.disabled = preguntaActual === 0;
    siguiente.disabled = elegida === undefined;

    anterior.addEventListener("click", function () {
      if (preguntaActual > 0) {
        preguntaActual--;
        dibujarJuego();
      }
    });

    siguiente.addEventListener("click", function () {
      if (respuestas[preguntaActual] !== undefined) {
        preguntaActual++;
        dibujarJuego();
      }
    });
  }

  dibujarJuego();
}
/* DÍA 18 — GOSSIP GIRL */

function mostrarGossipGirl() {
  tituloCarta.textContent = "You know you love me. XOXO";
  contenidoCarta.innerHTML = "";
  firmaCarta.textContent = "";
  corazonCarta.textContent = "";

  abrirVentana();

  const contenedor = document.createElement("div");
  contenedor.className = "dia18-contenedor";

  contenedor.innerHTML = `
    <div class="dia18-etiqueta">SPOTTED: A FRIENDSHIP FOREVER</div>

    <img
      src="blair-serena.jfif"
      alt="Blair y Serena de Gossip Girl"
      class="dia18-foto"
    >

    <div class="dia18-cita">
      “Somos hermanas, eres mi familia.
      Lo que eres tú, lo soy yo.
      No hay nada que puedas decir jamás
      que haga que te deje ir.
      Te quiero.”
    </div>

    <p class="dia18-autor">— BLAIR WALDORF</p>

    <div class="dia18-separador">♡</div>

    <p class="dia18-dedicatoria">
      Y no se me ocurre una forma más bonita
      de describir lo que significas para mí.
    </p>

    <p class="dia18-xoxo">XOXO</p>
  `;

  contenidoCarta.appendChild(contenedor);
}

/* DÍA 19 — SOPA DE LETRAS */

function mostrarSopaLetras() {
  const palabras = [
    "AGUACATE",
    "AMOR",
    "PLANES",
    "SIEMPRE",
    "DRAMAS",
    "FOFAINA",
    "BEBESITA",
    "BURRATA"
  ];

  const tamaño = 12;
  const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const tablero = Array.from(
    { length: tamaño },
    () => Array(tamaño).fill("")
  );

  const posiciones = {};
  const encontradas = new Set();

  const direcciones = [
    [0, 1],   // Horizontal
    [1, 0],   // Vertical
    [1, 1],   // Diagonal
    [1, -1],  // Diagonal inversa
    [0, -1],  // Horizontal inversa
    [-1, 0],  // Vertical inversa
    [-1, -1], // Diagonal inversa
    [-1, 1]   // Diagonal inversa
  ];

  function colocarPalabra(palabra) {
    for (let intento = 0; intento < 500; intento++) {
      const [dr, dc] = direcciones[
        Math.floor(Math.random() * direcciones.length)
      ];

      const fila = Math.floor(Math.random() * tamaño);
      const columna = Math.floor(Math.random() * tamaño);

      const casillas = [];
      let valida = true;

      for (let i = 0; i < palabra.length; i++) {
        const f = fila + dr * i;
        const c = columna + dc * i;

        if (
          f < 0 || f >= tamaño ||
          c < 0 || c >= tamaño ||
          (tablero[f][c] !== "" &&
           tablero[f][c] !== palabra[i])
        ) {
          valida = false;
          break;
        }

        casillas.push([f, c]);
      }

      if (!valida) continue;

      casillas.forEach(([f, c], i) => {
        tablero[f][c] = palabra[i];
      });

      posiciones[palabra] = casillas;
      return true;
    }

    return false;
  }

  // Generar el tablero completo.
  // Si alguna palabra no cabe, empezar de nuevo.
  let generado = false;

  for (let intento = 0; intento < 100 && !generado; intento++) {
    tablero.forEach(fila => fila.fill(""));

    Object.keys(posiciones).forEach(
      palabra => delete posiciones[palabra]
    );

    generado = palabras.every(colocarPalabra);
  }

  if (!generado) {
    tituloCarta.textContent = "Entre letras y nosotras";
    contenidoCarta.textContent =
      "No se pudo preparar el juego. Cierra el sobre y vuelve a abrirlo.";
    firmaCarta.textContent = "";
    corazonCarta.textContent = "";
    abrirVentana();
    return;
  }

  // Rellenar las casillas vacías.
  for (let f = 0; f < tamaño; f++) {
    for (let c = 0; c < tamaño; c++) {
      if (tablero[f][c] === "") {
        tablero[f][c] = letras[
          Math.floor(Math.random() * letras.length)
        ];
      }
    }
  }

  tituloCarta.textContent = "Entre letras y nosotras";
  contenidoCarta.innerHTML = "";
  firmaCarta.textContent = "";
  corazonCarta.textContent = "";

  abrirVentana();

  const contenedor = document.createElement("div");
  contenedor.className = "dia19-contenedor";

  contenedor.innerHTML = `
    <p class="dia19-intro">
      Ocho palabras. ¿Las encontrarás todas?
    </p>

    <div class="dia19-progreso">
      <span>PALABRAS ENCONTRADAS</span>
      <strong class="dia19-contador">0 / 8</strong>
    </div>

    <div class="dia19-tablero"></div>

    <p class="dia19-instrucciones">
      Selecciona las palabras arrastrando sobre las letras.
      Pueden estar en horizontal, vertical o diagonal.
    </p>

    <div class="dia19-palabras"></div>

    <div class="dia19-final" hidden>
      <div class="dia19-corazon">♡</div>
      <h2>¡Las has encontrado todas!</h2>
      <p>
        Estas son algunas de las que más nos definen,
        pero todavía nos quedan muchas por escribir. ♡
      </p>
    </div>
  `;

  contenidoCarta.appendChild(contenedor);

  const zonaTablero = contenedor.querySelector(".dia19-tablero");
  const zonaPalabras = contenedor.querySelector(".dia19-palabras");
  const contador = contenedor.querySelector(".dia19-contador");
  const final = contenedor.querySelector(".dia19-final");

  const botones = [];

  for (let f = 0; f < tamaño; f++) {
    botones[f] = [];

    for (let c = 0; c < tamaño; c++) {
      const casilla = document.createElement("div");
      casilla.className = "dia19-casilla";
      casilla.textContent = tablero[f][c];
      casilla.dataset.fila = f;
      casilla.dataset.columna = c;

      zonaTablero.appendChild(casilla);
      botones[f][c] = casilla;
    }
  }

  palabras.forEach(palabra => {
    const etiqueta = document.createElement("span");
    etiqueta.className = "dia19-palabra";
    etiqueta.textContent = palabra;
    etiqueta.dataset.palabra = palabra;
    zonaPalabras.appendChild(etiqueta);
  });

  let seleccionando = false;
  let inicio = null;
  let seleccion = [];

  function obtenerCasilla(elemento) {
    const casilla = elementоValido(elemento);

    if (!casilla) return null;

    return [
      Number(casilla.dataset.fila),
      Number(casilla.dataset.columna)
    ];
  }

  function elementоValido(elemento) {
    if (!elemento || !elemento.closest) return null;

    const casilla = elemento.closest(".dia19-casilla");

    return casilla && zonaTablero.contains(casilla)
      ? casilla
      : null;
  }

  function limpiarSeleccion() {
    zonaTablero.querySelectorAll(".seleccionando").forEach(
      casilla => casilla.classList.remove("seleccionando")
    );
  }

  function actualizarSeleccion(fin) {
    limpiarSeleccion();
    seleccion = [];

    if (!inicio || !fin) return;

    const diferenciaFila = fin[0] - inicio[0];
    const diferenciaColumna = fin[1] - inicio[1];

    const recta =
      diferenciaFila === 0 ||
      diferenciaColumna === 0 ||
      Math.abs(diferenciaFila) === Math.abs(diferenciaColumna);

    if (!recta) return;

    const pasos = Math.max(
      Math.abs(diferenciaFila),
      Math.abs(diferenciaColumna)
    );

    const pasoFila = Math.sign(diferenciaFila);
    const pasoColumna = Math.sign(diferenciaColumna);

    for (let i = 0; i <= pasos; i++) {
      const f = inicio[0] + i * pasoFila;
      const c = inicio[1] + i * pasoColumna;

      seleccion.push([f, c]);
      botones[f][c].classList.add("seleccionando");
    }
  }

  function finalizarSeleccion() {
    if (!seleccionando) return;

    seleccionando = false;

    const texto = seleccion
      .map(([f, c]) => tablero[f][c])
      .join("");

    const palabra = palabras.find(
      p => !encontradas.has(p) &&
      (texto === p || texto === p.split("").reverse().join(""))
    );

    if (palabra) {
      // Comprobar que la selección corresponde
      // a la ubicación real de la palabra.
      const elegidas = seleccion.map(
        ([f, c]) => `${f},${c}`
      );

      const reales = posiciones[palabra].map(
        ([f, c]) => `${f},${c}`
      );

      const coincide =
        elegidas.join("|") === reales.join("|") ||
        elegidas.slice().reverse().join("|") === reales.join("|");

      if (coincide) {
        encontradas.add(palabra);

        posiciones[palabra].forEach(([f, c]) => {
          botones[f][c].classList.add("encontrada");
        });

        const etiqueta = zonaPalabras.querySelector(
          `[data-palabra="${palabra}"]`
        );

        if (etiqueta) etiqueta.classList.add("encontrada");

        contador.textContent = `${encontradas.size} / 8`;

        if (encontradas.size === palabras.length) {
          final.hidden = false;
          final.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }
      }
    }

    limpiarSeleccion();
    seleccion = [];
    inicio = null;
  }

  zonaTablero.addEventListener("pointerdown", function (evento) {
    if (evento.button !== 0 && evento.pointerType === "mouse") {
      return;
    }

    const casilla = obtenerCasilla(evento.target);
    if (!casilla) return;

    evento.preventDefault();

    seleccionando = true;
    inicio = casilla;
    actualizarSeleccion(casilla);

    zonaTablero.setPointerCapture(evento.pointerId);
  });

  zonaTablero.addEventListener("pointermove", function (evento) {
    if (!seleccionando) return;

    const elemento = document.elementFromPoint(
      evento.clientX,
      evento.clientY
    );

    const casilla = obtenerCasilla(elemento);

    if (casilla) actualizarSeleccion(casilla);
  });

  zonaTablero.addEventListener("pointerup", finalizarSeleccion);
  zonaTablero.addEventListener("pointercancel", finalizarSeleccion);
}

/* DÍA 20 — HORÓSCOPO DE YAI */

function mostrarHoroscopo() {
  const predicciones = [
    {
      icono: "💘",
      categoria: "AMOR",
      planeta: "Venus",
      texto: "Venus anuncia mariposas, algún que otro drama innecesario y conversaciones que habrá que analizar con lupa. Consejo astral: si tienes que preguntarle a tu mejor amiga qué significa ese mensaje, probablemente ya tienes la respuesta."
    },
    {
      icono: "👯‍♀️",
      categoria: "AMISTAD",
      planeta: "Júpiter",
      texto: "Júpiter confirma que seguirás teniendo una amiga un poquito pesada, pero absolutamente incondicional. Se avecinan risas, abrazos eternos y recuerdos que todavía no sabemos que serán nuestros favoritos."
    },
    {
      icono: "💸",
      categoria: "DINERO",
      planeta: "Mercurio",
      texto: "Mercurio recomienda ahorrar. Sin embargo, los astros detectan una preocupante tendencia a justificar compras con la frase «me lo merezco»."
    },
    {
      icono: "🍸",
      categoria: "AVENTURAS",
      planeta: "El universo",
      texto: "El universo anuncia planes improvisados, anécdotas cuestionables y muchas risas. Hay una alta probabilidad de que algún día sea inolvidable."
    }
  ];

  const descubiertas = new Set();

  tituloCarta.textContent = "Los astros han hablado";
  contenidoCarta.innerHTML = "";
  firmaCarta.textContent = "";
  corazonCarta.textContent = "";

  abrirVentana();

  const contenedor = document.createElement("div");
  contenedor.className = "dia20-contenedor";

  contenedor.innerHTML = `
    <div class="dia20-encabezado">
      <span class="dia20-estrellas">✦ · ✧ · ✦</span>
      <p class="dia20-etiqueta">HORÓSCOPO EXCLUSIVO · 2027</p>

      <div class="dia20-circulo">
        <span class="dia20-simbolo">♍</span>
        <span class="dia20-signo">VIRGO</span>
      </div>

      <p class="dia20-subtitulo">
        Los astros han hablado… y tienen cosas que contar.
      </p>

      <span class="dia20-estrellas">✧ · ✦ · ✧</span>
    </div>

    <p class="dia20-instrucciones">
      Toca cada carta para descubrir qué te depara el 2027.
    </p>

    <div class="dia20-tarjetas"></div>

    <p class="dia20-contador">
      Predicciones descubiertas:
      <strong>0 / 4</strong>
    </p>

    <div class="dia20-final" hidden>
      <div class="dia20-final-estrellas">✦ ✧ ✦</div>
      <h2>Tu predicción más importante para 2027 ♡</h2>
      <p>
        No sé qué nos tendrá preparado el universo,
        pero hay algo que tengo clarísimo: pase lo que pase,
        espero seguir estando ahí para que nos lo contemos todo.
        Porque hay personas que son una suerte,
        independientemente de lo que digan los astros.
      </p>
      <span class="dia20-final-firma">♡</span>
    </div>
  `;

  contenidoCarta.appendChild(contenedor);

  const zonaTarjetas = contenedor.querySelector(".dia20-tarjetas");
  const contador = contenedor.querySelector(".dia20-contador strong");
  const mensajeFinal = contenedor.querySelector(".dia20-final");

  predicciones.forEach((prediccion, indice) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "dia20-tarjeta";

    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "dia20-boton";
    boton.setAttribute("aria-expanded", "false");

    const icono = document.createElement("span");
    icono.className = "dia20-icono";
    icono.textContent = prediccion.icono;

    const categoria = document.createElement("span");
    categoria.className = "dia20-categoria";
    categoria.textContent = prediccion.categoria;

    const pista = document.createElement("span");
    pista.className = "dia20-pista";
    pista.textContent = "✧ Descubre tu destino";

    boton.append(icono, categoria, pista);

    const contenido = document.createElement("div");
    contenido.className = "dia20-revelacion";
    contenido.hidden = true;

    const planeta = document.createElement("span");
    planeta.className = "dia20-planeta";
    planeta.textContent = "✦ " + prediccion.planeta + " ✦";

    const texto = document.createElement("p");
    texto.textContent = prediccion.texto;

    contenido.append(planeta, texto);
    tarjeta.append(boton, contenido);
    zonaTarjetas.appendChild(tarjeta);

    boton.addEventListener("click", function () {
      const abierta = !contenido.hidden;

      contenido.hidden = abierta;
      tarjeta.classList.toggle("abierta", !abierta);
      boton.setAttribute("aria-expanded", String(!abierta));

      pista.textContent = abierta
        ? "✧ Descubre tu destino"
        : "✧ Ocultar predicción";

      if (!abierta && !descubiertas.has(indice)) {
        descubiertas.add(indice);
        contador.textContent = descubiertas.size + " / 4";

        if (descubiertas.size === predicciones.length) {
          mensajeFinal.hidden = false;
        }
      }
    });
  });
}

/* DÍA 21 — LO QUE ADMIRO DE TI */

function mostrarLibroAdmiracion() {

  const paginas = [
    {
      numero: "01",
      titulo: "Tu fortaleza",
      texto: "Admiro la fuerza que tienes, incluso en esos momentos en los que seguramente tú no te sientes tan fuerte. Porque, aunque la vida no siempre te lo haya puesto fácil, has sabido seguir adelante. Y eso dice muchísimo de ti."
    },
    {
      numero: "02",
      titulo: "Tu forma de querer",
      texto: "Admiro la manera tan bonita que tienes de querer a las personas que forman parte de tu vida. Cómo te preocupas, cómo estás pendiente y cómo consigues que los demás se sientan queridos sin necesidad de hacer grandes cosas."
    },
    {
      numero: "03",
      titulo: "Tu ilusión",
      texto: "Admiro esa ilusión que pones en las cosas, incluso en los pequeños detalles. Esa capacidad de emocionarte, de hacer planes y de encontrar motivos para tener ganas de lo que está por venir. Ojalá nunca pierdas esa parte de ti."
    },
    {
      numero: "04",
      titulo: "Tu autenticidad",
      texto: "Admiro que seas tú, con tu personalidad, tus ideas, tus ocurrencias y tu forma de ver la vida. Que no necesites parecerte a nadie, porque precisamente todo eso que te hace diferente es lo que te hace tan especial."
    },
    {
      numero: "05",
      titulo: "Lo que haces sentir",
      texto: "Admiro la facilidad que tienes para hacer sentir bien a los demás. Para sacar una sonrisa, acompañar o hacer que alguien se sienta un poquito mejor simplemente por tenerte cerca. Y me gustaría que supieras que conmigo también lo consigues."
    },
    {
      numero: "06",
      titulo: "Una última cosa...",
      texto: "Ojalá te mires con los mismos ojos que te veo yo.",
      final: true
    }
  ];

  let paginaActual = 0;

  tituloCarta.textContent = "Lo que admiro de ti";
  contenidoCarta.innerHTML = "";
  firmaCarta.textContent = "";
  corazonCarta.textContent = "";

  abrirVentana();

  const contenedor = document.createElement("div");
  contenedor.className = "dia21-contenedor";

  contenedor.innerHTML = `
    <div class="dia21-encabezado">
      <span class="dia21-linea"></span>
      <p class="dia21-etiqueta">UN PEQUEÑO RECORDATORIO</p>
      <p class="dia21-introduccion">
        Cinco cosas que me gustaría que nunca olvidaras de ti misma.
      </p>
    </div>

    <div class="dia21-libro">
      <div class="dia21-pagina" aria-live="polite">
        <span class="dia21-numero"></span>
        <h2 class="dia21-titulo"></h2>
        <div class="dia21-separador"></div>
        <p class="dia21-texto"></p>
      </div>
    </div>

    <div class="dia21-navegacion">
      <button type="button" class="dia21-anterior">
        ← Anterior
      </button>

      <span class="dia21-contador"></span>

      <button type="button" class="dia21-siguiente">
        Siguiente →
      </button>
    </div>

    <div class="dia21-indicadores"></div>
  `;

  contenidoCarta.appendChild(contenedor);

  const pagina = contenedor.querySelector(".dia21-pagina");
  const numero = contenedor.querySelector(".dia21-numero");
  const titulo = contenedor.querySelector(".dia21-titulo");
  const texto = contenedor.querySelector(".dia21-texto");
  const contador = contenedor.querySelector(".dia21-contador");
  const anterior = contenedor.querySelector(".dia21-anterior");
  const siguiente = contenedor.querySelector(".dia21-siguiente");
  const indicadores = contenedor.querySelector(".dia21-indicadores");

  paginas.forEach(() => {
    const punto = document.createElement("span");
    punto.className = "dia21-punto";
    indicadores.appendChild(punto);
  });

  function actualizarPagina() {
    const actual = paginas[paginaActual];

    pagina.classList.remove("dia21-animacion");
    void pagina.offsetWidth;
    pagina.classList.add("dia21-animacion");

    numero.textContent = actual.final ? "" : actual.numero;
    titulo.textContent = actual.titulo;
    texto.textContent = actual.texto;

    pagina.classList.toggle("dia21-pagina-final", !!actual.final);

    contador.textContent =
      (paginaActual + 1) + " / " + paginas.length;

    anterior.disabled = paginaActual === 0;
    siguiente.disabled = paginaActual === paginas.length - 1;

    siguiente.textContent =
      paginaActual === paginas.length - 2
        ? "Una última cosa →"
        : "Siguiente →";

    indicadores.querySelectorAll(".dia21-punto").forEach(
      (punto, indice) => {
        punto.classList.toggle(
          "activo",
          indice === paginaActual
        );
      }
    );
  }

  anterior.addEventListener("click", function () {
    if (paginaActual > 0) {
      paginaActual--;
      actualizarPagina();
    }
  });

  siguiente.addEventListener("click", function () {
    if (paginaActual < paginas.length - 1) {
      paginaActual++;
      actualizarPagina();
    }
  });

  actualizarPagina();
}

/* DÍA 22 — LOTERÍA DE NAVIDAD */

function mostrarLoteria() {

  tituloCarta.textContent = "Tu número de la suerte";
  contenidoCarta.innerHTML = "";
  firmaCarta.textContent = "";
  corazonCarta.textContent = "";

  abrirVentana();

  const contenedor = document.createElement("div");
  contenedor.className = "dia22-contenedor";

  contenedor.innerHTML = `
    <div class="dia22-encabezado">
      <span class="dia22-linea"></span>

      <p class="dia22-etiqueta">
        22 DE DICIEMBRE · LOTERÍA DE NAVIDAD
      </p>

      <h2>La suerte está echada</h2>

      <p class="dia22-intro">
        Hoy es el día de la Lotería de Navidad
        y tú también tienes un décimo esperando.
        <br><br>
        Elige un número de cinco cifras y descubre
        si la suerte está de tu lado.
      </p>
    </div>

    <div class="dia22-decimo">
      <div class="dia22-decimo-superior">
        <span>LOTERÍA DE NAVIDAD</span>
        <span>22 · 12</span>
      </div>

      <div class="dia22-decimo-centro">
        <span class="dia22-adornos">✦ · ✧ · ✦</span>

        <p>Tu número de la suerte</p>

        <div class="dia22-numero-previo">·····</div>

        <span class="dia22-serie">
          DÉCIMO EXCLUSIVO · SERIE INFINITA
        </span>

        <span class="dia22-adornos">✦ · ✧ · ✦</span>
      </div>

      <div class="dia22-decimo-inferior">
        <span>EDICIÓN ESPECIAL</span>
        <span>2026</span>
      </div>
    </div>

    <div class="dia22-formulario">
      <label for="dia22-numero">
        Introduce tu número de cinco cifras
      </label>

      <input
        id="dia22-numero"
        type="text"
        inputmode="numeric"
        maxlength="5"
        placeholder="00000"
        autocomplete="off"
      >

      <button type="button" class="dia22-comprobar" disabled>
        Comprobar premio
      </button>
    </div>

    <div class="dia22-resultado" hidden>
      <span class="dia22-resultado-etiqueta">
        DÉCIMO PREMIADO
      </span>

      <div class="dia22-numero-premiado"></div>

      <h2>¡¡¡ENHORABUENA!!!</h2>

      <p>
        Tu décimo ha resultado premiado con algo
        que no se puede comprar ni con todo el dinero
        del mundo: una amistad para toda la vida.
      </p>

      <div class="dia22-separador"></div>

      <p class="dia22-frase-final">
        Dicen que la lotería es cuestión de suerte,
        pero yo creo que a mí el gordo ya me tocó contigo. ♡
      </p>
    </div>
  `;

  contenidoCarta.appendChild(contenedor);

  const input = contenedor.querySelector("#dia22-numero");
  const boton = contenedor.querySelector(".dia22-comprobar");
  const numeroPrevio = contenedor.querySelector(".dia22-numero-previo");
  const resultado = contenedor.querySelector(".dia22-resultado");
  const numeroPremiado = contenedor.querySelector(".dia22-numero-premiado");

  // Permitir únicamente cinco cifras.
  input.addEventListener("input", function () {
    const numero = input.value.replace(/\D/g, "").slice(0, 5);

    input.value = numero;

    numeroPrevio.textContent = numero || "·····";

    boton.disabled = numero.length !== 5;

    // Ocultar el premio si cambia el número.
    resultado.hidden = true;
  });

  // Comprobar el décimo.
  boton.addEventListener("click", function () {
    const numero = input.value;

    if (!/^\d{5}$/.test(numero)) {
      return;
    }

    numeroPremiado.textContent = numero;

    resultado.hidden = false;
// Reproducir el sonido de la lotería.
const sonido = new Audio("mil-euros.mp3");
sonido.volume = 0.8;
sonido.play();
    resultado.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });
}

/* DÍA 23 — LA ÚLTIMA PISTA */

function mostrarUltimaPista() {

  tituloCarta.textContent = "La última pista";
  contenidoCarta.innerHTML = "";
  firmaCarta.textContent = "";
  corazonCarta.textContent = "";

  abrirVentana();

  const contenedor = document.createElement("div");
  contenedor.className = "dia23-contenedor";

  contenedor.innerHTML = `
    <div class="dia23-carta">

      <span class="dia23-fecha">
        23 DE DICIEMBRE
      </span>

      <div class="dia23-adorno">✧</div>

      <h2>La última pista</h2>

      <p>
        Hemos llegado a la penúltima casilla
        y espero que hayas disfrutado de cada
        pequeña sorpresa de este calendario.
      </p>

      <p>
        Hoy no hay juegos ni reglas, solo un
        aviso oficial: prepárate para mañana,
        porque el día 24 llega el gran final.
      </p>

      <p class="dia23-pregunta">
        Y ahora dime... ¿tienes alguna teoría
        de lo que puede ser? ♡
      </p>

      <button type="button" class="dia23-boton">
        Tengo una teoría...
      </button>

      <div class="dia23-teoria" hidden>

        <textarea
          class="dia23-textarea"
          placeholder="Mi teoría es..."
          maxlength="300"
          rows="3"
        ></textarea>

        <button type="button" class="dia23-enviar">
          Enviar mi teoría por WhatsApp ♡
        </button>

      </div>

      <div class="dia23-respuesta" hidden>
        <span>✧</span>

        <p>
          Mmm... interesante teoría. 🤭
          <br><br>
          ¿Habrás acertado?
          <br><br>
          Solo queda dormir una noche más
          para descubrirlo. ♡
        </p>
      </div>

    </div>
  `;

  contenidoCarta.appendChild(contenedor);

  const boton = contenedor.querySelector(".dia23-boton");
  const teoria = contenedor.querySelector(".dia23-teoria");
  const textarea = contenedor.querySelector(".dia23-textarea");
  const enviar = contenedor.querySelector(".dia23-enviar");
  const respuesta = contenedor.querySelector(".dia23-respuesta");

  // Mostrar el espacio para escribir.
  boton.addEventListener("click", function () {
    teoria.hidden = false;
    boton.hidden = true;
    textarea.focus();
  });

  // Preparar el mensaje de WhatsApp.
  enviar.addEventListener("click", function () {

    const texto = textarea.value.trim();

    if (!texto) {
      textarea.focus();
      return;
    }

    const mensaje =
      " MI TEORÍA DEL DÍA 24 🎄\n\n" +
      texto +
      "\n\n¿Habré acertado?";

    const enlace =
      "https://wa.me/?text=" + encodeURIComponent(mensaje);

    // Abrir WhatsApp con la teoría preparada.
    window.open(enlace, "_blank");

    // Mostrar el mensaje misterioso.
    teoria.hidden = true;
    respuesta.hidden = false;

  });

}

/* ===================================
   DÍA 24 — EL SENTIDO DE TODO
=================================== */

function mostrarGranFinal() {

  tituloCarta.textContent = "El sentido de todo";
  contenidoCarta.innerHTML = "";
  firmaCarta.textContent = "";
  corazonCarta.textContent = "";

  abrirVentana();

  const contenedor = document.createElement("div");
  contenedor.className = "dia24-contenedor";

  contenedor.innerHTML = `
    <!-- PRIMERA CARTA -->
    <div class="dia24-carta-inicial">

      <span class="dia24-fecha">
        24 DE DICIEMBRE · NUESTRA ÚLTIMA CARTA
      </span>

      <div class="dia24-adorno">✧</div>

      <h2>El sentido de todo</h2>

      <div class="dia24-linea"></div>

      <p>
        Y, casi sin darnos cuenta, llegamos al 24
        de diciembre, y eso implica que es el último
        día de este regalito que preparé con todo
        mi cariño.
      </p>

      <p>
        Espero que te gustara, intenté regalarte
        una sonrisa cada día, a pesar de las fechas,
        y un poquito de nosotras.
      </p>

      <p>
        Ojalá dentro de mucho recuerdes esto junto
        a mí, porque eso significará que seguirás
        a mi lado.
      </p>

      <div class="dia24-audio">
        <span class="dia24-audio-etiqueta">
          UNA CARTA PARA ESCUCHAR
        </span>

        <button type="button" class="dia24-escuchar1">
          ▶ Escuchar mi voz
        </button>
      </div>

      <button type="button" class="dia24-boton">
        Antes de terminar...
      </button>

    </div>

    <!-- MENSAJE FINAL -->
    <div class="dia24-carta-final" hidden>

      <span class="dia24-fecha">
        UNA ÚLTIMA COSA...
      </span>

      <div class="dia24-adorno">✧</div>

      <h2>Feliz Navidad, mi amor.</h2>

      <div class="dia24-linea"></div>

      <p>
        Gracias por formar parte de mi vida y seguir
        teniéndote cerca día tras día.
      </p>

      <p class="dia24-sorpresa">
        Eso sí... ¡TODAVÍA QUEDA UNA ÚLTIMA SORPRESA!
      </p>

      <p class="dia24-secreto">
        Pero esa no se abre aquí.
      </p>

      <p class="dia24-teamo">
        TE AMO
      </p>

      <div class="dia24-audio">
        <span class="dia24-audio-etiqueta">
          UN ÚLTIMO MENSAJE PARA TI
        </span>

        <button type="button" class="dia24-escuchar2">
          ▶ Escuchar mi último mensaje
        </button>
      </div>

    </div>
  `;

  contenidoCarta.appendChild(contenedor);

  const cartaInicial = contenedor.querySelector(
    ".dia24-carta-inicial"
  );

  const cartaFinal = contenedor.querySelector(
    ".dia24-carta-final"
  );

  const boton = contenedor.querySelector(".dia24-boton");

  const botonAudio1 = contenedor.querySelector(
    ".dia24-escuchar1"
  );

  const botonAudio2 = contenedor.querySelector(
    ".dia24-escuchar2"
  );

  // LOS DOS AUDIOS EN FORMATO M4A

  const audio1 = new Audio("audio24-parte1.m4a");
  const audio2 = new Audio("audio24-parte2.m4a");

  audio1.preload = "auto";
  audio2.preload = "auto";

  // BOTONES DE REPRODUCCIÓN

  function prepararAudio(audio, botonAudio, textoInicial) {

    function actualizarBoton() {
      if (!audio.paused) {
        botonAudio.textContent = "Ⅱ Pausar audio";
      } else if (audio.ended) {
        botonAudio.textContent = "↻ Volver a escuchar";
      } else if (audio.currentTime > 0) {
        botonAudio.textContent = "▶ Continuar escuchando";
      } else {
        botonAudio.textContent = textoInicial;
      }
    }

    botonAudio.addEventListener("click", function () {

      if (!audio.paused) {
        audio.pause();
      } else {

        if (audio.ended) {
          audio.currentTime = 0;
        }

        audio.play().catch(function () {
          botonAudio.textContent = textoInicial;
        });
      }

    });

    audio.addEventListener("play", actualizarBoton);
    audio.addEventListener("pause", actualizarBoton);
    audio.addEventListener("ended", actualizarBoton);

    audio.addEventListener("error", function () {
      botonAudio.textContent = "Audio no disponible";
    });

    return actualizarBoton;
  }

  prepararAudio(
    audio1,
    botonAudio1,
    "▶ Escuchar mi voz"
  );

  prepararAudio(
    audio2,
    botonAudio2,
    "▶ Escuchar mi último mensaje"
  );

  // PRIMER AUDIO: AL ABRIR EL SOBRE

  audio1.play().catch(function () {
    // Si el navegador bloquea la reproducción,
    // Yai puede pulsar el botón de escuchar.
  });

  // SEGUNDO AUDIO: AL PULSAR EL BOTÓN

  boton.addEventListener("click", function () {

    // Detener el primer audio.
    audio1.pause();
    audio1.currentTime = 0;

    // Iniciar el segundo audio inmediatamente
    // desde el clic para evitar bloqueos.
    audio2.currentTime = 0;

    audio2.play().catch(function () {
      // Yai podrá reproducirlo manualmente.
    });

    // Transición visual.
    cartaInicial.classList.add("dia24-saliendo");

    setTimeout(function () {

      cartaInicial.hidden = true;
      cartaFinal.hidden = false;

      cartaFinal.classList.add("dia24-entrando");

      contenidoCarta.scrollTop = 0;

    }, 450);

  });

}

    // ==========================================
    // CONTROL DE FECHAS
    // ==========================================

    function diaDisponible(dia) {
        if (
            MODO_PRUEBA &&
            DIAS_DE_PRUEBA.includes(dia)
        ) {
            return true;
        }

        const partes =
            new Intl.DateTimeFormat("en-GB", {
                timeZone: "Europe/Madrid",
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }).formatToParts(new Date());

        const valores = {};

        partes.forEach(function (parte) {
            valores[parte.type] =
                Number(parte.value);
        });

        const anio = valores.year;
        const mes = valores.month;
        const diaActual = valores.day;

        if (anio > 2026) return true;
        if (anio < 2026) return false;
        if (mes < 12) return false;

        return dia <= diaActual;
    }

    // ==========================================
    // CREACIÓN DE LOS 24 SOBRES
    // ==========================================

    sobres.innerHTML = "";

    for (let dia = 1; dia <= 24; dia++) {
        const sobre = document.createElement("button");

        sobre.type = "button";
        sobre.className = "sobre";

        sobre.setAttribute(
            "aria-label",
            "Abrir sobre del día " + dia
        );

        sobre.innerHTML = `
            <div class="solapa"></div>
            <span class="sello">${dia}</span>
        `;

        sobre.addEventListener("click", function () {
            ultimoSobre = sobre;

            if (!diaDisponible(dia)) {
                mostrarCarta(
                    "Todavía no es el momento",
                    "Este sobre tiene que esperar hasta el " +
                    dia +
                    " de diciembre. ¡No vale adelantarse!",
                    false
                );
                return;
            }

            const mensaje = mensajes[dia];

            if (!mensaje) {
                mostrarCarta(
                    "Día " + dia,
                    "Este sobre está esperando su sorpresa especial.",
                    false
                );
                return;
            }

            switch (mensaje.tipo) {
                case "preguntas":
                    mostrarPreguntas();
                    break;

                case "vale":
                    mostrarVale();
                    break;

                case "recuerdo":
                    mostrarRecuerdo();
                    break;

                case "cancion":
                    mostrarCancion();
                    break;

                case "juego-imagenes":
                    mostrarJuegoImagenes();
                    break;

                case "carta-desplegable":
                    mostrarCartaDesplegable();
                    break;

                case "capsula-tiempo":
                    mostrarCapsulaTiempo();
                    break;
case "test-amistad":
  mostrarTestAmistad();
  break;
  case "galleta-fortuna":
  mostrarGalletaFortuna();
  break;
  case "manual-vida":
  mostrarManualVida();
  break;
  case "vale-amistad":
  mostrarValeAmistad();
  break;
  case "que-prefieres":
  mostrarQuePrefieres();
  break;
  case "gossip-girl":
  mostrarGossipGirl();
  break;
  case "sopa-letras":
  mostrarSopaLetras();
  break;
  case "horoscopo":
  mostrarHoroscopo();
  break;
  case "libro-admiracion":
  mostrarLibroAdmiracion();
  break;
  case "loteria":
  mostrarLoteria();
  break;
  case "ultima-pista":
  mostrarUltimaPista();
  break;
  case "gran-final":
  mostrarGranFinal();
  break;
                default:
                    mostrarCarta(
                        mensaje.titulo,
                        mensaje.texto,
                        true
                    );
            }
        });

        sobres.appendChild(sobre);
    }

    // ==========================================
    // NAVEGACIÓN
    // ==========================================

    comenzar.addEventListener("click", function () {
        portada.style.display = "none";
        calendario.hidden = false;

        window.scrollTo(0, 0);
    });

    volver.addEventListener("click", function () {
        calendario.hidden = true;
        portada.style.display = "flex";

        window.scrollTo(0, 0);
    });

    // ==========================================
    // CERRAR CARTAS
    // ==========================================

    cerrarBoton.addEventListener(
        "click",
        cerrarCarta
    );

    ventana.querySelector(".fondo-carta")
        .addEventListener("click", cerrarCarta);

    document.addEventListener("keydown", function (evento) {
        if (
            evento.key === "Escape" &&
            !ventana.hidden
        ) {
            cerrarCarta();
        }
    });

});
