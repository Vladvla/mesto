export class Card {

	constructor({ item, handleCardClick, handleLikeClick, handleCardDelete }, cardSelector){
		this._name = item.name;
		this._link = item.link;
    this._userId = item.currentUser;
    this._likes = item.likes;
    this.id = item._id;
    this._ownerId = item.owner._id;
		this._handleCardClick = handleCardClick;
		this._handleLikeClick = handleLikeClick;
    this._handleCardDelete = handleCardDelete;
		this._cardSelector = cardSelector;
	};

	_getCard() {
		this._cardTemplate = document.querySelector(this._cardSelector).content;
		this._newCard = this._cardTemplate.querySelector('.element').cloneNode(true);
		return this._newCard
	};

  generateCard = () => {
    this._element = this._getCard();
    this._buttonDelete = this._element.querySelector('.element__remove');
    this._likeButton = this._element.querySelector('.element__like');
    this._likesCount = this._element.querySelector('.element__like-counting');
    this._likesCount.textContent = this._likes.length; //  количествт лайков равно длинне массива лайков получаемых с сервера
    this._cardImage = this._element.querySelector('.element__pic');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    if (!(this._ownerId === this._userId)) {    //  если айди пользователя и айди создателя карты НЕ совпадают, удаляем иконку удаления карточки
      this._buttonDelete.remove();
    }
    this._setViewLike();
    this.setEventListeners();
    return this._element;
  };

  remove(){
    this._element.remove();
  }

  isLiked() {
    return this._likes.some(user => {
      return user._id === this._userId
  });
  }

  setLike(itemLikes){
    this._likes = itemLikes;
    this._likesCount.textContent = this._likes.length; 
    this._setViewLike();
  }

  _setViewLike(){
    if (this.isLiked()){
      this._likeButton.classList.add('element__like_active');
    } else {
      this._likeButton.classList.remove('element__like_active');
    }
  }

	setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this));
    //  при клике на иконку удаления, срабатывает функция открытия попапа, переданная при создании карточки.
    //  передаем в метод open айди карточки, и функцию удаления карточки, которая далее срабатывает при сабмите
    this._buttonDelete.addEventListener('click', () => this._handleCardDelete(this));
    this._cardImage.addEventListener('click', () => this._handleCardClick({name: this._name, link: this._link}))
  };
};