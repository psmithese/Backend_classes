const simple = ["Joy", "Abigail", "Ken"];
console.log(simple);
console.log(simple.length);

for (let a = 0; a < simple.length; a++) {

    console.log(simple);
    
}





// 1. Function that checks if student passed based on JAMB-style scoring

function checkJambResult(score) {
    if (score >= 180) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  }
  checkJambResult(70);


  // 2. Function that checks voting eligibility
function checkVotingEligibility(age) {
    if (age >= 18) {
      return "You are eligible to vote";
    } else {
      return "Not eligible";
    }
  }
    console.log(checkVotingEligibility(20));
    
    
    // 3. Function that grades based on score
function gradeStudent(name, score) {
  if (score >= 90) {
    return "Excellent";
  }else if (score >= 75) {
    return " Good";
  }else if (score >= 50) {
    return "Average";
  } else {
    return "Failed";
  }
}
    
console.log(gradeStudent("Joy", 85));
console.log(gradeStudent("Abigail", 45));
console.log(gradeStudent("Ken", 95));

// 4. Function that checks access based on ID and age
function checkAccess(hasID, isAbove18) {
    if (hasID && isAbove18) {
      return "Access granted";
    } else {
      return "Access denied";
    }
  }
  
console.log(checkAccess(true, true)); // Access granted
console.log(checkAccess(false, true)); // Access denied
console.log(checkAccess(true, false)); // Access denied
console.log(checkAccess(false, false)); // Access denied


// 5. Function that evaluates an array of scores

student_scores = [72, 45, 88, 50, 39, 67, 51];

function evaluateScores(student_scores) {
    for (let i = 0; i < student_scores.length; i++) {
      if (student_scores[i] > 50) {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    }
  }
  evaluateScores(student_scores); // 
  
  // 6. Arrow function to check if student passed both Math and English
  const didPassBoth = (mathScore, englishScore) => {
    return (mathScore >= 50 && englishScore >= 50) ? "Yes" : "No";
  };
  
  console.log(didPassBoth(60, 55)); 
  console.log(didPassBoth(45, 70)); 
  console.log(didPassBoth(50, 49)); 
     
  
  // 7. Function to check if user has contact information before signup

  const user1 = { email: "alice@example.com" };
  const user2 = { phone: "1234567890" };
  const user3 = {}; // User without email or phone
  

function canSignUp(user) {
    // Check if the user has an email or a phone number
    if (user.email || user.phone) {
      return "Signup allowed"; // User has one or both, so they can sign up
    } else {
      return "Contact information required"; // Neither email nor phone present
    }
  }

  console.log(canSignUp(user1)); // Output: true
  console.log(canSignUp(user2)); // Output: true
  console.log(canSignUp(user3)); // Output: false
  

  // 8. Function that validates login inputs using OR operator
  function validateLogin(username, password) {
    if (username === "" || !password) {
      return "Invalid input";
    } else {
      return "Valid input";
    }
  }

  console.log(validateLogin("user", "pass")); 
  console.log(validateLogin("", "pass"));   
  
  // 9. Function that determines employment status using ternary operator
  const checkEmploymentStatus = (hoursWorked) => {
    return hoursWorked >= 40 ? "Full-time" : "Part-time";
  }

    console.log(checkEmploymentStatus(45)); // Full-time
  
  // 10. Arrow function that returns the larger of two numbers
  const findLarger = (num1, num2) => num1 > num2 ? num1 : num2;


  console.log(findLarger(10, 20)); // 20
  console.log(findLarger(30, 25)); // 30
  console.log(findLarger(15, 15)); // 15
  console.log(findLarger(5, 10)); // 10