document.addEventListener("DOMContentLoaded", function () {
  let addTaskBtn = document.getElementById("addTaskBtn");
  let taskList = document.getElementById("taskList");
  let taskInput = document.getElementById("taskInput");
  /* inizio prendendo el da dom */

  /* aggiungo l'evento click al btn */

  addTaskBtn.addEventListener("click", function () {
    let taskText = taskInput.value;
    /* se non è vuoto creo una nuova task */
    if (taskText.length > 0) {
      generateTask(taskText, taskList);
      taskInput.value = ""; /* ripulisce l'input dopo l'add */
    }
  });

  /* evento click per gestire task completate e aggiungere o togliere la classe "completed" :3 */

  taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      /* se clicco sul li */
      event.target.classList.toggle(
        "completed"
      ); /* toggle della classe da stilizzare nel css */

      /* aggiungo un btn remove dinamicamente quando ho dichiarato di aver completato la task cliccando sul li */
      if (!event.target.querySelector(".btn-remove")) {
        let removeBtn = document.createElement("button");
        removeBtn.className = "btn-remove btn btn-danger text-white";
        removeBtn.textContent = "Remove Task";

        let liContainer = document.createElement("div");
        liContainer.className =
          "d-flex justify-content-between align-items-center";
        liContainer.appendChild(event.target);
        liContainer.appendChild(removeBtn);

        taskList.appendChild(liContainer);

        /* rimuovo la task quando clicco sul btn-remove */
        removeBtn.addEventListener("click", function (ev) {
          liContainer.remove();
        });
      }
    }
  });
});

let generateTask = function (taskText, taskList) {
  let taskElement = document.createElement("li"); /* creo nuovo li */
  taskElement.textContent = taskText;
  /* e lo appendo alla taskList */
  taskList.appendChild(taskElement);
  taskElement.className = "border-bottom border-success my-2";

  //   /* aggiungo un hr tra i li generati dinamicamente */
  //   let hrTraLi = document.createElement("hr");
  //   hrTraLi.className = "my-3 bg-success";
  //   taskList.appendChild(hrTraLi);

  /* facciamo che invece lo tolgo perché non so levarlo dinamicamente XD l'ho aggiunto al taskElement direttamente come b-bottom*/
};
