<?php

if(isset($_POST['Loginval'])){
    require_once "db.php";
    //sanitizing the inputs
    $UserMail = htmlspecialchars($_POST['email']);
    $UserPass = htmlspecialchars($_POST['password']);
    //fetch and compare data from the databse to the user inputs
    $Query = "SELECT USEREMAIL,USERPASSWORD FROM loginfoodie";
    //excute query
    $reqVal = $conns->query($Query);
    if($reqVal){
        foreach($reqVal as $res){
        }
         //comparing credentials
         if(md5($UserPass) === $res['USERPASSWORD']){
            if($UserMail === $res['USEREMAIL']){
                    header("Location:../thankyou.php?msg=sucess&items=some items here");
                }else{
                    echo "Email not registered, <a href='../signup.php'>Register New Account</a>";
                }
            }else{
                echo "Invalid Password";
            }
    }else{
        echo "Something Happend finding your account :(";
    }
    //hash the password and compare it from the database

    
    
}