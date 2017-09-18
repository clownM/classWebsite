$(function(){
   $('#thumbnail img').hover(function(){
       $(this).animate({"width":"250px"});  
   },function(){
       $(this).animate({"width":"200px"});  
   });
    
   $('#slideshow div').hover(function(){
       $(this).find('img').fadeOut('slow');  
   },function(){
       $(this).find('img').fadeIn('slow');  
   });
   
   $('#d1').on('mousedown',function(){
      $('#p1').slideToggle();
    }); 
    
    $('#d2').on('mousedown',function(){
      $('#p2').slideToggle();
    });
    
    $('#d3').on('mousedown',function(){
      $('#p3').slideToggle();
    });
    
    $('#d4').on('mousedown',function(){
      $('#p4').slideToggle();
    });
    
    
	var canvas = document.getElementsByTagName('canvas');
	var context = canvas[0].getContext('2d');
	var video = document.getElementById('myVideo');
	var input = document.getElementsByTagName('input');
	var span = document.getElementsByTagName('span');
	var myFunc = [];
	myFunc[1] = function() {
		video.play();

	};
	myFunc[2] = function() {
		video.pause();
		clearInterval(Interval);
	};
	myFunc[3] = function() {
		video.currentTime = 0;
        video.pause();
		clearInterval(Interval);
	};
	myFunc[4] = function() {
		video.currentTime -= 2;
        video.play();
	};
	myFunc[5] = function() {
		video.currentTime += 2;
        video.play();
	};
    
        var ctx1 = canvas[1].getContext('2d');
        var img1 = new Image();
        img1.src = "images/Play.jpg";
        img1.onload = function(){
            ctx1.drawImage(img1,0,0,50,50);
        };
        
        var ctx2 = canvas[2].getContext('2d');
        var img2 = new Image();
        img2.src = "images/Pause.jpg";
        img2.onload = function(){
            ctx2.drawImage(img2,0,0,50,50);
        };
        
        var ctx3 = canvas[3].getContext('2d');
        var img3 = new Image();
        img3.src = "images/Stop.jpg";
        img3.onload = function(){
            ctx3.drawImage(img3,0,0,50,50);
        };
        
        var ctx4 = canvas[4].getContext('2d');
        var img4 = new Image();
        img4.src = "images/Backward.jpg";
        img4.onload = function(){
            ctx4.drawImage(img4,0,0,50,50);
        }
        
        var ctx5 = canvas[5].getContext('2d');
        var img5 = new Image();
        img5.src = "images/Forward.jpg";
        img5.onload = function(){
            ctx5.drawImage(img5,0,0,50,50);
        }
        
        for (var i = 1; i < canvas.length; i++) {
            canvas[i].addEventListener('click', myFunc[i]);
	}
    
	video.ontimeupdate = function() {
		input[0].value = this.currentTime / this.duration * 100;
		span[1].innerHTML = Math.floor(this.currentTime);
		Interval = setInterval(draw, 33);
		
		
	};
	input[0].onchange = function() {
		video.currentTime = this.value / 100 * video.duration;
	};
	input[1].onchange = function() {
		video.volume = this.value / 100;
	};

	video.onloadedmetadata = function() {
		span[0].innerHTML = Math.floor(this.duration);
		var img = new Image();
		img.src = 'video/letter.png';
		img.onload = function() {
			context.drawImage(img, 0, 0, 480, 320);
			context.font = "40px 'Times New Roman'";
			context.textAlign = 'center';
			context.textBaseline = 'middle';
			context.fillStyle = '#f00';
			context.fillText('Please enjoy the video!', 240, 160);
		};
		
		
	};
	function draw () {
		context.drawImage(video, 0, 0, 480, 320);
			context.font = "15px 'Times New Roman'";
			context.textAlign = 'center';
			context.textBaseline = 'middle';
			context.fillStyle = '#0ef';
			context.fillText('感谢辛海等同学的支持', 400, 310);
	}  
});



