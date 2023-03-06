// Your code here

const table = document.getElementsByTagName("table")[0];

const addRow = document.getElementById("add-row");

const select = document.getElementsByTagName("select")[0]

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

let chosenColor = 'teal'

function colorize(event) {
  const target = event.target;
  if(target.tagName !== 'td') {
    return
  }
  if (target.className === chosenColor) {
    target.className = "";
  } else {
    target.className = chosenColor;
  }
}

function changeColor(event) {
  chosenColor = event.target.value;
  } 

select.addEventListener("change", changeColor);

table.addEventListener("click", colorize);

addRow.addEventListener("click", makeRow);