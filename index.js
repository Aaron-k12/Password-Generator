const pwdEl1 = document.getElementById("pwd1-el")
const pwdEl2 = document.getElementById("pwd2-el")
let pwdLength = 15

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// funtion to return random numbers
function getRandomChar() {
    return randomPosition = Math.floor(Math.random() * characters.length)
}


// funtion to generate new password
function generatePwd() {
    let newPwd = ""
    for (let i = 0; i < pwdLength; i++) {
       newPwd += characters[getRandomChar()]
    }
    
    return newPwd
}


// function to display generated password
function displayPwd() {
    pwdEl1.textContent = generatePwd()
    pwdEl2.textContent = generatePwd()
}

//function to copy password to clipboard
function copyPassword(password) {
  // Copy the text inside the text field
  navigator.clipboard.writeText(password);

  // Alert the copied text
  alert("Copied the text: " + password);

   
}


function firstPassword() {
    copyPassword(pwdEl1.innerText)
}

function secondPassword() {
    copyPassword(pwdEl2.innerText)
}









