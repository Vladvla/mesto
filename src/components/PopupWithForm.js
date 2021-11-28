import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
	constructor(popup, handleFormsubmit){
		super(popup);
		this._handleFormsubmit = handleFormsubmit;
		this._popupForm = this._popup.querySelector('.popup__edit-form');
		this._buttonSubmit = this._popup.querySelector('.popup__button')
	}

	_getInputValues(){
		this._inputList = Array.from(
			this._popupForm.querySelectorAll(".popup__edit-profile")
			);
		this._formValues = {}
		this._inputList.forEach((input) => {
			this._formValues[input.name] = input.value;
		})
		return this._formValues
	}

	setEventListeners(){
		super.setEventListeners()
		this._popupForm.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._handleFormsubmit(this._getInputValues());
		})
	}

	close(){
		super.close();
		setTimeout(() => {this._popupForm.reset()}, 220);
	}

	onSubmitStart() {
    this._buttonSubmit.textContent = `Сохранение...`;
  }

  onSubmitDefault() {
    this._buttonSubmit.textContent = `Сохранить`;
  }
}

