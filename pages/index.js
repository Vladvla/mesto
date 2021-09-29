// import './index.css';
import { initialCards,
	popupEditProfile,
	popupAdditem,
	popupPicture,
  template,
	nameInput,
	jobInput,
	profileEditButton,
	profileAddButton,
	profileName,
	profileRole,
  editForm,
  addForm,
  elements,
	object,
} from '../src/utils/constants.js';
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { UserInfo } from '../components/UserInfo.js'
import { PopupWithForm } from '../components/PopupWithForm.js'

const formValidatorEditProfile = new FormValidator(object, editForm);
formValidatorEditProfile.enableValidation();
const formValidatorAddPicture = new FormValidator(object, addForm);
formValidatorAddPicture.enableValidation();

const newCard = new PopupWithForm(popupAdditem, (item) =>{
	const newCards = createCard(item.cardname, item.link)
	cardsCatalogue.addItem(newCards);
	newCard.close();
})
newCard.setEventListeners();

const cardsCatalogue = new Section({
	items: initialCards,
	renderer:(item)=>{
		const cardElement = createCard(item.name, item.link)

		cardsCatalogue.addItem(cardElement);
	}},elements);

cardsCatalogue.renderItems();

function createCard(name,link) {
	const card = new Card(name, link, template, handleCardClick)
	return card.generateCard();
}

const popupCardView = new PopupWithImage(popupPicture)
popupCardView.setEventListeners();

function handleCardClick(name, link){
	popupCardView.open(name, link);
}
/*popup*/

const profileInfo = new UserInfo({
	name: profileName,
	role: profileRole,
})

const popupProfileEdit = new PopupWithForm(popupEditProfile, (item) => {
	profileInfo.setUserInfo(item);
	popupProfileEdit.close();
},editForm);
popupProfileEdit.setEventListeners();

profileEditButton.addEventListener('click', function(){
	popupProfileEdit.open();
	const origUserInfo = profileInfo.getUserInfo();
	nameInput.value = origUserInfo.name
	jobInput.value = origUserInfo.role
})

profileAddButton.addEventListener('click', function(){
	newCard.open();
	formValidatorCard.resetValidation();
})

addForm.addEventListener('submit', cardsCatalogue);
editForm.addEventListener('submit',popupProfileEdit);