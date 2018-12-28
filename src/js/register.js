$(function(){
	function init(obj,text){
		$(obj).attr('value','').css('border','1px solid blue');
		$(obj).parent().find('p').css('color','#999').text(`${text}`);
	}
	var userok=false;
	$('#user').focusin(function(){
		init(this,'请填写注册账号');
	}).focusout(function(){
		var user=$.trim($('#user').val());
		var _this=$(this);
		// $('#user').val('用户名').css('border','1px solid #ea9292');
		if (!user) {
			$(this).attr('value','用户名').css('border','1px solid #ea9292').next().css('color','red').text('用户名不能为空');
			return;
		}
		if (!match.name(user)) {
			$(this).css('border','1px solid #ea9292').next().css('color','red').text('用户名格式错误(首字母开头6-20)');
			return;
		}
		$.ajax({
			type:'POST',
			url:'../api/query.php',
			async:true,
			data:{
				'username':user,
				'method':'reg'
			},
			success:function(str){
				console.log(str);
				if (str == '1') {
					$(_this).css('border','1px solid #ea9292').next().css('color','red').text('用户名已存在');
				}else{
					$(_this).css('border','1px solid #999').next().css('color','green').text('√');
					userok=true;
				}
			}
		});
	});


	var pswok=false;
	$('#psw').focusin(function(){
		init(this,'6-24位字母,数字');
	}).focusout(function(){
		var psw=$.trim($('#psw').val());
		if (!psw) {
			$(this).css('border','1px solid #ea9292').next().css('color','red').text('请输入密码');
			return;
		}
		if (psw.length<6) {
			$(this).css('border','1px solid #ea9292').next().css('color','red').text('密码过短,最短支持6个字符');
			return;
		}
		if (!match.psweasy(psw)) {

			$(this).css('border','1px solid #ea9292').next().css('color','red').text('密码应为数字和字母组合');
			return;
		}
		$(this).css('border','1px solid #999').next().css('color','green').text('√');
		pswok=true;
	});


	var apswok=false;
	$('#apsw').focusin(function(){
		init(this,'请再次输入您的密码');
	}).focusout(function(){
		var apsw=$.trim($(this).val());
		var psw=$.trim($('#psw').val())
		if (!apsw) {
			$(this).css('border','1px solid #ea9292').next().css('color','red').text('确认密码不能为空');
			return;
		}
		if (!match.pwwagain(apsw,psw)) {
			$(this).css('border','1px solid #ea9292').next().css('color','red').text('两次密码输入不一致');
			return;
		}
		$(this).css('border','1px solid #999').next().css('color','green').text('√');
		apswok=true;
	});

	var atcodeok=false;
	$('#autocode').focusin(function(){
		init(this,'验证码');
	}).focusout(function(){
		var atcode=$.trim($(this).val());
		if (!atcode) {
			$(this).css('border','1px solid #ea9292').parent().find('p').css('color','red').text('请输入验证码');
			return;
		}

		var autocode=$.trim($('#autocode').val());
		var cap=$('#cap').text();
		if (!autocode) {
			$(this).css('border','1px solid red').parent().find('p').css('color','red').text('请输入验证码');
			return;
		}
		if (match.pwwagain(autocode,cap)) {
			atcodeok=true;
			$(this).css('border','1px solid #999').parent().find('p').css('color','green').text('√');
		}else{
			$(this).css('border','1px solid #ea9292').parent().find('p').css('color','red').text('验证码错误');
		}
		// console.log(match.pwwagain(autocode,cap));
	});

	$('#cap').text(getCode(4)).css({
			'background':randomColor(16),
			'color':randomColor(16),
	});
	$('#cap').click(function(){
		$('#cap').text(getCode(4)).css({
			'background':randomColor(16),
			'color':randomColor(16),
		});

	});

	//拖动验证
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
				// $('#color').css('width',0);
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

	$('#btn').click(function(){
		var user=$.trim($('#user').val());
		var psw=$.trim($('#psw').val());
		var apsw=$.trim($('#apsw').val());
		var auto=$.trim($('#autocode').val());
		if (user=='用户名') {
			$('#user').css('border','1px solid #ea9292').next().css('color','red').text('用户格式错误');
		}
		if (!psw) {
			$('#psw').css('border','1px solid #ea9292').next().css('color','red').text('请输入密码');
		}
		if (!apsw) {
			$('#apsw').css('border','1px solid #ea9292').next().css('color','red').text('确认密码不能为空');
		}
		if (!auto) {
			$('#autocode').css('border','1px solid #ea9292').parent().find('p').css('color','red').text('请输入验证码');
		}
		if (userok && pswok && apswok && atcodeok && slider) {
			$.ajax({
				type:'POST',
				url:'../api/add.php',
				async:true,
				data:{
					'method':'insert',
					'username':user,
					'password':psw
				},
				success:function(str){
					// console.log(str);
					if (str=='1') {
						alert('注册成功');
						location.href='../html/login.html?'
					}
				}
			});
		}
	})

	var isok=true;
	$('.link span').click(function(){
		if (isok) {
			$('.more').css('display','block');
			$('.link span i').css('background','url(../img/shangarr.png) no-repeat');
		}else{
			$('.more').css('display','none');
			$('.link span i').css('background','url(../img/xiaarr.png) no-repeat');
		}
		isok=!isok;
	});
});