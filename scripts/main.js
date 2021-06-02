// Массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// элементы открытия и закрытия попап'ов
let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = popup.querySelectorAll('.popup__button-close');
let popupAddItem = document.querySelector('.popup-additem');
let openPopupAddItem = document.querySelector('.profile__add-button');
// Находим форму в DOM
let formElement = document.querySelector('#popup__editForm');
// Находим поля формы в DOM
let nameInput = document.querySelector('#name-input');
let jobInput = document.querySelector('#role-input');
let imgInput = document.querySelector('#img-input');
// Элементы куда должны быть вставлены значения полей формы
let nameProfile = document.querySelector('.profile__name');
let nameRole = document.querySelector('.profile__role');

function openPopupEvent(event) {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = nameRole.textContent;
}

function openPopupAddItemEvent(event) {
  popupAddItem.classList.add('popup_opened');
};

function renderClosePopupEvent() {
  closePopup.forEach(closePopupEvent);
}

function closePopupEvent(event) {
  popup.classList.remove('popup_opened');
}

openPopup.addEventListener('click', openPopupEvent);
openPopupAddItem.addEventListener('click', openPopupAddItemEvent);
closePopup.addEventListener('click', closePopupEvent);

popup.addEventListener('mousedown', function(event) {
  if (event.target === event.currentTarget) {
    closePopupEvent()
  }
});



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Новые значения через textContent
    nameProfile.textContent = nameInput.value;
    nameRole.textContent = jobInput.value;

    closePopupEvent()

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 




// let like = document.querySelectorAll('.like');
// let likeDif = document.querySelector('.like_active');

// like.addEventListener('click', function() {
//   like.classList.add('like_active');
// })

// like.addEventListener('click', function() {
//   like.classList.remove('like_active');
// })

// function toggleLike() {
//   like.classList.toggle('like_active');
// }
