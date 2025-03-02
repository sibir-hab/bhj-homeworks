const cookieImage = document.getElementById("cookie"); // Получаем элемент изображения файла cookie
const cookieClick = document.getElementById("clicker__counter"); // Получаем элемент счетчика кликов
let checkingSize = false; // Переменная для проверки размера элемента
// Функция при нажатии на изображение файла cookie //
cookieImage.onclick = function () {
  cookieImage.classList.contains("clicker__cookie"); // Проверяем, есть ли класс "clicker__cookie" у изображения файла cookie

  let currentClicks = parseInt(cookieClick.textContent); // Принемаем строку с текущим количеством кликов и преобразуем ее в число
  cookieClick.textContent = currentClicks + 1; // Увеличиваем количество кликов на 1 и обновляем текст элемента счетчика
  // Функция для проверки размера элемента //
  if (checkingSize == true) {
    document.getElementById("cookie").width = "200";
    checkingSize = false;
  } else {
    document.getElementById("cookie").width = "250";
    checkingSize = true;
  }
};