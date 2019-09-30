
function confirmacao(){
 bootbox.alert('Termo de uso: O uso desse meio de comunicação é regulado pela Lei 12.965/14 que consagra todos os direito e deveres no acesso da internet no Brasil. É assegurado o direito a inviolabilidade da intimidade e da vida privada, sua proteção e indenização pelo dano material ou moral decorrente de sua violação (como está na redação do Art.6, I da lei 12.965/14). Esta empresa não se responsabiliza por danos decorrentes de conteúdo gerado por terceiros (conforme redação do Art.18, caput, da lei 12.965/14), bem como sofrerá sanção o usuário que violar qualquer direito autoral, conforme a Lei 9.610/98.')
   
}

function cadastrar(){
      
       
            
            //Trigger on form submit
         

            var nome = $('input[name=nome]').val();
            var username = $('input[name=username]').val();
            var password = $('input[name=password]').val();
            var celphone = $('input[name=celphone]').val();
            var checkbox = $('#checkbox').val();

       
            if(document.getElementById("checkbox").checked == true){
               $.post("http://localhost:8000/cadastro.php", {nome,username, password, celphone},function(msg){
                   bootbox.alert(msg)
                  });
            }
            else{
               bootbox.alert('Por favor, selecionar declaro que li e estou de acordo com os termos de uso e a Política de privacidade.')
            }
         
        

            
            event.preventDefault();//Prevent the default submit
       
                
}
function reload(){
    location.reload(true);
}






