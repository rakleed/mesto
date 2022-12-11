let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let editBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let popupProfileName = document.querySelector('.popup__input_title_name');
let popupProfileAbout = document.querySelector('.popup__input_title_about');
let popupCloseBtn = document.querySelector('.popup__close-btn');

function openPopup() {
  popupProfileName.value = profileName.textContent;
  popupProfileAbout.value = profileAbout.textContent;
  popup.classList.add('popup_opened');
  popup.showModal();
}

function closePopup() {
  popup.classList.remove('popup_opened');
  popup.close();
}

function submitForm(event) {
  event.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileAbout.value;
  closePopup();
}

editBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
popupForm.addEventListener('submit', submitForm);
