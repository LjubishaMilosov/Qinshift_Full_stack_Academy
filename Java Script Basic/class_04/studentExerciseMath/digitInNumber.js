function digitsInNumber(input) {

    console.log(`input: ${input}`)

    while(input >0){
        console.log(input % 10);  // this way we get the remainder
        input = parseInt(input/10); // this way we get the whole number without the remainder
        console.log(`input: ${input}`);
    }
}

digitsInNumber(243);
digitsInNumber(356412734);