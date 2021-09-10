import {Card} from './Card.js';
import {FormValidate} from './validate.js';
//  массив карточек, которые добавляются при загрузке страницы
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз',
  },
  {
    name: 'Гора Эльбрус',
    link: 'https://images.unsplash.com/photo-1626518139514-65676cf25bac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    alt: 'Гора Эльбрус',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал',
  },
];
//переменные
const page = document.querySelector('.page');
const popupEditProfile = page.querySelector('#popupEditProfile');
const popupAdditem = page.querySelector('#popupAdditem');
const popups = page.querySelectorAll('.popup');
const placeInput = popupAdditem.querySelector('#cardName-input');
const pictureInput = popupAdditem.querySelector('#img-input');
const nameInput = popupEditProfile.querySelector('#name-input');
const jobInput = popupEditProfile.querySelector('#role-input');
const profileEditButton = page.querySelector('.profile__edit-button');
const profileAddButton = page.querySelector('.profile__add-button');
const profileName = page.querySelector('.profile__name');
const profileRole = page.querySelector('.profile__role');
//валидация
const object = ({
  inputElement: '.popup__edit-profile',
  submitButtons: '.popup__button',
  submitButtonDisabled: 'popup__button_disabled',
  inputErrors: 'popup__input_type_error',
  spanErrorsActive: 'popup__input-error_active',
  spanErrors: '.popup__input-error',
});

const formValidatorEditProfile = new FormValidate(object, popupEditProfile);
formValidatorEditProfile.enableValidation();
const formValidatorAddPicture = new FormValidate(object, popupAdditem);
formValidatorAddPicture.enableValidation();


function renderCard(e) {
  e.preventDefault();
  createCard(placeInput.value, pictureInput.value, '.elements-list');
  closePopup(popupAdditem);
};


function createCard(name, link, element) {
  const card = new Card(name, link, element);
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
};


initialCards.forEach((item) => {
  createCard(item.name, item.link, '.elements-list')
});

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
};

function keyHandler(e) {
  if (e.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

function changeProfileName(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileRole.textContent = jobInput.value;
  closePopup(popupEditProfile);
};

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileRole.textContent;
  formValidatorEditProfile.resetPopupForm();
  openPopup(popupEditProfile);
});

profileAddButton.addEventListener('click', () => {
  popupAdditem.querySelector('.popup__edit-form').reset();
  formValidatorAddPicture.resetPopupForm();
  openPopup(popupAdditem);
});

popupAdditem.addEventListener('submit', renderCard);

popupEditProfile.addEventListener('submit', changeProfileName);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
    if (e.target.classList.contains('popup__button-close')) {
      closePopup(popup)
    };
  });
});