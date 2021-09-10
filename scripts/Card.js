import {openPopup} from './index.js';
export class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
  };

  generateCard = () => {
    this._element = this._getTemplate();
    this._element.querySelector('.element__pic').src = this._link;
    this._element.querySelector('.element__pic').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._likeButton = this._element.querySelector('.element__like');
    this._setEventListeners();
    return this._element;
  };

  _toggleLike = () => {
    this._likeButton.classList.toggle('element__like_active');
  };

  _removeCard = () => {
    this._element.remove();
    this._element = null;
  };

  _openBigPicture = () => {
    const bigPicture = document.querySelector('.popup__item-pic');
    const popupBigPicture = document.querySelector('#popupItem');
    openPopup(popupBigPicture);
    bigPicture.src = this._link;
    bigPicture.alt = this._name;
    document.querySelector('.popup__item-caption').textContent = this._name;
  };

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._toggleLike();
    });
    this._element.querySelector('.element__remove').addEventListener('click', () => {
      this._removeCard();
    });
    this._element.querySelector('.element__pic').addEventListener('click', () => {
      this._openBigPicture();
    });
  };
};