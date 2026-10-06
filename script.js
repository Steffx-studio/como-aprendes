const boton = document.querySelector("#comenzar");
const quiz = document.querySelector("#quiz");
const pregunta = document.querySelector("#pregunta");
const respuestas = document.querySelectorAll("#respuestas button");
const progreso = document.querySelector("#progreso");
const resultado = document.querySelector("#resultado");

let puntos = {
    visual: 0,
    auditivo: 0,
    practico: 0,
    lectura: 0
};

let numeroPregunta = 0;

const preguntas = [
    {
        texto: "¿Cómo preferís estudiar algo nuevo?",
        opciones: [
            ["Ver un dibujo o ejemplo visual", "visual"],
            ["Escuchar una explicación", "auditivo"],
            ["Hacerlo y practicar", "practico"],
            ["Leer una explicación", "lectura"]
        ]
    },
    {
        texto: "Cuando tenés que recordar algo, ¿qué te ayuda más?",
        opciones: [
            ["Imaginarlo o verlo", "visual"],
            ["Repetirlo en voz alta", "auditivo"],
            ["Practicarlo varias veces", "practico"],
            ["Escribirlo o leerlo", "lectura"]
        ]
    },
    {
        texto: "En una clase, ¿qué actividad te resulta más cómoda?",
        opciones: [
            ["Mirar gráficos, imágenes o videos", "visual"],
            ["Escuchar al profesor explicar", "auditivo"],
            ["Hacer actividades o experimentos", "practico"],
            ["Tomar apuntes o leer textos", "lectura"]
        ]
    },
    {
        texto: "Si tenés que aprender a usar algo nuevo, ¿qué hacés primero?",
        opciones: [
            ["Miro cómo funciona", "visual"],
            ["Escucho cómo se hace", "auditivo"],
            ["Lo pruebo directamente", "practico"],
            ["Leo las instrucciones", "lectura"]
        ]
    },
    {
        texto: "¿Qué te ayuda más antes de una evaluación?",
        opciones: [
            ["Esquemas, mapas o colores", "visual"],
            ["Explicarme el tema en voz alta", "auditivo"],
            ["Resolver ejercicios", "practico"],
            ["Leer y resumir el contenido", "lectura"]
        ]
    }, 
    {
    texto: "Cuando estudiás un tema difícil, ¿qué preferís hacer?",
    opciones: [
        ["Buscar imágenes o ejemplos", "visual"],
        ["Escuchar una explicación", "auditivo"],
        ["Intentar resolverlo por mi cuenta", "practico"],
        ["Leerlo varias veces", "lectura"]
    ]
},
{
    texto: "¿Cómo te gusta que te expliquen algo?",
    opciones: [
        ["Con dibujos o esquemas", "visual"],
        ["Hablándome y explicándolo", "auditivo"],
        ["Mostrándome cómo hacerlo", "practico"],
        ["Con instrucciones escritas", "lectura"]
    ]
},
{
    texto: "¿Qué material usarías para repasar?",
    opciones: [
        ["Un mapa conceptual", "visual"],
        ["Un audio explicativo", "auditivo"],
        ["Ejercicios para practicar", "practico"],
        ["Un resumen escrito", "lectura"]
    ]
},
{
    texto: "Cuando algo no te sale, ¿qué hacés?",
    opciones: [
        ["Busco un ejemplo que pueda mirar", "visual"],
        ["Le pregunto a alguien que me lo explique", "auditivo"],
        ["Lo intento de otra manera", "practico"],
        ["Busco las instrucciones o teoría", "lectura"]
    ]
},
{
    texto: "¿Qué actividad te resulta más entretenida para aprender?",
    opciones: [
        ["Ver videos o animaciones", "visual"],
        ["Debatir o conversar sobre el tema", "auditivo"],
        ["Hacer experimentos o actividades", "practico"],
        ["Investigar y escribir", "lectura"]
    ]
},
{
    texto: "Si tenés que memorizar algo, ¿qué te sirve más?",
    opciones: [
        ["Usar colores y símbolos", "visual"],
        ["Decirlo en voz alta", "auditivo"],
        ["Practicarlo varias veces", "practico"],
        ["Escribirlo varias veces", "lectura"]
    ]
},
{
    texto: "¿Qué preferís encontrar en tus apuntes?",
    opciones: [
        ["Dibujos, flechas y colores", "visual"],
        ["Frases que pueda repetir", "auditivo"],
        ["Ejemplos para resolver", "practico"],
        ["Explicaciones detalladas", "lectura"]
    ]
},
{
    texto: "Cuando aprendés una habilidad nueva, ¿qué te ayuda más?",
    opciones: [
        ["Ver a alguien hacerlo", "visual"],
        ["Escuchar los pasos", "auditivo"],
        ["Hacerlo yo mismo", "practico"],
        ["Leer cómo se hace", "lectura"]
    ]
},
{
    texto: "Antes de un examen, ¿qué preferís hacer primero?",
    opciones: [
        ["Ordenar la información visualmente", "visual"],
        ["Explicar el tema en voz alta", "auditivo"],
        ["Resolver preguntas de práctica", "practico"],
        ["Leer mis apuntes", "lectura"]
    ]
},
{
    texto: "¿Qué te ayuda a entender mejor una idea complicada?",
    opciones: [
        ["Un gráfico o dibujo", "visual"],
        ["Que alguien me la explique", "auditivo"],
        ["Un ejemplo práctico", "practico"],
        ["Una explicación escrita", "lectura"]
    ]
}
];

