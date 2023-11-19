// TODO: write code here

import addMessage from "./addMessage";
import closeButton from "./closeButton";

const wraper = document.querySelector(".wraper");

wraper.addEventListener("click", (e) => {
  //вешаем слушатель на все поле
  //Запускаем функцию после нажатия по кнопке '+Add another card'
  if (e.target.classList.contains("button_add_another_card")) {
    //addInputForMessage(e);
    closeButton(e);
  }

  if (e.target.classList.contains("button_add_card")) {
    // const textMessage = wraper.querySelector('input_text');
    addMessage(e);
  }

  if (e.target.classList.contains("button_close_input")) {
    // const textMessage = wraper.querySelector('input_text');
    closeButton(e);
  }
});
