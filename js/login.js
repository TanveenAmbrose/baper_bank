document.getElementById('btn-submit').addEventListener('click' , function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email === 'racoctanveen15@gmail.com' && password === 'ihateutanu.'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tui Password Vul disos tore tejjoputro korlam');
    }
})

