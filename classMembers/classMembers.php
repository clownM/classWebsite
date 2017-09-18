<?php
    $conn = mysql_connect("localhost","MChen","123");
    mysql_select_db("classwebsite");
    mysql_query("set names 'utf8'");
    $result = mysql_query("select * from student_info order by id");
    header("content-type:text/xml");
    echo "<?xml version='1.0' encoding='utf-8' ?>";
    echo "<classmate>";
    while($arr = mysql_fetch_array($result)){
        foreach($arr as $key => $value){
            if($key === "id"){
                echo "<id>";
                echo $value;
                echo "</id>";
            }
            if( $key === "name"){
                echo "<name>";
                echo $value;
                echo "</name>";
            }else if( $key === "gender"){
                echo "<gender>";
                echo $value;
                echo "</gender>";
            }else if( $key === "duty"){
                echo "<duty>";
                echo $value;
                echo "</duty>";
            };
        };
    };
    echo "</classmate>";
?>