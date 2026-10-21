const PRIORIDADES = ["baja", "media", "alta"];

function crearTarea(materia, descripcion, prioridad = "media") {
    if (!materia.trim() || !descripcion.trim()) {
        throw new Error("La materia y la descripción son obligatorias");
    }

    if (!PRIORIDADES.includes(prioridad)) {
        throw new Error("La prioridad debe ser baja, media o alta");
    }

    return {
        materia,
        descripcion,
        prioridad,
        completada: false
    };
}

function completarTarea(tarea) {
    return { ...tarea, completada: true };
}

function filtrarPendientes(tareas) {
    return tareas.filter(tarea => !tarea.completada);
}

module.exports = {
    crearTarea,
    completarTarea,
    filtrarPendientes
};
