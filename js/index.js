function GenerateRandomNumber(amountOfDigits) {
    return Math.floor(Math.random() * Math.pow(10,amountOfDigits));
}

var correct = 0;
var total = 0;

function DateToStr(date) {
    return "Date: " + date.getDate() + "/"
                + (date.getMonth()+1)  + "/" 
                + date.getFullYear() + " @ "  
                + date.getHours() + ":"  
                + date.getMinutes() + ":" 
                + date.getSeconds();
}
function EndScreen() {
    document.getElementById("main").innerHTML = `<p> You solved ${total} questions and got ${correct} correct, with an accuracy of ${Math.round(correct/total * 100)}% </p>`;
}

function PlayRound(AmountOfDigits,TimeToFinish) {
    const currentDate = new Date();
    console.log(DateToStr(currentDate),DateToStr(TimeToFinish));
    console.log(currentDate >= TimeToFinish);
    if (currentDate >= TimeToFinish) {
        EndScreen();
        return;
    }
    total += 1;
    var NumberA = GenerateRandomNumber(AmountOfDigits);
    var NumberB = GenerateRandomNumber(AmountOfDigits);

    document.getElementById("main").innerHTML = `<p> ${NumberA} x ${NumberB} =   </p>     <input class="box" id="answer" type="text" placeholder="Please Type The Answer">`;
    const node = document.getElementById("answer");
    node.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            if (NumberA * NumberB == parseInt(document.getElementById("answer").value)) {
                console.log("correct")
                correct += 1;
            }
            else {
                console.log("incorrect, answer is ",NumberA*NumberB);
            }
            PlayRound(AmountOfDigits,TimeToFinish);
        }
    });
}


function Game() {
    var TimeInSecs = parseInt(document.getElementById("time").value);
    var AmountOfDigits =  parseInt(document.getElementById("digits").value);

    var endDate = new Date();
    endDate.setSeconds(endDate.getSeconds() + TimeInSecs);

    PlayRound(AmountOfDigits,endDate);


}
