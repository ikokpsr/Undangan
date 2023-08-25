document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("guestbook-form");
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const guestbookList = document.getElementById("guestbook-list");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const message = messageInput.value;

    if (name && message) {
      const entry = document.createElement("li");
      entry.innerHTML = `<strong>${name}:</strong> ${message}<div class="comment">${message}</div>`;
      guestbookList.appendChild(entry);

      nameInput.value = "";
      messageInput.value = "";
    }
  });
});
