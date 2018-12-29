'use strict';

$(function () {

	var name = Cookie.get('name');
	//   console.log(name);
	if (name) {
		$('.name').css('display', 'none');
		$('.name1').css('display', 'block');
		$('.name1').mouseover(function () {
			$('.name1 a').css('background', '#fff');
			$('.login_2_list').css('display', 'block');
		}).mouseout(function () {
			$('.login_2_list').css('display', 'none');
			$('.name1 a').css('background', '#fafafa');
		});
		$('.name1 a').text(name).css('color', 'red');

		$.ajax({
			type: "POST", //请求方式
			url: "../api/query.php", //接口路径
			async: true, //异步
			data: { //传输数据
				'method': 'alllist',
				'listname': 'goodslist'
			},
			success: function success(str) {
				var arr = JSON.parse(str);
				console.log(arr);
				var content = JSON.parse(arr.content);
				console.log(content.length);
				$('.num1').text(content.length);
				$('.num2').text(content.length);
			}
		});
	} else {
		$('.num1').text(0);
		$('.num2').text(0);
	}

	$('.comment_top_box').find('h3').click(function () {
		//给所有的input绑定点击事件
		//		console.log($(this).text());
		$('html , body').animate({ scrollTop: 770 }, 'slow');
		$('.comment_top_box h3').attr('class', ''); //清空样式
		$(this).attr('class', 'active'); //点击高亮
		$('.comment_content1').css('display', 'none'); //清空
		$('.comment_content1').eq($(this).index()).css('display', 'block'); //对应的盒子跟着显示
		if ($(this).text() == '宝贝详情') {
			$('#title21').attr('class', 'active');
			//			$('.comment_r_list1').css('display','block');
		} else {
			$('#title21').attr('class', '');
			//			$('.comment_r_list1').css('display','none');
		}
		if ($(this).text() == '评价') {
			$('#title22').attr('class', 'active');
		} else {
			$('#title22').attr('class', '');
		}
		if ($(this).text() == '售后保障') {
			$('#title23').attr('class', 'active');
		} else {
			$('#title23').attr('class', '');
		}
		if ($(this).text() == '商品咨询') {
			$('#title24').attr('class', 'active');
		} else {
			$('#title24').attr('class', '');
		}
	});

	$('.title2').find('h3').click(function () {
		//给所有的input绑定点击事件
		$('html , body').animate({ scrollTop: 770 }, 'slow');

		$('.title2 h3').attr('class', ''); //清空样式
		$(this).attr('class', 'active'); //点击高亮
		$('.comment_content1').css('display', 'none'); //清空
		$('.comment_content1').eq($(this).index()).css('display', 'block'); //对应的盒子跟着显示
		if ($(this).text() == '宝贝详情') {
			$('#top1').attr('class', 'active');
			$('.comment_r').css('display', 'block');
			$('.comment_content1').css('display', 'none'); //清空
			$('.comment_content1').eq($(this).index()).css('display', 'block'); //对应的盒子跟着显示
		} else {
			$('#top1').attr('class', '');
			$('.comment_r').css('display', 'none');
		}
		if ($(this).text() == '评价') {
			$('#top2').attr('class', 'active');
			$('.comment_content1').css('display', 'none'); //清空
			$('.comment_content1').eq($(this).index()).css('display', 'block'); //对应的盒子跟着显示
		} else {
			$('#top2').attr('class', '');
		}
		if ($(this).text() == '售后保障') {
			$('#top3').attr('class', 'active');
			$('.comment_content1').css('display', 'none'); //清空
			$('.comment_content1').eq($(this).index()).css('display', 'block'); //对应的盒子跟着显示
		} else {
			$('#top3').attr('class', '');
		}
		if ($(this).text() == '商品咨询') {
			$('#top4').attr('class', 'active');
			$('.comment_content1').css('display', 'none'); //清空
			$('.comment_content1').eq($(this).index()).css('display', 'block'); //对应的盒子跟着显示
		} else {
			$('#top4').attr('class', '');
		}
	});

	$(window).scroll(function () {
		//获取滚动条的滑动距离
		var scroH = $(this).scrollTop();
		//	console.log(scroH);
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		if (scroH >= 770) {
			$(".comment_top").css('display', 'block');
			$('.comment_r').css('display', 'none');
		} else if (scroH < 770) {
			$(".comment_top").css('display', 'none');
			$('.comment_r').css('display', 'block');
		}
	});

	var id = location.search.slice(1);
	var arr = [];
	if (id) {
		$.ajax({
			type: "POST", //请求方式
			url: "../api/query.php", //接口路径
			async: true, //异步
			data: { //传输数据
				'method': 'getid',
				'listname': 'table',
				'id': id
			},
			success: function success(str) {
				arr = JSON.parse(str);
				//				$('.pos a').last().text(arr[0].name);
				$('.msg .wrap h1').text(arr[0].name);
				$('.msg .wrap h3').text(arr[0].name2);
				$('.msg .panelA .xianjia').text(arr[0].xianjia);
				$('.msg .panelA .yuan').text('￥' + arr[0].yuan);
				//				console.log(arr);
				var a1 = arr[0].url1;
				var a2 = arr[0].url2;
				var a3 = arr[0].url3;
				var a4 = arr[0].url4;
				var a5 = arr[0].url5;

				var arr1 = [a1, a2, a3, a4, a5];
				//	console.log(arr1);
				var html = '';
				for (var i = 0; i < arr1.length; i++) {
					html += '<li>\n\t\t\t\t\t\t<div class="small-img">\n\t\t\t\t\t\t\t<img src="../' + arr1[i] + '" />\n\t\t\t\t\t\t</div>\n\t\t\t</li>';
				}
				//	console.log(html);
				$('.animation03').html(html);
				$('.content_top').html('<p><a href="javascript:;">\u7279\u5356\u5546\u57CE</a>><a href="javascript:;">\u5973\u88C5</a>><a href="javascript:;">\u9488\u7EC7\u886B</a>><span>' + arr[0].name + '</span></p>');
				var magnifierConfig = {
					magnifier: "#magnifier1", //最外层的大容器
					width: 400, //承载容器宽
					height: 400, //承载容器高
					moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
					zoom: 1.5 //缩放比例
				};

				var _magnifier = magnifier(magnifierConfig);

				/*magnifier的内置函数调用*/
				/*
    	//设置magnifier函数的index属性
    	_magnifier.setIndex(1);
    
    	//重新载入主图,根据magnifier函数的index属性
    	_magnifier.eqImg();
    */
			}
		});
	}

	//加数量
	$('#num input').click(function () {
		$(this).css('border', '1px solid blue');
	}).blur(function () {
		$(this).css('border', '1px solid #ccc');
		if (isNaN($(this).val())) {
			$(this).val(1);
		}
	});

	$('#num i').eq(0).click(function () {
		var num = $('#num input').val();
		num--;
		if (num < 1) {
			num = 1;
		}
		$('#num input').val(num);
	});

	$('#num i').eq(1).click(function () {
		var num = $('#num input').val();
		num++;
		if (num > 10) {
			num = 10;
		}
		$('#num input').val(num);
	});

	//选颜色
	$('.color div').eq(1).find('a').click(function () {
		$('.color div').eq(1).find('a').css('border', '1px solid #ccc');
		$(this).css('border', '1px solid red');
	});

	$('.cun div').eq(1).find('a').click(function () {
		$('.cun div').eq(1).find('a').css({
			'color': '#666',
			'border': '1px solid #ccc'
		});
		$(this).css({
			'border': '1px solid red',
			'color': 'red'
		});
	});

	$('.submit input').click(function () {
		// location.href='result.html?';
		$('.shadow').css('display', 'block');
		$('.diginfo').css('display', 'block');
	});

	$('.diginfo h4 span').click(function () {
		$('.shadow').css('display', 'none');
		$('.diginfo').css('display', 'none');
	});

	$('.diginfo .btn input').click(function () {
		console.log($(this).val());
		if ($(this).val() == '去购物车结算') {
			$.ajax({
				type: "POST", //请求方式
				url: "../api/add.php", //接口路径
				async: true, //异步
				data: { //传输数据
					'method': 'inputgl',
					'listname': 'goodslist',
					'cid': arr[0].id,
					'url': arr[0].url1,
					'name': arr[0].name,
					'xianjia': arr[0].xianjia,
					'yuan': arr[0].yuan,
					'num': $('#num input').val(),
					'price': arr[0].xianjia
				},
				success: function success(str) {
					console.log(str);
					if (str == '1') {
						location.href = 'result.html?';
					}
				}
			});
		} else {
			$('.shadow').css('display', 'none');
			$('.diginfo').css('display', 'none');
		}
	});
});