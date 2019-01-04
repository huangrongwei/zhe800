$(function(){
	//点击更多按钮，显示出更多链接
	var isok=true;
	$('#more').click(function(){
		if (isok) {
			$('#more i').css("background","url(../img/shangarr.png) no-repeat");
			$('.more_login').animate({height:"40px"},300);
			$('.more_login a').animate({top:"10px"},300);
		}else{
			$('#more i').css('background','url(../img/xiaarr.png) no-repeat');
			$('.more_login').animate({height:"0"},300);
			$('.more_login a').animate({top:"5px"},300);
		}
		isok=!isok;
	});

	//点击用户名框，边框变颜色
	$('#user').focus(function(){
		// $('#psw').addClass('active1');
		$('#psw').css('border','').attr('placeholder','请输入密码');
		$('#user').css('border','1px solid blue').attr('placeholder','');

	});
	//点击密码框，边框变颜色
	$('#psw').focus(function(){
		// $('#user').addClass('active1');
		$('#user').css('border','').attr('placeholder','用户名');
		$('#psw').css('border','1px solid blue').attr('placeholder','');
	});

	//滑动验证
	var guang=0;
	var slider=false;
	$('#chunk').mousedown(function(ev){
		guang=ev.pageX-$(this).position().left;
		$(document).mousemove(function(ev){
			var leftX=ev.pageX-guang;
			if (leftX<0) {
				leftX=0;
				
			}

			if (leftX>=$('#box').outerWidth()-$('#chunk').outerWidth()) {
				leftX=$('#box').outerWidth()-$('#chunk').outerWidth();
	
			}
			$('#chunk').css('left',leftX+'px');
			$('#color').css('width',leftX+'px');
			
		});
		$(document).mouseup(function(ev){
			var leftX=ev.pageX-guang;
			if (leftX>0 && leftX<$('#box').outerWidth()-$('#chunk').outerWidth() ) {
				$('#chunk').css('left',0);
				$('#color').css('width',0);
			}
			if (leftX>=$('#box').outerWidth()-$('#chunk').outerWidth()) {
				$('#chunk').css('display','none');
				$('#chunk2').css('display','block');
				slider=true;
				$('.msg').text('');
				$('#color').html('验证通过');

			}
			$(document).unbind('mousemove');
			$(document).unbind('mousedown');
			$(document).unbind('mouseup');
		})
	});

	$('.login .btn').click(function(){
		var user=$.trim($('#user').val());
		var psw=$.trim($('#psw').val());
		var now=new Date();
		now.setDate(now.getDate()+7); 
		if (!user) {
			$('.msg').text('请输入通行证用户名');
			$('#user').focus();
			return;
		}
		if (!psw) {
			$('.msg').text('请输入通行证密码');
			return;
		}
		if (!slider) {
			$('.msg').text('请完成滑块验证');
			return;
		}
		$.ajax({
			type:"POST",//请求方式
			url:"../api/query.php",//接口路径
			async:true,//异步
			data:{//传输数据
				'username':user,
				'password':psw,
				'method':'login'
			},
			success:function(str){
				
				if (str=='1') {
					alert('登陆成功');
//					document.cookie = user+'='+psw;
					Cookie.set('name',user,{'expires':now,'path':'/' });
//					 console.log(Cookie.get("name"));
					
					location.href='../index.html';

				}else{
					$('.msg').text('用户名或密码错误,请重试');
					$('#user').val('').attr('placeholder','');
					$('#psw').val('').attr('placeholder','请输入密码');
					$('#chunk').css({
						'display':'block',
						'left':0
					});
					$('#chunk2').css('display','none');
					$('#color').css('width',0);	
					$('#color').html('');
					slider=false;
				}
			}
		});

	});

})