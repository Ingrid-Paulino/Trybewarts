document.getElementById('button').addEventListener('click', () => {
  const eMail = document.getElementById('email');
  const password = document.getElementById('password');
  if (eMail.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

document.getElementById('agreement').addEventListener('click', () => {
  const botao = document.getElementById('submit-btn');
  if (document.getElementById('agreement').checked === true) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
});

const textAreaDesc = document.querySelector('#textarea');
textAreaDesc.addEventListener('keyup', () => {
  const inputLength = textAreaDesc.value.length;
  const maxChars = 500;

  if (inputLength >= maxChars) {
    alert('Limite de carácteres excedido');
  }
  const resto = (maxChars) - inputLength;
  document.querySelector('#counter').innerHTML = resto;
});

const form = document.querySelector('#evaluation-form');
function nameBL() {
  const nameInput = document.querySelector('#input-name');
  const sobrenomeInput = document.querySelector('#input-lastname');
  const resName = nameInput.value;
  const resSobrenome = sobrenomeInput.value;
  const nameP = document.createElement('p');
  nameP.innerText = `Nome: ${resName} ${resSobrenome}`;
  sobrenomeInput.remove();
  form.appendChild(nameP);
}

function email() {
  const emailInput = document.querySelector('#input-email');
  const resEmail = emailInput.value;
  const emailP = document.createElement('p');
  emailP.innerText = `Email: ${resEmail}`;
  form.appendChild(emailP);
}

function house() {
  const houseInput = document.querySelector('#house');
  const reshouse = houseInput.value;
  const houseP = document.createElement('p');
  houseP.innerText = `Casa: ${reshouse}`;
  form.appendChild(houseP);
}

function family() {
  const familyInput = document.querySelector('input[name=family]:checked');
  const resfamily = familyInput.value;
  const familyP = document.createElement('p');
  familyP.innerText = `Família: ${resfamily}`;
  form.appendChild(familyP);
}

const materiasSelecionadas = [];
function materias() {
  const checkbox = document.getElementsByName('content-checkbox');

  for (let i = 0; i < checkbox.length; i += 1) {
    if (checkbox[i].checked) {
      materiasSelecionadas.push(` ${checkbox[i].value}`);
    }
  }
  const materiaP = document.createElement('p');
  materiaP.innerText = `Matérias: ${materiasSelecionadas}`;
  form.appendChild(materiaP);
}

function rate() {
  const rateInput = document.querySelector('input[name=rate]:checked');
  const resrate = rateInput.value;
  const rateP = document.createElement('p');
  rateP.innerText = `Avaliação: ${resrate}`;
  form.appendChild(rateP);
}

function textArea() {
  const textAreaInput = document.querySelector('#textarea');
  const restextarea = textAreaInput.value;
  const textAreaP = document.createElement('p');
  textAreaP.innerText = `Observações: ${restextarea}`;
  textAreaInput.remove();
  form.appendChild(textAreaP);
}

const btn = document.querySelector('#submit-btn');
btn.addEventListener('click', (event) => {
  const formDelet = document.querySelector('#remove');
  event.preventDefault();
  nameBL();
  email();
  house();
  family();
  materias();
  rate();
  textArea();
  formDelet.remove();
});
