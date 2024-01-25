function GenerateRandomNumber(amountOfDigits) {
    return Math.floor(Math.random() * Math.pow(10,amountOfDigits));
}


function Game() {
    var TimeInSecs = parseInt(document.getElementById("time").value);
    var AmountOfDigits =  parseInt(document.getElementById("digits").value);

    var NumberA = GenerateRandomNumber(AmountOfDigits);
    var NumberB = GenerateRandomNumber(AmountOfDigits);

    console.log(NumberA,NumberB)

}
