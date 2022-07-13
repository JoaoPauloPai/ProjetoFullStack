const previusOpretionText = document.querySelector("#previus-operation");
const currentOperationText = document.querySelector("#corrent-oprations");
const buttons = document.querySelectorAll("#botons-container button");


class calculator {
    constructor(previusOpretionText, currentOperationText) {
        this.previusOpretionText = previusOpretionText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }
    //add digit to calculator screen
    addDigt(digit) {

        //Check if current operation aleardy has a dot
        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return
        }
        this.currentOperation = digit;
        this.updateScreen();
    }

    //Process all calculator operation
    processOperation(operation) {
        //Check current value is empty
        if (this.currentOperationText.innerText === "" && operation !== "C") {
            //Change operatiuon
            if (this.previusOpretionText.innerText !== "") {
                this.changeOperation(operation);

            }
            return;
        }

        //Get current and previus value
        let operationValue
        const previus = +this.previusOpretionText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;

        switch (operation) {
            case "+":
                operationValue = previus + current;
                this.updateScreen(operationValue, operation, current, previus);
                break;
            case "-":
                operationValue = previus - current;
                this.updateScreen(operationValue, operation, current, previus);
                break;
            case "/":
                operationValue = previus / current;
                this.updateScreen(operationValue, operation, current, previus);
                break;
            case "*":
                operationValue = previus * current;
                this.updateScreen(operationValue, operation, current, previus);
                break;
            case "DEL":
                this.processDelOprator();
                break;
            case "CE":
                this.processClearCurrentOpration();
                break;
            case "C":
                this.processClearOpration();
                break;
            case "=":
                this.processEqualOperator();
                break;
            default:

                return;
        }

    }

    //Change values of the calculator screen
    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previus = null
    ) {

        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            //Check if value is zero, if it is just add current value
            if (previus === 0) {
                operationValue = current;
            }
            //add curent value to previus
            this.previusOpretionText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = "";

        }


    }
    //Change math operation
    changeOperation(operation) {
        const mathOperations = ["+", "-", "*", "/"]
        if (!mathOperations.includes(operation)) {
            return
        }
        this.previusOpretionText.innerText = this.previusOpretionText.innerText.slice(0, -1) + operation;
    }
    //Delete the last digit
    processDelOprator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);

    }
    //Clear current operation
    processClearCurrentOpration() {
        this.currentOperationText.innerText = "";
    }
    //Clear all operations
    processClearOpration() {
        this.currentOperationText.innerText = "";
        this.previusOpretionText.innerText = "";
    }
    //Process an operation
    processEqualOperator() {
        const operation = previusOpretionText.innerText.split(" ")[1]
        this.processOperation(operation);

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