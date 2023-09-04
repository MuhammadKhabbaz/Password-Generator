// Assignment code here
let lowercase = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
let uppercase = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
let numbers = ["1","2","3","4","5","6","7","8","9","0"]
let special = ["!","@","#","$","%","*","-","_","~"]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//assembling password properties
function generatePassword() {
  //confirm length
  let numChars = Number(window.prompt("how manycharacters do you want your password to be 8-128")); 
  while(true){
    if(numChars < 8 || numChars > 128){
      numChars = Number(window.prompt("Invalid Option, try again. How manycharacters do you want your password to be 8-128")); 
      continue;
    }else{
    window.alert("password will be "+ numChars + " characters long");
    break;
    }
  }
  //creating list of possible characters in password
  while(true){  
    let passchar = [];
    //confirm upercase letters
    if(window.confirm("Do you want to use uppercase letters")){
      window.alert("uppercase letters will be included");
      passchar = passchar.concat(...uppercase);
    }else{
      window.alert("uppercase letters will not be included");
    }
    //confirm lowercase letters
    if(window.confirm("Do you want to use lowercase letters")){
      window.alert("lowercase letters will be included");
      passchar = passchar.concat(...lowercase);
    }else{
      window.alert("lowercase letters will not be included");
    }
    //confirm numbers
    if(window.confirm("Do you want to use numbers")){
      window.alert("numbers will be included");
      passchar = passchar.concat(...numbers);
    }else{
      window.alert("numbers will not be included");
    }
    //confirm special characters
    if(window.confirm("do you want to use special characters")){
      window.alert("special characters will be used");
      passchar = passchar.concat(...special);
    }else{
    window.alert("special characters will not be used");
    }
    
    if(passchar.length>0){
      //generating password
      let password = [];
      for(let i = 0; i <= numChars; i++ ){
        let idx = Math.floor(Math.random()*passchar.length);
        let pwdChar = passchar[idx];
        password.push(pwdChar);
        return password.join('');
      }
    //if password list is empty
    }else{
      window.alert("You Must Chose an Option")
      continue
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
