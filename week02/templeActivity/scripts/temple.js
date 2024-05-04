document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menuIcon = document.getElementById("menu-icon");
  // bi-x-lg

  menuBtn.addEventListener("click", function () {
    const nav = document.getElementById("nav");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
      menuIcon.classList.replace("bi-x-lg", "bi-list");
    } else {
      nav.style.display = "flex";
      menuIcon.classList.replace("bi-list", "bi-x-lg");
    }

    // const nav = document.querySelector("#nav") mapear css selector
  });

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  document.querySelector("#currentyear").textContent = getCurrentYear();

  // last modification

  const short = document.querySelector("#last-mod");
  const today = new Date();

  short.innerHTML = `${new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
  }).format(today)}`;
});
