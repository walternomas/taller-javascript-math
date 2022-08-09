console.log(salarios);

// Analisis personal para Juanita
function encontrarPersona(personaEnBusqueda){
  return salarios.find(persona=>persona.name === personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;
  const salarios = trabajos.map(elemento=>elemento.salario);
  const medianaSalarios = PlatziMath.calcularMediana(salarios);
  return medianaSalarios;
}

// Proyección de salario de Juanita
function proyeccionPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;
  let porcentajesCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimiento / salarioPasado;
    porcentajesCrecimiento.push(porcentajeCrecimiento)
  }
  const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
  console.log({
    porcentajesCrecimiento,
    medianaPorcentajesCrecimiento
  });
  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  return nuevoSalario;
}

// Análisis empresarial
const empresas = {};
for(persona of salarios) {
  for(trabajo of persona.trabajos) {
    if(!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }

    if(!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

console.log(empresas);

function medianaEmpresaYear(nombre, year) {
  if(!empresas[nombre]) {
    console.warn('La empresa no existe.');
  } else if (!empresas[nombre][year]) {
    console.warn('La empresa no dio salarios ese año');
  } else {
    return PlatziMath.calcularMediana(empresas[nombre][year]);
  }
}

function proyeccionPorEmpresa(nombre) {
  if(!empresas[nombre]) {
    console.warn('La empresa no existe.');
  } else {
    const empresaYears = Object.keys(empresas[nombre]);
    const listaMedianaYears = empresaYears.map(year=>medianaEmpresaYear(nombre,year));

    let porcentajesCrecimiento = [];

    for (let i = 0; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i];
      const salarioPasado = listaMedianaYears[i-1];
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeCrecimiento = crecimiento / salarioPasado;
      porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length-1];
    const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
    const nuevaMediana = ultimaMediana + aumento;

    return nuevaMediana;
  }
}

// Análisis general
function medianaGeneral() {
  const listaMedianas = salarios.map(
    persona => medianaPorPersona(persona.name)
  );
  const mediana = PlatziMath.calcularMediana(listaMedianas);
  return mediana;
}

function medianaTopTen() {
  const listaMedianas = salarios.map(
    persona => medianaPorPersona(persona.name)
  );

  const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);
  
  const cantidad = listaMedianas.length / 10;
  const limite = listaMedianas.length - cantidad;

  const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

  const medianaTop10 = PlatziMath.calcularMediana(top10);
  return medianaTop10;
}