<meta charset="utf-8">
<?php
    header("location:../messageBoard/messageBoard.php");
    $conn = mysql_connect("localhost","MChen","123");
    if(!$conn){
        die("Connot connect!");
    }
    mysql_select_db("classwebsite");

    if(isset($_REQUEST["submit"])){
        if(isset($_COOKIE["name"])){
            if(isset($_REQUEST["niming"])){
                $username = "匿名用户";
            }else{
                $username = $_COOKIE["name"];
            }
        }else{
            $username = "游客";
        };
        
        /*获取当前时间*/
        $datetime = date("Y-m-d")." ".date("H:i:sa");
     
        /*将当前时间、评论内容插入到数据库中*/
        $content = $_REQUEST["contect"];
        if($content != "120字以内"){
            mysql_query("set names 'utf8'");
            mysql_query("insert into message_board(username,datetime,content) values('$username','$datetime','$content')");
        };
       
    };
?>