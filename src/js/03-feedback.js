import throttle from 'lodash.throttle'
//локальне сховище

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
// Відстежуй на формі подію input
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
feedbackForm.addEventListener('input', throttle(onInputData, 500));
feedbackForm.addEventListener('submit', saveMassage);

let dataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
const { email, message } = feedbackForm.elements;
reloadPage();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
}

function reloadPage() {

  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function saveMassage(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.currentTarget.reset();
  dataForm = {};
}
