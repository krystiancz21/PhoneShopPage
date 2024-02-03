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

function zapisz() {
    var ok = true;
    var item = {};
    obiektImie = /^[A-ZŁŻŹĄĘŚĆÓ][a-złżźąęćśóń]{2,30}$/;
    obiektNazw = /^[A-ZŁŻŹĄĘŚĆÓ][a-złżźąęćśóń]{2,30}$/;
    obiektEmail =/^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektTel = /^([1-9]{1})+([0-9]{8})$/;
    obiektAdres = /^[A-ZŁŻŹĄĘŚĆÓ][a-złżźąęćśóń]{2,30}\s[0-9]{1,3}$/;
    obiektMiasto = /^[A-ZŁŻŹĄĘŚĆÓ][a-złżźąęćśóń]{2,30}$/;
    // obiektMiasto = /^([A-ZŁŻŹĄĘŚĆÓ][a-złżźąęćśóń]{2,30})|([A-ZŁŻŹĄĘŚĆÓ][a-złżźąęćśóń]{2,30}-[A-ZŁŻŹĄĘŚĆÓ][a-złżźąęćśóń]{2,30})$/;
    obiektKodPoczt = /^[0-9]{2}-[0-9]{3}$/;

    if (!sprawdzPole("first-name", obiektImie)) { 
        ok=false;
        document.getElementById("first-name-error").innerHTML = "Wpisz poprawnie imię!";
    } else {
        document.getElementById("first-name-error").innerHTML = "";
        item.imie = document.getElementById('first-name').value;
    }

    if (!sprawdzPole("last-name", obiektNazw)) { 
        ok=false;
        document.getElementById("last-name-error").innerHTML = "Wpisz poprawnie nazwisko!";
    } else {
        document.getElementById("last-name-error").innerHTML = "";
        item.nazw = document.getElementById('last-name').value;
    }

    if (!sprawdzPole("email", obiektEmail)) { 
        ok=false;
        document.getElementById("email-error").innerHTML = "Wpisz poprawnie adres email!";
    } else {
        document.getElementById("email-error").innerHTML = "";
        item.email = document.getElementById('email').value;
    }

    if (!sprawdzPole("phone", obiektTel)) { 
        ok=false;
        document.getElementById("phone-error").innerHTML = "Wpisz poprawnie numer telefonu!";
    } else {
        document.getElementById("phone-error").innerHTML = "";
        item.telefon = document.getElementById('phone').value;
    }

    if (!sprawdzPole("address", obiektAdres)) {
        ok=false;
        document.getElementById("address-error").innerHTML = "Wpisz poprawnie ulicę i numer!";
    } else {
        document.getElementById("address-error").innerHTML = "";
        item.adres = document.getElementById('address').value;
    }

    if (!sprawdzPole("city", obiektMiasto)) { 
        ok=false;
        document.getElementById("city-error").innerHTML = "Wpisz poprawnie numer miasto!";
    } else {
        document.getElementById("city-error").innerHTML = "";
        item.miasto = document.getElementById('city').value;
    }

    if (!sprawdzPole("zip-code", obiektKodPoczt)) { 
        ok=false;
        document.getElementById("zip-code-error").innerHTML = "Wpisz poprawnie numer kod pocztowy!";
    } else {
        document.getElementById("zip-code-error").innerHTML = "";
        item.kod_poczt = document.getElementById('zip-code').value;
    }

    if(ok == true) {
        var select = document.getElementById('checked-device');
        var checked_device = select.options[select.selectedIndex].value;
        item.urzadzenie = checked_device;

        var tab = document.getElementsByName('dodatki');
        var dodatki_result = "";
        for(let i=0; i<tab.length; i++){
            if(tab[i].checked) dodatki_result += tab[i].value +", ";
        }
        item.dodatki = dodatki_result;

        var tab2 = document.getElementsByName('metoda-platnosci');
        var payment_method = "";
        for(let i=0;i<tab2.length;i++){
            if(tab2[i].checked){
                payment_method = tab2[i].value; 
                break; 
            }
        }
        item.platnosc = payment_method;

        var lista = JSON.parse(localStorage.getItem('lista'));
        if (lista===null) lista=[];
        lista.push(item);
        localStorage.setItem('lista', JSON.stringify(lista));
    }

    return ok;
}

