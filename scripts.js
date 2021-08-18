document.querySelector('form').addEventListener('keypress', (event) => event.key == 'Enter' && showResult());

document.getElementById('calculate').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  
  if (document.querySelector('form').checkValidity()) {
    const imc = weight / (height * height);
    document.getElementById('result').textContent = `${name}, seu IMC é ${imc.toFixed(2)} e você está ${getStatus(imc)}`;
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
