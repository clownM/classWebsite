$(function(){
    
    //加载中
    layer.load();

    
    /*textarea默认值*/
    $("#message").blur(function(){
        if($(this).val() === ""){
            $(this).css("color","#ccc");
            $(this).val("120字以内");
        }
    });
    $("#message").focusin(function(){
        if($(this).val() === "120字以内"){
            $(this).css("color","#000");
            $(this).val("");
        };
    });
    
    /*webworker 统计 textarea字数*/
    var worker = new Worker('worker.js');
    $("#message").on("input",function(){
        var zishu = $(this).val().length;
        worker.postMessage(zishu);
        worker.onmessage = function(e){
            $("span#zishu").html(e.data);
        };
    });
    
    /*ajax 将 php 中的留言信息显示到页面上*/
    function demo(curr){
        var div_footer = document.getElementsByClassName("footer")[0];
        layer.load(),
        $.ajax({
            url:"messageBoard_client.php",
            type:"POST",
            data:{page:curr || 1},
            dataType:"xml",
            success:function(data){
                layer.closeAll();
                var uuu = data.getElementsByTagName("ul")[0];
                var username = uuu.getElementsByTagName("username");
                var datetime = uuu.getElementsByTagName("datetime");
                var content = uuu.getElementsByTagName("content");
                var totalpage = uuu.getElementsByTagName("totalpage")[0];
                var totalmessages = uuu.getElementsByTagName("totalmessages")[0];
                
                $("#totalmessages").html(totalmessages.firstChild.data);
                
                var _table = document.getElementsByTagName("table");
                if (_table.length > 0) {
					for(var i = _table.length-1; i >= 0; i--) {
						div_footer.removeChild(_table[i]);
					}
				}
                for(var i = 0;i < username.length;i++){
                    var table = document.createElement("table");
                    var tbody1 = document.createElement("tbody");
                    var tbody2 = document.createElement("tbody");

                    var tr1 = document.createElement("tr");
                    var tr2 = document.createElement("tr");
                    var tr3 = document.createElement("tr");

                    var td_hr = document.createElement("td");
                    $(td_hr).attr("colspan","3");
                    var hr = document.createElement("hr");
                    var td_head = document.createElement("td");
                    $(td_head).attr("rowspan","2");
                    var img = document.createElement("img");   
                    var td_username = document.createElement("td");
                    var td_datetime = document.createElement("td");
                    var td_content = document.createElement("td");
                    $(td_content).attr("colspan","2");

                    hr.className = "hr2";
                    td_hr.appendChild(hr);
                    tr1.appendChild(td_hr);
                    tbody1.appendChild(tr1);

                    img.src = "../res/headPortrait/niming.png";
                    img.className = "head";
                    td_head.className = "tdhead";
                    td_head.appendChild(img);
                    tr2.appendChild(td_head);
                    td_username.className = "username";
                    td_username.innerHTML = username[i].firstChild.data;
                    tr2.appendChild(td_username);
                    td_datetime.className = "date";
                    td_datetime.innerHTML = datetime[i].firstChild.data;
                    tr2.appendChild(td_datetime);
                    tbody2.appendChild(tr2);

                    td_content.className = "content";
                    td_content.innerHTML = content[i].firstChild.data;
                    tr3.appendChild(td_content);
                    tbody2.appendChild(tr3);
                    tbody2.className = "fixed";

                    table.appendChild(tbody1);
                    table.appendChild(tbody2);
                    
                    div_footer.appendChild(table);
                };
                //显示分页
                laypage({
                    cont: 'paging', //容器。
                    pages: totalpage.firstChild.data, //通过后台拿到的总页数
                    curr: curr || 1, //当前页
                    skin:'#00AAFF',
                    last:totalpage.firstChild.data,
                    groups:3,
                    jump: function(obj, first){ //触发分页后的回调
               
                        if(!first){ //点击跳页触发函数自身，并传递当前页：obj.curr
                            demo(obj.curr);
                           
                        }
                    }
                });
            }
        });
    };
    demo();
   
    /*var request = new XMLHttpRequest();
    request.open("GET","messageBoard3.php");
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            
            加载结束
            layer.closeAll();
            var text = request.responseXML;
            var uuu = text.getElementsByTagName("ul")[0];
            var username = uuu.getElementsByTagName("username");
            var datetime = uuu.getElementsByTagName("datetime");
            var content = uuu.getElementsByTagName("content");
            for(var i = 0;i < username.length;i++){
                var table = document.createElement("table");
                var tbody1 = document.createElement("tbody");
                var tbody2 = document.createElement("tbody");
                
                var tr1 = document.createElement("tr");
                var tr2 = document.createElement("tr");
                var tr3 = document.createElement("tr");
                
                var td_hr = document.createElement("td");
                $(td_hr).attr("colspan","3");
                var hr = document.createElement("hr");
                var td_head = document.createElement("td");
                $(td_head).attr("rowspan","2");
                var img = document.createElement("img");   
                var td_username = document.createElement("td");
                var td_datetime = document.createElement("td");
                var td_content = document.createElement("td");
                $(td_content).attr("colspan","2");
 
                hr.className = "hr2";
                td_hr.appendChild(hr);
                tr1.appendChild(td_hr);
                tbody1.appendChild(tr1);
                
                img.src = "../res/headPortrait/niming.png";
                img.className = "head";
                td_head.className = "tdhead";
                td_head.appendChild(img);
                tr2.appendChild(td_head);
                td_username.className = "username";
                td_username.innerHTML = username[i].firstChild.data;
                tr2.appendChild(td_username);
                td_datetime.className = "date";
                td_datetime.innerHTML = datetime[i].firstChild.data;
                tr2.appendChild(td_datetime);
                tbody2.appendChild(tr2);

                td_content.className = "content";
                td_content.innerHTML = content[i].firstChild.data;
                tr3.appendChild(td_content);
                tbody2.appendChild(tr3);
                tbody2.className = "fixed";
                
                table.appendChild(tbody1);
                table.appendChild(tbody2);
                var div_footer = document.getElementsByClassName("footer")[0];
                div_footer.appendChild(table);
            };
        };
    };
    request.send();
    delete request;  */
    
    $("#submit").click(function(e){
        /*输入为空时弹出框*/
        if($("#message").val() === "120字以内"){
            e.preventDefault();
            layer.alert('请输入您的留言', {icon: 5});
        }
        /*未登录*/

    });
});