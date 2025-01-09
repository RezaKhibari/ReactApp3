<?php
include 'blog_db.php';
$post_id = $_GET['post_id'];

$stmt = $conn->prepare("SELECT * FROM comments WHERE post_id = ?");
$stmt->bind_param("i", $post_id);
$stmt->execute();
$result = $stmt->get_result();

$comments = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($comments);
?>