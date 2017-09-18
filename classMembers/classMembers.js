window.onload = function () {

    var wrap = document.getElementById('wrap');
    var Img = document.getElementsByTagName('img');

    function imgloading() {
        var imgs = ["img/gaochuchu.jpg", "img/zhanxuehu.jpg", "img/wenzhenyu.jpg", "img/kongxiaoru.jpg", "img/zhangqianqian.jpg", "img/zhangmingyuan.jpg", "img/maochen.jpg", "img/zhangting.jpg", "img/jinyukuai.jpg", "img/wengyongyao.jpg", "img/fangkewei.jpg", "img/jiangpengfei.jpg", "img/zhengdabo.jpg", "img/zoujiaming.jpg", "img/linjinwei.jpg", "img/luhongyi.jpg", "img/wangqinqin.jpg", "img/yefucheng.jpg", "img/zhaorong.jpg", "img/qiushoufan.jpg", "img/caiminjie.jpg", "img/zhubinfeng.jpg", "img/xujiaming.jpg", "img/xinhai.jpg"];

        var request = indexedDB.open("img2", 1);
        var db;

        request.onupgradeneeded = function () {
            db = this.result;
            var store = db.createObjectStore('img2', {
                keyPath: 'imgno'
            });
            store.createIndex('imgno', 'imgno', {
                unique: true
            });
            store.createIndex('imgsrc', 'imgsrc', {
                unique: true
            });
        };

        request.onsuccess = function () {
            db = this.result;
            var transaction = db.transaction(['img2'], 'readwrite');
            var store = transaction.objectStore('img2');
            for (var i = 0; i < imgs.length; i++) {
                store.put({
                    imgno: i,
                    imgsrc: imgs[i]
                });
            }

            var index = store.index('imgno');
            var rq = index.openCursor();

            rq.onsuccess = function () {
                var cursor = this.result;
                if (cursor) {
                    Img[cursor.value.imgno].src = cursor.value.imgsrc;
                    cursor.continue();
                };
            };
        };
    };
    imgloading();

    var imgLength = Img.length;
    var deg = 360 / (imgLength);
    var x, y, x_, y_, xL, yL;
    var rotX = -10,
        rotY = 0;
    var timer;
    for (var i = 0; i < imgLength; i++) {
        Img[i].style.cssText = 'transform:rotateY(' + i * deg + 'deg) translateZ(450px);transition:1.5s ' + (imgLength - i) * 0.1 + 's;';
        Img[i].setAttribute('ondragstart', 'return false'); //设置图片不可拖动
    }
    document.onmousedown = function (e) {
        clearInterval(timer);
        var e = e || window.Event;
        x_ = e.clientX;
        y_ = e.clientY;
        this.onmousemove = function (e) {
            var event = e || window.Event; /*浏览器兼容*/
            x = event.clientX;
            y = event.clientY;

            xL = x - x_; /**/
            yL = y - y_;
            rotY = rotY + xL / 10
            rotX = rotX - yL / 10;
            wrap.style.cssText = "transform: perspective(1500px) rotateX(" + rotX + "deg) rotateY(" + rotY + "deg) ; ";

            x_ = event.clientX;
            y_ = event.clientY;
        };
        this.onmouseup = function () {

            this.onmousemove = null; /*滑动惯性效果*/
            timer = setInterval(function () {
                xL *= 0.95;
                yL *= 0.95;
                if (Math.abs(xL) < 0.5 && Math.abs(yL) < 0.5) {
                    clearInterval(timer);
                };
                rotY += xL * 0.1;
                rotX -= yL * 0.1;
                wrap.style.cssText = "transform: perspective(1500px) rotateX(" + rotX + "deg) rotateY(" + rotY + "deg) ; ";

            }, 30);
        };
    };

    var autoplay = function () {
        rotY += .2;
        wrap.style.cssText = "transform: perspective(1500px) rotateX(" + rotX + "deg) rotateY(" + rotY + "deg) ; ";
    };

    setInterval(autoplay, 30);

    /*学生信息*/
    $.ajax({
        url: "classMembers.php",
        type: "GET",
        data: "",
        dataType: "xml",
        success: function (data) {
            var classmate = data.getElementsByTagName("classmate")[0];
            var name = classmate.getElementsByTagName("name");
            var id = classmate.getElementsByTagName("id");
            var gender = classmate.getElementsByTagName("gender");
            var duty = classmate.getElementsByTagName("duty");

            for (var i = 0; i < imgLength; i++) {

                $("img:eq(" + i + ")").click(function () {
                    var j = $(this).index();
                    var thisname = name[j].firstChild.data;
                    var thisid = id[j].firstChild.data;
                    var thisgender = gender[j].firstChild.data;
                    var thisduty = duty[j].firstChild.data;
                    $("#name").html(thisname);
                    $("#id").html(thisid);
                    $("#gender").html(thisgender);
                    $("#duty").html(thisduty);
                    $('#myModal').modal('show');
                });
            };
        }
    });
};