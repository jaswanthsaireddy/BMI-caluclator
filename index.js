let userName = document.querySelector("#name input");

let userWeight = document.querySelector("#weight input");

let userheight = document.querySelector("#height input");

let errorMessage = document.querySelector("#error-message");

let BMIResult = document.querySelector("#BMI-result input")

let caluclateButton = document.querySelector("#caluclate")

// report data



let nameData = document.querySelector("#name-report-data")

let weightData = document.querySelector("#weight-report-data")

let heightData = document.querySelector("#height-report-data")

let BMIData = document.querySelector("#BMI-report-data")

let editData = document.querySelector("#edit-report-data")

let deleteData = document.querySelector("#delete-report-data")

let report = document.querySelector(".report-row")


// lets add an event listener to it

caluclateButton.addEventListener("click",caluclateBMIOfUser);


 function caluclateBMIOfUser(){
   let sqaureOfHeight = parseFloat(userheight.value) * parseFloat(userheight.value)

   let BMI = parseFloat(userWeight.value) / parseFloat(sqaureOfHeight)

   let catoegryData ;
    errorMessage.style.display = "none";
    if (parseFloat(BMI) > 0) {
       BMIResult.value = `${parseFloat(BMI)}`
      //  nameData.innerHTML = `${userName.value}`
      //  weightData.innerHTML = `${userWeight.value}`
      //  heightData.innerHTML = `${userheight.value}`
      //  BMIData.innerHTML = `${parseFloat(BMI)}`
       if (0< parseFloat(BMI)  && parseFloat(BMI)< 18.5) {
        catoegryData = "Under-weight";   
       }
       else if (18.5 <parseFloat(BMI) && parseFloat(BMI) < 24.9){
        catoegryData = "Healthy-weight";
        console.log
       }
       else if (25 <parseFloat(BMI) && parseFloat(BMI)< 29.9){
        catoegryData = "Over-weight";
       }
       else if (parseFloat(BMI) > 30){
        catoegryData = "Obese";
       }
    } else {
        errorMessage.innerHTML = "Please enter positive weights and heights"
        errorMessage.style.display = "block";
    }
    
    displayReportCard(BMI,catoegryData);

 }


 function displayReportCard(BMI_value,catoegryData){
   report.innerHTML += `<tr><td id="name-report-data">${userName.value}</td>
   <td id="weight-report-data">${userWeight.value}</td>
   <td id="height-report-data">${userheight.value}</td>
   <td id="BMI-report-data">${parseFloat(BMI_value)}</td>
   <td id="catoegry-report-data">${catoegryData}</td>
   <td onclick = "editDataFromReport(this)" id="edit-report-data"><button id="edit">Edit</button></td>
   <td onclick = "deleteDataFromReport(this)" id="delete-report-data"><button id="delete">Delete</button></td></tr>`
   userName.value = ""
   userheight.value = ""
   userWeight.value = ""
   BMIResult.value = ""



 }

 function deleteDataFromReport(k){
   k.parentElement.remove()
 }

 function editDataFromReport(k){
   k.parentElement.remove()
   userName.value = k.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
   userWeight.value = k.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
   userheight.value = k.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
   BMIResult.value = k.previousElementSibling.previousElementSibling.innerHTML;
 }

 let BMIValuesOfUsers = {
   name : "jaswanth",
   weight : "60",
   height : 1.78,
   BMI_ : 19.677,
   categery : "healhty"
 }

 localStorage.setItem("BMIValuesOfUsers",BMIValuesOfUsers)

 BMIValuesOfUsers[0].push(name,userName.value)

