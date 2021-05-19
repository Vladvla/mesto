let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = popup.querySelector('.popup__button-close')

openPopup.addEventListener('click', togglePopup)

closePopup.addEventListener('click', togglePopup)

function togglePopup(event) {
  popup.classList.toggle('popup_opened');
}

popup.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    togglePopup()
  }
});

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__role');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');

    // Получите значение полей jobInput и nameInput из свойства value

    let nameProfile = document.querySelector('.profile__name');
    let nameRole = document.querySelector('.profile__role');

    // Выберите элементы, куда должны быть вставлены значения полей

    nameProfile.setAttribute('value', nameInput);
    nameRole.setAttribute('value', jobInput);

    // Вставьте новые значения с помощью textContent
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
