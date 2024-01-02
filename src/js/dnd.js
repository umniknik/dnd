export default function dnd() {
  const wraper = document.querySelector(".wraper"); // берем оболочку всех сообщений, чтобы ловить клики по всему табло
  wraper.addEventListener("mousedown", (e) => {
    // вешаем слушатель нажатия мыши на оболочку
    if (e.target.classList.contains("messages")) {
      // если елемент на который нажали является сообщением, т.е. содержит класс "messages", то
      e.preventDefault(); // удаляем стандартн настройки, чтобы текст сообщений не выделялся при перетаскивании с нажатой кнопкой
      const message = e.target; //сохраняем нажатое сообщение в константу
      message.classList.add("dragget"); // добавляем сообщению класс с абсолюьным позиционированием, вырывает его из списка сообщений

      //действия при отпускаии клавиши мыши
      const onMouseUp = (e) => {
        message.classList.remove("dragget"); // удаляем у перетаскиваемого сообщения класс относительного позиционирования

        if (e.target.classList.contains("messages")) {
          //проверяем, если мы отпустили клавишу над сообщениями, то...
          const mouseUpItem = e.target; //сохраняем в константу элемент на которым отпустили кнопку
          const listOfMessages = mouseUpItem.closest(".list_of_messages"); //сохраняем в констунту элемент со списком сообщений, в котором сожержится сообщение над которым отпустили кнопку
          listOfMessages.insertBefore(message, mouseUpItem); //вставляем перетаскиваемое сообщение перед сообщением над которым отпустили кнопку
        }

        document.removeEventListener("mouseup", onMouseUp); // удаляем слушатель отпускания клавиши
        document.removeEventListener("mouseover", onMouseOver); // удаляем слушатель действия при нажатой клавише

        // Сохраняем получившийся код в локальном хранилище
        //debugger;
        const wraperOfAll = document.querySelector(".wraper"); // берем оболочку всех сообщений, чтобы ловить клики по всему табло
        localStorage.setItem("customCode", wraperOfAll.innerHTML);
      };

      //действия при удержании клавиши мыши (перемешаем сообщение по доске вслед за курсором)
      const onMouseOver = (e) => {
        message.style.top = e.clientY + "px";
        message.style.left = e.clientX + "px";
      };

      document.addEventListener("mouseup", onMouseUp); // добавляем слушатель при отпускаии клавиши в любом месте документа

      document.addEventListener("mouseover", onMouseOver); //добавляем слушатель выполнения функции при удержании нажатой клавиши мыши
    }
  });
}
