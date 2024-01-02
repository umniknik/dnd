// TODO: write code here

import addMessage from "./addMessage";
import closeButton from "./closeButton";
import dnd from "./dnd";

const wraper = document.querySelector(".wraper");

const savedHTML = localStorage.getItem("customCode"); // достаем из локального хранилища сохраненный код

if (savedHTML) {
  // проверяем есть ли код, если есть, то...
  wraper.innerHTML = savedHTML; // воссоздаем содержимое из сохраненной строки HTML
  //Теперь надо на все крестики в сообщениях снова повесить слушатели, для удаления сообщений
  const messages = document.querySelectorAll(".messages"); // берем все сообщения в константу

  //пробегаемся по всем сообщениям, у каждого берем крестик и вешаем на него слушатель удаления сообщения
  messages.forEach((element) => {
    const closeButtonMessage = element.querySelector(".close-button");
    // Добавляем обработчик события для удаления сообщения
    closeButtonMessage.addEventListener("click", function () {
      element.remove();
    });
  });
}

dnd(); //запускаем виджет, который добавляем всем сообщениям возможность драк анд дроп

//вешаем слушатель на все поле
wraper.addEventListener("click", (e) => {
  //Запускаем функцию после нажатия по кнопке '+Add another card'
  if (e.target.classList.contains("button_add_another_card")) {
    closeButton(e);
  }

  if (e.target.classList.contains("button_add_card")) {
    addMessage(e);
  }

  if (e.target.classList.contains("button_close_input")) {
    closeButton(e);
  }
});
