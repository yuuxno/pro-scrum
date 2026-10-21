const { test } = require("node:test");
const assert = require("node:assert/strict");

const {
    crearTarea,
    completarTarea,
    filtrarPendientes
} = require("./tareas");

test("crea una tarea académica pendiente", () => {
    const tarea = crearTarea(
        "Cálculo",
        "Resolver ejercicios de derivadas",
        "alta"
    );

    assert.equal(tarea.materia, "Cálculo");
    assert.equal(tarea.prioridad, "alta");
    assert.equal(tarea.completada, false);
});

test("rechaza tareas sin descripción", () => {
    assert.throws(
        () => crearTarea("Física", ""),
        /obligatorias/
    );
});

test("marca una tarea como completada", () => {
    const tarea = crearTarea(
        "Programación",
        "Practicar JavaScript"
    );

    const resultado = completarTarea(tarea);

    assert.equal(resultado.completada, true);
    assert.equal(tarea.completada, false);
});

test("filtra las tareas completadas", () => {
    const tareas = [
        crearTarea("Cálculo", "Estudiar derivadas"),
        completarTarea(
            crearTarea("Web", "Terminar HTML")
        )
    ];

    assert.equal(filtrarPendientes(tareas).length, 1);
    assert.equal(
        filtrarPendientes(tareas)[0].materia,
        "Cálculo"
    );
});
