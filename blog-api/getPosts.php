<?php
include 'blog_db.php';
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$limit = 5;
$offset = ($page - 1) * $limit;

$stmt = $conn->prepare("SELECT * FROM posts LIMIT ? OFFSET ?");
$stmt->bind_param("ii", $limit, $offset);
$stmt->execute();
$result = $stmt->get_result();

$posts = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($posts);
?>