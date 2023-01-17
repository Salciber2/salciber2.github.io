function sectionsHidden(){
    document.getElementById("contacto").style.display = 'none';
    document.getElementById("datos-personales").style.display = 'none';
    document.getElementById("conocimientos").style.display = 'none';
    document.getElementById("idioma").style.display = 'none';
    document.getElementById("estudios").style.display = 'none';
    document.getElementById("carrera-laboral").style.display = 'none';
    document.getElementById("certificados").style.display = 'none';
    console.log('hola hidden')
}

function sectionsShow(){
    document.getElementById("contacto").style.display = 'block';
    document.getElementById("datos-personales").style.display = 'block';
    document.getElementById("conocimientos").style.display = 'block';
    document.getElementById("idioma").style.display = 'block';
    document.getElementById("estudios").style.display = 'block';
    document.getElementById("carrera-laboral").style.display = 'block';
    document.getElementById("certificados").style.display = 'block';
}

function sectionShow(id){
    document.getElementById(id).style.display = 'block';
}

// NAV

document.getElementById('show-all').addEventListener(
    'click', function () {
        sectionsShow();
    }
)

document.getElementById('show-contacto').addEventListener(
    'click', function () {
        sectionsHidden();
        sectionShow('contacto');
    }
)

document.getElementById('show-datos-personales').addEventListener(
    'click', function () {
        sectionsHidden();
        sectionShow('datos-personales');
    }
)

document.getElementById('show-conocimientos').addEventListener(
    'click', function () {
        sectionsHidden();
        sectionShow('conocimientos');
    }
)

document.getElementById('show-idioma').addEventListener(
    'click', function () {
        sectionsHidden();
        sectionShow('idioma');
    }
)

document.getElementById('show-estudios').addEventListener(
    'click', function () {
        sectionsHidden();
        sectionShow('estudios');
    }
)

document.getElementById('show-carrera-laboral').addEventListener(
    'click', function () {
        sectionsHidden();
        sectionShow('carrera-laboral');
    }
)

document.getElementById('show-certificados').addEventListener(
    'click', function () {
        sectionsHidden();
        sectionShow('certificados');
    }
)

document.getElementById('up').addEventListener(
    'click', function () {
        window.scrollTo(0, 0);
    }
)