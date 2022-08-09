function esPar(lista) {
  return !(lista.length  % 2);
}

function calcularMediana(lista) {
  lista = ordenarLista(lista);
  const listaEsPar = esPar(lista);
  if(listaEsPar) {
    const indexMitadDerecha = lista.length / 2;
    const indexMitadIzquierda = (lista.length / 2)-1;
    const mitadDerecha = lista[indexMitadDerecha];
    const mitadIzquierda = lista[indexMitadIzquierda];
    const listaMitades = [mitadIzquierda, mitadDerecha]
    const medianaPar = calcularPromedio(listaMitades);
    return medianaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaImpar = lista[indexMitadListaImpar];
    return medianaImpar;
  }
}

function calcularPromedio(lista) {

  const initialValue = 0;
  const sumWithInitial = lista.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  //console.log(sumWithInitial);

  return sumWithInitial/lista.length;

}

function ordenarLista(listaDesordenada) {
  const compare = (a, b) => a - b;
  const listaOrdenada = listaDesordenada.sort(compare);
  return listaOrdenada;
}

function ordenarListaBidimensional(listaDesordenada) {
  const compare = (a, b) => b[1] - a[1];
  const listaOrdenada = listaDesordenada.sort(compare);
  return listaOrdenada;
}

function calcularModa(lista) {
  const listaCount = {};
  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];
    (listaCount[elemento])
      ? listaCount[elemento] += 1
      : listaCount[elemento] = 1;
  }
  //console.log(listaCount);
  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimensional(listaArray);
  if(listaOrdenada[0][1] === listaOrdenada[1][1]) {
    return 'No hay moda';
  } else {
    return listaOrdenada[0][0];
  }

}

