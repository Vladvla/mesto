export class UserInfo{ 
	constructor({name, role}){
		this._userNameElement = name
		this._userAboutElement = role
	}

	getUserInfo(){
		this._userData = {}
		this._userData.name = this._userNameElement.textContent
		this._userData.role = this._userAboutElement.textContent
		return this._userData
	}

	setUserInfo(item){
		if (item.name){
			this._userNameElement.textContent = item.name
		}
		if (item.role){ 
			this._userAboutElement.textContent = item.role
		}
	}
}