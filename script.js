const materias = document.querySelectorAll('.materia');
const infoBox = document.getElementById('info-box');

materias.forEach(materia => {
    materia.addEventListener('click', () => {
        infoBox.textContent = materia.getAttribute('data-info');
        infoBox.style.display = 'block';
    });
});
