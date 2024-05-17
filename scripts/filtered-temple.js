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

  // week 04

  // TEMPLE CARDS

  const temples = [
    {
      templeName: "San Juan, Puerto Rico",
      location: "San Juan, Puerto Rico",
      dedicated: "2024, May, 15",
      area: 15000,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-juan-puerto-rico-temple/san-juan-puerto-rico-temple-48152-main.jpg",
    },
    {
      templeName: "Budapest, Hungria",
      location: "Budapest, Hungria",
      dedicated: "2024, March, 4",
      area: 18000,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/budapest-hungary-temple/budapest-hungary-temple-45608-main.jpg",
    },
    {
      templeName: "Coban, Guatemala ",
      location: "Coban, Guatemala",
      dedicated: "2024, June, 9",
      area: 8800,
      imageUrl: "./images/coban-guatemala.jpeg",
    },
    {
      templeName: "San Salvador, El Salvador",
      location: "San Salvador, El Salvador",
      dedicated: "2011, August, 21",
      area: 27986,
      imageUrl: "./images/EL-SALVADOR-SAN-SALVADOR.jpg",
    },
    {
      templeName: "Los Olivos, Peru",
      location: "Los Olivos, Peru",
      dedicated: "2024, January, 14",
      area: 47413,
      imageUrl: "./images/los-olivos-peru.png",
    },
    {
      templeName: "Quito, Ecuador",
      location: "Quito, Ecuador",
      dedicated: "2022, November, 20",
      area: 36780,
      imageUrl: "./images/quito1.jpg",
    },
    {
      templeName: "Brazilia, Brazil",
      location: "Brazilia, Brasil",
      dedicated: "2023, September, 17",
      area: 116642,
      imageUrl: "./images/templo-de-brasilia-brasil.webp",
    },
    {
      templeName: "Okinawa, Japan",
      location: "Okinawa, Japan",
      dedicated: "2023, November, 12",
      area: 12437,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg",
    },
    {
      templeName: "Salt Lake, Utah, United States",
      location: "Utah, United States",
      dedicated: "1893, April, 4-24",
      area: 382207,
      imageUrl: "./images/utah-temple.jpg",
    },
  ];

  // FILTER
  //Respond to the main navigation menu items by filtering and displaying the temples as follows

  let filteredTemples = temples;
  function displayTemples(sectionName) {
    const templeCardsContainer = document.getElementById(
      "templeCardsContainer"
    );
    //clearing all the content inside the templeCardsContainer
    templeCardsContainer.innerHTML = "";
    const name = document.createElement("h2");
    name.textContent = sectionName;
    name.style.textTransform = "capitalize";
    name.classList.add("heading-text");
    templeCardsContainer.appendChild(name);
    // Loop through the temples array and create temple cards
    filteredTemples.forEach((temple) => {
      const templeCard = createTempleCard(temple);
      templeCardsContainer.appendChild(templeCard);
    });
  }

  const nav = document.getElementById("nav");
  nav.addEventListener("click", function (event) {
    if (event.target.id === "home") {
      filteredTemples = temples;
    } else if (event.target.id === "old") {
      // temples built before 1900
      filteredTemples = temples.filter(function (temple) {
        const currentTempleYear = parseInt(temple.dedicated.split(",")[0]);
        return currentTempleYear < 1900;
      });
      console.log(filteredTemples);
    } else if (event.target.id === "new") {
      // temples built after 2000
      filteredTemples = temples.filter(function (temple) {
        const currentTempleYear = parseInt(temple.dedicated.split(",")[0]);
        return currentTempleYear > 2000;
      });
    } else if (event.target.id === "large") {
      // temples larger than 90000 square feet
      filteredTemples = temples.filter(function (temple) {
        return temple.area > 90000;
      });
    } else if (event.target.id === "small") {
      //temples smaller than 10000 square feet
      filteredTemples = temples.filter(function (temple) {
        return temple.area < 10000;
      });
    }

    displayTemples(event.target.id);
  });

  //Loop through the array and create "temple cards" for each temple by displaying
  function createTempleCard(temple) {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    const image = new Image();
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy"; //Native Lazy Loading

    const name = document.createElement("h2");
    name.textContent = temple.templeName;
    name.classList.add("temple-name");

    const location = document.createElement("p");
    location.textContent = "Location: " + temple.location;
    location.classList.add("location");

    const dedicated = document.createElement("p");
    dedicated.textContent = "Dedicated: " + temple.dedicated;
    dedicated.classList.add("dedicated");

    const area = document.createElement("p");
    area.textContent = "Area: " + temple.area + " square feet";
    area.classList.add("area");

    templeCard.appendChild(image);
    templeCard.appendChild(name);
    templeCard.appendChild(location);
    templeCard.appendChild(dedicated);
    templeCard.appendChild(area);

    return templeCard;
  }

  const templeCardsContainer = document.getElementById("templeCardsContainer");

  displayTemples("home");
});
