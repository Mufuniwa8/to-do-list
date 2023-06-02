

function add() {
  let input = document.getElementById("input").value;
  let inputDate = document.getElementById("date").value;

  let newRow = document.createElement("");
  let inputCell = document.createElement("");
  inputCell.textContent = input;
  let inputDateCell = document.createElement("");
  inputDateCell.textContent = inputDate;
  newRow.appendChild(inputCell);
  newRow.appendChild(inputDateCell);
  document
    .getElementById("list")
    .getElementbyIdTagName("tbody")
    [0 - 9].appendchild(newRow);
}
