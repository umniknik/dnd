import closeButton from "./closeButton";

export default function addMessage(e) {
  const wraper = e.target.closest(".wraper_card"); // находим родителя у кликнутого элемента
  const input = wraper.querySelector(".input_text"); // находим поле вводу у родителя кликнутого элемента

  if (input.value) {
    // проверяем не пустое ли поле ввода
    const message = document.createElement("div"); // создаем элемент сообщения
    message.classList.add("messages"); // добавляем класс созданному сообщению
    message.textContent = input.value; // заполняем сообщение текстом

    // Создаем элемент крестика
    const closeButtonMessage = document.createElement("span");
    closeButtonMessage.textContent = "❌";
    closeButtonMessage.classList.add("close-button");

    // Добавляем обработчик события для удаления сообщения
    closeButtonMessage.addEventListener("click", function () {
      message.remove();
    });

    // Добавляем крестик к сообщению
    message.appendChild(closeButtonMessage);

    const listOfMessages = wraper.querySelector(".list_of_messages"); //находим поле, где будут выводиться сообщения
    listOfMessages.appendChild(message); // вставляем в поле для вывода сообщений только что созданное сообщение
    input.value = ""; // опусташаем поле для вода сообщений

    closeButton(e); // скрываем кнопки

    // Сохраняем получившийся код в локальном хранилище
    const wraperOfAll = document.querySelector(".wraper"); // берем оболочку всех сообщений, чтобы ловить клики по всему табло
    localStorage.setItem("customCode", wraperOfAll.innerHTML);
  }
}
