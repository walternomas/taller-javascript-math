function esPar(lista) {
  return !(lista.length  % 2);
}

function calcularMediana(lista) {
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

