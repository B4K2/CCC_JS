document.querySelector("#email").addEventListener('input',function(event){
    const email = document.getElementById("email").value;
    if (email === "") {
        document.querySelector("#email").style.backgroundColor = "white";    
    }else{
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        document.querySelector("#email").style.backgroundColor = "rgba(255,0,0,0.5)";
    }else{
        document.querySelector("#email").style.backgroundColor = "white";
    }
}
});

document.querySelector("#password").addEventListener("input",function(event){
    const password = document.getElementById("password").value;

    document.querySelector(".weak").style.backgroundColor = "white";
    document.querySelector(".med").style.backgroundColor = "white";
    document.querySelector(".strong").style.backgroundColor = "white";

    if (/[a-z]/.test(password) || /[A-Z]/.test(password) && !/[0-9]/.test(password) && !/[!@#\$%\^\&*\)\(+=._-]/.test(password)){
        document.querySelector(".weak").style.backgroundColor = "red";
    }if(/[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && !/[!@#\$%\^\&*\)\(+=._-]/.test(password)){
        document.querySelector(".weak").style.backgroundColor = "yellow";
        document.querySelector(".med").style.backgroundColor = "yellow";
    }if(/[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#\$%\^\&*\)\(+=._-]/.test(password)){
        document.querySelector(".weak").style.backgroundColor = "green";
        document.querySelector(".med").style.backgroundColor = "green";
        document.querySelector(".strong").style.backgroundColor = "green";
    }
});

document.querySelector(".Sumbit").addEventListener("click",function(event){
    const password = document.getElementById("password");
    const confirm_password = document.getElementById("confirmpassword");
    event.preventDefault();
if (password.value != confirm_password.value){
    confirm_password.style.backgroundColor = "rgba(255,0,0,0.5)";
}else{
    confirm_password.style.background = "white";
    window.location.href = "./landing.html";
}
});