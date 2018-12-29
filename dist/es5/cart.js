'use strict';

$(function () {

	var name = Cookie.get('name');

	$('.toolbar .nav').on('click', 'li', function () {
		if ($(this).find('a b').text() == '退出') {
			var now = new Date();
			now.setDate(now.getDate() - 7);

			Cookie.set('name', name, { 'expires': now, 'path': '/' });
			//				
			location.href = '../index1.html';
		}
	});
	//	
	//   console.log(name);
	if (name) {
		$('.toolbar .nav .qq').remove();
		$('.toolbar .nav li').eq(2).html('<a href="javascript:;"><span style="color:red;margin-right:5px;">\u60A8\u597D,' + name + '</span><b>\u9000\u51FA</b></a>');
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
				//			console.log(arr);
				var content = JSON.parse(arr.content);
				//			console.log(content.length);
				$('.num1').text(content.length);
				//			$('.num2').text(content.length);
			}
		});
	} else {
		$('.num1').text(0);
		//			$('.num2').text(0);
	}

	// 弹窗处理
	function dialogBox(message, yesCallback, noCallback) {
		if (message) {
			$('.diglog article').html(message);
		}
		// 显示遮罩和对话框
		$('.shadow').css('display', 'block');
		$('.diglog').css('display', 'block');
		// 确定按钮
		$('.diglog .submit input:eq(0)').click(function () {
			yesCallback();
		});
		// 取消按钮
		$('.diglog .submit input:eq(1)').click(function () {
			noCallback();
		});

		$('.diglog h4 span').click(function () {
			noCallback();
		});
	}
	//更新当行的金额
	function updatemoney(obj) {
		var num = obj.find('.number input').val();
		var price = $.trim(obj.find('.price p:eq(0)').html());
		obj.find('.money').html((num * price).toFixed(0));
	}

	//全部勾选
	function open() {
		if (all) {
			$('#List .bottom').css({
				'border': '1px solid red',
				'background': '#fdf4f6'
			});
			$('#resbtn').css({
				'background': 'red',
				'color': '#fff'
			});
			$('.list .result label input').prop('checked', 'checked');
			$('.list .result').css('border', '1px solid red');
			$('.item_head label').css('background', 'url(../img/check.png) no-repeat 0px -27px');
			$('.item_head label input').prop('checked', 'checked');
			$('.result label').css('background', 'url(../img/check.png) no-repeat 0px -27px');
			$('#List .bottom label input').prop('checked', 'checked');
			$('#List .bottom label').css('background', 'url(../img/check.png) no-repeat 0px -27px');
		} else {
			$('#List .bottom').css({
				'border': '1px solid #e5e5e5',
				'background': '#e9e9e9'
			});
			$('#resbtn').css({
				'background': '#e5e5e5',
				'color': '#666'
			});
			$('.list .result label input').removeAttr('checked');
			$('.list .result').css('border', '1px solid #e5e5e5');
			$('#List .bottom').css('border', '1px solid #e5e5e5');
			$('.item_head label').css('background', 'url(../img/check.png) no-repeat 0px -14px');
			$('.item_head label input').removeAttr('checked');
			$('.result label').css('background', 'url(../img/check.png) no-repeat 0px -14px');
			$('#List .bottom label input').removeAttr('checked');
			$('#List .bottom label').css('background', 'url(../img/check.png) no-repeat 0px -14px');
		}
		all = !all;
	}

	// 更新总额数量和金钱
	var arr = [];
	function updateNum() {
		//空数组：存被勾选的行的下标
		arr.length = 0;
		var le = $('#List .bottom label input').size(); //复选框的总个数
		for (var i = 0; i < le; i++) {
			if ($('#List .bottom label input').eq(i).prop('checked')) {
				//意味着这一行被勾选
				arr.push(i);
			}
		}

		//统计被勾选的行对应的数量，累加放到底部对应位置
		//统计被勾选的行对应的小计，累加放到底部对应位置
		var num = 0; //总数量
		var totalPrice = 0; //存总价
		for (var i = 0; i < arr.length; i++) {
			num += $('#List .number input').eq(arr[i]).val() * 1;
			var price = $('#List .bottom .money').eq(arr[i]).text(); //￥ 199.98
			price = $.trim(price); //去掉前后空格

			price = price * 1; //199.98

			//			console.log(price);
			totalPrice += price;
		}

		// //		console.log(num);

		$('.result .mm i').html(num);

		// //		console.log(totalPrice.toFixed(2));
		$('.result .amount span').html('￥ ' + totalPrice.toFixed(0));
	}

	//判断有没有商品
	function update() {
		if ($('#List li').size() == 0) {
			//意味着没有商品数据了
			$('.list .item').css('display', 'none');
			$('.list .empty').css('display', 'block');
		}
	}

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
			//			console.log(arr);
			var content = JSON.parse(arr.content);

			$('#List').html(content.map(function (item) {
				return '<li data-id="' + item.id + '">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class="bottom">\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="" >\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<div class="yifu">\n\t\t\t\t\t\t\t\t\t<img src="../' + item.url + '" alt="">\n\t\t\t\t\t\t\t\t\t<h3><a href="javascript:;" title="">' + item.name + '</a></h3>\n\t\t\t\t\t\t\t\t\t<div class="type">\n\t\t\t\t\t\t\t\t\t\t\u989C\u8272: \u674F\u8272 <br>\n\t\t\t\t\t\t\t\t\t\t\u5C3A\u7801: XL\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="price">\n\t\t\t\t\t\t\t\t\t<p class="price1">' + item.xianjia + '</p>\n\t\t\t\t\t\t\t\t\t<p><del>' + item.yuan + '</del></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="number">\n\t\t\t\t\t\t\t\t\t<i>-</i>\n\t\t\t\t\t\t\t\t\t<input type="text" value="' + item.num + '">\n\t\t\t\t\t\t\t\t\t<i>+</i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="money">\n\t\t\t\t\t\t\t\t\t' + item.price + '\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="move">\n\t\t\t\t\t\t\t\t\t<a href="javascript:;" id="delete">\u5220\u9664</a> <br>\n\t\t\t\t\t\t\t\t\t<a href="javascript:;">\u79FB\u5165\u6536\u85CF</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>';
			}).join(''));
			update();
		}
	});

	$(window).scroll(function () {
		//获取滚动条的滑动距离
		var scroH = $(this).scrollTop();
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		if (scroH >= 200) {
			$("#topback").css('display', 'block');
		} else if (scroH < 200) {
			$("#topback").css('display', 'none');
		}
	});

	$('#topback').click(function () {
		window.scrollTo(0, 0);
	});

	var isok = true;
	$('#all input').click(function () {
		if (isok) {
			$(this).prev('checked', 'checked');
			$('#all').css('background-position', '0px -27px');
		} else {
			$(this).removeAttr('checked');
			$('#all').css('background-position', '0px -14px');
		}
		isok = !isok;
	});

	var username = Cookie.get('username');
	if (username) {
		$('.toolbar .nav .qq').remove();
		$('.toolbar .nav li').eq(2).html('<a href="javascript:;"><span style="color:red;margin-right:5px;">\u60A8\u597D,' + username + '</span><b>\u9000\u51FA</b></a>');
	}

	$('.toolbar .nav').on('click', 'li', function () {
		if ($(this).find('a b').text() == '退出') {
			var res = '确定要退出吗？';
			dialogBox(res, function () {
				$('.shadow').css('display', 'none');
				$('.diglog').css('display', 'none');
				Cookie.remove('username', '/src');
				location.href = 'result.html';
			}, function () {
				$('.shadow').css('display', 'none');
				$('.diglog').css('display', 'none');
			});
		}
	});

	//删除当行
	var index = 0;
	$('#List').on('click', '#delete', function () {
		var id = $(this).parent().parent().parent().attr('data-id');
		var _this = $(this).parent().parent().parent();
		var msg = '确定删除该商品吗？';
		dialogBox(msg, function () {
			_this.remove();
			$('.shadow').css('display', 'none');
			$('.diglog').css('display', 'none');
			$.ajax({
				type: "POST", //请求方式
				url: "../api/delete.php", //接口路径
				async: true, //异步
				data: { //传输数据
					'method': 'delete',
					'listname': 'goodslist',
					'id': id
				},
				success: function success(str) {
					updateNum();
					update();
					//					console.log(str);
				}
			});
		}, function () {
			$('.shadow').css('display', 'none');
			$('.diglog').css('display', 'none');
		});
	});
	//增减数量
	$('#List').on('click', '.bottom .number i', function () {
		var num = Number($(this).parent().find('input').val());
		var price = $(this).parent().prev().children('.price1').text();
		console.log(price);
		var id = $(this).parent().parent().parent().attr('data-id');

		var _this = $(this).parent().parent();

		if ($(this).html() == '-') {

			var a = price * (num - 1);
			if (a <= price) {
				a = price;
			}
			//		console.log(a);
			//			var num=$(this).parent().find('input').val();
			num <= 1 ? 1 : num--;
			$(this).parent().find('input').val(num);
			updatemoney(_this);
			$.ajax({
				type: "GET",
				url: "../api/cart.php",
				async: true,
				data: { //传输数据
					'id': id,
					'num': num,
					'price': a
				},
				success: function success(str) {
					//					console.log(str);
				}
			});
		}
		if ($(this).html() == '+') {
			var a = price * (num + 1);
			console.log(a);
			console.log(num + 1);
			num >= 10 ? 10 : num++;
			$(this).parent().find('input').val(num);
			updatemoney(_this);
			$.ajax({
				type: "GET",
				url: "../api/cart.php",
				async: true,
				data: { //传输数据
					'id': id,
					'num': num,
					'price': a
				},
				success: function success(str) {
					console.log(str);
				}
			});
		}
		updateNum();
	});

	var all = true;

	//勾选全选
	$('.result label input').on('click', function () {
		open();
		updateNum();
	});

	$('.item_head label input').on('click', function () {
		open();
		updateNum();
	});

	$('.result span a:eq(0)').click(function () {
		open();
		updateNum();
	});

	// 删除全部
	var cid = '';
	$('.result span a:eq(1)').on('click', function () {
		updateNum();
		var mes = '您确定要删除全部商品吗？';
		dialogBox(mes, function () {
			for (var i = arr.length - 1; i >= 0; i--) {
				//找到对应的行，删除
				cid += $('#List li').eq(arr[i]).attr('data-id') + ',';
				$('#List li').eq(arr[i]).remove();
				//接口3：删除数据库订单表多条数据
			}
			$('.shadow').css('display', 'none');
			$('.diglog').css('display', 'none');

			$.ajax({
				type: "POST", //请求方式
				url: "../api/delete.php", //接口路径
				async: true, //异步
				data: { //传输数据
					'method': 'alldelete',
					'listname': 'goodslist',
					'cid': cid.slice(0, -1)
				},
				success: function success(str) {
					if (str == '1') {
						updateNum();
						update();
					}
					console.log(str);
				}
			});
		}, function () {
			$('.shadow').css('display', 'none');
			$('.diglog').css('display', 'none');
		});
	});

	$('#List').on('click', '.bottom label input', function () {
		updateNum();
		if ($(this).prop('checked')) {
			$(this).parent().css('background', 'url(../img/check.png) no-repeat 0px -27px');
			$(this).parent().parent().css({
				'border': '1px solid red',
				'background': '#fdf4f6'
			});

			$('#resbtn').css({
				'background': 'red',
				'color': '#fff'
			});
			$('.item .result').css('border', '1px solid red');
		} else {
			$(this).parent().css('background', 'url(../img/check.png) no-repeat 0px -14px');
			$(this).parent().parent().css({
				'border': '1px solid #e5e5e5',
				'background': '#e9e9e9'
			});
		}

		if (arr.length == $('#List li').size()) {
			//控制是否全选勾上
			//证明全被勾选
			$('.result label input').prop('checked', 'checked');
			$('.result label').css('background', 'url(../img/check.png) no-repeat 0px -27px');
			$('.list .item .item_head label input').prop('checked', 'checked');
			$('.list .item .item_head label').css('background', 'url(../img/check.png) no-repeat 0px -27px');
			all = false;
		} else {
			$('.result label input').removeAttr('checked');
			$('.result label').css('background', 'url(../img/check.png) no-repeat 0px -14px');
			$('.list .item .item_head label input').removeAttr('checked');
			$('.list .item .item_head label').css('background', 'url(../img/check.png) no-repeat 0px -14px');
			all = true;
		}
		if (arr.length == 0) {
			$('#resbtn').css({
				'background': '#e5e5e5',
				'color': '#666'
			});
			$('.list .result').css('border', '1px solid #e5e5e5');
		}
	});
});