const cardsList = document.querySelector('.cards__list');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');
const editPopup = document.querySelector('.edit-popup');
const addPopup = document.querySelector('.add-popup');
const viewImagePopup = document.querySelector('.view-image-popup');
const editPopupForm = document.querySelector('.edit-popup__form');
const addPopupForm = document.querySelector('.add-popup__form');
const editPopupProfileName = document.querySelector('.popup__input_title_name');
const editPopupProfileAbout = document.querySelector('.popup__input_title_about');
const addPopupCardTitle = document.querySelector('.popup__input_title_title');
const addPopupCardLink = document.querySelector('.popup__input_title_link');
const viewImagePopupImage = document.querySelector('.view-image-popup__image');
const viewImagePopupCaption = document.querySelector('.view-image-popup__caption');
const editPopupCloseBtn = document.querySelector('.edit-popup__close-btn');
const addPopupCloseBtn = document.querySelector('.add-popup__close-btn');
const viewImagePopupCloseBtn = document.querySelector('.view-image-popup__close-btn');

function getProfileData() {
  editPopupProfileName.value = profileName.textContent;
  editPopupProfileAbout.value = profileAbout.textContent;
}

function getCardData(item) {
  viewImagePopupImage.src = item.link;
  viewImagePopupImage.alt = item.alt;
  viewImagePopupCaption.textContent = item.name;
}

function insertProfileData() {
  profileName.textContent = editPopupProfileName.value;
  profileAbout.textContent = editPopupProfileAbout.value;
}

function insertCard() {
  const card = {};
  card.name = addPopupCardTitle.value;
  card.link = addPopupCardLink.value;
  card.alt = `Фото ${card.name}`;
  renderCard(card, 'prepend');
  addPopupCardTitle.value = '';
  addPopupCardLink.value = '';
}

function openPopup(popup) {
  if (popup === editPopup) {
    getProfileData();
  }
  popup.classList.add('popup_opened');
  popup.showModal();
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.close();
}

function submitForm(event, popup) {
  event.preventDefault();
  if (popup === editPopup) {
    insertProfileData();
  } else if (popup === addPopup) {
    insertCard();
  } else {
    return console.error('There is not such popup.');
  }
  closePopup(popup);
}

function createCard(item) {
  const cardTemplate = document.querySelector('.card-template');
  const cardItem = cardTemplate.content.querySelector('.card').cloneNode(true);
  cardItem.querySelector('.card__image').src = item.link;
  cardItem.querySelector('.card__image').alt = item.alt;
  cardItem.querySelector('.card__title').textContent = item.name;
  cardItem.querySelector('.card__open-image-btn').addEventListener('click', () => {
    getCardData(item);
    openPopup(viewImagePopup);
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

addBtn.addEventListener('click', () => openPopup(addPopup));
editBtn.addEventListener('click', () => openPopup(editPopup));
editPopupCloseBtn.addEventListener('click', () => closePopup(editPopup));
addPopupCloseBtn.addEventListener('click', () => closePopup(addPopup));
viewImagePopupCloseBtn.addEventListener('click', () => closePopup(viewImagePopup));
editPopupForm.addEventListener('submit', () => submitForm(event, editPopup));
addPopupForm.addEventListener('submit', () => submitForm(event, addPopup));
