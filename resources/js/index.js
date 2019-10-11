function reload(){
    location.reload(true);
}

function onSignIn(googleUser) {
  
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    
    var nome = profile.getName();
    var username = profile.getEmail();
    var password = Math.random().toString(36).substring(0, 7);
    var celphone = 22999999999;

   

    $.post("http://localhost:8000/cadastro.php", {nome,username, password, celphone},function(msg){
                  // bootbox.alert(msg)
                  });
  //  tabClose();
                  
}
function tabClose(){
    var tab = window.open(window.location,"_top");
    tab.close()
}
  