<?php
	
	
	
   include 'connet.php';
	
	$id=isset($_GET['id']) ? $_GET['id'] : false;
	$price=isset($_GET['price']) ? $_GET['price'] : false;
	$num=isset($_GET['num']) ? $_GET['num'] : false;
//	echo $num;
	//写插入语句
	$sql="UPDATE goodslist set num='$num',price='$price' WHERE id='$id';";
//	var_dump($sql);
	//执行查询语句
	$res=$conn->query($sql);
//	var_dump($res);
	if($res){
		echo 'yes';
	}else{
		echo 'no';
	}

	
	//关闭连接数据库
	
    $conn->close();//关闭数据库的链接
?>