import '../pages/index.css';
 // подключение стилей.

// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import closeIcon from '../images/Close-icon.svg';
import Dombai from '../images/dombai.png';
import Elbrus from '../images/Elbrus.png';
import Trash from '../images/element__trash.svg';
import Author from '../images/image.jpg';
import Karachaevsk from '../images/karachaevsk.png';
import LikeActive from '../images/like__active.png';
import popupCloseIcon from '../images/popup__close-icon-320.svg';
import addButton from '../images/profile__add-button-320.svg';
import vecAddButton from '../images/Vector_add-button.svg';
import vecEditButton from '../images/Vector_edit-button.svg';
import vecLike from '../images/Vector_like.svg';

const pictures = [
  // меняем исходные пути на переменные
  { name: 'Close Icon', image: closeIcon },
  { name: 'Dombai', link: Dombai },
  { name: 'Elbrus', link: Elbrus },
  { name: 'Trash', link: Trash },
  { name: 'Author', link: Author },
  { name: 'Karachaevsk', link: Karachaevsk },
  { name: 'LikeActive', link: LikeActive },
  { name: 'popupCloseIcon', link: popupCloseIcon },
  { name: 'addButton', link: addButton },
  { name: 'vecAddButton', link: vecAddButton },
  { name: 'vecEditButton', link: vecEditButton },
  { name: 'vecLike', link: vecLike },
]; 