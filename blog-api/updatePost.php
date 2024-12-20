<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: Content-Type");

require 'blog_db.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = intval($data['id']);
$title = $conn->real_escape_string($data['title']);
$content = $conn->real_escape_string($data['content']);

$sql = "UPDATE posts SET title = '$title', content = '$content' WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Post updated successfully"]);
} else {
    echo json_encode(["error" => "Error: " . $conn->error]);
}

$conn->close();
?>