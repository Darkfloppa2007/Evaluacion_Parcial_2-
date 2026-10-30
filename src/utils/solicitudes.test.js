import { describe, test, expect } from "vitest"; 
import { validarSolicitud, filtrarSolicitudes, avanzarEstado } from "./Solicitudes";

const solicitudes = [

    {id: 1, candidato: "Ana Torres", estado: "Pendiente"},
    {id: 2, candidato: "Diego Soto", estado: "Pendiente"},
    {id: 3, candidato: "Camila Ruiz", estado: "Pendiente"}
];

describe("Test de Solicitudes", () => {

    test("Acepta una solicitud correcta", () => {
        expect(validarSolicitud("Ana Torres", "Analista")).toBe(true);
    });

    test("Rechaza una solicitud con campos vacíos", () => {
        expect(validarSolicitud("", "Analista")).toBe(false);
    });

    test("Filtra solicitudes por nombre", () => {
        const resultado = filtrarSolicitudes(
            solicitudes, "ana", "Todos"
        );
        expect(resultado.length).toBe(1);
        expect(resultado[0].candidato).toBe("Ana Torres");
    })

    test("Filtra solicitudes por estado pendiente", () => {
        const resultado = filtrarSolicitudes(
           solicitudes, "", "Pendiente" 
        );
        expect(resultado.length).toBe(3);
    });

    test("Comprobar avance de estado", () => {
        expect(avanzarEstado("Pendiente")).toBe("En proceso");
    });

});