// Stampo in console i numeri da 1 a 100, per i multipli di 3 stampo 'Fizz', per quelli di 5 stampo 'Buzz'
for (let i = 1 ; i <= 100; i++) {
     const cell = document.createElement('div')
     let output = '';

    if (i % 3 == 0 && i % 5 == 0) {
        output += 'FizzBuzz'
        cell.classList.add('cell-fizz-buzz')
    } else if (i % 5 == 0 ) {
        output += 'Buzz'
        cell.classList.add('cell-buzz')
    } else if (i % 3 == 0) {
        output += 'Fizz'
        cell.classList.add('cell-fizz')
    } else{
        output = (i)
    }

    // Creo e stampo gli elementi nel DOM
    const cellContainer = document.getElementById('cell-container')
    cell.classList.add('cell')
    cell.innerHTML = output
    cellContainer.appendChild(cell)
}
