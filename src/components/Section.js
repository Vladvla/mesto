export class Section {
	constructor({renderer}, containerSelector){
		this._renderer = renderer;
		this._container = containerSelector;
	}

	renderItems(items){
		items.forEach(item => this._renderer(item));
  }

	addItem(item, position = 'before') {
		if(position === 'before'){
			this._container.prepend(item);
		}

		if(position === 'after'){
			this._container.append(item);
		}
	}
}