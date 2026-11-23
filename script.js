document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(elemento => {
    if (window.bootstrap) bootstrap.Tooltip.getOrCreateInstance(elemento);
});
const formulario = document.querySelector('form');
if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        let aviso = document.getElementById('respuestaSuscripcion');
        if (!aviso) {
            aviso = document.createElement('div');
            aviso.id = 'respuestaSuscripcion';
            aviso.className = 'alert alert-success mt-3';
            aviso.setAttribute('role', 'status');
            formulario.after(aviso);
        }
        aviso.textContent = 'Formulario completado. Esta es una demostración académica; no se enviaron ni guardaron datos.';
        formulario.reset();
    });
}
