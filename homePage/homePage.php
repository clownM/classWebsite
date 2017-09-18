<?php
    header("location:../homePage/loginfailed.html");
    if(isset($_REQUEST["username"]) && isset($_REQUEST["password"])){
        $username = $_REQUEST["username"];
        $password = $_REQUEST["password"];
    };
    mysql_connect("localhost","MChen","123");
    mysql_select_db("classwebsite");
    mysql_query("set names 'utf8'");
    $result = mysql_query("select id,password,name from student_info order by id");
    if(isset($_REQUEST["submit"])){
        while($row = mysql_fetch_array($result)){
            if($row["id"] === $username && $row["password"] === $password){
                $name = $row["name"];   
                echo $name;
                header("location:../homePage/loginsuccessful.php");
                setcookie("name",$name);
            };
        };
    };
?>