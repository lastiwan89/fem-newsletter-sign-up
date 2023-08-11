const inputEl = document.querySelector("input");
const dismissEl = document.querySelector(".popup__button");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  const inputValue = inputEl.value;
  document.querySelector(".main").classList.add("active");
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".email").textContent = inputValue;
  e.preventDefault();
});

dismissEl.addEventListener("click", (e) => {
  document.querySelector(".main").classList.remove("active");
  document.querySelector(".popup").classList.remove("active");
  e.preventDefault();
});
