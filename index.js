
function formatFullName(firstName, lastName){
    if(firstName===undefined || lastName===undefined || typeof firstName !== 'string'){
        return "Invalid name input"
    }
    lastName = lastName.substring(0,1).toUpperCase() + lastName.substring(1).toLowerCase() //last name formatted
    firstName = firstName.substring(0,1).toUpperCase() + firstName.substring(1).toLowerCase() //first name formatted
    return `${lastName}, ${firstName}`;
    //return lastName + ", " + firstName
}

let resultName = formatFullName("arshpreet","kaur")
// let result = formatFullName()
console.log(resultName)

function calculateTotalCost(price, quantity, taxRate){
    if(typeof price !== "number" || typeof quantity !== "number" || typeof taxRate !== "number"){
        return "Invalid Input"
    }
    const totalCost = (price * quantity) * (1 + taxRate);
    return totalCost
}

const resultCost = calculateTotalCost(25,2,0.25); 
console.log(resultCost);
