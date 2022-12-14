import _throttle from 'lodash.throttle';

const refForm = document.querySelector('.feedback-form');

refForm.addEventListener('input', _throttle(getMessageFromForm, 500));
refForm.addEventListener('submit', onsubmit);

let formValues = {};
const KEY_STORAGE = 'feedback-form-state';
takeMessageFromStorage();

function getMessageFromForm(e) {
  formValues[e.target.name] = e.target.value;
  localStorage.setItem(KEY_STORAGE, JSON.stringify(formValues));
}

function onsubmit(e) {
  e.preventDefault();
  console.log(formValues);
  e.target.reset();
  localStorage.removeItem(KEY_STORAGE);
}

function takeMessageFromStorage() {
  const values = localStorage.getItem(KEY_STORAGE);
  if (values) {
    formValues = JSON.parse(values);
    Object.keys(formValues).forEach(
      key => (refForm[key].value = formValues[key])
    );
  }
}
