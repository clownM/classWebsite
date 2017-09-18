<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>网络1301</title>
        <link rel="stylesheet" href="../res/bootstrap.min.css">
        <link rel="stylesheet" href="homePage.css">
    </head>
    <body>
        <div class="container">
            <section>
                <form action="loginsuccessful.php" method="post">
                <div class="login">
                    <img src="../res/headPortrait/niming.png" id="head">
                    <p>网络1301班</p>
                    <div class="success">
                        <p>
                        登陆成功！</p>
                        <p>Welcome！ 
                        <?php
                            if(isset($_COOKIE["name"])){
                                echo $_COOKIE["name"];
                            };
                        ?>!
                        </p>
                        <input type="submit" value="退出登录" name="submit">
                        <?php
                            if(isset($_REQUEST["submit"])){
                                setcookie("name","",-1);
                            };
                        ?>
                    </div>
                </div>
                </form>
                <?php
                    if(isset($_REQUEST["submit"])){
                        unset($_COOKIE["name"]);
                        header("location:homePage.html");
                    }
                ?>
            </section>
            <section id="carousel">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src="images/2.jpg" alt="...">
                            <div class="carousel-caption">
                            </div>
                        </div>
                        <div class="item">
                            <img src="images/1.jpg" alt="...">
                            <div class="carousel-caption">
                            </div>
                        </div>
                        
                        <div class="item">
                            <img src="images/3.jpg" alt="...">
                            <div class="carousel-caption">
                            </div>
                        </div>
                   </div>

                   <!-- Controls -->
                   <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                   <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                   <span class="sr-only">Previous</span>
                   </a>
                   <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                   <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                   <span class="sr-only">Next</span>
                   </a>
               </div>
            </section>
            <section>
                <div class="note">
                    <p id="note">班级公告</p>
                    <div id="note1">
                        <p>1.班级公共邮箱：
                           <br>账号：wlgc1301@126.com
                           <br>密码：wangluo1301
                        </p>
                        <p class="time">2016年3月25日</p>
                    </div>
                    <div id="note2">
                        <p>2.2016年英语六级考试改革：<br>
                        这次改革的部分为听力部分，因此，备考2016年英语六级的考生一定要知道以英语六级听力试题的调整下的听力改革内容：<br>
                         (1)、取消短对话<br>
                         (2)、取消短文听写<br>
                         (3)、听力篇章调整为2篇（原3篇）<br>
                         (4)、新增讲座/讲话（3篇）<br>
                         其他测试内容不变。
                        </p>
                        <p class="time">2016年6月5日</p>
                    </div>
                </div>
            </section>
            <section>
                <div class="distruction">
                    <p>班级简介：</p>
                    <img src="images/7.jpg">
                    <p>
                   雪山巍峨，河水激荡，一群充满活力的年轻人——网络1301班的同学们在充满学术气息的信电学院里演绎着一个个富有激情的青春故事。这是一个团结奋进、朝气蓬勃、温暖和谐的集体。24位来自五湖四海的学子，24张意气风发的笑脸，24颗热血澎湃的心汇集在这里为了梦想共同奋斗。
                    </p>
                    <p>
                   2013年9月，20多个怀揣着梦想的孩子一起来到浙江工商大学，来到信电学院，一起组成了网络1301这个集体，成立以来，在辅导员与班主任的引导下，全班同学以“团结、和谐、文明、进取”为班级文化，团结一心、锐意进取，在各方面都交出了令人满意的答卷。
                    </p>
                    <p>
                   英语课上犹如置身异国，论文写作总有文采华章，实验室里总有灵光乍现，竞赛设计过程创意纷飞。
                    </p>
                    <p>
                    精神抖擞，运动会上舍我其谁；千机万辩，辩论场上魅力无限；挥洒青春，篮球比赛我来过，就无悔；舞步飞旋，国标舞大赛里轻舞飞扬的何止在此，还有那一颗颗活力的心，在灯光与掌声中化作流云。
                    </p>
                    <p>
                    这就是网络1301，梦开始的地方！
                    </p>
                </div>
            </section>
            <script src="../res/jquery-1.11.3.min.js"></script>
            <script src="../res/bootstrap.min.js"></script>
        </div>
    </body>
</html>