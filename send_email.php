<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $full_name = htmlspecialchars($_POST['full_name']);
    $company = htmlspecialchars($_POST['company']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Your email address where you want to receive the form data
    $to = "your-email@example.com";

    // Subject of the email
    $subject = "Contact Form Submission: $subject";

    // Email body content
    $body = "
    Full Name: $full_name\n
    Company: $company\n
    Phone: $phone\n
    Email: $email\n
    Subject: $subject\n
    Message: \n$message
    ";

    // Additional headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
