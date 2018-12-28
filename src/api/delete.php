<?php 
	include 'connet.php';

	$id=isset($_POST['id']) ? $_POST['id'] : -1;

	$listname=isset($_POST['listname']) ? $_POST['listname'] : false;

	$method=isset($_POST['method']) ? $_POST['method'] : false;

	$cid=isset($_POST['cid']) ? $_POST['cid'] : -1;
	if ($method == 'delete') {
		# code...
		$sql="delete from `$listname` where id='$id'";
		$row=$conn->query($sql);
		if ($row) {
			# code...
			echo '1';

		}else{
			echo '0';
		}
	}

	if ($method == 'alldelete') {
		# code...
		$sql="delete from `$listname` where id in ($cid)";
		$row=$conn->query($sql);
		if ($row) {
			# code...
			echo '1';

		}else{
			echo '0';
		}
	}

	$conn->close();
 ?>