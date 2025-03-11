document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");
  
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const tabNumber = this.dataset.tab;
  
        // Удаляем класс "active" у всех кнопок и контентов
        buttons.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));
  
        // Добавляем класс "active" для выбранной вкладки
        this.classList.add("active");
        document.getElementById(`tab-${tabNumber}`).classList.add("active");
      });
    });
  });