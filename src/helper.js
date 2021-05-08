
// obtiene la diferencia de años
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

// calcula el total a pagar segun la marca
export function calcularMarca(marca) {
    let incremento;

    switch(marca) {
        case 'SEAT':
            incremento = 1.05;
            break;
        case 'BMW':
            incremento = 1.30;
            break;
        case 'FORD':
            incremento = 1.15;
            break
        default:
            break;
    }

    return incremento;
}

// Calcula el tipo de seguro
export function obtenerPlan( plan ) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Muestra la primer letra mayuscula
export function primerMayuscula( texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}