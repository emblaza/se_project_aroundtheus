import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_error",
  errorClass: "modal__error_visible",
};
const addCardForm = document.querySelector("#card-add-modal");
const addCardValidator = new FormValidator(config, addCardForm);
addCardValidator.enableValidation();

const editProfileForm = document.querySelector("#profile-edit-modal");
const editProfileValidator = new FormValidator(config, editProfileForm);
editProfileValidator.enableValidation();

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
const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

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
const cardPopupImage = document.querySelector(".modal__container-image");
// const cardPopupCloseButton = document.querySelector(".modal__close-button");
const cardPopupText = document.querySelector(".modal__container-text");
const modals = document.querySelectorAll(".modal");
const cardSelector = "#card-template";
/* ----------------------------------------------------------------------*/
/*                              Functions
/*-----------------------------------------------------------------------*/
function closeModal(modal) {
  modal.classList.remove("modal_open");
  document.removeEventListener("keydown", handleEsc);
}

function openModal(modal) {
  modal.classList.add("modal_open");
  document.addEventListener("keydown", handleEsc);
}

function deleteCard(event) {
  event.target.closest(".card").remove();
}

function handleLikeButton(event) {
  event.target.classList.toggle("card__like-button-active");
}
function handleEsc(event) {
  // find the open modals

  //escape key listener using our closeModal function
  if (event.key === "Escape") {
    const modal = document.querySelector(".modal_open");
    closeModal(modal);
  }
}
// function handleImageClick() {
//   modal.addEventListener("click", (event) => {
//     if (event.target.classList.contains("modal")) {
//       openModal(modal);
//     }
//   });
// }
// function handleImageClick() {
//   cardImage.addEventListener("click", function () {
//     cardPopupImage.src = cardInfo.link;
//     cardPopupImage.alt = "View of " + cardInfo.name;
//     cardPopupText.textContent = cardInfo.name;
//   });
// }
function getCardElement(cardInfo) {
  // const cardElement = cardTemplate.cloneNode(true);
  // const cardImage = cardElement.querySelector(".card__image");
  // const cardName = cardElement.querySelector(".card__image-name");
  // const deleteButton = cardElement.querySelector(".card__delete-button");
  // const likeButton = cardElement.querySelector(".card__like-button");
  // cardImage.src = cardInfo.link;
  // cardImage.alt = "View of " + cardInfo.name;
  // cardName.textContent = cardInfo.name;
  // cardImage.addEventListener("click", function () {
  //   cardPopupImage.src = cardInfo.link;
  //   cardPopupImage.alt = "View of " + cardInfo.name;
  //   cardPopupText.textContent = cardInfo.name;

  //   openModal(cardPopupModal);
  // });
  // // deleteButton.addEventListener("click", deleteCard);
  // likeButton.addEventListener("click", handleLikeButton);

  // return cardElement;

  // console.log(cardInfo);
  const card = new Card(cardInfo, cardSelector);
  return card.getView();
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

initialCards.forEach((cardInfo) => {
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
  cardAddForm.reset();
});

// deleteButtons.forEach((deleteButton) => {
//   deleteButton.addEventListener("click", () => {
//     deleteButton.classList.remove(card);
//   });
// });
modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closeModal(modal);
    }
  });
});
