const btns = document.querySelectorAll(".btn"); // вибір всіх елементів з класом "btn"

btns.forEach(function (btn) {
  // для кожної кнопки
  btn.addEventListener("click", function () {
    const answerContainer = btn
      .closest(".faq-item")
      .querySelector(".answer-conteiner");
    // додаємо або видаляємо клас "active"
    answerContainer.classList.toggle("active");

    // Toggle клас кнопки між 'plus' та 'minus'
    btn.classList.toggle("plus");
    btn.classList.toggle("minus");
  });
});