function wyswietl() {
    var lista = JSON.parse(localStorage.getItem('lista'));
    var el = document.getElementById('list');
    var str = '<hr class="my-4">';
    if (lista===null){
        el.innerHTML = str + '<p class="lead mb-1">Brak zamówień</p>';
    } else{
        for(i=0;i<lista.length;i++) {
            // str+='<p class="lead mb-1">Zamówienie '+ Number(i+1) +'</p>'+
            // '<table class="table"><tbody>'+
            // '<tr><th scope="row">Imię</th><td>'+lista[i].imie+'</td></tr>'+
            // '<tr><th scope="row">Nazwisko</th><td>'+lista[i].nazw+'</td></tr>'+
            // '<tr><th scope="row">Email</th><td>'+lista[i].email+'</td></tr>'+
            // '<tr><th scope="row">Telefon</th><td>'+lista[i].telefon+'</td></tr>'+
            // '<tr><th scope="row">Ulica i numer</th><td>'+ lista[i].adres +'</td></tr>'+
            // '<tr><th scope="row">Miasto</th><td>'+ lista[i].miasto +'</td></tr>'+
            // '<tr><th scope="row">Kod pocztowy</th><td>'+ lista[i].kod_poczt +'</td></tr>'+
            // '<tr><th scope="row">Urządzenie</th><td>'+ lista[i].urzadzenie +'</td></tr>'+
            // '<tr><th scope="row">Metoda płatności</th><td>'+ lista[i].platnosc +'</td></tr>'+
            // '<tr><th scope="row">Dodatki</th><td>'+ lista[i].dodatki +'</td></tr>'+
            // '</tbody></table>';

            str+='<p class="lead mb-1">Zamówienie '+ Number(i+1) +'</p>'+
            '<table class="table" id=tab_'+i+'>'+
            '<tr><th scope="row">Imię</th><td id=c_'+i+'>'+lista[i].imie+'</td></tr>'+
            '<tr><th scope="row">Nazwisko</th><td id=c_'+i+'>'+lista[i].nazw+'</td></tr>'+
            '<tr><th scope="row">Email</th><td id=c_'+i+'>'+lista[i].email+'</td></tr>'+
            '<tr><th scope="row">Telefon</th><td id=c_'+i+'>'+lista[i].telefon+'</td></tr>'+
            '<tr><th scope="row">Ulica i numer</th><td id=c_'+i+'>'+ lista[i].adres +'</td></tr>'+
            '<tr><th scope="row">Miasto</th><td id=c_'+i+'>'+ lista[i].miasto +'</td></tr>'+
            '<tr><th scope="row">Kod pocztowy</th><td id=c_'+i+'>'+ lista[i].kod_poczt +'</td></tr>'+
            '<tr><th scope="row">Urządzenie</th><td id=c_'+i+'>'+ lista[i].urzadzenie +'</td></tr>'+
            '<tr><th scope="row">Metoda płatności</th><td id=c_'+i+'>'+ lista[i].platnosc +'</td></tr>'+
            '<tr><th scope="row">Dodatki</th><td id=c_'+i+'>'+ lista[i].dodatki +'</td></tr>'+
            '<tr id='+i+'><td><button type="button" class="btn btn-primary" onclick=clearelem('+i+')>Usuń</button></td>'+
            '<td id=ed_'+i+'><button type="button" class="btn btn-primary" onclick=edit('+i+')>Edytuj</button></td></tr>'+
            '</table><br><br>';
        }
        el.innerHTML = str;
    }
}

function edit(i){
    document.getElementById("ed_"+i).innerHTML='<button type="button" class="btn btn-primary" onclick=cancel('+i+')>Anuluj</button><button type="button" class="btn btn-primary" onclick=saveedit('+i+')>Zapisz</button>';

    tab=document.getElementById("tab_"+i);
    tds=tab.querySelectorAll("[id^=c_"+i+"]");
    tds.forEach(tr => {
        tds.forEach(td=> {
            td.setAttribute('contenteditable', true);
        });
    });
}

function saveedit(i){
    let item = {};
    item.imie=document.getElementById("tab_"+i).rows[0].cells.item(1).innerHTML;
    item.nazw=document.getElementById("tab_"+i).rows[1].cells.item(1).innerHTML;
    item.email=document.getElementById("tab_"+i).rows[2].cells.item(1).innerHTML;
    item.telefon=document.getElementById("tab_"+i).rows[3].cells.item(1).innerHTML;
    item.adres=document.getElementById("tab_"+i).rows[4].cells.item(1).innerHTML;
    item.miasto=document.getElementById("tab_"+i).rows[5].cells.item(1).innerHTML;
    item.kod_poczt=document.getElementById("tab_"+i).rows[6].cells.item(1).innerHTML;
    item.urzadzenie=document.getElementById("tab_"+i).rows[7].cells.item(1).innerHTML;
    item.platnosc=document.getElementById("tab_"+i).rows[8].cells.item(1).innerHTML;
    item.dodatki=document.getElementById("tab_"+i).rows[9].cells.item(1).innerHTML;

    var lista = JSON.parse(localStorage.getItem('lista'));
    lista.splice(i,1,item);
    localStorage.setItem("lista", JSON.stringify(lista));
    document.getElementById("ed_"+i).innerHTML='<button type="button" class="btn btn-primary" onclick=edit('+i+')>edytuj</button>';
    wyswietl();
}

function cancel(i){
    document.getElementById("ed_"+i).innerHTML='<button type="button" class="btn btn-primary" onclick=edit('+i+')>edytuj</button>';
    wyswietl();
}

function clearelem(i){
    var lista = JSON.parse(localStorage.getItem('lista'));
    lista.splice(i,1);
    localStorage.setItem("lista", JSON.stringify(lista))
    wyswietl();
}

function usunWszystko() {
    localStorage.clear();
    wyswietl();
}
