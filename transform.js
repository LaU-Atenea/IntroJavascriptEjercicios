/*Ejercicio 4: Transformaciones con map y filter.
Nuestro cliente tiene un array de datos y nos ha pedido que saquemos la siguiente
información. El listado de los desarrolladores que tengan como habilidad “JavaScript” y el
listado de los proyectos en el que sus desarrolladores trabajan.

Estos son los datos:
*/

const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto: 1'},
            { id: 2, nombre: 'Proyecto: 2'}
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto: 3'},
            { id: 4, nombre: 'Proyecto: 4'}
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto: 5'},
            { id: 6, nombre: 'Proyecto: 6'}
        ]
    },
];

// A continuación pueden verse las operaciones que he realizado para obtener estos 2 listados:

/* Listado 1: desarrolladoresJavascript */
/*Resultado obtenido con console.log:
[
    {
        "id": 1,
        "nombre": "Juan",
        "habilidades": ["JavaScript", "HTML", "CSS"],
        "proyectos": [
            { "id": 1, "nombre": "Proyecto 1"},
            { "id": 2, "nombre": "Proyecto 2"}
        ]
    }
]
*/

// Operaciones que realizo para poder ver el resultado anterior por consola usando filter:

const listaJS = (datos) => datos.filter(datos => datos.habilidades.includes('JavaScript'));

console.log(listaJS(datos));



/* Listado 2: nombresProyectos */
//Resultado obtenido con console.log: ['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5', 'Proyecto 6', ]

// Operaciones que realizo para poder ver el resultado anterior por consola usando map:

const totalProyectos = (datos) => datos.map(dato => dato.proyectos)
                            .map(proyectos => proyectos.map(proyecto => proyecto.nombre))
                            .reduce((acc, proyectos) => acc.concat(proyectos), []);

console.log(totalProyectos(datos));
