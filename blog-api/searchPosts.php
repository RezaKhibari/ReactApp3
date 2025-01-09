<?php
include 'blog_db.php';
$searchTerm = $_GET['q'];
$stmt = $conn->prepare("SELECT * FROM posts WHERE title LIKE ?");
$likeTerm = "%$searchTerm%";
$stmt->bind_param("s", $likeTerm);
$stmt->execute();
$result = $stmt->get_result();

$posts = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($posts);
?>