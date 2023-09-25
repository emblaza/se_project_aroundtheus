const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];
/* ----------------------------------------------------------------------*/
/*                              Elements
/*-----------------------------------------------------------------------*/
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
// const profileCloseButton = profileEditModal.querySelector(
//   ".modal__close-button"
// );
const modalCloseButtons = document.querySelectorAll(".modal__close-button");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileSubtitleInput = document.querySelector("#profile-subtitle-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardsList = document.querySelector(".cards__list");
const cardAddModal = document.querySelector("#card-add-modal");
const cardAddButton = document.querySelector(".profile__add-button");
// const cardCloseButton = cardAddModal.querySelector(".modal__close-button");
const cardAddForm = cardAddModal.querySelector(".modal__form");
const cardTitleInput = cardAddModal.querySelector("#add-card-title-input");
const cardUrlInput = cardAddModal.querySelector("#add-card-url-input");
const cardPopupModal = document.querySelector("#preview-image-modal");
const cardPopupImage = document.querySelector(".modal__preview_image");
// const cardPopupCloseButton = document.querySelector(".modal__close-button");
const cardPopupText = document.querySelector(".modal__preview_text");
/* ----------------------------------------------------------------------*/
/*                              Functions
/*-----------------------------------------------------------------------*/
function closeModal(modal) {
  modal.classList.remove("modal_open");
}

function openModal(modal) {
  modal.classList.add("modal_open");
}

function deleteCard(event) {
  event.target.closest(".card").remove();
}

function getCardElement(cardInfo) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardName = cardElement.querySelector(".card__image-name");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardImage.src = cardInfo.link;
  cardImage.alt = "View of " + cardInfo.name;
  cardName.textContent = cardInfo.name;
  cardImage.addEventListener("click", function () {
    cardPopupImage.src = cardInfo.link;
    cardPopupText.textContent = cardInfo.name;
    openModal(cardPopupModal);
  });
  deleteButton.addEventListener("click", deleteCard);
  return cardElement;
}

/* ----------------------------------------------------------------------*/
/*                              Event Listeners
/*-----------------------------------------------------------------------*/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileSubtitleInput.value = profileSubtitle.textContent;
  // profileEditModal.classList.add("modal_open");
  openModal(profileEditModal);
});

// profileCloseButton.addEventListener("click", () => {
//   closeModal(profileEditModal);
// });

cardAddButton.addEventListener("click", () => {
  openModal(cardAddModal);
});

// cardCloseButton.addEventListener("click", () => {
//   closeModal(cardAddModal);
// });
// cardPopupCloseButton.addEventListener("click", () => {
//   closeModal(cardPopupModal);
// });
modalCloseButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    const modal = closeButton.closest(".modal");
    closeModal(modal);
  });
});

initialCards.forEach((cardInfo, deleteButton) => {
  const cardElement = getCardElement(cardInfo);
  cardsList.append(cardElement);
});

/* ----------------------------------------------------------------------*/
/*                              Event Handlers
/*-----------------------------------------------------------------------*/
profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closeModal(profileEditModal);
});

cardAddForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const cardElement = getCardElement({
    name,
    link,
  });
  cardsList.prepend(cardElement);
  closeModal(cardAddModal);
});

const likeButtons = document.querySelectorAll(".card__like-button");
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button-active");
  });
});
const card = document.querySelectorAll(".card");
console.log(card);

// deleteButtons.forEach((deleteButton) => {
//   deleteButton.addEventListener("click", () => {
//     deleteButton.classList.remove(card);
//   });
// });
