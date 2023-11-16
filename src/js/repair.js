const repair = document.querySelector(".repair");
const button = repair.querySelector(".btn-wrapper__hide-show");
const buttonImg = repair.querySelector(".btn-wrapper__expand");
const items = Array.from(repair.querySelectorAll(".repair__item"));

for (let i = 0; i < items.length; i++) {
  items[i].classList.add(`hide-desktop-items`, `hide-tablet-items`);
}

button.addEventListener("click", () => {
  button.classList.toggle("content-hidden");
  if (button.classList.contains("content-hidden")) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(`show-tablet-items`, `show-desktop-items`);
      items[i].classList.add(`hide-tablet-items`, `hide-desktop-items`);
    }
    buttonImg.classList.remove(`rotate`);
    button.textContent = "Показать все";
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(`hide-tablet-items`, `hide-desktop-items`);
      items[i].classList.add(`show-tablet-items`, `show-desktop-items`);
    }
    buttonImg.classList.add(`rotate`);
    button.textContent = "Скрыть";
  }
});

// console.log("heyy");
