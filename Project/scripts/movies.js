document.addEventListener("DOMContentLoaded", function () {
  const movies = [
    {
      id: 1,
      title: "",
      description: "",
      img: "url",
      isFavorite: false,
    },
  ];

  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const info = this.parentElement.nextElementSibling;
      info.classList.toggle("hidden");
    });
  });
});
