
$(function(){
	var username=Cookie.get('username');
	if (username) {
		$('.toolbar .nav .qq').remove();
		$('.toolbar .nav li').eq(2).html(`<a href="javascript:;"><span style="color:red;margin-right:5px;">您好,${username}</span><b>退出</b></a>`)
	}

	$('.toolbar .nav').delegate('li','click',function(){
		if ($(this).find('a b').text()=='退出') {
			var res=confirm('确定要退出吗？');
			if (res) {
				
				Cookie.remove('username','/src');
				location.href='detpage.html';
			}
		}
	});

	var id=location.search.slice(1);
	var arr=[];
	if (id) {
		$.ajax({
			type:"POST",//请求方式
			url:"../api/query.php",//接口路径
			async:true,//异步
			data:{//传输数据
				'method':'getid',
				'listname':'table',
				'id':id
			},
			success:function(str){
				arr=JSON.parse(str);
				$('.pos a').last().text(arr[0].name);
				$('.msg .wrap h1').text(arr[0].name);
				$('.msg .wrap h3').text(arr[0].name2);
				$('.msg .panelA .xianjia').text(arr[0].xianjia);
				$('.msg .panelA .yuan').text('￥'+arr[0].yuan);
				$('#detail .photo').html(
					`<img src="../${arr[0].url1}" alt="" class="jqzoom">
					<ul>
						<li style="opacity:1"><img src="../${arr[0].url1}" alt=""></li>
						<li><img src="../${arr[0].url2}" alt=""></li>
						<li><img src="../${arr[0].url3}" alt=""></li>
						<li><img src="../${arr[0].url4}" alt=""></li>
						<li><img src="../${arr[0].url5}" alt=""></li>
					</ul>
					<div>
						<a href="javascript:;"><i></i>收藏</a>
						 <a href="javascript:;"><i></i>分享</a>
						 <a href="javascript:;"><i></i>举报</a> 
					</div>`
				);
				// $(".jqzoom").imagezoom();z
			}
		});
	}
	$('#detail .photo').delegate('li','mouseover',function(event){
		 if(event.type == "mouseover"){
		  //鼠标悬浮
		  	$('#detail .photo li').css('opacity','0.5');
		 	$(this).css('opacity','1');
		  	$(this).parent().prev().attr('src',`${$(this).find('img').attr('src')}`);
		 }
	});

	$('#num input').click(function(){
		$(this).css('border','1px solid blue');
	}).blur(function(){
		$(this).css('border','1px solid #ccc');
		if (isNaN($(this).val())) {
			$(this).val(1);
		}
	});

	$('#num i').eq(0).click(function(){
		var num=$('#num input').val();
		num--;
		if (num<1) {
			num=1;
		}
		$('#num input').val(num);
	});

	$('#num i').eq(1).click(function(){
		var num=$('#num input').val();
		num++;
		if (num>10) {
			num=10;
		}
		$('#num input').val(num);
	});

	$('.color div').eq(1).find('a').click(function(){
		$('.color div').eq(1).find('a').css('border','1px solid #ccc');
		$(this).css('border','1px solid red');
	});

	$('.cun div').eq(1).find('a').click(function(){
		$('.cun div').eq(1).find('a').css({
			'color': '#666',
			'border':'1px solid #ccc'
		});
		$(this).css({
			'border':'1px solid red',
			'color':'red'
		});
	});

	$('.submit input').click(function(){
		// location.href='result.html?';
		$('.shadow').css('display','block');
		$('.diginfo').css('display','block');
	});


	$('.diginfo h4 span').click(function(){
		$('.shadow').css('display','none');
		$('.diginfo').css('display','none');
	});
	$('.diginfo .btn input').click(function(){
		if ($(this).val()=='去购物车结算') {
			$.ajax({
				type:"POST",//请求方式
				url:"../api/add.php",//接口路径
				async:true,//异步
				data:{//传输数据
					'method':'inputgl',
					'listname':'goodslist',
					'cid':arr[0].id,
					'url':arr[0].url1,
					'name':arr[0].name,
					'xianjia':arr[0].xianjia,
					'yuan':arr[0].yuan,
					'num':$('#num input').val()
				},
				success:function(str){
					if (str == '1') {
						location.href='result.html?';
					}
				}
			});
		}else{
			$('.shadow').css('display','none');
			$('.diginfo').css('display','none');
		}
	});

});
