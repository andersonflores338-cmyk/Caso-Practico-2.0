/* =========================
   NAVEGACIÓN ENTRE SECCIONES
========================= */
function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.add('oculto');
    });
    document.getElementById(id).classList.remove('oculto');
}

/* =========================
   EVENTOS
========================= */
function guardarEvento() {
    const titulo = document.getElementById("tituloEvento").value;
    const invitados = document.getElementById("invitadosEvento").value;
    const fecha = document.getElementById("fechaEvento").value;
    const zona = document.getElementById("zonaEvento").value;
    const descripcion = document.getElementById("descripcionEvento").value;
    const lugar = document.getElementById("lugarEvento").value;

    if (titulo === "" || fecha === "") {
        alert("Complete al menos el título y la fecha del evento.");
        return;
    }

    const lista = document.getElementById("listaEventos");

    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${titulo}</strong><br>
        <b>Invitados:</b> ${invitados}<br>
        <b>Fecha y hora:</b> ${fecha}<br>
        <b>Zona horaria:</b> ${zona}<br>
        <b>Lugar:</b> ${lugar}<br>
        <b>Descripción:</b> ${descripcion}
        <hr>
    `;

    lista.appendChild(li);

    // Limpiar campos
    document.getElementById("tituloEvento").value = "";
    document.getElementById("invitadosEvento").value = "";
    document.getElementById("fechaEvento").value = "";
    document.getElementById("zonaEvento").value = "";
    document.getElementById("descripcionEvento").value = "";
    document.getElementById("lugarEvento").value = "";
}

/* =========================
   UBICACIONES
========================= */
function guardarUbicacion() {
    const titulo = document.getElementById("tituloUbicacion").value;
    const direccion = document.getElementById("direccionUbicacion").value;
    const coordenadas = document.getElementById("coordenadasUbicacion").value;

    if (titulo === "" || direccion === "") {
        alert("Complete el título y la dirección de la ubicación.");
        return;
    }

    const lista = document.getElementById("listaUbicaciones");

    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${titulo}</strong><br>
        <b>Dirección:</b> ${direccion}<br>
        <b>Coordenadas:</b> ${coordenadas}
        <hr>
    `;

    lista.appendChild(li);

    document.getElementById("tituloUbicacion").value = "";
    document.getElementById("direccionUbicacion").value = "";
    document.getElementById("coordenadasUbicacion").value = "";
}

/* =========================
   CONTACTOS
========================= */
function guardarContacto() {
    const saludo = document.getElementById("saludoContacto").value;
    const nombre = document.getElementById("nombreContacto").value;
    const cedula = document.getElementById("cedulaContacto").value;
    const correo = document.getElementById("correoContacto").value;
    const telefono = document.getElementById("telefonoContacto").value;

    if (nombre === "" || correo === "") {
        alert("Complete al menos el nombre y el correo del contacto.");
        return;
    }

    const lista = document.getElementById("listaContactos");

    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${saludo} ${nombre}</strong><br>
        <b>Cédula:</b> ${cedula}<br>
        <b>Correo:</b> ${correo}<br>
        <b>Teléfono:</b> ${telefono}
        <hr>
    `;

    lista.appendChild(li);

    document.getElementById("saludoContacto").value = "";
    document.getElementById("nombreContacto").value = "";
    document.getElementById("cedulaContacto").value = "";
    document.getElementById("correoContacto").value = "";
    document.getElementById("telefonoContacto").value = "";
}

