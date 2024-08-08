// Stampo in console i numeri da 1 a 100, per i multipli di 3 stampo 'Fizz', per quelli di 5 stampo 'Buzz'

for (let i = 0 ; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log('Fizz')
    } else if (i % 5 == 0 ) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}
