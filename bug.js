/* Explicación y corrección del bug en el segundo ejercicio:
El problema de este código está en un fallo en la estructura del for, en concreto en la parte que pone i <= numeros.length.
Para que solo se sumen los números dentro del array, hay que eliminar ese = y poner: i < numeros.length.
Sino, al comprobar el resultado con un console.log(promedioNumeros), nos da un NaN.
Tras eliminar ese = sobrante, ya nos aparece en la consola el promedio correcto que es 3.
A continuación puede verse el código arreglado y que funciona correctamente:
*/


const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros [i];
    }

    const promedio = sumaTotal / numeros.length;

    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];

const promedioNumeros = calcularPromedio(listaNumeros);

console.log(promedioNumeros);