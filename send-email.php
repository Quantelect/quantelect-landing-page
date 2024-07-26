<?php  
if ($_SERVER["REQUEST_METHOD"] == "POST") {  
    $name = strip_tags(trim($_POST["name"]));  
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);  
    $message = trim($_POST["message"]);  
  
    // Validate input  
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {  
        $recipient = "info@quantelect.com";  
        $subject = "New Contact Form Submission from $name";  
  
        $email_content = "Name: $name\n";  
        $email_content .= "Email: $email\n\n";  
        $email_content .= "Message:\n$message\n";  
  
        $email_headers = "From: $name <$email>";  
  
        // Prevent email header injection  
        if (strpos($email, "\r") === false && strpos($email, "\n") === false) {  
            if (mail($recipient, $subject, $email_content, $email_headers)) {  
                echo json_encode(['status' => 'success']);  
                exit();  
            } else {  
                echo json_encode(['status' => 'error']);  
                exit();  
            }  
        } else {  
            echo json_encode(['status' => 'invalid_email']);  
            exit();  
        }  
    } else {  
        echo json_encode(['status' => 'validation_error']);  
        exit();  
    }  
} else {  
    echo json_encode(['status' => 'forbidden']);  
    exit();  
}  
?>  
