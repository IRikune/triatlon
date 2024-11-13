import { API_URL } from "../constants/consts";

export async function fetchParticipants() {
    const response = await fetch(`${API_URL}/participants/`);
    const data = await response.json();
    return data;
}
export async function fetchDate() {
    const response = await fetch(`${API_URL}/event/`);
    const data = await response.json()
    return data
}
export function calcularDistanciaCaminando() {
    const velocidadMinima = 1; // km/h
    const velocidadMaxima = 7; // km/h
    const velocidadAleatoria = Math.random() * (velocidadMaxima - velocidadMinima) + velocidadMinima;
    const distanciaRecorrida = (velocidadAleatoria * 1000) / 3600; // m/s
    return distanciaRecorrida.toFixed(4);
}

export function calcularDistanciaRecorridaNatacion() {
    const velocidadMinima = 1; // m/s
    const velocidadMaxima = 1.72; // m/s
    const velocidadAleatoria = Math.random() * (velocidadMaxima - velocidadMinima) + velocidadMinima;
    const distanciaRecorrida = velocidadAleatoria; // m/s
    return distanciaRecorrida.toFixed(4);
}

export function calcularDistanciaCiclista() {
    const velocidadMinima = 1; // km/h
    const velocidadMaxima = 45; // km/h
    const velocidadAleatoria = Math.random() * (velocidadMaxima - velocidadMinima) + velocidadMinima;
    const distanciaRecorrida = (velocidadAleatoria * 1000) / 3600; // m/s
    return distanciaRecorrida.toFixed(4);
}
