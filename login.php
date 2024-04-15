<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/login&signup.css">
    <title>WELCOME BACK | LOGIN</title>
</head>
<body>
    <div class="container">
<div class="image_div">
    <img src="/images/food1.jpg" alt="">
</div>
<div class="login_container">
    <h3>LOGIN</h3>
           <form action="./Assets/loginval.php" method="post">
            <div class="form-group">
                <input type="text" name="email" id="email" placeholder="Email" required autocomplete="off">
            </div>
            
            <div class="form-group">
                <input type="text" name="password" id="password" placeholder="Password" required autocomplete="off">
            </div>
            <!-- <div class="checkbox">
                <input type="checkbox" name="checkbox" id="" required autocomplete="off">
                <p>Remember me</p>
                <a href="#">Forgot password?</a>
            
            </div> -->
                
            <div class="form-group">
                <button type="submit" name="Loginval">SUBMIT</button>
            </div>
            <div class="form-group">
              
               <a href=""><p>Create account</p></a>
            </div>

           </form>
</div>
    </div>
</body>
</html>