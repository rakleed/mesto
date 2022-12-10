let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let editBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popupSaveBtn = document.querySelector('.popup__save-btn');
let popupCloseBtn = document.querySelector('.popup__close-btn');
let popupProfileName = document.querySelector('.popup__name-input');
let popupProfileAbout = document.querySelector('.popup__about-input');

editBtn.addEventListener('click', function () {
  popupProfileName.value = profileName.textContent;
  popupProfileAbout.value = profileAbout.textContent;
  popup.classList.add('popup_opened');
  popup.showModal();
});

popupSaveBtn.addEventListener('click', function () {
  profileName.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileAbout.value;
  popup.classList.remove('popup_opened');
  popup.close();
});

popupCloseBtn.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
  popup.close();
});
