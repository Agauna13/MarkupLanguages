
function mostrarContenido(id) {
    // Ocultar todos los elementos con la clase 'contenido'
    var elementosContenido = document.getElementsByClassName('contenido');
    for (var i = 0; i < elementosContenido.length; i++) {
        elementosContenido[i].classList.remove('visible');
    }

    // Mostrar el elemento con el ID correspondiente
    var elementoMostrar = document.getElementById(id);
    if (elementoMostrar) {
        elementoMostrar.classList.add('visible');
    }
}


// 1- Escriu un programa que mostri els números del 10 a l’1 en la consola (console.log) i a la pàgina
function contador(){
    let array = [];
    for(let i = 10; i > -1; i--) {
        array.push(i);
    }
    document.getElementById("resultado1").innerHTML = array;
}

/*2- Escriu amb un programa que demani dos números i mostri el més gran en la consola
console.log) i a la pàgina web (document.write).*/

function comparador(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let mayor = n1>n2 ? document.getElementById("resultado2").innerHTML = n1 : document.getElementById("resultado2").innerHTML = n2;

}


/*3- Escriu un programa que demani dos números i mostri la suma dels dos en la consola
(console.log) i a la pàgina web (document.write).*/
function suma(){
    let n3 = parseInt(document.getElementById("n3").value);
    let n4 = parseInt(document.getElementById("n4").value);
    let sum = n3 + n4;
    document.getElementById("resultado3").innerHTML = sum;
}

/*4- Escriu un programa que demani el teu nom, la teva edat, la teva estatura i el teu estat civil
(casat o solter). Després ha de mostrar aquestes dades en una mateixa línia si l'estat civil és
casat, i en columna si l'estat civil és solter. (resultat per consola i a la pàgina web
(document.write)).*/

function soltero(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let estadoCivil = document.getElementById("estadoCivil").value;
    let edad = document.getElementById("edad").value;
    let estatura = document.getElementById("estatura").value;

    let estado = estadoCivil === 'soltero' ? document.getElementById("resultado1").innerHTML = "hahaha pringao" : document.getElementById("resultado1").innerHTML = "pobrecito";

}

//Escriu un programa que demani una paraula i retorni el nombre de caràcters que té la paraula.

function cuentaLetras(){
    let palabra = document.getElementById("palabra").value;
    document.getElementById("resultado5").innerHTML = "La palabra tiene " + palabra.length + " letras.";
}
















