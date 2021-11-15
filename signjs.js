

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });


});

var password= document.getElementById('password');
var flag=1;
function check(elem){
    if(elem.value.length>0){
        if(elem.value !=password.value)
        {
           document.getElementById('alert').innerText="Confirm password does not match";
           flag=0;
        }else
        {
           document.getElementById('alert').innerText=" ";
           flag=1;
        }
    }else
        {
       document.getElementById('alert').innerText="Please enter confirm password";
       flag=0;
        }
}
function validate(){
    if(flag==1){
        return true;
    }else{
        return false;
    }
}
