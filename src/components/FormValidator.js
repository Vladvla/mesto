export class FormValidator{
	constructor(object, formElement){
		this._formElement = formElement;
		this._formSelector = object.formSelector;
		this._formElementField = object.formElementField;
		this._inputSelector = object.inputSelector;
		this._submitButtonSelector = object.submitButtonSelector;
		this._inactiveButtonClass = object.inactiveButtonClass;
		this._inputErrorClass = object.inputErrorClass;
		this._errorClass = object.errorClass;
	};

	_checkInputValidity (inputElement) {
		this._isInputNotValid = !inputElement.validity.valid
		if (this._isInputNotValid) {
			this._showInputError(inputElement, inputElement.validationMessage);
			inputElement.classList.add(this._inputErrorClass);
		} else {
			this._hideInputError(inputElement);
			inputElement.classList.remove(this._inputErrorClass);
		}
	};

	_showInputError (inputElement, errorMessage) {
		const errorElement = this._formElement.querySelector(`#popup__${inputElement.id}-error`);
		inputElement.classList.add(this._inputErrorClass);
		errorElement.textContent = errorMessage;
		errorElement.classList.add(this._errorClass);
	};
	
	_hideInputError (inputElement) {
		const errorElement = this._formElement.querySelector(`#popup__${inputElement.id}-error`);
		inputElement.classList.add(this._inputErrorClass);
		errorElement.textContent = "";
		errorElement.classList.remove(this._errorClass);
		
	};

	_toggleButtonState () {
		this._hasNotValidInput = this._inputList.some((inputElement) => !inputElement.validity.valid);
		if (this._hasNotValidInput) {
			this._buttonElement.setAttribute("disabled", true);
			this._buttonElement.classList.add(this._inactiveButtonClass);
		} else {
			this._buttonElement.removeAttribute("disabled");
			this._buttonElement.classList.remove(this._inactiveButtonClass);
		}
	};
	
	
	_setEvenListenersValidate () {
		this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
		this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
		this._inputList.forEach ((inputElement) => {
			inputElement.addEventListener("input", () => {
				this._checkInputValidity(inputElement);
				this._toggleButtonState();
			})
		})
	
	};

	resetValidation(){
		this._toggleButtonState();
		this._inputList.forEach((inputElement) => {
			this._hideInputError (inputElement);
		})
	};
	
	enableValidation () {
		this._formElement.addEventListener("submit", (e) => {
			e.preventDefault();
		})
		this._setEvenListenersValidate();
	};
	
};

