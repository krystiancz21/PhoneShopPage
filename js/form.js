// document.getElementById("firstName").addEventListener("blur", function() {
//     document.getElementById("first-name-error").innerHTML = "Błąd!";
// });

function sprawdzPole(pole_id, obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
}

function sprawdz_radio(nazwa_radio){
    var obiekt = document.getElementsByName(nazwa_radio);
    for (i = 0; i < obiekt.length; i++) { 
        wybrany = obiekt[i].checked;
        if(wybrany) return true; 
    }
    return false;
}

function sprawdz_box(box_id) {
    var obiekt = document.getElementById(box_id);
    if (obiekt.checked) return true;
    else return false;
}

document.addEventListener("DOMContentLoaded", function () {
    var ok = true;
    obiektNazw = /^[a-zA-Z]{2,20}$/; //wyrażenie regularne dla nazwiska
    obiektEmail =/^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektWiek=/^[1-9][0-9]{1,2}$/;

    document.getElementById("firstName").addEventListener("blur", function () {
        if (!sprawdzPole("firstName", obiektNazw)) { 
            ok=false;
            document.getElementById("first-name-error").innerHTML = "Wprowadź poprawnie imię!";
            document.getElementById("first-name-error").style.color = "#AA0000";
            document.getElementById("firstName").style.borderColor = "#AA0000";
        }
        else {
            document.getElementById("first-name-error").innerHTML="";
            document.getElementById("first-name-error").style.color = "";
            document.getElementById("firstName").style.borderColor = "";
        } 
    });

    document.getElementById("lastName").addEventListener("blur", function () {
        if (!sprawdzPole("lastName", obiektNazw)) { 
            ok=false;
            document.getElementById("last-name-error").innerHTML = "Wprowadź poprawnie nazwisko!";
        }
        else document.getElementById("last-name-error").innerHTML="";
    });

    document.getElementById("email").addEventListener("blur", function () {
        if (!sprawdzPole("email", obiektEmail)) { 
            ok=false;
            document.getElementById("email-error").innerHTML = "Wprowadź poprawnie adres email!";
        }
        else document.getElementById("email-error").innerHTML="";
    });

    //walidacja numeru telefonu
    document.getElementById("phone").addEventListener("blur", function () {
        if (!sprawdzPole("phone", obiektNazw)) { 
            ok=false;
            document.getElementById("phone-error").innerHTML = "Wprowadź poprawnie numer telefonu!";
        }
        else document.getElementById("phone-error").innerHTML="";
    });

    document.getElementById("address").addEventListener("blur", function () {
        if (!sprawdzPole("address", obiektNazw)) { 
            ok=false;
            document.getElementById("address-error").innerHTML = "Wprowadź poprawnie adres!";
        }
        else document.getElementById("address-error").innerHTML="";
    });

    document.getElementById("zip-code").addEventListener("blur", function () {
        if (!sprawdzPole("zip-code", obiektNazw)) { 
            ok=false;
            document.getElementById("zip-code-error").innerHTML = "Wprowadź poprawnie kod pocztowy!";
        }
        else document.getElementById("zip-code-error").innerHTML="";
    });

    //if(ok == true){}

});


// function sprawdz() { 
//     //Funkcja realizujaca sprawdzanie całego fomularza wykorzystując funkcje pomocnicze
//     //--------------------------------
//     var ok=true; 
//     //zmienna informująca o poprawnym wypełnieniu formularza
//     //Definicje odpowiednich wyrażeń regularnych dla sprawdzenia poprawności danych wprowadzonych do pól tekstowych
//     // * -> 0 lub więcej wystąpień
//     // + -> 1 lub więcej wystąpień
//     // ? -> oznacza 0 lub 1 wystąpienie poprzedzającego znaku lub grupy.
//     obiektNazw = /^[a-zA-Z]{2,20}$/; //wyrażenie regularne dla nazwiska
//     obiektEmail =/^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
//     obiektWiek=/^[1-9][0-9]{1,2}$/;
//     //Sprawdzanie kolejnych pól formularza.
//     //w przypadku błędu - pojawia się odpowiedni komunikat
//     if (!sprawdzPole("nazw",obiektNazw)) { 
//         ok=false;
//         document.getElementById("nazw_error").innerHTML = "Wpisz poprawnie nazwisko!";
//     }
//     else document.getElementById("nazw_error").innerHTML="";

//     if(!sprawdzPole("wiek", obiektWiek)) {
//         ok=false;
//         document.getElementById("wiek_error").innerHTML = "Wpisz poprawnie wiek!";
//     }
//     else document.getElementById("wiek_error").innerHTML="";

//     if(!sprawdzPole("email", obiektEmail)) {
//         ok=false;
//         document.getElementById("email_error").innerHTML = "Wpisz poprawnie adres email!";
//     }
//     else document.getElementById("email_error").innerHTML="";

//     if(!(sprawdz_box("php")||sprawdz_box("c")||sprawdz_box("java"))) {
//         ok=false;
//         document.getElementById("produkt_error").innerHTML = "Musisz wybrać produkt!";
//     }
//     else document.getElementById("produkt_error").innerHTML="";

//     if(!sprawdz_radio("zaplata")) {
//         ok=false;
//         document.getElementById("zaplata_error").innerHTML = "Musisz wskazać sposób płatności!";
//     }
//     else document.getElementById("zaplata_error").innerHTML="";
    

//     if(ok == true) {
//         var select = document.getElementById('kraj');
//         var countryChoice = select.options[select.selectedIndex].value;

//         var tab = document.getElementsByName('tutorial');
//         var tutorial_result = "";

//         for(let i=0; i<tab.length; i++){
//             if(tab[i].checked) tutorial_result += tab[i].value +" ";
//         }

//         var tab2 = document.getElementsByName('zaplata');
//         var zaplata_result = "";

//         for(let i=0;i<tab2.length;i++){
//             if(tab2[i].checked){
//                 zaplata_result = tab2[i].value; 
//                 break; 
//             }
//         }

//         var dane = "Następujące dane zostaną wysłane:\n"+
//                 "Nazwisko: " + document.getElementById('nazw').value +"\n"+
//                 "Wiek: " + document.getElementById('wiek').value + "\n"+
//                 "Państwo: " + countryChoice + "\n"+
//                 "Adres e-mail: " + document.getElementById('email').value + "\n"+
//                 "Wybrane produkty: " + tutorial_result + "\n"+
//                 "Sposób zapłaty: " + zaplata_result + "\n";

//         if (window.confirm(dane)) return true;
//         else return false;
//     }

//     return ok;
// }
