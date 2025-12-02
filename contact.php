<?php


// Only process POST requests.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize the form fields.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(["\r", "\n"], [" ", " "], $name);
    
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject_input = strip_tags(trim($_POST["subject"]));  // Subject input
    $message = strip_tags(trim($_POST["message"]));

    // Validate required fields.
    if (empty($name) || empty($subject_input) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please complete the form and provide a valid email."]);
        exit;
    }

    // Verify the email domain exists.
    $email_domain = substr(strrchr($email, "@"), 1);
    if (!checkdnsrr($email_domain, "MX")) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid email domain."]);
        exit;
    }

    // Set the recipient email.
    $recipient = "mizansorker@gmail.com";

    // Use the subject from the form input.
    $subject = "New Message: $subject_input";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers (fixed From address for security).
    $email_headers = "From: Contact Form <no-reply@yourdomain.com>\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Not a POST request.
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>

