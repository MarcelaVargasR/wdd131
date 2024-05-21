// FOOTER
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

// PRODUCTS REVIEW
const products = [
  {
    id: "fc-1888",
    name: "Flux Capacitor",
    avgrating: 4.5,
  },
  {
    id: "fc-2050",
    name: "Power Laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "Time Circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "Low Voltage Reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "Warp Equalizer",
    averagerating: 5.0,
  },
];

let productSelect = document.getElementById("productName");
products.forEach((product) => {
  const optionElement = document.createElement("option");
  optionElement.value = product.name;
  optionElement.textContent = product.name;
  optionElement.id = product.id;
  productSelect.appendChild(optionElement);
});

// localStorage.setItem("count", 1);

const counter = localStorage.getItem("count");
console.log(counter);
