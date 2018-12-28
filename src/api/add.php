<?php 
	include 'connet.php';
	$username=isset($_POST['username']) ? $_POST['username'] : false;
	$password=isset($_POST['password']) ? $_POST['password'] : false;

	$method=isset($_POST['method']) ? $_POST['method'] : false;

	$listname=isset($_POST['listname']) ? $_POST['listname'] : false;

	//订单表信息
	$cid=isset($_POST['cid']) ? $_POST['cid'] : false;

	$url=isset($_POST['url']) ? $_POST['url'] : false;

	$name=isset($_POST['name']) ? $_POST['name'] : false;

	$xianjia=isset($_POST['xianjia']) ? $_POST['xianjia'] : false;

	$yuan=isset($_POST['yuan']) ? $_POST['yuan'] : false;

	$num=isset($_POST['num']) ? $_POST['num'] : false;
	
	$price=isset($_POST['price']) ? $_POST['price'] : false;

	if ($method=='insert') {
		# code...
		$sql="insert into user(username,password) values('$username','$password')";
		$res=$conn->query($sql);
		if ($res) {
			# code...
			echo '1';
		}else{
			echo '0';
		}
	}

	if ($method == 'inputgl') {
		# code...
		$sql="insert into $listname(cid,name,url,xianjia,yuan,num,price) values($cid,'$name','$url',$xianjia,$yuan,'$num',$price)";
		$res=$conn->query($sql);
		if ($res) {
			# code...
			echo 1;
		}else{
			echo 0;
		}
	}

	$conn->close();

 ?>