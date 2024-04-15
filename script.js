const registroForm = document.getElementById('registroForm');
const listaAlumnos = document.getElementById('listaAlumnos');

registroForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const curso = document.getElementById('curso').value;

    const nuevoAlumno = document.createElement('li');
    nuevoAlumno.textContent = `Nombre: ${nombre}, Edad: ${edad}, Curso: ${curso}`;
    listaAlumnos.appendChild(nuevoAlumno);

    registroForm.reset(); // Limpiar el formulario después de registrar
});
