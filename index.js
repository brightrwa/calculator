const display = document.getElementById("display")
 
function appendtodisplay(input){
  display.value += input 
}
function clearDisplay(){
diplay.value = ''
}
function calculate(){
   
    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") {
        if (b === 0) return "Cannot divide by zero";
        return a / b;
    }

    return "Invalid operator";
}


}