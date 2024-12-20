<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require 'blog_db.php';

$sql = "SELECT * FROM posts ORDER BY created_at DESC";
$result = $conn->query($sql);

$posts = [];
while ($row = $result->fetch_assoc()) {
    $posts[] = $row;
}

echo json_encode($posts);
$conn->close();
?>