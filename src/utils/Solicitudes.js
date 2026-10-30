export function validarSolicitud(Candidato, Cargo) {
    return Candidato.trim() !== "" && Cargo.trim() !== "";
}

export function filtrarSolicitudes(solicitudes, busqueda, estado) {
    return solicitudes.filter((solicitud) => {
        const nombreOk = solicitud.candidato.toLowerCase().includes(busqueda.toLowerCase());

        const estadoOk = estado === "Todos" || solicitud.estado === estado;

        return nombreOk && estadoOk;
    })
}

export function avanzarEstado(estado) {
    const estados = {
        Pendiente: "En proceso",
        "En proceso": "Finalizada",
        "Finalizada": "Finalizada"
    };
    return estados[estado];

}