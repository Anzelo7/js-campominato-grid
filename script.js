console.log('JS OK!');


// L'utente clicca su un bottone che genererà una griglia quadrata.
const button = document.getElementById('init-btn');

button.addEventListener('click', function () {
    console.log('cliccato');
    // prendo l'elemento grid
    const gridElement = initGrid();

    const cellValues = getRandomNumbersArray()

    // creo le celle con un numero progressivo, da 1 a 100. 
    for (let index = 0; index < cellValues.length; index++) {
        const numberToDisplay = cellValues[index];
        const cellElement = createCell(numberToDisplay);

        // aggiungo l'elemento alla grid
        gridElement.append(cellElement);

    }
})

function getRandomNumbersArray() {
    const array = [];

    while (array.length < 100) {
        const random = Math.floor(Math.random() * 100) + 1;
        if (!array.includes(random)) {
            array.push(random);
        }
    }

    return array;

}


function getRandomNumbersArrayAlternative() {
    const array = [];

    for (let index = 1; index <= 100; index++) {
        array.push(index);
    }
    console.log(array);
    array.sort(function () {
        const random = Math.round(Math.random());
        return random === 1 ? 1 : -1;
    })
    console.log(array);

    return array;

}


const initGrid = () => {
    const element = document.getElementById('grid');
    element.innerHTML = '';
    return element
}

function createCell(label) {
    const cellElement = document.createElement('div');
    cellElement.className = 'cell';
    cellElement.innerHTML = label;
    // l'utente può cliccare ogni cella, 
    cellElement.addEventListener('click', function () {
        changeCellColor(cellElement, label);
    });
    return cellElement;
}

function changeCellColor(cell, label) {
    // emette un messaggio in console con il numero della cella cliccata.
    console.log('cella cliccata', label);
    // la cella cliccata si colora di un colore se pari, di un altro colore se dispari
    const isEven = isNumberEven(label);

    if (isEven) {
        cell.classList.add('even');
        //cellElement.className += ' even';
    } else {
        cell.classList.add('odd'); // this cambia perché uso function(){}
    }

}

const isNumberEven = (number) => number % 2 === 0;