const body = document.querySelector('.body');
const popup = body.querySelector('.popup');
const popupOpenButton = body.querySelector('.profile__edit-button');
const popupCloseButton = body.querySelector('.popup__close-button');


const openPopup = () => {
  popup.classList.add('popup_opened');
}

const closePopup = () => {
  popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
