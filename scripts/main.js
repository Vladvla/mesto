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
const popup = document.querySelector('.popup');
const popupAddItem = document.querySelector('.popup-additem');
const openPopupAddItem = document.querySelector('.profile__add-button');
const openPopup = document.querySelector('.profile__edit-button');
const closePopups = document.querySelectorAll('.popup__button-close');
const addCard = popupAddItem.querySelector('.popup__button-add');
const popupItem = document.querySelector('.popup-item');
// Находим форму в DOM
const formElement = document.querySelector('#popup__editForm');
const formItem = document.querySelector('#popup__addForm');
// Находим поля формы в DOM
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#role-input');
const cardNameinput = document.querySelector('#cardName-input');
const imgInput = document.querySelector('#img-input');
// Добавление элементов.
const itemTemplate = document.querySelector('#element-template').content;
const itemsList = document.querySelector('.elements');
// Элементы куда должны быть вставлены значения полей формы
const nameProfile = document.querySelector('.profile__name');
const nameRole = document.querySelector('.profile__role');
const nameItem = itemsList.querySelector('.element__title');
const picItem = itemsList.querySelector('.element__pic');
// Элементы которые и куда должны быть вставлены в popup карточки.
const picItemPopup = popupItem.querySelector('.popup-item__pic');
const picNamePopup = popupItem.querySelector('.popup-item__caption');

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
  popup.classList.remove('popup_opened');
  popupAddItem.classList.remove('popup_opened');
  popupItem.classList.remove('popup_opened');
}

openPopup.addEventListener('click', openPopupEvent);
openPopupAddItem.addEventListener('click', openPopupAddItemEvent);

popup.addEventListener('mousedown', function(event) {
  if (event.target === event.currentTarget) {
    closePopupsHandler();
  }
});

popupAddItem.addEventListener('mousedown', function(event) {
  if (event.target === event.currentTarget) {
    closePopupsHandler();
  }
});

popupItem.addEventListener('mousedown', function(event) {
  if (event.target === event.currentTarget) {
    closePopupsHandler();
  }
});

function renderInitialCards() {
  initialCards.forEach(renderInitialCard);
}

function renderInitialCard({name,link}) {
  const htmlElement = itemTemplate.querySelector('.element').cloneNode(true);
  htmlElement.querySelector('.element__title').textContent = name;
  htmlElement.querySelector('.element__pic').src = link;
  htmlElement.querySelector('.element__pic').alt = name;
  htmlElement.querySelector('.element__title').addEventListener('click', handlePopupItem);
  htmlElement.querySelector('.element__pic').addEventListener('click', handlePopupItem);
  function handlePopupItem({name,link}){
    popupItem.classList.add('popup_opened');
    picItemPopup.src = htmlElement.querySelector('.element__pic').src;
    picNamePopup.textContent = htmlElement.querySelector('.element__title').textContent;
    picItemPopup.alt = htmlElement.querySelector('.element__pic').alt;
  }
  setEventListenersDeconste(htmlElement);
  setEventListenersLike(htmlElement);
  itemsList.append(htmlElement);
}

renderInitialCards();

function handleDeconste(evt){
  evt.target.closest('.element').remove();
}

function setEventListenersDeconste(element) {
  element.querySelector('.element__remove').addEventListener('click', handleDeconste);
}

function handleLike(evt){
  evt.target.classList.toggle('element__like_active');
}

function setEventListenersLike(el) {
  el.querySelector('.element__like').addEventListener('click', handleLike);
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Новые значения через textContent
    nameProfile.textContent = nameInput.value;
    nameRole.textContent = jobInput.value;

    closePopupsHandler();

}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandlerNew (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                              // Так мы можем определить свою логику отправки.
                                              // О том, как это делать, расскажем позже.
  // Новые значения 
  const name = cardNameinput.value;
  const link = imgInput.value;
  renderInitialCard({name,link});
  cardNameinput.value = '';
  imgInput.value ='';
  closePopupsHandler();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formItem.addEventListener('submit', formSubmitHandlerNew); 

// const like = document.querySelectorAll('.element__like');

// const likeArray = like.map(function(obj) {
//   return obj.value;
// });

// likeArray.forEach(like);

// like.addEventListener('click', function() {
//   likeArray.classList.toggle('element__like_active');
// })

// like.addEventListener('click', function() {
//   likeArray.classList.remove('like_active');
// })

// function toggleLike() {
//   like.classList.toggle('like_active');
// }
