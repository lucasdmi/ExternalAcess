window.fbAsyncInit = function () {
    FB.init({
        appId: '{471234830400175}',
        cookie: true,
        xfbml: true,
        version: '{v4.0}'
    });

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);

        if (response.status === "connected") {
            console.log("Conectado");
            getFbUserData();
        }
        else {
            console.log("Não conectado");

        }

    });

};

// Load JS SDK
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/pt_BR/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data   
            getFbUserData();
        } else {
            document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
        }
    }, {scope: 'email'});
}
function getFbUserData() {
    FB.api('/me', { locale: 'pt_BR', fields: 'id,first_name,last_name,email' },
        function (response) {

        let usuario = {"nome": response.first_name,
                        "sobrenome": response.last_name,
                        "email": response.email
                            };
         var nome = response.first_name;
         var username = response.email;
         var password = Math.random().toString(36).substring(0, 7);
         var celphone = 00000000000;

     //   $.post("http://localhost:8000/cadastro.php", {nome,username, password, celphone},function(msg){

        saveUserData(nome, username, password, celphone);
        console.log(response);
        document.getElementById('fbLink').setAttribute("onclick","fbLogout()");
        document.getElementById('fbLink').innerHTML = 'Logout from Facebook';
        document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.first_name + '!';
        document.getElementById('userData').innerHTML = '<p><b>FB ID:</b> '+response.id+'</p><p><b>Name:</b> '+response.first_name+' '+response.last_name+'</p><p><b>Email:</b> '+response.email+'</p><p><b>Gender:</b> '+response.gender+'</p><p><b>Locale:</b> '+response.locale+'</p><p><b>Picture:</b> <img src="'+response.picture.data.url+'"/></p><p><b>FB Profile:</b> <a target="_blank" href="'+response.link+'">click to view profile</a></p>';
        
        });
}

function saveUserData(nome, username, password, celphone) {
    // Só usar esse objeto userData, que já está com os dados do usuário
    // Em formato JSON
    $.post("http://localhost:8000/cadastro.php", {nome,username, password, celphone},function(msg){
         bootbox.alert(msg)
        });
    //$.post('"http://localhost:8000/cadastro.php', {oauth_provider:'facebook',userData: JSON.stringify(userData)}, function(data){ return true; });
}

function fbLogout() {
    FB.logout(function() {
        document.getElementById('fbLink').setAttribute("onclick","fbLogin()");
        document.getElementById('fbLink').innerHTML = '<img src="fblogin.png"/>';
        document.getElementById('userData').innerHTML = '';
        document.getElementById('status').innerHTML = 'You have successfully logout from Facebook.';
    });
}