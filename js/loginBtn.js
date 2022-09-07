function myFunction() {
    var Username = document.getElementById("usernameField").value;
    var Password = document.getElementById("passwordField").value;
    if (Username == '4190283' && Password == '104158') {
        window.open("result.html");
    } else if (Username == '4200202' && Password == '101351') {
        window.open("result2.html");
    }  else if (Username == '4190261' && Password == '103215') {
        window.open("result3.html");
    }  else if (Username == '4200296' && Password == '105331') {
        window.open("AbdallahGamal.html");
    } else if (Username == '4190163' && Password == '103101'){
        window.open("AyatHanafy.html");
    }else if (Username == '4190520' && Password == '103348'){
        window.open("RadwaAhmed.html");
    }else if (Username == '4190521' && Password == '103711'){
        window.open("HussienHassan.html");
    }else if (Username == '4200039' && Password == '104429'){
        window.open("TasneemSaed.html");
    }else if (Username == '4200554' && Password == '104414'){
        window.open("OmarMohamedFawzy.html");
    }else if (Username == '4200021' && Password == '102317'){
        window.open("AhmedMohamedAli.html");
    }else if (Username == '17040' && Password == '101852'){
        window.open("Sami.html");
    }else {
        alert('Check Your Username Or Password');
    }
};