const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const btnEdit = document.querySelector('.profile__edit-btn');
const btnAdd = document.querySelector('.profile__add-btn');
const popupEditProfile = document.querySelector('.edit-popup');
const popupAddCard = document.querySelector('.add-popup');
const popupViewImage = document.querySelector('.view-image-popup');
const popupEditProfileForm = document.querySelector('.edit-popup__form');
const popupAddCardForm = document.querySelector('.add-popup__form');
const popupEditProfileName = document.querySelector('.popup__input_title_name');
const popupEditProfileAbout = document.querySelector('.popup__input_title_about');
const popupAddCardTitle = document.querySelector('.popup__input_title_title');
const popupAddCardLink = document.querySelector('.popup__input_title_link');
const popupViewImagePicture = document.querySelector('.view-image-popup__picture');
const popupViewImageCaption = document.querySelector('.view-image-popup__caption');
const popupEditProfileCloseBtn = document.querySelector('.edit-popup__close-btn');
const popupAddCardCloseBtn = document.querySelector('.add-popup__close-btn');
const popupViewImageCloseBtn = document.querySelector('.view-image-popup__close-btn');

function getProfileData() {
  popupEditProfileName.value = profileName.textContent;
  popupEditProfileAbout.value = profileAbout.textContent;
}

function getCardData(item) {
  popupViewImagePicture.src = item.link;
  popupViewImagePicture.alt = item.alt;
  popupViewImageCaption.textContent = item.name;
}

function insertProfileData() {
  profileName.textContent = popupEditProfileName.value;
  profileAbout.textContent = popupEditProfileAbout.value;
}

function insertCard() {
  const card = {};
  card.name = popupAddCardTitle.value;
  card.link = popupAddCardLink.value;
  card.alt = `Фото ${card.name}`;
  renderCard(card, 'prepend');
  popupAddCardForm.reset();
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.showModal();
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.close();
}

function submitEditProfileForm(event) {
  event.preventDefault();
  insertProfileData();
  closePopup(popupEditProfile);
}

function submitAddCardForm(event) {
  event.preventDefault();
  insertCard();
  closePopup(popupAddCard);
}

function createCard(item) {
  const cardItem = cardTemplate.content.querySelector('.card').cloneNode(true);
  const cardImage = cardItem.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.alt;
  cardItem.querySelector('.card__title').textContent = item.name;
  cardItem.querySelector('.card__open-image-btn').addEventListener('click', () => {
    getCardData(item);
    openPopup(popupViewImage);
  });
  cardItem.querySelector('.card__like-btn').addEventListener('click', (el) => {
    el.target.classList.toggle('card__like-btn_active');
  });
  cardItem.querySelector('.card__trash-btn').addEventListener('click', () => {
    cardItem.remove();
  });
  return cardItem;
}

function renderCard(card, whereToRender) {
  if (whereToRender === 'append') {
    cardsList.append(createCard(card));
  } else if (whereToRender === 'prepend') {
    cardsList.prepend(createCard(card));
  }
}

initialCards.forEach(item => {
  return renderCard(item, 'append');
});

btnAdd.addEventListener('click', () => openPopup(popupAddCard));
btnEdit.addEventListener('click', () => {
  getProfileData();
  openPopup(popupEditProfile);
});
popupEditProfileCloseBtn.addEventListener('click', () => closePopup(popupEditProfile));
popupAddCardCloseBtn.addEventListener('click', () => closePopup(popupAddCard));
popupViewImageCloseBtn.addEventListener('click', () => closePopup(popupViewImage));
popupEditProfileForm.addEventListener('submit', () => submitEditProfileForm(event));
popupAddCardForm.addEventListener('submit', () => submitAddCardForm(event));
