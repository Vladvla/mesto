import './index.css';
import { 
	popupEditProfile,
	popupAdditem,
  popupAvatar,
  popupDelete,
  popupPicture,
	nameInput,
	jobInput,
  avatarInput,
	profileEditButton,
	profileAddButton,
  ProfileAvatarButton,
  cardDeleteButton,
	profileName,
	profileRole,
	profileAvatar,
  editForm,
  addForm,
  avatarForm,
  elementSelector,
  elements,
	object,
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithDeleteCard } from '../components/PopupWithDeleteCard.js';
import { Api } from '../components/Api.js';

//  храним токен и url
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-30',
  headers: {
    authorization: 'd4f69483-99a0-47d5-81bb-bcbfdd5021cd',
    'Content-Type': 'application/json'
  }
});

//  храним айди пользователя, что бы передать его в карточку
let userId;

  //  выполняем промиcы
	Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([dataCards, dataUser]) => {
		userId = dataUser._id;
    profileInfo.setUserInfo(dataUser);
    cardsCatalogue.renderItems(dataCards);
  })
  .catch(err => {
    console.log(err)
  });

	// Попап добавления карточки
const popupNewCard = new PopupWithForm(
	popupAdditem,
	(dataForm) =>{
	popupNewCard.onSubmitStart()
    api.setNewCard(dataForm)
      .then(item => {
        const card = createCard(item);
				cardsCatalogue.addItem(card, 'before');
        popupNewCard.close();
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        popupNewCard.onSubmitDefault()
      });
})
popupNewCard.setEventListeners();

profileAddButton.addEventListener('click', function(){
	popupNewCard.open();
	formValidatorAddPicture.resetValidation();
});

// Удаление карточки
const popupDeleteCard = new PopupWithDeleteCard(popupDelete)
popupDeleteCard.setEventListeners();

// рендер карточек
const cardsCatalogue = new Section({
	renderer:(item)=>{
		cardsCatalogue.addItem(createCard(item), 'after');
	}
},elements);


function createCard(item) {
	const card = new Card({ 
		item:{...item, currentUser: userId},
		handleCardClick,
		handleLikeClick: (card) => {
			if (card.isLiked()) {
				api.deleteLike(card.id)
					.then(dataCard => card.setLike(dataCard.likes))
					.catch(err => {
						console.log(err)
					});
			} else {
				api.putLike(card.id)
					.then(dataCard => card.setLike(dataCard.likes))
					.catch(err => {
						console.log(err)
					});
			} 
		},
		handleCardDelete: (card) => {
			popupDeleteCard.open();
			popupDeleteCard.addAction(
				() => {
					popupDeleteCard.onSubmitStart()
					api.deleteCard(card.id)
						.then(()=> {
							card.remove();
							popupDeleteCard.close();
						})
						.catch(err => {
							console.log(err)
						})
						.finally(() => {
							popupDeleteCard.onSubmitDefault()
						});
				}
			)
		}
	},  
	elementSelector
		);
	return card.generateCard();
};
// попап увеличенной карточки.
const popupCardView = new PopupWithImage(popupPicture);
popupCardView.setEventListeners();

function handleCardClick(item){
	popupCardView.open(item);
};

// Попап обновления информации о пользователе.
const profileInfo = new UserInfo({
	name: profileName,
	role: profileRole,
	avatar: profileAvatar,
});

const popupProfileEdit = new PopupWithForm(
	popupEditProfile,
	(dataForm) => {
	popupProfileEdit.onSubmitStart()
    api.setUserInfo(dataForm)
      .then(dataUser => {
        profileInfo.setUserInfo(dataUser)
        popupProfileEdit.close()
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        popupProfileEdit.onSubmitDefault()
      });
		});
popupProfileEdit.setEventListeners();

profileEditButton.addEventListener('click', function(){
	popupProfileEdit.open();
	const origUserInfo = profileInfo.getUserInfo();
	nameInput.value = origUserInfo.name;
	jobInput.value = origUserInfo.about;
	formValidatorEditProfile.resetValidation();
});

// Попап смены аватара

const popupAvatarChange = new PopupWithForm(
	popupAvatar,
	(dataForm) => {
		popupAvatarChange.onSubmitStart()
			api.setUserAvatar(dataForm)
				.then(dataUser => {
					profileInfo.setUserInfo(dataUser)
					popupAvatarChange.close()
				})
				.catch(err => {
					console.log(err)
				})
				.finally(() => {
					popupAvatarChange.onSubmitDefault()
				});
	popupAvatarChange.close();
});
popupAvatarChange.setEventListeners();

ProfileAvatarButton.addEventListener('click', function(){
  popupAvatarChange.open();
	const origUserAvatar = profileInfo.getUserInfo();
	avatarInput.value = origUserAvatar.avatar;
	formValidatorAvatarform.resetValidation();
});

// Валидация
const formValidatorEditProfile = new FormValidator(object, editForm);
formValidatorEditProfile.enableValidation();

const formValidatorAddPicture = new FormValidator(object, addForm);
formValidatorAddPicture.enableValidation();

const formValidatorAvatarform = new FormValidator(object, avatarForm);
formValidatorAvatarform.enableValidation();