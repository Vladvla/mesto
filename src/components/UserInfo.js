export class UserInfo{ 
	constructor({name, role, avatar}){
		this._userNameElement = name;
		this._userAboutElement = role;
		this._userAvatarElement = avatar;
	}

	getUserInfo(){
		this._userData = {}
		this._userData.name = this._userNameElement.textContent;
		this._userData.about = this._userAboutElement.textContent;
		this._userData.avatar = this._userAvatarElement.src;
		return this._userData;
	}

	setUserInfo(item){
		if (item.name){
			this._userNameElement.textContent = item.name;
		}
		if (item.about){ 
			this._userAboutElement.textContent = item.about;
		}
		if (item.avatar){
			this._userAvatarElement.src = item.avatar;
		}
	}
}