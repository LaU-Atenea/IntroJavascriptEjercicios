// EJERCICIO 3: En estos ejercicios no tienes acceso al enunciado. debes deducir qué hacer observando los datos de entrada y el resultado:

//Ejercicio 3.1: Crea una función para que con estos datos de entrada se produzca los siguientes resultados:

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
  ]
  
  const creaRuta = (pasos) => {
    let ruta = '';

    for (let i = 0; i < pasos.length; i++) {
        if (pasos[i] === 'py' || pasos[i] === 'mp4') {
            ruta += '.' + pasos[i];
          } else {
            ruta += '/' + pasos[i];
          }
    }
    return ruta;
  };

  console.log(creaRuta(input1));
  
  const input2 = [
    'CodinGame',
    'python',
    'py',
  ];

  console.log(creaRuta(input2));
  
  const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py'
  ]

  console.log(creaRuta(input3));




