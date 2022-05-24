const previusOpretionText = document.querySelector("#previus-operation");
const currentOperationText = document.querySelector("#corrent-oprations");
const buttons = document.querySelectorAll("#botons-container button");


class calculator {
    constructor(previusOpretionText, currentOperationText) {
        this.previusOpretionText = previusOpretionText
        this.currentOperationText = currentOperationText
        this.currentOperation = "";
    }
    //add digit to calculator screen
    addDigt(digit) {

        //Check if current operation aleardy has a dot
        if(digit === "." && this.currentOperationText.innerText.includes(".")){
            return
        }
        this.currentOperation = digit
        this.updateScreen()
    }

    //Process all calculator operation
    processOperation(operation){
        console.log(operation);
    }

    //Change values of the calculator screen
    updateScreen(){
        this.currentOperationText.innerText += this.currentOperation;
    }
}

const calc = new calculator(previusOpretionText, currentOperationText);




buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value == ".") {
            calc.addDigt(value);
        } else {
            calc.processOperation(value);
        }

    })
})