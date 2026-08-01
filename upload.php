<?php

$target_dir = "images/";

$fileName = basename($_FILES["image"]["name"]);

$target_file = $target_dir . time() . "_" . $fileName;


if(move_uploaded_file(
$_FILES["image"]["tmp_name"],
$target_file
)){


echo json_encode([

"status"=>"success",

"url"=>$target_file

]);


}

else{


echo json_encode([

"status"=>"error"

]);


}

?>