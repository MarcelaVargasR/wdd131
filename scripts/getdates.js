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
