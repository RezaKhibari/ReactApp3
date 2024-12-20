<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require 'blog_db.php';

$data = json_decode(file_get_contents("php://input"), true);

$title = $conn->real_escape_string($data['title']);
$content = $conn->real_escape_string($data['content']);

$sql = "INSERT INTO posts (title, content) VALUES ('$title', '$content')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Post created successfully", "id" => $conn->insert_id]);
} else {
    echo json_encode(["error" => "Error: " . $conn->error]);
}

$conn->close();
?>