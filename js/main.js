const userEmail = document.getElementById('my-email');
const checkResult = document.getElementById('my-result');
const acceptedEmails = ['mariorossi@gmail.com'];

function keyEnter(e){
    if(e.keyCode == '13'){
        console.log(userEmail.value);
        check();
    }
}
function check(){
    for(let i = 0; i < acceptedEmails.length+1 ; i++ ){
        if( userEmail.value == acceptedEmails[i]){
            checkResult.innerHTML="BRAVO!";
            i=acceptedEmails-length+1;
        }
        else{
            checkResult.innerHTML="NON BRAVO!";
        }
    }
}

userEmail.addEventListener("keypress", keyEnter);