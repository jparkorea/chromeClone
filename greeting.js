const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings"); 

const USER_LS = "currUser",
SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);

    const date = new Date();
    const hours = date.getHours();
    if(hours < 12){
        greeting.innerHTML = `Good Morning ${text}`;
    }else if(hours < 18 && housrs >= 12){
        greeting.innerHTML = `Good Afternoon ${text}`;
    }else{
        greeting.innerHTML = `Good Evening ${text}`;
    }
    
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName(){
    const currUser = localStorage.getItem(USER_LS);
    if(currUser === null){
        askForName();
    }else{
        paintGreeting(currUser);
    }
}

function init(){
    loadName();
} 

init();