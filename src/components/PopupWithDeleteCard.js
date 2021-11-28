import { Popup } from "./Popup.js";

export class PopupWithDeleteCard extends Popup {
  constructor(popup) {
    super(popup);
		this._popupForm = this._popup.querySelector('.popup__edit-form');
    this._handleFormSubmit = null;
  }

  addAction(handleFormSubmit){
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners()
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit(); //  отправляем на сервер
    });
  }
}