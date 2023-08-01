let resetBtn = document.getElementsByClassName('reset_btn')[0];
let resetForm = document.getElementsByClassName('reset_password_form_container')[0].style.display;
resetBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let display = document.getElementsByClassName('reset_password_form_container')[0].style.display;
    if(display == 'none' || display == ''){
        document.getElementsByClassName('reset_password_form_container')[0].style.display = 'flex';
    }else{
        document.getElementsByClassName('reset_password_form_container')[0].style.display = 'none';
    }
})