<?php
    $conn = mysql_connect("localhost","MChen","123");
    mysql_select_db("classwebsite");
    mysql_query("set names 'utf8'");
    $result = mysql_query("select * from message_board order by datetime desc");
    header("content-type:text/xml");
    echo "<?xml version='1.0' encoding='utf-8' ?>";
    echo "<ul>";
    $currpage = $_REQUEST['page'];
    $number = 0;    
    $min = ($currpage - 1) * 3;
    $max = $currpage * 3;
    $flag = 0;
    while($arr = mysql_fetch_array($result)){
        $number +=1;
        $flag += 1;
        if($flag > $min && $flag <= $max){
            foreach($arr as $key => $value){
                if( $key === "username"){
                    echo "<username>";
                    echo $value;
                    echo "</username>";
                }else if( $key === "datetime"){
                    echo "<datetime>";
                    echo $value;
                    echo "</datetime>";
                }else if( $key === "content"){
                    echo "<content>";
                    echo $value;
                    echo "</content>";
                };
            };
        };   
    };
    echo "<totalmessages>";
    echo $number;
    echo "</totalmessages>";
    $totalpage = ceil($number/3);
    echo "<totalpage>";
    echo $totalpage;
    echo "</totalpage>";
    echo "</ul>";
?>