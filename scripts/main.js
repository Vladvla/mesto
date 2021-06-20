// Массив карточек
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
// элементы открытия и закрытия попап'ов
const popupEditProfile = document.querySelector("#popupEditProfile");
const popupAddItem = document.querySelector("#popupAdditem");
const btnOpenPopupAddItem = document.querySelector(".profile__add-button");
const btnOpenPopupEditProfile = document.querySelector(".profile__edit-button");
const buttonsclosePopup = document.querySelectorAll(".popup__button-close");
const buttonAddCard = popupAddItem.querySelector(".popup__button-add");
const popupItem = document.querySelector("#popupItem");
const popups = document.querySelectorAll(".popup");
// Находим форму в DOM
const formEditProfile = document.querySelector("#popup__editForm");
const formAddItem = document.querySelector("#popup__addForm");
// Находим поля формы в DOM
const nameInput = document.querySelector("#name-input");
const jobInput = document.querySelector("#role-input");
const cardNameinput = document.querySelector("#cardName-input");
const imgInput = document.querySelector("#img-input");
// Добавление элементов.
const itemTemplate = document.querySelector("#element-template").content;
const itemsList = document.querySelector(".elements");
// Элементы куда должны быть вставлены значения полей формы
const nameProfile = document.querySelector(".profile__name");
const nameRole = document.querySelector(".profile__role");
const nameItem = itemsList.querySelector(".element__title");
const picItem = itemsList.querySelector(".element__pic");
// Элементы которые и куда должны быть вставлены в popup карточки.
const picItemPopup = popupItem.querySelector(".popup__item-pic");
const picNamePopup = popupItem.querySelector(".popup__item-caption");

function openPopup(popup) {
  document.addEventListener("keydown", handleEscClose);
  popup.classList.add("popup_opened");
}

popups.forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__button-close")
    ) {
      closePopup(item);
    }
  });
});

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
}

function openPopupEdit() {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = nameRole.textContent;
}

function openPopupAdd() {
  openPopup(popupAddItem);
}

btnOpenPopupEditProfile.addEventListener("click", openPopupEdit);
btnOpenPopupAddItem.addEventListener("click", openPopupAdd);

function renderInitialCards() {
  initialCards.forEach((item) => {
    const itemElem = CreateCard(item);
    itemsList.append(itemElem);
  });
}

function CreateCard({ name, link }) {
  const cardElement = itemTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__title").textContent = name;
  cardElement.querySelector(".element__pic").src = link;
  cardElement.querySelector(".element__pic").alt = name;
  cardElement
    .querySelector(".element__pic")
    .addEventListener("click", function () {
      handlePopupItem(name, link);
    });
  setEventListenersDelete(cardElement);
  setEventListenersLike(cardElement);
  return cardElement;
}

function handlePopupItem(name, link) {
  picItemPopup.src = link;
  picNamePopup.textContent = name;
  picItemPopup.alt = name;
  openPopup(popupItem);
}

renderInitialCards();

function addCards(name, link) {
  const itemElem = CreateCard(name, link);
  itemsList.prepend(itemElem);
}

function handleCardDelete(evt) {
  evt.target.closest(".element").remove();
}

function setEventListenersDelete(element) {
  element
    .querySelector(".element__remove")
    .addEventListener("click", handleCardDelete);
}

function handleLike(evt) {
  evt.target.classList.toggle("element__like_active");
}

function setEventListenersLike(el) {
  el.querySelector(".element__like").addEventListener("click", handleLike);
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleEditProfileform(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Новые значения через textContent
  nameProfile.textContent = nameInput.value;
  nameRole.textContent = jobInput.value;

  closePopup(popupEditProfile);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener("submit", handleEditProfileform);
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleAddItemform(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  // Новые значения
  const name = cardNameinput.value;
  const link = imgInput.value;
  addCards({ name, link });
  formAddItem.reset();
  closePopup(popupAddItem);
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formAddItem.addEventListener("submit", handleAddItemform);