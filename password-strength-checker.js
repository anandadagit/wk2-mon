const readline = require('readline-sync');  // Import readline-sync for synchronous input

const MINIMUM_LENGTH_PATTERN = /.{8,}/;
const UPPERCASE_PATTERN = /[A-Z]/;
const LOWERCASE_PATTERN = /[a-z]/;
const DIGIT_PATTERN = /[0-9]/;
const SPECIAL_CHARACTER_PATTERN = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|=]/;

function getPasswordStrength(password) {
    const hasMinimumLength = MINIMUM_LENGTH_PATTERN.test(password);
    const hasUpperCase = UPPERCASE_PATTERN.test(password);
    const hasLowerCase = LOWERCASE_PATTERN.test(password);
    const hasDigits = DIGIT_PATTERN.test(password);
    const hasSpecialCharacters = SPECIAL_CHARACTER_PATTERN.test(password);
    
    if(hasMinimumLength && hasUpperCase && hasLowerCase && hasDigits && hasSpecialCharacters) {
        return "strong";
    }
    else if(hasMinimumLength && hasUpperCase && hasLowerCase && hasDigits && !hasSpecialCharacters) {
        return "medium";        
    } 
    else {
        return "weak";
    }    
}

function getPasswordFromUser() {
    const password = readline.question("Enter password: ", {
        hideEchoBack: true
    });
    return password;
}

function checkPassword() {
    const password = getPasswordFromUser();
    const passwordStrength = getPasswordStrength(password)
    if( passwordStrength === 'weak') {
        console.log("Your password was weak, try again");
        checkPassword();
    }
    else {
        console.log(`Your password strength is: ${passwordStrength}`)
    }
}

checkPassword();


