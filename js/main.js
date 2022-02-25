const userEmail = document.getElementById('my-email');
const checkResult = document.getElementById('my-result');
const acceptedEmails = ['mariorossi@gmail.com'];

function checkEmail(email){
    return email = userEmail.value;
}
console.log(userEmail.value);
if (acceptedEmails.find(checkEmail) != undefined){
    checkResult.classList.remove('d-none');
}
else{
    checkResult.classList.add('d-none');
}