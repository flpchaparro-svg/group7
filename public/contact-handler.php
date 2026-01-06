<?php
// Contact Form Handler for Group 7 Security
// Handles both Corporate and Business inquiry forms

// Set headers to prevent caching
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

// Check if form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: /");
    exit;
}

// Sanitize and retrieve form data
$inquiry_type = isset($_POST['inquiry_type']) ? htmlspecialchars(trim($_POST['inquiry_type']), ENT_QUOTES, 'UTF-8') : 'Unknown Inquiry';

// Email configuration
$to = "info@group7security.com.au";
$subject = "New " . $inquiry_type . " from Group 7 Security Website";

// Initialize email body
$email_body = "New Contact Form Submission\n\n";
$email_body .= "Inquiry Type: " . $inquiry_type . "\n";
$email_body .= "Submitted: " . date('Y-m-d H:i:s') . "\n\n";
$email_body .= "--- Contact Details ---\n\n";

// Process Corporate Form fields
if ($inquiry_type == "Corporate Inquiry") {
    $email = isset($_POST['corp-email']) ? htmlspecialchars(trim($_POST['corp-email']), ENT_QUOTES, 'UTF-8') : '';
    $name = isset($_POST['corp-name']) ? htmlspecialchars(trim($_POST['corp-name']), ENT_QUOTES, 'UTF-8') : '';
    $phone = isset($_POST['corp-phone']) ? htmlspecialchars(trim($_POST['corp-phone']), ENT_QUOTES, 'UTF-8') : '';
    $message = isset($_POST['corp-message']) ? htmlspecialchars(trim($_POST['corp-message']), ENT_QUOTES, 'UTF-8') : '';
    $lead_source = isset($_POST['lead_source']) ? htmlspecialchars(trim($_POST['lead_source']), ENT_QUOTES, 'UTF-8') : '';
    
    $email_body .= "Work Email: " . $email . "\n";
    if (!empty($name)) {
        $email_body .= "Name: " . $name . "\n";
    }
    if (!empty($phone)) {
        $email_body .= "Phone: " . $phone . "\n";
    }
    $email_body .= "\nMessage:\n" . $message . "\n";
    if (!empty($lead_source)) {
        $email_body .= "\nLead Source: " . $lead_source . "\n";
    }
    
    $reply_to = $email;
}

// Process Business Form fields
elseif ($inquiry_type == "Business Inquiry") {
    $name = isset($_POST['sme-name']) ? htmlspecialchars(trim($_POST['sme-name']), ENT_QUOTES, 'UTF-8') : '';
    // CAPTURE EMAIL:
    $email = isset($_POST['sme-email']) ? htmlspecialchars(trim($_POST['sme-email']), ENT_QUOTES, 'UTF-8') : '';
    $business = isset($_POST['sme-business']) ? htmlspecialchars(trim($_POST['sme-business']), ENT_QUOTES, 'UTF-8') : '';
    $phone = isset($_POST['sme-phone']) ? htmlspecialchars(trim($_POST['sme-phone']), ENT_QUOTES, 'UTF-8') : '';
    $postcode = isset($_POST['sme-postcode']) ? htmlspecialchars(trim($_POST['sme-postcode']), ENT_QUOTES, 'UTF-8') : '';
    $service = isset($_POST['sme-service']) ? htmlspecialchars(trim($_POST['sme-service']), ENT_QUOTES, 'UTF-8') : '';
    $urgent = isset($_POST['sme-urgent']) ? "Yes" : "No";
    
    $email_body .= "Name: " . $name . "\n";
    $email_body .= "Email: " . $email . "\n";
    $email_body .= "Business Name: " . $business . "\n";
    $email_body .= "Phone: " . $phone . "\n";
    $email_body .= "Postcode: " . $postcode . "\n";
    if (!empty($service)) {
        $email_body .= "Service Needed: " . $service . "\n";
    }
    $email_body .= "Urgent Emergency: " . $urgent . "\n";
    
    // Set Reply-To
    if (!empty($email)) {
        $reply_to = $email;
    } else {
        $reply_to = "noreply@group7security.com.au";
    }
}

// Validate required fields
$is_valid = false;
if ($inquiry_type == "Corporate Inquiry") {
    $is_valid = !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($message);
} elseif ($inquiry_type == "Business Inquiry") {
    $is_valid = !empty($name) && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($business) && !empty($phone) && !empty($postcode);
}

if (!$is_valid) {
    // Invalid submission - redirect back
    echo "<script>alert('Please fill in all required fields.'); window.location.href = '/';</script>";
    exit;
}

// Prepare email headers
$headers = "From: website@group7security.com.au\r\n";
$headers .= "Reply-To: " . $reply_to . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
$mail_sent = mail($to, $subject, $email_body, $headers);

// Return response
if ($mail_sent) {
    // Success - show alert and redirect
    echo "<script>alert('Message Sent'); window.location.href = '/';</script>";
} else {
    // Error - show alert and redirect
    echo "<script>alert('There was an error sending your message. Please try again or call us directly.'); window.location.href = '/';</script>";
}
exit;
?>

