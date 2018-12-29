'use strict';

$(function () {

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
			return '<li data-id="' + item.id + '">\n\t\t\t\t\t\t\t<img src="../' + item.url1 + '" alt="">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a href="javascript:;" title="">' + item.name + '</a>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span>\uFFE5' + item.xianjia + '</span>\n\t\t\t\t\t\t\t\t<span>\u6536\u85CF\u54C1\u724C</span>\n\t\t\t\t\t\t\t\t<del>\uFFE5' + item.yuan + '</del>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>';
		}).join(''));
	}
	function getcontent(listname, method) {
		$.ajax({
			type: "POST", //请求方式
			url: "../api/query.php", //接口路径
			async: true, //异步
			data: { //传输数据
				'qty': qty,
				'page': num,
				'method': method,
				'listname': listname
			},
			success: function success(str) {
				var arr = JSON.parse(str);
				update(arr.content);
			}
		});
	}

	var qty = 12;
	var firstpage = 1;
	var lastpage = 0;
	var num = 1;

	var isok = [true, false, false, false];
	getcontent('table', 'listshow');

	$.ajax({
		type: "POST", //请求方式
		url: "../api/query.php", //接口路径
		async: true, //异步
		data: { //传输数据
			'method': 'alllist',
			'listname': 'table'
		},
		success: function success(str) {
			// console.log(str);
			var arr = JSON.parse(str);
			lastpage = Math.ceil(arr.num / qty);
			$('#page').html(function () {
				var html = '';
				for (var i = 0; i < lastpage; i++) {
					html += '<span>' + (i + 1) + '</span>';
				}
				return html;
			});
		}
	});

	$('#sort_module').find('a:lt(4)').click(function () {
		$('#sort_module').find('a:lt(4)').removeClass('color');
		$(this).addClass('color');
		isok = [false, false, false, false];
		isok[$(this).index()] = true;
		switch ($(this).index()) {
			case 0:
				getcontent('table', 'listshow');
				break;
			case 1:
				getcontent('table', 'ascSort');
				break;
			case 2:
				getcontent('table', 'desSort');
				break;
			case 3:
				break;
			default:
				;
		}
	});

	$('#page').on('click', 'span', function () {
		num = parseInt($(this).html());

		if (num == firstpage) {
			$('.page_list .prev').css('background-position', '-46px -123px');
		} else {
			$('.page_list .prev').css('background-position', '0px -91px');
		}
		if (num == lastpage) {
			$('.page_list .next').css('background-position', '0 -122px');
		} else {
			$('.page_list .next').css('background-position', '-46px -91px');
		}

		$(this).parent().find('span').css('color', '#999');
		$(this).css({
			'color': 'red'
		});
		if (isok[0]) {
			getcontent('table', 'listshow');
		}
		if (isok[1]) {
			getcontent('table', 'ascSort');
		}
		if (isok[2]) {
			getcontent('table', 'desSort');
		}
	});

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
		if (isok[0]) {
			getcontent('table', 'listshow');
		}
		if (isok[1]) {
			getcontent('table', 'ascSort');
		}
		if (isok[2]) {
			getcontent('table', 'desSort');
		}
	});
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
		if (isok[0]) {
			getcontent('table', 'listshow');
		}
		if (isok[1]) {
			getcontent('table', 'ascSort');
		}
		if (isok[2]) {
			getcontent('table', 'desSort');
		}
	});

	$('#list').on('click', 'li', function () {
		location.href = 'detail.html?' + $(this).attr('data-id');
	});
});