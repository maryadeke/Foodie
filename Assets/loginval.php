<?php

if(isset($_POST['Loginval'])){
    //sanitizing the inputs
    $UserMail = htmlspecialchars($_POST['email']);
    $UserPass = htmlspecialchars($_POST['password']);
    
}