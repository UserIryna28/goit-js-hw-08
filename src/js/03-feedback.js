import throttle from 'lodash.throttle'

const feedbackForm = document.querySelector(".feedback-form")
// локальне сховище
const LOCALSTORAGE_KEY = 'feedback-form-state'

// Відстежуй на формі подію input
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
feedbackForm.addEventListener("input", throttle(onInputData, 500))

feedbackForm.addEventListener("submit", saveMessage)

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function saveMessage(evt) {
    evt.preventDefault();
    localStorage.setItem(LOCALSTORAGE_KEY, feedbackForm.elements.message.value)
}
function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}
function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Fill in all the fields!');
  }
  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  dataForm = {};
}