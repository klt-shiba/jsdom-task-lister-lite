document.addEventListener("DOMContentLoaded", () => {

  const inputMessage = document.getElementById("new-task-description");
  const submitButton = document.querySelector("input[type=submit]");
  const lists = document.getElementById(list);

  inputMessage.value;

  submitButton.addEventListener('click', function(event) {

    let listItem = document.createElement("li");
    listItem.innerHTML = inputMessage.value;
    document.getElementById("tasks").appendChild(listItem);
    event.preventDefault();

  })

});
