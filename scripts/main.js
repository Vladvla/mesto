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
let popup = document.querySelector('.popup');
let popupAddItem = document.querySelector('.popup-additem');
let openPopupAddItem = document.querySelector('.profile__add-button');
let openPopup = document.querySelector('.profile__edit-button');
let closePopups = document.querySelectorAll('.popup__button-close');
let addCard = popupAddItem.querySelector('.popup__button-add');
// Находим форму в DOM
let formElement = document.querySelector('#popup__editForm');
// Находим поля формы в DOM
let nameInput = document.querySelector('#name-input');
let jobInput = document.querySelector('#role-input');
let cardNameinput = document.querySelector('#cardName-input');
let imgInput = document.querySelector('#img-input');
// Элементы куда должны быть вставлены значения полей формы
let nameProfile = document.querySelector('.profile__name');
let nameRole = document.querySelector('.profile__role');

const itemTemplate = document.querySelector('.elements__list').content;

function openPopupEvent(event) {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = nameRole.textContent;
}

function openPopupAddItemEvent(event) {
  popupAddItem.classList.add('popup_opened');
};

closePopups.forEach(addCloseHandler);

function addCloseHandler (closePopups) {
  closePopups.addEventListener('click', closePopupsHandler);
};

 function closePopupsHandler(e) {
  popup.classList.remove('popup_opened') || popupAddItem.classList.remove('popup_opened');
}

openPopup.addEventListener('click', openPopupEvent);
openPopupAddItem.addEventListener('click', openPopupAddItemEvent);

popup.addEventListener('mousedown', function(event) {
  if (event.target === event.currentTarget) {
    closePopupEvent()
  }
});

// Добавление элементов.

function renderInitialCards() {
  initialCards.forEach(renderInitialCard);
}

function renderInitialCard(name,link) {
  const htmlElement = itemTemplate.clonNode(true);
  htmlElement.querySelector('.element__pic').innerText = link;
  htmlElement.querySelector('.element__title').innerText = name;
  List.appendChild(htmlElement);
}

function handleSubbmit () {
  renderInitialCard(cardNameinput.value);
}

addCard.addEventListener('click', handleSubbmit);

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
