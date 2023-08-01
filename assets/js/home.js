const buttons = document.getElementsByClassName("btn-lg");

buttons[0].addEventListener("click",()=>{
    document.getElementsByClassName("login_form")[0].style.display ="none";
    let display = document.getElementsByClassName("signup_form")[0].style.display;
    if(display == "" || display == "none"){
        document.getElementsByClassName("signup_form")[0].style.display ="flex";
    }
    else{
        document.getElementsByClassName("signup_form")[0].style.display ="none";
    }
})

buttons[1].addEventListener("click",()=>{
    document.getElementsByClassName("signup_form")[0].style.display ="none";
    let display = document.getElementsByClassName("login_form")[0].style.display;
    if(display == "" || display == "none"){
        document.getElementsByClassName("login_form")[0].style.display ="flex";
    }
    else{
        document.getElementsByClassName("login_form")[0].style.display ="none";
    }
})