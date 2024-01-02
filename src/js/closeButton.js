//При клике по крестику закрываем скрываем поле вода, крести и кнопку добавить и показываем кнопку "+Add another card "
export default function closeButton(e) {
  const wraper = e.target.closest(".wraper_card"); // находим родителя у кликнутого элемента
  const input = wraper.querySelector(".input_text"); // находим поле вводу у родителя кликнутого элемента
  const buttonAddAnotherCard = wraper.querySelector(".button_add_another_card");
  const buttonAddCard = wraper.querySelector(".button_add_card");
  const buttonCloseInputHide = wraper.querySelector(".button_close_input");

  input.classList.toggle("hide");
  buttonAddCard.classList.toggle("hide");
  buttonCloseInputHide.classList.toggle("hide");
  buttonAddAnotherCard.classList.toggle("hide");
}
