window.onload = () => {
  const task = document.getElementById("Task");
  const myList = document.getElementById("my-list");
  const button = document.getElementById("my-button");

  button.onclick = function () {
    let elementList = document.createElement("li");
    let newbutton = document.createElement("button");

    elementList.innerText = task.value;
    if (task.value !== "") {
      myList.appendChild(elementList);
      task.value = "";
      elementList.addEventListener("click", function (e) {
        console.log(e.target);
        e.target.classList.add("linethrough");
        elementList.appendChild(newbutton);
        newbutton.addEventListener("click", function (e) {
          e.target.parentElement.remove();
        });
      });
    }
  };
};
