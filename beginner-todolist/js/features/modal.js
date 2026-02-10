const modalOverlay = document.getElementById("confirmModal");
const modalMessage = document.getElementById("modalMessage");
const cancelBtn = document.getElementById("cancelModalBtn");
const confirmBtn = document.getElementById("confirmModalBtn");

let onConfirmCallback = null;

export const initModal = () => {
  cancelBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  confirmBtn.addEventListener("click", () => {
    if (onConfirmCallback) {
      onConfirmCallback();
    }
    closeModal();
  });
};

export const showConfirmModal = (message, actionCallback) => {
  modalMessage.textContent = message;
  onConfirmCallback = actionCallback;

  modalOverlay.classList.add("todo-app__modal-overlay--active");
};

const closeModal = () => {
  modalOverlay.classList.remove("todo-app__modal-overlay--active");
  onConfirmCallback = null;
};
