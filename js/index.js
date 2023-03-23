const body = document.querySelector('.body');
const popup = body.querySelector('.popup');
const popupOpenButton = body.querySelector('.profile__edit-button');
const popupCloseButton = body.querySelector('.popup__close-button');
const profileTitle = body.querySelector('.profile__title');
const profileSubtitle = body.querySelector('.profile__subtitle');
const inputName = body.querySelector('.form__input_name');
const inputJob = body.querySelector('.form__input_job')


const openPopup = () => {
  popup.classList.add('popup_opened');
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
}

const closePopup = () => {
  popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
