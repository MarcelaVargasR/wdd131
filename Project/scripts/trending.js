document.addEventListener("DOMContentLoaded", function () {
  //   FREQUENTLY QUESTIONS
  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const info = this.parentElement.nextElementSibling;
      info.classList.toggle("hidden");
    });
  });
});
