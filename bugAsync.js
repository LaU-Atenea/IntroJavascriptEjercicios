//Ejercicio 5: Arreglar bug de asincronía

/*
Tenemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario
y nos dice que está usando el id correcto el 1. Pero que siempre le da undefined. Nos ha
pasado el código que tenemos que revisar y arreglar:
*/

/*
Explicación del bug: el cliente nos ha pasado en el código una función que al tener setTimeout,
indica que es asíncrona. Hay que hacer que la función devuelva un promise. Y luego en la llamada a la función,
incluyo un .then(). De esta forma se evita que salga el resultado como undefined como le pasaba al cliente,
y se visualiza correctamente.
*/

function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (id === 1) {
               const usuario = { id: 1, nombre: 'John Doe' };
               resolve(usuario);
            } 
        }, 2000);
    });
}

obtenerUsuario(1)
    .then(usuario => {
        console.log(usuario);
    }).catch(error => {
        console.log(error);
    });



