<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require 'blog_db.php';

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

$sql = "SELECT * FROM posts WHERE id = $id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(["error" => "Post not found"]);
}

$conn->close();
?>