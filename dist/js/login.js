"use strict";$(function(){var e=!0;$("#more").click(function(){e?($("#more i").css("background","url(../img/shangarr.png) no-repeat"),$(".more_login").animate({height:"40px"},300),$(".more_login a").animate({top:"10px"},300)):($("#more i").css("background","url(../img/xiaarr.png) no-repeat"),$(".more_login").animate({height:"0"},300),$(".more_login a").animate({top:"5px"},300)),e=!e}),$("#user").focus(function(){$("#psw").css("border","").attr("placeholder","请输入密码"),$("#user").css("border","1px solid blue").attr("placeholder","")}),$("#psw").focus(function(){$("#user").css("border","").attr("placeholder","用户名"),$("#psw").css("border","1px solid blue").attr("placeholder","")});var t=0,s=!1;$("#chunk").mousedown(function(e){t=e.pageX-$(this).position().left,$(document).mousemove(function(e){var o=e.pageX-t;o<0&&(o=0),o>=$("#box").outerWidth()-$("#chunk").outerWidth()&&(o=$("#box").outerWidth()-$("#chunk").outerWidth()),$("#chunk").css("left",o+"px"),$("#color").css("width",o+"px")}),$(document).mouseup(function(e){var o=e.pageX-t;0<o&&o<$("#box").outerWidth()-$("#chunk").outerWidth()&&($("#chunk").css("left",0),$("#color").css("width",0)),o>=$("#box").outerWidth()-$("#chunk").outerWidth()&&($("#chunk").css("display","none"),$("#chunk2").css("display","block"),s=!0,$(".msg").text(""),$("#color").html("验证通过")),$(document).unbind("mousemove"),$(document).unbind("mousedown"),$(document).unbind("mouseup")})}),$(".login .btn").click(function(){var o=$.trim($("#user").val()),e=$.trim($("#psw").val()),t=new Date;if(t.setDate(t.getDate()+7),!o)return $(".msg").text("请输入通行证用户名"),void $("#user").focus();e?s?$.ajax({type:"POST",url:"../api/query.php",async:!0,data:{username:o,password:e,method:"login"},success:function(e){"1"==e?(alert("登陆成功"),Cookie.set("name",o,{expires:t,path:"/"}),location.href="../index1.html"):($(".msg").text("用户名或密码错误,请重试"),$("#user").val("").attr("placeholder",""),$("#psw").val("").attr("placeholder","请输入密码"),$("#chunk").css({display:"block",left:0}),$("#chunk2").css("display","none"),$("#color").css("width",0),$("#color").html(""),s=!1)}}):$(".msg").text("请完成滑块验证"):$(".msg").text("请输入通行证密码")})});