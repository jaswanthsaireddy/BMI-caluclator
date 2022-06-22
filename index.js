let userName = document.querySelector("#name input");

let userWeight = document.querySelector("#weight input");
console.log(userWeight);
let userheight = document.querySelector("#height input");
console.log(userheight);
let errorMessage = document.querySelector("#error-message");
console.log(errorMessage);
let BMIResult = document.querySelector("#BMI-result input")
console.log(BMIResult)
let caluclateButton = document.querySelector("#caluclate")


// lets add an event listener to it

caluclateButton.addEventListener("click",caluclateBMIOfUser);


 function caluclateBMIOfUser(){
    let sqaureOfHeight = parseFloat(userheight.value) * parseFloat(userheight.value)
    let BMI = parseFloat(userWeight.value) / parseFloat(sqaureOfHeight)
    errorMessage.style.display = "none";
    if (parseFloat(BMI) > 0) {
       BMIResult.value = `${parseFloat(BMI)}`
        
    } else {
        errorMessage.innerHTML = "Please enter positive weights and heights"
        errorMessage.style.display = "block";
    }
    console.log(userName.value)

 }