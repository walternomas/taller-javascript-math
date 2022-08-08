const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  // (P * (100 - D)) / 100
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if(!price || !coupon) {
    pResult.innerHTML = 'CHANCLA por favor llena el formulario';
    return;
  }

  let discount;

  switch(coupon) {
    case 'CUPONAZO':
      discount = 80;
      break;
    case 'cuponcito':
      discount = 2;
      break;
    default:
      pResult.innerHTML = 'El cupón no es válido.';
      return;
  }

  // if(coupon === 'cuponazo') {
  //   discount = 80;
  // } else if(coupon === 'cuponcito') {
  //   discount = 5;
  // } else {
  //   pResult.innerHTML = 'El cupón no es válido.';
  //   return;
  // }

  if(discount >= 100) {
    pResult.innerHTML = 'El descuento no puede ser igual o mayor al 100%';
    return;
  }

  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = `Precio original del producto: ${price}
  Cupón de descuento: ${coupon}
  Descuento aplicado: ${discount}%

  El nuevo precio con descuento es $ ${newPrice}`;
  inputPrice.value = '';
  inputCoupon.value = '';
  inputPrice.focus();

}