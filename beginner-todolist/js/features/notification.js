export const showNotification = (message) => {
  const notifcation = document.createElement("div");
  notifcation.className = "notification";
  notifcation.textContent = message;
  document.body.append(notifcation);
  setTimeout(() => notifcation.remove(), 3000);
};
