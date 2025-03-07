const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (faqItem) {
  const question = faqItem.querySelector(".question");
  const btn = faqItem.querySelector(".btn");
  const answerContainer = faqItem.querySelector(".answer-container");

  const toggleAnswer = () => {
    answerContainer.classList.toggle("active");
    btn.src = answerContainer.classList.contains("active")
      ? "./assets/images/icon-minus.svg"
      : "./assets/images/icon-plus.svg";
  };

  question.addEventListener("click", toggleAnswer);
  btn.addEventListener("click", toggleAnswer);
});
