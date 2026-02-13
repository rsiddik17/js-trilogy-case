const showNotification = (message) => {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.append(notification);
    setTimeout(() => notification.remove(), 3000);
}

export default showNotification;