let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let editBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popupProfileName = document.querySelector('.popup__name-input');
let popupProfileAbout = document.querySelector('.popup__about-input');
let popupSaveBtn = document.querySelector('.popup__save-btn');
let popupCloseBtn = document.querySelector('.popup__close-btn');

function closePopupWthSave() {
  profileName.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileAbout.value;
  popup.classList.remove('popup_opened');
  popup.close();
}

editBtn.addEventListener('click', function () {
  popupProfileName.value = profileName.textContent;
  popupProfileAbout.value = profileAbout.textContent;
  popup.classList.add('popup_opened');
  popup.showModal();
});

popupProfileName.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    // event.preventDefault();
    closePopupWthSave();
  }
});

popupProfileAbout.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    // event.preventDefault();
    closePopupWthSave();
  }
});

popupSaveBtn.addEventListener('click', closePopupWthSave);

popupCloseBtn.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
  popup.close();
});
