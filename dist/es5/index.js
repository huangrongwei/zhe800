'use strict';

$(function () {
	//	//判断是否有cookie,username
	var name = Cookie.get('name');
	console.log(name);
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
			url: "api/query.php", //接口路径
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

	$('.login_2_list').on('click', '.click_end', function () {

		if ($(this).text() == '退出') {
			var res = confirm('确定要退出吗？');
			var now = new Date();
			now.setDate(now.getDate() - 7);
			if (res) {
				Cookie.set('name', name, { 'expires': now, 'path': '/' });
				//				Cookie.remove('name');
				location.href = 'index1.html';
			}
		}
	});

	//	轮播图
	myFocus.set({
		id: 'myFocus', //ID
		pattern: 'mF_sohusports' //风格
	});

	//滚动条事件
	$(window).scroll(function () {
		//获取滚动条的滑动距离
		var scroH = $(this).scrollTop();
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		if (scroH >= 500) {
			$(".toptop").css('display', 'block');
			$('.top').click(function () {
				var y = window.scrollY;
				var num = 0;
				if (y > num) {
					var timer = setInterval(function () {
						y -= 100;
						window.scrollTo(0, y);
						console.log(y);
						if (y < num) {
							clearInterval(timer);
						}
					}, 0);
				}
			});
		} else if (scroH < 500) {
			$(".toptop").css('display', 'none');
		}
	});

	function update(arr) {
		$('#list').html(arr.map(function (item) {
			return '<li data-id="' + item.id + '">\n\t\t\t\t\t\t\t<img src="' + item.url1 + '" alt="">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a href="javascript:;" title="">' + item.name + '</a>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span>' + item.msg + '</span>\n\t\t\t\t\t\t\t\t<span>\u6536\u85CF\u54C1\u724C</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>';
		}).join(''));
	}

	function next() {
		//动画时间间隔：5000-2000
		$('#flashSale .flashMove ul').animate({ 'left': -iw }, 500, function () {
			//出去的图片，剪切放到末尾
			$('#flashSale .flashMove ul li:lt(6)').insertAfter($('#flashSale .flashMove ul li:last'));
			//ul归位
			$('#flashSale .flashMove ul').css('left', 0);
		});
	}

	function prev() {
		//先剪切最后的四个图插入到ul首位
		for (var i = 0; i < 6; i++) {
			$('#flashSale .flashMove ul li:last').insertBefore($('#flashSale .flashMove ul li:first'));
		}
		//预留4个图位置
		$('#flashSale .flashMove ul').css('left', -iw);
		//挪到可视区
		$('#flashSale .flashMove ul').animate({ 'left': 0 }, 500);
	}

	var qty = 12;
	var page = 1;
	var num = 1;
	var firstpage = 1;
	var lastpage = 0;
	function getcontent(listname, method) {
		$.ajax({
			type: "POST", //请求方式
			url: "api/query.php", //接口路径
			async: true, //异步
			data: { //传输数据
				'qty': qty,
				'page': num,
				'method': method,
				'listname': listname
			},
			success: function success(str) {
				// console.log(str);
				var arr = JSON.parse(str);
				update(arr.content);
			}
		});
	}

	var iw = 0;
	getcontent('table', 'listshow');
	$.ajax({
		type: "POST", //请求方式
		url: "api/query.php", //接口路径
		async: true, //异步
		data: { //传输数据
			'method': 'alllist',
			'listname': 'table'
		},
		success: function success(str) {

			var arr = JSON.parse(str);
			// console.log(arr);
			lastpage = Math.ceil(arr.num / qty);
			$('#page').html(function () {
				var html = '';
				for (var i = 0; i < lastpage; i++) {
					html += '<span>' + (i + 1) + '</span>';
				}
				return html;
			});

			var content = JSON.parse(arr.content);
			//				console.log(content);
			$('#flashSale .flashMove ul').html(content.map(function (item) {
				return '<li data-id="' + item.id + '">\n\t\t\t\t\t\t\t\t<img src="' + item.url1 + '">\n\t\t\t\t\t\t\t\t<p>\uFFE5 <em>' + item.xianjia + '</em></p>\n\t\t\t\t\t\t\t\t<p class="word">' + item.name + '</p>\n\t\t\t\t\t\t\t\t<div class="msg">\n\t\t\t\t\t\t\t\t\tfdsaf\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>';
			}).join(''));
			var ww = $('#flashSale .flashMove ul li').eq(0).outerWidth() + 18;
			var width = content.length * ww;
			console.log(iw * 6);
			// var iW=($('#flashSale .flashMove ul li').eq(0).outerWidth()+18)*6;
			// console.log(iw);
			iw = ww * 6;
			$('#flashSale .flashMove ul').css('width', width + 'px');
		}
	});

	// 限时秒杀数据渲染
	$('#flashSale .flashMove').on('click', '.a1', function () {
		prev();
	});
	$('#flashSale .flashMove').on('click', 'a', function () {

		if ($(this).html() == '&gt;') {
			next();
		}
	});

	//限时秒杀数据跳转详情页
	$('#flashSale .flashMove ul').on('click', 'li', function () {
		var id = $(this).attr('data-id');
		//		console.log(id);
		location.href = 'html/detail.html?' + id;
	});

	$('#list').on('click', 'li', function () {
		location.href = 'html/list.html';
	});
	// 点击页数
	$('#page').on('click', 'span', function () {
		var page = parseInt($(this).html());
		num = page;
		if (page == 1) {
			$('.page_list .prev').css('background-position', '-46px -123px');
		} else {
			$('.page_list .prev').css('background-position', '0px -91px');
		}
		$(this).parent().find('span').css('color', '#999');
		$(this).css({
			'color': 'red'
		});
		$.ajax({
			type: "POST", //请求方式
			url: "api/query.php", //接口路径
			async: true, //异步
			data: { //传输数据
				'qty': qty,
				'page': page,
				'method': 'listshow',
				'listname': 'table'
			},
			success: function success(str) {
				var arr = JSON.parse(str);
				update(arr.content);
			}
		});
	});

	// 上一页
	$('.page_list .prev').click(function () {
		num--;
		if (num <= firstpage) {
			num = firstpage;
			$('.page_list .prev').css('background-position', '-46px -123px');
		} else {
			$('.page_list .next').css('background-position', '-46px -91px');
			$('.page_list .prev').css('background-position', '0px -91px');
		}

		$(this).next().find('span').css('color', '#999').eq(num - 1).css('color', 'red');
		getcontent('table', 'listshow');
	});

	// 下一页
	$('.page_list .next').click(function () {
		num++;
		if (num >= lastpage) {
			num = lastpage;
			$('.page_list .next').css('background-position', '0 -122px');
		} else {
			$('.page_list .prev').css('background-position', '0px -91px');
			$('.page_list .next').css('background-position', '-46px -91px');
		}
		$(this).prev().find('span').css('color', '#999').eq(num - 1).css('color', 'red');
		getcontent('table', 'listshow');
	});
});