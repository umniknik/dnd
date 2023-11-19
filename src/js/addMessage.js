import closeButton from "./closeButton";
export default function addMessage(e) {
  const wraper = e.target.closest(".wraper_card"); // находим родителя у кликнутого элемента
  const input = wraper.querySelector(".input_text"); // находим поле вводу у родителя кликнутого элемента

  if (input.value) {
    // проверяем не пустое ли поле ввода
    const message = document.createElement("div"); // создаем элемент сообщения
    message.textContent = input.value; // заполняем сообщение текстом
    console.log(message);

    const listOfMessages = wraper.querySelector(".list_of_messages"); //находим поле, где будут выводиться сообщения
    listOfMessages.appendChild(message); // вставляем в поле для вывода сообщений только что созданное сообщение
    input.value = ""; // опусташаем поле для вода сообщений

    closeButton(e); // скрываем кнопки
  }
}
