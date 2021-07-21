document.getElementById('button').addEventListener('click', () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
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
