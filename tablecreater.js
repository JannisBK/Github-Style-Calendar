// Create a table element
const table = document.createElement('table');

// Create the header row with column headings
const headerRow = document.createElement('tr');
for (let i = 1; i <= 53; i++) {
  const th = document.createElement('th');
  th.textContent = i;
  headerRow.appendChild(th);
}
table.appendChild(headerRow);

// Create the data rows with cell indexes
for (let rowIndex = 1; rowIndex <= 7; rowIndex++) {
  const row = document.createElement('tr');
  for (let colIndex = 1; colIndex <= 53; colIndex++) {
    const cell = document.createElement('td');
    const cellIndex = (colIndex - 1) * 7 + rowIndex;
      cell.id = cellIndex;
      cell.className = "off";
    row.appendChild(cell);
  }
  table.appendChild(row);
}

// Add the table to the document body
document.body.appendChild(table);

const n = 6; //the number of days in the week where NewYear is, that are in the previous Year
const month = 30;
const month1 = 31;
const month2 = 28; //February 28 or 29
var date = 1;
var date1 = 0;
var m = 0;
var id = [0, 0];
var idstring = "";

//first days
date = 1;
date1 = n;
for (let day = date; day <= date1; day++) {

}

//January
date = date1 + 1;
date1 += month1;

for (let day = date; day <= date1; day++) {
    m += 1;
    id[0] = m;
    id[1] = 1;
    idstring = id.toString();
    document.getElementById(day).id = idstring;
}

//February
date = date1 + 1;
date1 += month2;
m = 0
for (let day = date; day <= date1; day++) {
    m += 1;
    id[0] = m;
    id[1] = 2;
    idstring = id.toString();
    document.getElementById(day).id = idstring;
}

//March
date = date1 + 1;
date1 += month1;
m = 0
for (let day = date; day <= date1; day++) {
    m += 1;
    id[0] = m;
    id[1] = 3;
    idstring = id.toString();
    document.getElementById(day).id = idstring;
}

//April
date = date1 + 1;
date1 += month;
m = 0
for (let day = date; day <= date1; day++) {
    m += 1;
    id[0] = m
    id[1] = 4
    idstring = id.toString();
    document.getElementById(day).id = idstring
}

//May
date = date1 + 1;
date1 += month1;
m = 0
for (let day = date; day <= date1; day++) {
    m += 1;
    id[0] = m;
    id[1] = 5;
    idstring = id.toString();
    document.getElementById(day).id = idstring;
}

//June
date = date1 + 1;
date1 += month;
m = 0
for (let day = date; day <= date1; day++) {
    m += 1;
    id[0] = m;
    id[1] = 6;
    idstring = id.toString();
    document.getElementById(day).id = idstring;
}

//July
date = date1 + 1;
date1 += month;
m = 0
for (let day = date; day <= date1; day++) {
    m += 1;
    id[0] = m;
    id[1] = 7;
    idstring = id.toString();
    document.getElementById(day).id = idstring;
}

//August
date = date1 + 1;
date1 += month;
m = 0
for (let day = date; day <= date1; day++) {
    m += 1;
    id[0] = m;
    id[1] = 8;
    idstring = id.toString();
    document.getElementById(day).id = idstring;
}

//September
date = date1 + 1;
date1 += month1;
m = 0
for (let day = date; day <= date1; day++) {
    m += 1;
    id[0] = m;
    id[1] = 9;
    idstring = id.toString();
    document.getElementById(day).id = idstring;
}

//October
date = date1 + 1;
date1 += month;
m = 0
for (let day = date; day <= date1; day++) {
    m += 1;
    id[0] = m;
    id[1] = 10;
    idstring = id.toString();
    document.getElementById(day).id = idstring;
}

//November
date = date1 + 1;
date1 += month1;
m = 0
for (let day = date; day <= date1; day++) {
    m += 1;
    id[0] = m;
    id[1] = 11;
    idstring = id.toString();
    document.getElementById(day).id = idstring;
}

//December
date = date1 + 1;
date1 += month;
m = 0
for (let day = date; day <= date1; day++) {
    m += 1;
    id[0] = m;
    id[1] = 12;
    idstring = id.toString();
    document.getElementById(day).id = idstring;
}

