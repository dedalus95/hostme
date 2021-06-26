<?php
if(isset($_POST['submit'])) {
$to = "ecerilli1@gmail.com";
$subject = "Dati cliente";
$name_field = $_POST['nome'];
$email_field = $_POST['e-mail'];
$message = $_POST['messaggio'];
 
$body = "From: $name_field\n E-Mail: $email_field\n Message:\n $message";
 
echo "Data has been submitted to $to!";
mail($to, $subject, $body);
} else {
echo "blarg!";
}
?>