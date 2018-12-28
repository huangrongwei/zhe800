<?php 
	include 'connet.php';
	$username=isset($_POST['username']) ? $_POST['username'] : false;
	$password=isset($_POST['password']) ? $_POST['password'] : false;
	$method=isset($_POST['method']) ? $_POST['method'] : false;
	
	$listname=isset($_POST['listname']) ? $_POST['listname'] : false;
	$qty=isset($_POST['qty']) ? $_POST['qty'] : -1;

	$page=isset($_POST['page']) ? $_POST['page'] : -1;

	$id=isset($_POST['id']) ? $_POST['id'] : false;
	
	// 查询用户名密码
	if ($method == 'login') {
		# code...
		$sql="SELECT * from user where username='$username' and password='$password'";
		$res=$conn->query($sql);
		if ($res->num_rows>0) {
			# code...
			echo '1';
		}else{
			echo '0';
		}

	}
	// 查询用户名
	if ($method == 'reg') {
		$sql="select * from user where username='$username'";
		$res=$conn->query($sql);
		if ($res->num_rows>0) {
			# code...
			echo '1';
		}else{
			echo '0';
		}
	}
	// 查询范围
	if ($method == 'listshow') {
		# code...
		$qty1=($page-1)*$qty;
		$sql="select * from `$listname` where id limit $qty1 , $qty";
		$res=$conn->query($sql);
		$row=$res->fetch_all(MYSQLI_ASSOC);
		$arr=array(
			"content"=>$row,   
			"qty"=>$qty,  
			"page"=>$page
		);
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);
		
	}

	if ($method == 'alllist') {
		# code...
		$sql="select * from `$listname`";
		$res=$conn->query($sql);
		$row=$res->fetch_all(MYSQLI_ASSOC);
		$arr=array(
			"content"=>json_encode($row,JSON_UNESCAPED_UNICODE),   
			"num"=>$res->num_rows
		);
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);
		// echo ($res->num_rows);
		
	}
	if ($method == 'ascSort') {
		# code...
		$qty1=($page-1)*$qty;
		$sql="select * from `$listname` order by xianjia desc limit $qty1,$qty";
		$res=$conn->query($sql);
		$row=$res->fetch_all(MYSQLI_ASSOC);
		$arr=array(
			"content"=>$row,   
			"qty"=>$qty,  
			"page"=>$page
		);
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);
	}
	if ($method == 'desSort') {
		# code...
		$qty1=($page-1)*$qty;
		$sql="select * from `$listname` order by xianjia  limit $qty1,$qty";
		$res=$conn->query($sql);
		$row=$res->fetch_all(MYSQLI_ASSOC);
		$arr=array(
			"content"=>$row,   
			"qty"=>$qty,  
			"page"=>$page
		);
		echo json_encode($arr,JSON_UNESCAPED_UNICODE);
	}
	if ($method == 'getid') {
		# code...
		$sql="select * from `$listname` where id=$id";
		$res=$conn->query($sql);
		$row=$res->fetch_all(MYSQLI_ASSOC);
		echo json_encode($row,JSON_UNESCAPED_UNICODE);
	}
	// $sql='SELECT * from goods';	//查询语句

	// $res=$conn->query($sql);

	// $row=$res->fetch_all(MYSQLI_ASSOC);
	// // var_dump($row);

	// echo json_encode($row,JSON_UNESCAPED_UNICODE);

	$conn->close();

 ?>