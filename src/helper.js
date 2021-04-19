export function obtenerDiferenciaAnno(anno){
    return new Date().getFullYear()-anno

}


export function calcularMarca(marca){
    let incremento;

    switch(marca){
        case "SEAT":
            incremento=1.05;
            break;
        case "MERCEDES":
        incremento=1.30;
            break;
        case "BMW":
            incremento=1.30;
            break;
        case "FORD":
            incremento=1.15;
            break;


        default:
            break;
    }
    return incremento;
}
//Calcula el tipo de seguro
export function obtenerPlan(plan){
    return (plan ==="basico")
}