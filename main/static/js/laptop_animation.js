let hideTimeout; // Переменная для таймера

document.addEventListener("scroll", function () {
    let laptop = document.getElementById("laptop");
    let featuresSection = document.getElementById("features");
    let detailSection = document.querySelector(".cpu-futures"); // Блок после характеристик
    let featureBlocks = document.querySelectorAll(".feature-block");
    let featureTitle = document.getElementById("features-title");

    let featuresTop = featuresSection.getBoundingClientRect().top;
    let detailTop = detailSection.getBoundingClientRect().top; // Верхняя граница следующего блока

    // ✅ Снимаем блюр с ноутбука, когда он доходит до центра второго блока
    if (featuresTop <= window.innerHeight / 2) {
        laptop.style.filter = "blur(0)";
    } else {
        laptop.style.filter = "blur(15px)";
    }

    // ✅ Показываем заголовок и характеристики ПО ОЧЕРЕДИ
    if (featuresTop <= window.innerHeight / 3) {
        featureTitle.classList.add("show");
        featureBlocks.forEach((block, index) => {
            setTimeout(() => {
                block.classList.add("show");
            }, index * 200); // Добавляем задержку появления каждого блока
        });
    }

    if (detailTop <= window.innerHeight / 1.2) {
        // ✅ Убираем ноутбук плавно
        laptop.style.opacity = "0";

        // ❗ Ждём завершения анимации перед display: none
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            laptop.style.display = "none";
        }, 500); // Подожди 0.5s, пока `opacity` дойдёт до 0
    } else {
        // ✅ Показываем ноутбук обратно
        clearTimeout(hideTimeout); // Отменяем скрытие, если ноут должен остаться
        laptop.style.display = "block";
        setTimeout(() => {
            laptop.style.opacity = "1";
        }, 10); // Небольшая задержка, чтобы `display: block;` сработал корректно
    }
}); 