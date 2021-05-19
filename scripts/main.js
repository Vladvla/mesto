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
})


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
