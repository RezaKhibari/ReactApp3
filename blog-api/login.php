<?php
include 'blog_db.php';
$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = $data->password;

$stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->bind_result($hashed_password);
$stmt->fetch();

if (password_verify($password, $hashed_password)) {
    echo json_encode(["message" => "Login successful"]);
} else {
    echo json_encode(["message" => "Invalid credentials"]);
}
$stmt->close();
?>