const confirmModal = document.getElementById("confirmModal");
const modalMessage = document.getElementById("modalMessage");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const confirmModalBtn = document.getElementById("confirmModalBtn");

let onConfirmCallback = null;

const closeModal = () => {
    confirmModal.classList.remove("todo-app__modal-overlay--active");
    onConfirmCallback = null;
}

export const initModal = () => {
    cancelModalBtn.addEventListener("click", closeModal);

    confirmModal.addEventListener("click", (e) => {
        if(e.target === confirmModal) {
            closeModal();
        }
    })

    confirmModalBtn.addEventListener("click", () => {
        if(onConfirmCallback) {
            onConfirmCallback();
        }
        closeModal();
    })
}

export const showConfirmModal = (message, actionCallback) => {
    modalMessage.textContent = message;

    onConfirmCallback = actionCallback;

    confirmModal.classList.add("todo-app__modal-overlay--active");
}