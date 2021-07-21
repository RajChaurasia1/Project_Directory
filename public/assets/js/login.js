let logInForm = document.querySelector('.log-in-form');
let registerForm = document.querySelector('.register-form');
let logOutBtn = document.querySelector('.log-out-btn');

logInForm.addEventListener('submit',function(e){
    e.preventDefault();
    let email = document.getElementById('log-in-email').value;
    let password = document.getElementById('log-in-password').value;
    fetch('http://localhost:2000/users/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password})
    }).then((resp) =>{
        if(resp.status ===400)
        {
            throw new Error();
        }
        return resp.json();
   }).then((data)=>{
        window.location.href = data.redirectURL;
    }).catch(()=>alert('Wrong email or password'));
})

registerForm.addEventListener('submit',function(e){
    e.preventDefault();
    let email = document.getElementById('register-email').value;
    let password = document.getElementById('register-password').value;
    let rePassword = document.getElementById('register-re-enter-password').value;
    if(password!==rePassword)
    {
        return;
    }
    fetch('http://localhost:2000/users/register',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password})
    }).then((resp) =>resp.text()).then((data)=>alert(data));
})


logOutBtn.addEventListener('click',function(){
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    window.location.href ='/';
})