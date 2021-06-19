const deactivateButton = (buttonElement, validationItem) => {
  buttonElement.classList.add(validationItem.inactiveButtonClass);
  buttonElement.disabled = true;
}

const toggleButtonState = (inputList, buttonElement, validationItem) => {
  if (hasInvalidInput(inputList)) {
      deactivateButton(buttonElement, validationItem);
  } else {
      activateButton(buttonElement, validationItem);
  }
};

const showInputError = (formElement, inputElement, errorMessage, validationItem) => {
  const errorElement = formElement.querySelector(`.popup__${inputElement.id}-error`);
  inputElement.classList.add(validationItem.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationItem.errorClass);
};

const hideInputError = (formElement, inputElement, validationItem) => {
  const errorElement = formElement.querySelector(`.popup__${inputElement.id}-error`);
  inputElement.classList.remove(validationItem.inputErrorClass);
  errorElement.classList.remove(validationItem.errorClass);
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement, validationItem) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationItem);
  } else {
    hideInputError(formElement, inputElement, validationItem);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const activateButton = (buttonElement, validationItem) => {
  buttonElement.classList.remove(validationItem.inactiveButtonClass);
  buttonElement.disabled = false;
}

const setEventListeners = (formElement, validationItem) => {
  const inputList = Array.from(formElement.querySelectorAll(validationItem.inputSelector));
  const buttonElement = formElement.querySelector(validationItem.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationItem);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, validationItem);
      toggleButtonState(inputList, buttonElement, validationItem);
    });
  });
}; 

const hidePopupErrors = (popup, validationItem) => {
const formElement = popup.querySelector(validationItem.formSelector);
const inputList = Array.from(formElement.querySelectorAll(validationItem.inputSelector));
inputList.forEach((inputElement) => {
  hideInputError(formElement, inputElement, validationItem);
});
}

const enableValidation = (validationItem) => {
  const formList = Array.from(document.querySelectorAll(validationItem.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, validationItem);
  });
};

const validationItem = {
  formSelector: '.popup__edit-form',
  inputSelector: '.popup__edit-profile',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

enableValidation(validationItem);