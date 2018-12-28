<?php 
	//配置信息
	$servername='localhost';
	$username='root';
	$password='';
	$dbname='zhe800';

	// 创建链接
	$conn = new mysqli($servername,$username,$password,$dbname);

	if ($conn->connect_error) {
		# code...
		die('链接失败：'.$conn->connect_error);
	}

	// 设置编码，防止乱码
	$conn->set_charset('utf8');

	// echo '连接成功';

 ?>