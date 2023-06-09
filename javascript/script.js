// function handleSubmit(e) {
//   window.alert("hello");
//   e.preventDefault();
//   console.log(e);
// }

function addTableRow(name, email, birthdate, gender) {
  let nameCell, emailCell, birthDateCell, genderCell;
  // get the table
  console.log(name, email, gender, birthdate);
  let table = document.getElementById("users");
  // insert row
  let row = table.insertRow();
  nameCell = row.insertCell();
  nameCell.innerText = name;

  emailCell = row.insertCell();
  emailCell.innerText = email;

  birthDateCell = row.insertCell();
  birthDateCell.innerText = birthdate;

  genderCell = row.insertCell();
  genderCell.innerText = gender;
}
