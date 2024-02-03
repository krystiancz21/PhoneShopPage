class User {
    constructor(email = "example@email.com", login = "user", pass = "user") {
        this.login = login;
        this.pass = pass;
        this.email = email;
    }

    pokaz() {
        return "Dane użytkownika: login:" + this.login +" Hasło:" + this.pass + " Email:" + this.email;
    }

    formularzRejestracji(){
        var formularz = '<div class="row g-3"><div class="col-sm-6"><label for="login" class="form-label">Login</label>'+
                        '<input type="text" class="form-control" id="login"></div><div class="col-sm-6">'+
                        '<label for="pass" class="form-label">Hasło</label><input type="password" class="form-control" id="pass">'+
                        '</div></div><div class="col-12"><label for="email" class="form-label">Email</label>'+
                        '<input type="email" class="form-control" id="email"></div><hr class="my-4">'+
                        '<button class="w-100 btn btn-primary btn-lg" id="rejestruj">Zarejestruj</button>';

        return formularz;
    }
} 

document.addEventListener('DOMContentLoaded', () => {
    var user = new User();
    
    console.log(user.pokaz());
    document.getElementById("formularz").innerHTML = user.formularzRejestracji();
    
    rejestruj.addEventListener("click", ()=> {
        user.login = document.getElementById('login').value;
        user.pass = document.getElementById('pass').value;
        user.email = document.getElementById('email').value;
        console.log(user.pokaz());

        let check_email = false;
        for(i=0; i<localStorage.length;i++) {
            let key = localStorage.key(i);
            let email = JSON.parse(localStorage.getItem(key)).email;
            if (user.email == email) {
                check_email = true;
            }
        }

        if (user.login in localStorage) {
            document.getElementById("info").innerHTML = '<hr class="my-4">'+"Użytokwnik o takim loginie już istnieje!";
        } 
        else if(check_email) {
            document.getElementById("info").innerHTML = '<hr class="my-4">'+"Użytokwnik o takim emailu już istnieje!";
        } 
        else {
            document.getElementById("info").innerHTML = '<hr class="my-4">'+"Pomyślnie dodano użytkownika";
            localStorage.setItem(user.login, JSON.stringify(user));
        }        
    });
});