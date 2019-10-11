<?php
//error_reporting(E_ALL);
//ini_set('display_errors', '1');
//include('bd.php');



$nome = filter_input(INPUT_POST,'nome', FILTER_SANITIZE_SPECIAL_CHARS);
$usuario = filter_input(INPUT_POST,'username');
$senha = filter_input(INPUT_POST,'password');
$celular = filter_input(INPUT_POST,'celphone');

echo $nome;

//header('Location: index.html');
if(empty($usuario))
{
      echo "preencher usuario"; 
      exit;
}else{
        echo $usuario;
}





/*
//$nome = clear($_POST["name"]);
$usuario = $_POST["username"];
$senha = $_POST["password"];
$celular = $_POST["celphone"];
$query1 = mysqli_num_rows(mysqli_query($con,"SELECT * FROM creds WHERE username = '$usuario'"));

if($query1 == 1){
          echo 'aaa';
 }      
 else {
        mysqli_query($con,"INSERT INTO creds (username,password,name,celphone) VALUES ('$usuario','$senha','$nome','$celular')");
} 
mysqli_close ($con);
*/

exit;
?>



