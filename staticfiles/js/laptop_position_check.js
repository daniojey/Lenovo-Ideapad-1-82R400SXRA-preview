document.addEventListener("DOMContentLoaded", function () {
    const laptop = document.getElementById("laptop");
    const hero = document.getElementById("hero");
    const features = document.getElementById("features");
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= window.innerHeight
      );
    }
  
    // Проверяем, находится ли #hero или #features в зоне видимости
    if (isElementInViewport(hero) || isElementInViewport(features)) {
      laptop.style.display = "block"; // Показываем ноутбук
      setTimeout(() => {
        laptop.style.opacity = "1"
      }, 500);
    }
  });    