
    function create(){
    
        let email2 = document.getElementById("email").value;
        let password2 = document.getElementById("password").value;
        let userName = document.getElementById("username").value;
    
        //stored data
      
        localStorage.setItem("email",email2);
        localStorage.setItem("password",password2);
        localStorage.setItem("username",userName);
    
        alert("account created!");
    }

function login(){
    let webEmail = document.getElementById("email1").value;
    let webPass = document.getElementById("password1").value;

    //relet storedUsername = localStorage.getItem("username");
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    let storedUser = localStorage.getItem("username");

    if(webEmail === storedEmail && webPass === storedPassword){
        window.location = "main.html";
        alert("log in successfull!");
    }else{
        alert("log in failed!, incorrect email or password.");
    }

}
document.addEventListener('DOMContentLoaded', () => {
    const Logout = document.querySelector('.container');
    const btnLogout = document.getElementById("logout");
    const btnYes = document.getElementById("yes");
    const btnNo = document.getElementById("no");

    btnLogout.addEventListener('click', () => {
        Logout.style.display = 'flex';
    });

    btnNo.addEventListener('click', () => {
        Logout.style.display = 'none';
    });

    btnYes.addEventListener('click', () => {
        Logout.style.display = 'none';
        window.location.href = 'index.html';
        alert('logged out successfully!');
    });
});

const menuButton = document.querySelector('.menu');
const leftNav = document.querySelector('.left-nav');  

menuButton.addEventListener('click', () => {
    leftNav.classList.toggle('active');
    e.stopPropagation();
});

document.addEventListener('click', (e) => {
    if (!leftNav.contains(e.target) && !menuButton.contains(e.target)) {
        leftNav.classList.remove('active');
    }
});

const leftIcon = document.querySelector('.profile');
const mainPro = document.querySelector('.main-profile');

leftIcon.addEventListener('click', () => {
    mainPro.classList.toggle('active');
    e.stopPropagation();
});

document.addEventListener('click', (e) => {
    if (!mainPro.contains(e.target) && !leftIcon.contains(e.target)){
        mainPro.classList.remove('active');
    }
})

