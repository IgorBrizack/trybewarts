function emailPasswordVerify() {
  const login = document.getElementById('login');
  const senha = document.getElementById('senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const button = document.getElementById('submit-button1');
button.addEventListener('click', emailPasswordVerify);

function enableDisable() {
  const buttonStatus = document.getElementById('agreement');
  const submitEnable = document.getElementById('submit-btn');

  if (buttonStatus.checked === true) {
    submitEnable.disabled = false;
  } else {
    submitEnable.disabled = true;
  }
}

const buttonStatus1 = document.getElementById('agreement');
buttonStatus1.addEventListener('click', enableDisable);

function attCounter() {
  const textAreaElement = document.getElementById('textarea');
  const paragraphCounter = document.getElementById('counter');
  paragraphCounter.innerText = 500 - textAreaElement.value.length;
}
attCounter();

const textAreaElement = document.getElementById('textarea');
textAreaElement.addEventListener('keydown', attCounter);

function getAvaliacao() {
  const rate = document.getElementsByName('rate');
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked === true) {
      return `Avaliação: ${rate[index].value}`;
    }
  }
}

function getMaterias() {
  const subjectElements = document.getElementsByClassName('subject');
  let aux = '';
  for (let index = 0; index < subjectElements.length - 1; index += 1) {
    if (subjectElements[index].checked === true) {
      aux += `${subjectElements[index].value}, `;
    }
  }
  return `Matérias: ${aux}`;
}

function getFamilia() {
  const family1 = document.getElementById('familia-frontend');
  const family2 = document.getElementById('backend');
  const family3 = document.getElementById('fullStack');

  if (family1.checked === true) {
    return `Família: ${family1.value}`;
  }
  if (family2.checked === true) {
    return `Família: ${family2.value}`;
  }
  if (family3.checked === true) {
    return `Família: ${family3.value}`;
  }
}

function getCasa() {
  const casa = document.getElementById('house');
  return `Casa: ${casa.value}`;
}

function getEmail() {
  const email = document.getElementById('input-email');
  return `Email: ${email.value}`;
}

function getNome() {
  const nome = document.getElementById('input-name');
  const sobrenome = document.getElementById('input-lastname');
  return `Nome: ${nome.value} ${sobrenome.value}`;
}

function generateElement() {
  const formElement = document.getElementById('evaluation-form');
  formElement.innerHTML = `<p>${getNome()}</p> <br> 
  <p> ${getEmail()} </p> <br>
  <p> ${getCasa()} <p/> <br>
  <p> ${getFamilia()} <p/> <br>
  <p> ${getMaterias()} <p/> <br>
  <p> ${getAvaliacao()} <p/> <br>
  <p> Observações: ${textAreaElement.value} <p/> <br>`;
}

function infosPerson(e) {
  e.preventDefault();
  generateElement();
}

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', infosPerson);
