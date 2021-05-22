// элементы открытия и закрытия попапа
let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = popup.querySelector('.popup__button-close')
// Находим форму в DOM
let formElement = document.querySelector('#popup__editForm');
// Находим поля формы в DOM
let nameInput = document.querySelector('#popup__userName');
let jobInput = document.querySelector('#popup__userRole');
// Элементы куда должны быть вставлены значения полей формы
let nameProfile = document.querySelector('.profile__name');
let nameRole = document.querySelector('.profile__role');

function openPopupEvent(event) {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = nameRole.textContent;
}

function closePopupEvent(event) {
  popup.classList.remove('popup_opened');
}

openPopup.addEventListener('click', openPopupEvent);
closePopup.addEventListener('click', closePopupEvent);

popup.addEventListener('click', function(event) {
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
