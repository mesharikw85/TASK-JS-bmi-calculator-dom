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

  if (age >= 19 && age <= 65) {
    if (calculateBMI >= 14 && calculateBMI <= 18.5) {
      calculateBMI = "Healthy";
    } else {
      calculateBMI = "Not Healthy";
    }
  } else if (age >= 6 && age <= 19) {
    if (calculateBMI >= 15 && calculateBMI <= 24) {
      calculateBMI = "Healthy";
    } else {
      calculateBMI = "Not Healthy";
    }
  } else {
    if (bmi >= 18.5 && bmi <= 24.9) {
      calculateBMI = "Healthy";
    } else {
      calculateBMI = "Not Healthy";
    }
  }
  
  alert(`Your BMI is  ${calculateBMI}`);
}


 
