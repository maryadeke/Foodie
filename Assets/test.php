<?php
$pass = "hello user!";
$hash = "2bbb7755a206a82191ee055a50c7bc0";
if($hash === md5($pass)){
    echo 200;
}
// echo md5($pass);
