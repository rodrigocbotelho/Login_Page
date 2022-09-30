var btnLogin = document.getElementById('btnlogin');
var idSection = document.getElementById('login');
var userName = document.getElementById('username');
btnLogin.onclick= function() {
  idSection.innerHTML = '<span class="men-boa"> Estamos felizes em vê-lo novamente,<br/></span><h1 class="usename-in"><a href="index.html"> '+ userName.value+'!</a></h1>'; 
}