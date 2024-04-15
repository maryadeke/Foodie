<?php
if(isset($_POST['UserRegister'])){
    //============================================
    //grab user inputs....
    //==============================================
    $UserName = htmlspecialchars($_POST['username']);
    $UserEmail = htmlspecialchars($_POST['email']);
    $UserPawwrod = htmlspecialchars($_POST['password']);

    //=====================================================
    //checking if any of the fields id empty..
    //=====================================================
    if(empty($_POST['username'])){
        $msg = "Username cannot be empty...";
        header("Location:../signup.php?error=$msg");
    }elseif(empty($_POST['email'])){
        $msg = "Email address cannot be empty..";
        header("Location:../signup.php?error=$msg");
    }elseif(empty($_POST['password'])){
        $msg = "Password cannot be empty!";
        header("Location:../signup.php?error=$msg");
    }

      //=====================================================
    //VALIDATING & CHECKING FOR PASSWORD LENGTH AND EMAIL VALIDATION
    //=====================================================

    //password strenght
    if($UserPawwrod>8){
        if(filter_var($UserEmail,FILTER_VALIDATE_EMAIL)){
            //procceed to the chehcking for the password match & email match from the databse...

            require_once "db.php";
            //user reistration date...........
            $regDate = date("l jS \of F Y h:i:s A");
            //randomize the User ID.........
            $UserId = random_int(35,95);
            //hash the password
            $finalPass = md5($UserPawwrod);
            //INSERT DATA TO THE DATABASE...;

            $query = "INSERT INTO loginFoodie(ID,USERNAME,USEREMAIL,USERPASSWORD,REG_DATE)
             VALUES('$UserId','$UserName','$UserEmail','$finalPass','$regDate')";

             //execute the query!
            $queryVal = $conns->query($query);
            //CHECKING IF THE QUERY WAS A SUCCESS!
            if($queryVal){
                header("Location:../signup.php?error=Registration Success!");
            }else{
                header("Location:../signup.php?error=Something Happened registering you, try agin later");
            }














        }else{
            $msg = "Opps!, email seems not be valid..";
            header("Location:../signup.php?error=$msg");
        }
    }else{
        $msg = "Password Cannot be below 8 characters!";
        header("Location:../signup.php?error=$msg");
    }

}