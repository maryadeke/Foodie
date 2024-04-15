<?php
// error_reporting(0);
// ERROR REPORTING DISABLED FOR USER END, YOU CAN ENABLE IT FOR DEGUGING DATABASE CONNECTION!
  //=====================================================
    //CONNECTING TO THE DATABASE
 //=====================================================
            try {
                $conns = new mysqli("localhost",'root','123456','UserFoodie');
            } catch (\Throwable $conns) {
                die("Unable to Establish A database Connection!");
            }