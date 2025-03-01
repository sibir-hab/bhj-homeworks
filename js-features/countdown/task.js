let timer; // Пустая переменная
let remainingTime = 59; // Значение обратного отсчета
reverseReport(); // Вызов функции
function reverseReport() {
    // Функция обратного отсчета
    document.getElementById("timer").innerHTML = remainingTime;
    remainingTime--; // Уменьшаем число на единицу
    if (remainingTime < 0) {
        clearTimeout(timer); // Останавливаем таймер
        alert("Вы победили в конкурсе!"); // Сообщение о победе
    } else {
        timer = setTimeout(reverseReport, 1000); // Запускаем таймер снова
    }
}