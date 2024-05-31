let id = 0;

document.getElementById("add").addEventListener("click", () => {
  let table = document.getElementById("table");
  let length = document.getElementById("table").rows.length;
  let row = table.insertRow(length);
  row.setAttribute("id", `item-${id}`);

  row.insertCell(0).innerHTML = `<strong>${length}</strong>`;

  let fName = document.getElementById("fName").value;
  row.insertCell(1).innerHTML = fName;
  let lName = document.getElementById("lName").value;
  row.insertCell(2).innerHTML = lName;
  let handle = document.getElementById("handle").value;
  row.insertCell(3).innerHTML = handle;
});
