
let tasaConversion = 4559;
const pesosInput = document.getElementById('pesos');
const dolaresInput = document.getElementById('dolares');
pesosInput.addEventListener('input', convertirPesosADolares);
dolaresInput.addEventListener('input', convertirDolaresAPesos);
function convertirPesosADolares() {
  const cantidadPesos = pesosInput.value;
  const cantidadDolares = (cantidadPesos / tasaConversion).toFixed(2);
  dolaresInput.value = cantidadDolares;
}


function convertirDolaresAPesos() {
  const cantidadDolares = dolaresInput.value;
  const cantidadPesos = (cantidadDolares * tasaConversion).toFixed(2);
  pesosInput.value = cantidadPesos;
}