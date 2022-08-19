// 1.get user email and password form html 
// 2.get button to html onnect to button

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click',function (e) {
    e.preventDefault()
    // get email
    const emailField = document.getElementById('email')
    const email = emailField.value;
    // get password
    const passwordField = document.getElementById('password')
    const password = passwordField.value;
    if(email == 'tohinahmed554@gmail.com' && password == 'rahat4248'){
        window.location.href='bank.html'
        emailField.value='';
    }else{
        alert('enter valid email & password')
        emailField.value='';
        passwordField.value='';
        return
    }
})