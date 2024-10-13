
const email = document.getElementById("emailinput");

document.querySelector(".Sumbit").addEventListener("click",function(event){
    const password = document.getElementById("password");
    const confirm_password = document.getElementById("confirmpassword");
    event.preventDefault();
if (password.value != confirm_password.value){
    confirm_password.style.background = "red";
}else{
    confirm_password.style.background = "white";
}
});