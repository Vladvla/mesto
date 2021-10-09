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
const popupPicture = page.querySelector('#popupItem');
const template = '.template';
const placeInput = popupAdditem.querySelector('#cardName-input');
const pictureInput = popupAdditem.querySelector('#img-input');
const nameInput = popupEditProfile.querySelector('#name-input');
const jobInput = popupEditProfile.querySelector('#role-input');
const profileEditButton = page.querySelector('.profile__edit-button');
const profileAddButton = page.querySelector('.profile__add-button');
const profileName = page.querySelector('.profile__name');
const profileRole = page.querySelector('.profile__role');
const editForm = popupEditProfile.querySelector('#popup__editForm');
const addForm = popupAdditem.querySelector('#popup__addForm');
const element = '.elements-list';
const elements = page.querySelector('.elements');

const object = {
	formSelector: '.popup__edit-form',
	formElementField: '.popup__form-field',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input-error',
	errorClass: 'popup__input-error_active'
}

export{
	initialCards,
	popupEditProfile,
	popupAdditem,
  template,
  popupPicture,
	placeInput,
	pictureInput,
	nameInput,
	jobInput,
	profileEditButton,
	profileAddButton,
	profileName,
	profileRole,
  editForm,
  addForm,
  element,
  elements,
	object,
}