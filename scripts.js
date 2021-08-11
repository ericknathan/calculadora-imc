const result = document.getElementById('result');
const button = document.getElementById('calculate');

button.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  
  if (name.length != 0 && height.length != 0 && weight.length != 0) {
    const imc = weight / (height * height);
    result.innerHTML = `${name}, seu IMC é ${imc.toFixed(2)} e você está ${getStatus(imc)}`;
  }
});

function getStatus(imc) {
  let status;
  if (imc < 18.5) status = 'abaixo do peso.';
  else if (imc < 24.9) status = 'com peso ideal. Parabéns!!!';
  else if (imc < 24.9) status = 'acima do peso.';
  else if (imc < 29.9) status = ' com obesidade de grau I.';
  else if (imc < 34.9) status = 'com obesidade de grau II.';
  else status = 'com obesidade de grau III.';

  return status;
}
