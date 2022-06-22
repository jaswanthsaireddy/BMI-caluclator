let userName = document.querySelector("#name input");

let userWeight = document.querySelector("#weight input");

let userheight = document.querySelector("#height input");

let errorMessage = document.querySelector("#error-message");

let BMIResult = document.querySelector("#BMI-result input")

let caluclateButton = document.querySelector("#caluclate")

// report data

let catoegryData = document.querySelector("#catoegry-report-data")

let nameData = document.querySelector("#name-report-data")

let weightData = document.querySelector("#weight-report-data")

let heightData = document.querySelector("#height-report-data")

let BMIData = document.querySelector("#BMI-report-data")

let editData = document.querySelector("#edit-report-data")

let deleteData = document.querySelector("#delete-report-data")


// lets add an event listener to it

caluclateButton.addEventListener("click",caluclateBMIOfUser);


 function caluclateBMIOfUser(){
    let sqaureOfHeight = parseFloat(userheight.value) * parseFloat(userheight.value)
    let BMI = parseFloat(userWeight.value) / parseFloat(sqaureOfHeight)
    errorMessage.style.display = "none";
    if (parseFloat(BMI) > 0) {
       BMIResult.value = `${parseFloat(BMI)}`
       nameData.innerHTML = `${userName.value}`
       weightData.innerHTML = `${userWeight.value}`
       heightData.innerHTML = `${userheight.value}`
       BMIData.innerHTML = `${parseFloat(BMI)}`
       if (0< parseFloat(BMI)  && parseFloat(BMI)< 18.5) {
        catoegryData.innerHTML = "Under-weight"    
       }
       else if (18.5 <parseFloat(BMI) && parseFloat(BMI) < 24.9){
        catoegryData.innerHTML = "Healthy-weight"
       }
       else if (25 <parseFloat(BMI) && parseFloat(BMI)< 29.9){
        catoegryData.innerHTML = "Over-weight"
       }
       else if (parseFloat(BMI) > 30){
        catoegryData.innerHTML = "Healthy-weight"
       }
    } else {
        errorMessage.innerHTML = "Please enter positive weights and heights"
        errorMessage.style.display = "block";
    }
    

 }