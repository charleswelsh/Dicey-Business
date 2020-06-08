document.addEventListener("DOMContentLoaded", function() {
    let rollDiceBtn = document.getElementById("rollDice");
    let generateDiceBtn = document.getElementById("generateDice");
    let sumDiceBtn = document.getElementById("sumDice");
    sumDiceBtn.style.display = "none";
    let sumDiv = document.createElement("div");
    sumDiv.className = "sumDiv";
    let diceArray = [];

    generateDiceBtn.addEventListener("click", function (){
        new Dice("");
        document.body.removeChild(sumDiv);
    })

    rollDiceBtn.addEventListener("click", function() {
        for (i = 0 ; i < diceArray.length; i++){
           diceArray[i].roll();
        }
        if (sumDiceBtn.style.display == "none"){
        sumDiceBtn.style.display = "block";
        }
        
    })

    sumDiceBtn.addEventListener("click", function (){
        let sum = 0
        for (i = 0; i <diceArray.length; i++){
            sum = (sum + diceArray[i].value);
        }
        document.body.appendChild(sumDiv);
        sumDiv.innerText = ("="+ sum);
    })

    class Dice {
        constructor(value){
            this.value = value;
            this.diceDiv = document.createElement("div");
            this.diceDiv.className = "diceDiv"
            document.body.appendChild(this.diceDiv);
            diceArray.push(this);
        }
        roll(){
            this.value = Math.floor((Math.random() *6) + 1);
            this.diceDiv.innerText = this.value;
        }
    }
});