boton.addEventListener("click", function() {
    quiz.style.display = "block";
    boton.style.display = "none";

    mostrarPregunta();
});

function mostrarPregunta() {
    pregunta.textContent = preguntas[numeroPregunta].texto;

    respuestas.forEach(function(respuesta, indice) {
        respuesta.textContent = preguntas[numeroPregunta].opciones[indice][0];
    });

    progreso.textContent = "Pregunta " + (numeroPregunta + 1) + " de " + preguntas.length;
}

respuestas.forEach(function(respuesta, indice) {
    respuesta.addEventListener("click", function() {
        const tipo = preguntas[numeroPregunta].opciones[indice][1];

        puntos[tipo]++;
        numeroPregunta++;

        if (numeroPregunta < preguntas.length) {
            mostrarPregunta();
        } else {
            mostrarResultado();
            document.querySelector("#barra-lectura").style.width = lectura + "%";
            document.querySelector("#mensaje-resultado").textContent = mensaje;
        }
    });
});

function mostrarResultado() {
    quiz.style.display = "none";
    resultado.style.display = "block";

    const total = preguntas.length;

    const visual = Math.round((puntos.visual / total) * 100);
    const auditivo = Math.round((puntos.auditivo / total) * 100);
    const practico = Math.round((puntos.practico / total) * 100);
    const lectura = Math.round((puntos.lectura / total) * 100);
    let mayor = Math.max(visual, auditivo, practico, lectura);
let mensaje = "";

if (mayor === visual) {
    mensaje = "👁️ Tu preferencia más marcada fue Visual.";
} else if (mayor === auditivo) {
    mensaje = "🎧 Tu preferencia más marcada fue Auditiva.";
} else if (mayor === practico) {
    mensaje = "🛠️ Tu preferencia más marcada fue Práctica.";
} else {
    mensaje = "📖 Tu preferencia más marcada fue de Lectura.";
}

    document.querySelector("#visual").textContent = visual;
    document.querySelector("#auditivo").textContent = auditivo;
    document.querySelector("#practico").textContent = practico;
    document.querySelector("#lectura").textContent = lectura;

    document.querySelector("#barra-visual").style.width = visual + "%";
    document.querySelector("#barra-auditivo").style.width = auditivo + "%";
    document.querySelector("#barra-practico").style.width = practico + "%";
    document.querySelector("#barra-lectura").style.width = lectura + "%";
}
const masQuizzes = document.querySelector("#mas-quizzes");

masQuizzes.addEventListener("click", function() {
    alert("🧩 Próximamente: más quizzes!");
});