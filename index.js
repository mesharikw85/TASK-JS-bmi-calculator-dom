function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
height  = height / 100;
let calculateBMI = weight / (height*height);




alert (`your bmi is ${calculateBMI}`);


 
 

if (calculateBMI < 18.5) {
  calculateBMI = "Underweight";
} else if (calculateBMI >= 18.5 && calculateBMI <= 24.9) {
  calculateBMI = "Healthy Weight";
} else if (calculateBMI >= 25 && calculateBMI <= 29.9) {
  calculateBMI = "Overweight";
} else {
  calculateBMI = "Obesity";}
  
  alert (`your bmi is ${calculateBMI}`);

  if (age >= 19 && age <= 24) {
     if (calculateBMI >= 19 && calculateBMI <= 24) {
      calculateBMI = "Healthy";
    } else   {
      calculateBMI = "Not Healthy";
    }
  } else if (age >= 25 && age <= 34) {
    if  (calculateBMI >= 20 && calculateBMI <= 25) {
      calculateBMI = "Healthy";
    } else {
      calculateBMI = "Not Healthy";
    }

  } else if (age >= 35 && age <= 44) {
    if  (calculateBMI >= 21 && calculateBMI <= 26) {
      calculateBMI = "Healthy";
    } else {
      calculateBMI = "Not Healthy";
    }
    
  } 
  else if (age >= 45 && age <= 54) {
    if  (calculateBMI >= 22 && calculateBMI <= 27) {
      calculateBMI = "Healthy";
    } else {
      calculateBMI = "Not Healthy";
    }
    
  } 
  else if (age >= 55 && age <= 65) {
    if  (calculateBMI >= 23 && calculateBMI <= 28) {
      calculateBMI = "Healthy";
    } else {
      calculateBMI = "Not Healthy";
    }
    
  } 
  else  (age >= 65 ) 
    if  (calculateBMI >= 24 && calculateBMI <= 29) {
      calculateBMI = "Healthy";
    } else {
      calculateBMI = "Not Healthy";
    }
    
   
  alert(`Your BMI is  ${calculateBMI}`);
}


 
