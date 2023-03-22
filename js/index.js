const body = document.querySelector('.body');
const popup = body.querySelector('.popup');
const popupOpenButton = body.querySelector('.profile__edit-button');


const openPopup = () => {
  popup.classList.add('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);
