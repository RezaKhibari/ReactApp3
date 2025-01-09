<?php
include 'blog_db.php';
$data = json_decode(file_get_contents("php://input"));

$post_id = $data->post_id;
$content = $data->content;

$stmt = $conn->prepare("INSERT INTO comments (post_id, content) VALUES (?, ?)");
$stmt->bind_param("is", $post_id, $content);
$stmt->execute();

echo json_encode(["message" => "Comment added"]);
$stmt->close();
?>