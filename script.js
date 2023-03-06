// Your code here

const table = document.getElementsByTagName("table")[0];

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}
makeRow();
makeRow();

const addRow = document.getElementById("add-row");
addRow.addEventListener("click", makeRow);

function colorize(event) {
  const target = event.target;
  if (target.className.length) {
    target.classname = "";
  } else {
    target.className = "teal";
  }
}

table.addEventListener("click", colorize);
