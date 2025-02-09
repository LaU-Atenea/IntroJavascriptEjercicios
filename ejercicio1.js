// Primer ejercicio resuelto con el objeto usuario

const usuario = {
    nombre: 'Pepe',
    apellido: 'Plaza',
    modulos: {
        nombre: 'Node.js',
        fecha: '2025-03-10',
        temas: ['Node.js y V8', 'NPM y nodemon', 'Repaso de JavaScript', 'Javascript en Node', 'Express y MVC', 'API REST y HTT']
    },
    {
        nombre: 'Git',
        fecha: '2025-01-07',
        temas: ['Introduccion al curso', 'Git en Windows', 'diff y patch', 'Intro a Git', 'Deshacer lo hecho', 'Deshacer lo deshecho', 'Ramas', 'Merging', 'Nodos', 'Conflictos', 'Repos remotos', 'Sourcetree', 'Rebase', 'Eliminar del repo', 'Extras', 'Despedida']
    },
    {
        nombre: 'React',
        fecha: '2025-05-12',
        temas: ['React y Virtual DOM', 'Componentes y Hooksl', 'Rutas con React Router', 'Componentes y Hooksl', 'SPA y Herramientas']
    },
    busquedaActiva: true
  };

console.log(usuario.modulos[2].fecha);


