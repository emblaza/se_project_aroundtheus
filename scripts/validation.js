// const modalConfiguration = {
//   formSelector: ".modal__form",
//   inputSelector: ".modal__input",
//   submitButtonSelector: ".modal__save-button",
//   inactiveButon: "modal__save-button_disabled",
//   inputError: "modal__input_error",
//   errorClass: "modal__error_visible",
// };
// function showInputError(formElement, inputElement, configuration) {
//   const errorMessage = formElement.querySelector(
//     "#" + inputElement.id + "-error"
//   );
//   inputElement.classList.add(formElement.inputError);
//   errorMessage.textContent = inputElement.validationMessage;
//   inputElement.classList.add(configuration.errorClass);
// }

// function hideInputError(formElement, inputElement, configuration) {
//   const errorMessage = formElement.querySelector(
//     "#" + inputElement.id + "-error"
//   );
//   inputElement.classList.remove(formElement.inputError);
//   errorMessage.textContent = inputElement.validationMessage;
//   inputElement.classList.remove(configuration.errorClass);
// }

// function toggleButton(inputElements, submitButton, configuration) {
//   let invalidInput = false;
//   inputElements.forEach((inputElement) => {
//     if (!inputElement.validity.valid) {
//       invalidInput = true;
//     }
//   });

//   if (invalidInput) {
//     submitButton.classList.add(configuration.inactiveButon);
//     submitButton.disabled = true;
//   } else {
//     submitButton.classList.remove(configuration.inactiveButon);
//     submitButton.disabled = false;
//   }
// }

// function checkInputValidity(formElement, inputElement, configuration) {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, configuration);
//   } else {
//     hideInputError(formElement, inputElement, configuration);
//   }
// }

// function setEventListeners(formElement, configuration) {
//   const inputSelector = configuration.inputSelector;
//   const inputElements = Array.from(formElement.querySelectorAll(inputSelector));
//   const submitButton = formElement.querySelector(
//     configuration.submitButtonSelector
//   );
//   inputElements.forEach((inputElement) => {
//     inputElement.addEventListener("input", (event) => {
//       checkInputValidity(formElement, inputElement, configuration);
//       toggleButton(inputElements, submitButton, configuration);
//     });
//   });
// }

// function enableValidation(configuration) {
//   const formElements = Array.from(
//     document.querySelectorAll(configuration.formSelector)
//   );
//   formElements.forEach((formElement) => {
//     formElement.addEventListener("submit", (event) => {
//       event.preventDefault();
//     });
//     setEventListeners(formElement, configuration);
//   });
// }

// enableValidation(modalConfiguration);
