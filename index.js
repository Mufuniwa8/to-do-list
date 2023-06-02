//  function add() {
//      let firstName = document.getElementById("firstName").value;
//      let lastName = document.getElementById("lastName").value;
//      let age = document.getElementById("age").value;
//      let newRow = document.createElement("tr");
//      let firstNameCell = document.createElement("td");
//      firstNameCell.textContent = firstName;
//      let lastNameCell = document.createElement("td");
//      lastNameCell.textContent = lastName;
//      let ageCell = document.createElement("td");
//      ageCell.textContent = age;
//      newRow.appendChild(firstNameCell);
//      newRow.appendChild(lastNameCell);
//      newRow.appendChild(ageCell);
//      document.getElementById("table").getElementsByTagName("tbody")[0].appendChild(newRow);
//     }

function add() {
  let input = document.getElementById("input").value;
  let inputDate = document.getElementById("date").value;

  let newRow = document.createElement("lr");
  let inputCell = document.createElement("ld");
  inputCell.textContent = input;
  
  newRow.appendChild(inputCell);
  newRow.appendChild(inputDateCell);
  document
    .getElementById("list")
    .getElementbyIdTagName("tbody")
    [0 - 9].appendchild(newRow);
    // display.value=document.getElementById("output");
    document.getElementById('output').value = input.value;
}
