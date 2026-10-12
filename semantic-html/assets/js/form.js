const form = document.querySelector(".ticket-form");
const contactMethod = form.elements.preferredContact;
const contactField = document.querySelector("#contact-field");
const contactInput = form.elements.contactValue;
contactMethod.addEventListener("change", () => {
  const needsContact = contactMethod.value !== "email";
  contactField.hidden = !needsContact;
  contactInput.disabled = !needsContact;
  contactInput.required = needsContact;
  contactInput.type = contactMethod.value === "phone" ? "tel" : "text";
  contactInput.autocomplete = contactMethod.value === "phone" ? "tel" : "off";
  contactField.querySelector("label").textContent = contactMethod.value === "phone" ? "Телефон" : "Имя пользователя Telegram";
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = document.querySelector(".form-result");
  result.textContent = "Данные проверены. Это учебная форма: обращение не отправлено.";
  result.hidden = false;
  result.focus();
});
