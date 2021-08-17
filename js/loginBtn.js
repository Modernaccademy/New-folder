function myFunction() {
    var Username = document.getElementById("usernameField").value;
    var Password = document.getElementById("passwordField").value;
    if (Username == '4190283' && Password == '104158') {
        window.open("result.html");
    } else if (Username == '4190283' && Password != '104158') {
        alert('Check Your Username Or Password');
    } else if (Username == '4200202' && Password == '101351') {
        window.open("result2.html");
    } else if (Username == '4200202' && Password != '101351') {
        alert('Check Your Username Or Password');
    } else if (Username == '4190261' && Password == '103215') {
        window.open("result3.html");
    } else if (Username == '4190261' && Password != '103215') {
        alert('Check Your Username Or Password');
    } else if (Username == '4200296' && Password == '105331') {
        window.open("result5.html");
    } else if (Username == '4200296' && Password != '105331') {
        alert('Check Your Username Or Password');
    } else {
        alert('Invalid Login!!!');
    }
};