$(function () {
    
    /*记住密码*/
    $("#submit").click(function(e){
        var username = $("#username").val();
        var password = $("#password").val();
        var check_status = $("#checkbox:checked").val();
        if(check_status === "on"){
            localStorage.setItem(username,password);
        };
    });
    $("#username").blur(function(){
        var username2 = $("#username").val();
        var storage = localStorage.getItem(username2);
        if(storage) {
            $("#password").val(localStorage.getItem(username2));
        };
    });
});