let getHole = (index) => document.getElementById(`hole${index}`); // Получить отверстие по индексу
let deadMole = document.getElementById("dead"); // Отверстие с кротом
let lostMole = document.getElementById("lost"); // Отверстие с потерянным кротом
let found = parseInt(deadMole.textContent); // Счетчик найдиных кротов
let losts = parseInt(lostMole.textContent); // Счетчик потерянных кротов
// Проверка на проигрыш или победу //
function checkGame(deadMole, lostMole) { 
  console.log(deadMole, lostMole); // Проверка на победу
  if (deadMole === 10) { // Если кротов найдено 10
    alert("Вы победили!"); // Поздравить игрока
    location.reload(); // Перезагрузить страницу
  } else if (lostMole === 5) { // Если кротов потеряно 5
    alert("Вы приграли!"); // Сказать игроку о поражении
    location.reload(); // Перезагрузить страницу
  }
}

for (let i = 1; i <= 9; i++) { // Проходим по всем отверстиям
  getHole(i).onclick = function () { // При клике на отверстие
    if (this.className.includes("hole_has-mole")) { // Если на отверстие есть крот
      found += 1; // Увеличиваем счетчик найденных кротов
      deadMole.textContent = found; // Обновляем текст счетчика найденных кротов
    } else { // Если на отверстие нет крота
      losts += 1; // Увеличиваем счетчик потерянных кротов 
      lostMole.textContent = losts; // Обновляем текст счетчика потерянных кротов
    } 
    checkGame(found, losts); // Проверяем на победу или поражение
  };
}