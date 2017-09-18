$(function(){
    //日期显示    
    setInterval(function(){
        var datetime= new Date();     
        var year = datetime.getFullYear();
        var month = datetime.getMonth()+1;
        var date = datetime.getDate();
        var hour = datetime.getHours();
        var min = datetime.getMinutes();
        var sec = datetime.getSeconds();
        
        var ampm,hour12,enampm;   
        if(hour >= 0 && hour < 12){
            ampm = "上午";
            enampm = "AM",
            hour12 = hour;
        }else if(hour == 12){
            ampm = "下午";
            enampm = "PM";
            hour12 = hour;
        }else if(hour > 12 && hour <= 23){
            ampm = "下午";
            enampm = "PM";
            hour12 = hour - 12;
        };
        var long = [month,date,hour,min,sec,hour12];
        for(var i = 0;i < long.length;i++){
            if(long[i] < 10){
                long[i] = "0"+long[i].toString();
            }
        };
        var datetime3 = year+"年"+long[0]+"月"+long[1]+"日"+" "+long[5]+"时"+long[3]+"分"+long[4]+"秒  "+ampm;
        var datetime2 = long[0]+"-"+long[1]+" "+long[5]+":"+long[3]+":"+long[4]+" "+enampm;
        var datetime1 = long[2]+":"+long[3]+":"+long[4];
        
        $(".datetime1:eq(0)").html(datetime1);
        $(".datetime2:eq(0)").html(datetime2);
        $(".datetime3:eq(0)").html(datetime3);
    },1000);

    //背景音乐静音
    var bgm = document.getElementById("bgm");
    $(".bgm:eq(0)").click(function(){
        if($('#trum').attr("class") === "bgm_hide"){
            $('#trum').removeClass("bgm_hide");
            $("#mute").addClass("bgm_hide");
            bgm.muted = false;
        }else{
            $('#mute').removeClass("bgm_hide");
            $("#trum").addClass("bgm_hide");
            bgm.muted = true;
        }  
    });
    
    //切换框架   
    $('#homepage').click(function(){
        document.getElementById('iframe_homepage').contentWindow.location.reload(true);
        $('a.a1').removeClass('active');
        $(this).addClass('active');
        $('iframe').addClass('iframe_hide');
        $('#iframe_homepage').removeClass('iframe_hide');
    });
    $('#classintro').click(function(){
        document.getElementById('iframe_classintro').contentWindow.location.reload(true);
        $('a.a1').removeClass('active');
        $(this).addClass('active');
        $('iframe').addClass('iframe_hide');
        $('#iframe_classintro').removeClass('iframe_hide');
    });
    $('#classmembers').click(function(){
        document.getElementById('iframe_classmembers').contentWindow.location.reload(true);
        $('a.a1').removeClass('active');
        $(this).addClass('active');
        $('iframe').addClass('iframe_hide');
        $('#iframe_classmembers').removeClass('iframe_hide');
        
    });
    $('#classmatter').click(function(){
        document.getElementById('iframe_classmatter').contentWindow.location.reload(true);
        $('a.a1').removeClass('active');
        $(this).addClass('active');
        $('iframe').addClass('iframe_hide');
        $('#iframe_classmatter').removeClass('iframe_hide');
    });
    $('#messageboard').click(function(){
        document.getElementById('iframe_messageboard').contentWindow.location.reload(true);
        $('a.a1').removeClass('active');
        $(this).addClass('active');
        $('iframe').addClass('iframe_hide');
        $('#iframe_messageboard').removeClass('iframe_hide');
    });
    
    var wrap1 = document.getElementsByClassName("wrap_small")[0];
    var sina = document.getElementById("sina");
    var wrap2 = document.getElementsByClassName("wrap_big")[0];
    sina.ondragstart = function(e){
        e.dataTransfer.setData('id', this.id);
    };
    wrap2.ondragover = function(e){
        e.preventDefault();
    };
    wrap2.ondrop = function(e){
        e.preventDefault();
        this.appendChild(document.getElementById(e.dataTransfer.getData('id')));
    };
    wrap1.ondragover = function(e){
        e.preventDefault();
    };
    wrap1.ondrop = function(e){
        e.preventDefault();
        this.appendChild(document.getElementById(e.dataTransfer.getData('id')));
    };
 
});