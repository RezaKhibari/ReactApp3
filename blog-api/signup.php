<?php
include 'blog_db.php';
$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = password_hash($data->password, PASSWORD_DEFAULT);
$email = $data->email;

$stmt = $conn->prepare("INSERT INTO users (username, password, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $password, $email);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo json_encode(["message" => "User registered successfully"]);
} else {
    echo json_encode(["message" => "Registration failed"]);
}
$stmt->close();
?>