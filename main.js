let userNumber = prompt("Enter your number: ");
let userPower = prompt("Your number that you want to write to the power")


function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}

alert("The number you entered and the number you entered to the power = " + pow(userNumber, userPower))
