const body = document.querySelector('.body');
const popup = body.querySelector('.popup');
const popupOpenButton = body.querySelector('.profile__edit-button');
const popupCloseButton = body.querySelector('.popup__close-button');
const profileTitle = body.querySelector('.profile__title');
const profileSubtitle = body.querySelector('.profile__subtitle');
const formElement = body.querySelector('.form');
const inputName = body.querySelector('.form__input_value_name');
const inputJob = body.querySelector('.form__input_value_job');


const openPopup = () => {
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
  popup.classList.add('popup_opened');
}

const closePopup = () => {
  popup.classList.remove('popup_opened');
}

const handleFormSubmit = (evt)  => {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputJob.value;
  closePopup();
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
