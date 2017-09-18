<!DOCTYPE html>
<html lang="ch">

<head>
    <meta charset="utf-8">
    <title>网络1301</title>
    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="../res/bootstrap.min.css">
    <link rel="stylesheet" href="messageBoard.css">
</head>

<body>
    <div class="header">
       <ul>
           <li><hr class="hr1_1"></li>
           <li class="mid">
               <div class="liuyanban">
                    <span class="glyphicon glyphicon-star" id="star1"></span>
                    <h2>留言板</h2>
                    <span class="glyphicon glyphicon-star" id="star2"></span>
                </div>
          </li>
           <li><hr class="hr1_2"></li>
       </ul>


        <br>
        <form action="../homePage/messageBoard_server.php" method="post">
            <p class="fabiao">有什么留言想和大家分享？</p>
            <p class="zishu">还可以输入<span id="zishu">120</span>字</p>
            <textarea name="contect" id="message" rows="3">120字以内</textarea>
            <br>
            <button type="submit" class="btn btn-info" name="submit" id = "submit">提交留言</button>
            <label for="niming">匿名发表</label>
            <input type="checkbox"  id = "niming" name = "niming"/>

        </form>
    </div>

    <div class="footer">
        <p class="liuyan">留言（共<span id="totalmessages"></span>条）</p>
    </div>
    <div id="paging"></div>
    <script src="../res/jquery-1.11.3.min.js"></script>
    <script src="../res/bootstrap.min.js"></script>
    <script src="../res/layer-v2.3/layer/layer.js"></script>
    <script src="../res/laypage-v1.3/laypage/laypage.js"></script>
    <script src="messageBoard.js"></script>
</body>
</html>