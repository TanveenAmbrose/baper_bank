document.getElementById('btn-submit').addEventListener('click' , function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email === 'racoctanveen15@gmail.com' && password === 'ihateutanu.'){
        console.log('User is valid')
    }
    else{
        console.log('User is not valid')
    }
})

