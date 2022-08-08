console.group('%c Cuadrado', 'color: green; font-size: 20px;');
//#region 
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado **2;

function calcularCuadrado(lado) {
  return {
    perimetro: lado*4,
    area: lado**2
  }
}

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado
});
//#endregion
console.groupEnd();

console.group('%c Triángulo', 'color: green; font-size: 20px;');
//#region 
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const ladoTrianguloBase=4;
const alturaTriangulo=5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) /2

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2
  }
}

function calcularAlturaTriangulo(lado1, base) {
  if(lado1 != base) {
    console.warn('Este no es un triángulo isosceles');
  } else {
    const altura = Math.sqrt((lado1**2)-((base**2)/4));
  }
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});
//#endregion
console.groupEnd();

console.group('%c Círculo', 'color: green; font-size: 20px;');
//#region 
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416;

const circunferencia = diametroCirculo * Math.PI;
const areaCirculo = (radioCirculo ** 2) * Math.PI;

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo
});

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio,2);
  return {
    circunferencia: (radio * 2) * Math.PI,
    area: radioAlCuadrado * Math.PI,
  }
}
//#endregion
console.groupEnd();

