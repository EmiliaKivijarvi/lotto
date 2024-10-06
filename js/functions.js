const numbersTable = document.getElementById('numbers');
const extraNumbersTable = document.getElementById('additional-numbers');

const mainTableRow = document.createElement('tr');
const extraTableRow = document.createElement('tr');

let lottonumbers = [];

while (lottonumbers.length < 9) {
    let randomNumber = Math.floor(Math.random() * 37) + 1;
    if (!lottonumbers.includes(randomNumber)) {
        lottonumbers.push(randomNumber);
    }
}

let mainNumbers = lottonumbers.slice(0, 7).sort((a, b) => a - b);
let extraNumbers = lottonumbers.slice(7, 9).sort((a, b) => a - b);

mainNumbers.forEach(num => {
    let cell = document.createElement('td');
    cell.classList.add('numbers');
    cell.textContent = num;
    mainTableRow.appendChild(cell);
});

extraNumbers.forEach(num => {
    let cell = document.createElement('td');
    cell.classList.add('additional-numbers');
    cell.textContent = num;
    extraTableRow.appendChild(cell);
});


numbersTable.appendChild(mainTableRow);
extraNumbersTable.appendChild(extraTableRow);
