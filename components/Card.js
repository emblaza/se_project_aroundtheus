export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    // this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._likeButtonEl.addEventListener("click", this._handleLikeIcon);

    this._deleteButtonEl.addEventListener("click", this._handleDeleteCard);

    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick();
    });
  }
  _handleImageClick() {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupElement.classList.add("modal_open");
  }

  _handleDeleteCard(event) {
    // this._cardElement.remove();
    // this._cardElement = null;
    event.target.closest(".card").remove();
  }

  _handleLikeIcon(event) {
    event.target.classList.toggle("card__like-button-active");
  }
  getView() {
    this._cardElement = this._getTemplate();
    this._cardTitleEl = this._cardElement.querySelector(".card__image-name");
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._likeButtonEl = this._cardElement.querySelector(".card__like-button");
    this._deleteButtonEl = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._cardTitleEl.textContent = this._name;
    this._cardImageEl.src = this._link;

    this._setEventListeners();
    return this._cardElement;
  }
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }
}
