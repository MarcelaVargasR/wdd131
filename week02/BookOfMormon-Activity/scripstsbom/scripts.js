// console.log("Holaa!");

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
  console.log(input.value);
  if (input.value === "") {
    alert("Please select");
    input.focus();
    return;
  }
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
  });

  li.textContent = input.value;
  deleteButton.textContent = "x";
  li.append(deleteButton);
  list.append(li);
  input.value = "";
  input.focus();
});
