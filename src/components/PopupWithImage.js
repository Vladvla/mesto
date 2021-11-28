import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
	constructor(popup){
		super(popup)
		this._name = this._popup.querySelector('.popup__item-caption')
		this._link = this._popup.querySelector('.popup__item-pic')
	}
	open(item){
		super.open()
		this._link.src = item.link
		this._link.alt = item.name
		this._name.textContent = item.name
	}
}