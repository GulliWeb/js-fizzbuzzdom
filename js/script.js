// Stampo in console i numeri da 1 a 100, per i multipli di 3 stampo 'Fizz', per quelli di 5 stampo 'Buzz'
for (let i = 1 ; i <= 100; i++) {
    let output = '';
    if (i % 3 == 0 && i % 5 == 0) {
        output += 'FizzBuzz'
    } else if (i % 5 == 0 ) {
        output += 'Buzz'
    } else if (i % 3 == 0) {
        output += 'Fizz'
    } else{
        output = (i)
    }
    console.log(output);
}
  