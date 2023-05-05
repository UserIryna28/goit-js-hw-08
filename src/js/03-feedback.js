import throttle from 'lodash.throttle'

const feedbackForm = document.querySelector(".feedback-form")
// локальне сховище
const LOCALSTORAGE_KEY = 'feedback-form-state'

// Відстежуй на формі подію input
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
feedbackForm.addEventListener("input", throttle(onInputData, 500))

feedbackForm.addEventListener("submit", saveMessage)
function saveMessage(evt) {
    evt.preventDefault();
    localStorage.setItem(LOCALSTORAGE_KEY, feedbackForm.elements.message.value)
}