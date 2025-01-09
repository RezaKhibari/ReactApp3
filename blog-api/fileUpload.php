<?php
if ($_FILES['image']['error'] == UPLOAD_ERR_OK) {
    $uploads_dir = 'uploads/';
    $tmp_name = $_FILES['image']['tmp_name'];
    $name = basename($_FILES['image']['name']);
    move_uploaded_file($tmp_name, "$uploads_dir/$name");
    echo json_encode(["url" => "$uploads_dir/$name"]);
} else {
    echo json_encode(["message" => "File upload failed"]);
}
?>