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

  console.log(creaRuta(input1)); // Resultado con console.log: /Downloads/Videos/capture.mp4
  
  const input2 = [
    'CodinGame',
    'python',
    'py',
  ];

  console.log(creaRuta(input2)); // Resultado con console.log: /CodinGame/python.py
  
  const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py'
  ]

  console.log(creaRuta(input3)); // Resultado con console.log: /programming/languages/easy/beginner/useful/pythonstuff.py

  //Ejercicio 3.2: Crea una función para que con estos datos de entrada se produzca los siguientes resultados:
 // Se comentó en clase que en la segunda y tercera yourFunction, los parámetros de entrada son secondInput y thirdInput, así que los he cambiado:

  const input = 10;

  const ponGuion = (input) => {
    
    const digits = input.toString().split('').join('-');
  
    return digits;
  };

  console.log(ponGuion(input)); // Resultado con console.log: '1-0'

  const secondInput = 1;

  console.log(ponGuion(secondInput)); // Resultado con console.log: '1'

  const thirdInput = 11234;

  console.log(ponGuion(thirdInput)); // Resultado con console.log: '1-1-2-3-4'


//Ejercicio 3.3: Crea una función para que con estos datos de entrada se produzca los siguientes resultados:

const input_1 = 'string';

const palabra_Longitud_AlReves = (input) => {
    
    const longitud = input.length;
    
    const alReves = input.split('').reverse().join('');
    
    return `${longitud} ${alReves}`;
  };

console.log(palabra_Longitud_AlReves(input_1)); // Resultado con console.log: '6 gnirts'

const input_2 = 'variable';

console.log(palabra_Longitud_AlReves(input_2)); // Resultado con console.log: '8 elbairav'

const input_3 = 'pointer';

console.log(palabra_Longitud_AlReves(input_3)); // Resultado con console.log: '7 retniop'










