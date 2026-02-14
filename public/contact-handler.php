<?php
/**
 * Contact Form Handler for Group 7 Security
 * Uses PHPMailer with SMTP (Hostinger) to reduce spam and improve deliverability.
 *
 * PHPMailer installation:
 *   Option A - Composer (recommended): Run in project root:  composer require phpmailer/phpmailer
 *   Option B - Manual: Download from https://github.com/PHPMailer/PHPMailer/releases
 *     Extract to e.g. public/PHPMailer/ and uncomment the "Manual load" block below, comment out the Composer block.
 */

// --- Load PHPMailer ---
// Composer (if you ran: composer require phpmailer/phpmailer from project root)
if (file_exists(__DIR__ . '/../vendor/autoload.php')) {
    require __DIR__ . '/../vendor/autoload.php';
}
// Manual load (uncomment if you installed PHPMailer manually, e.g. in public/PHPMailer/)
// else {
//     require __DIR__ . '/PHPMailer/src/Exception.php';
//     require __DIR__ . '/PHPMailer/src/PHPMailer.php';
//     require __DIR__ . '/PHPMailer/src/SMTP.php';
// }

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

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

// Email configuration - To address (you receive here)
$to_address = "info@group7security.com.au";
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
    echo "<script>alert('Please fill in all required fields.'); window.location.href = '/';</script>";
    exit;
}

// --- PHPMailer SMTP (Hostinger) ---
$mail = new PHPMailer(true);
try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@group7security.com.au';
    $mail->Password   = '@64Uasipoge64';  // TODO: Replace with your real mailbox password
    $mail->SMTPSecure = 'ssl';   // SSL/SMTPS
    $mail->Port       = 465;
    $mail->CharSet    = 'UTF-8';

    // Recipients: To = you (required)
    $mail->setFrom('info@group7security.com.au', 'Website Contact Form');
    $mail->addAddress($to_address);   // info@group7security.com.au
    $mail->addReplyTo($reply_to);     // Visitor's email so you can reply directly

    // Content
    $mail->Subject = $subject;
    $mail->Body    = $email_body;
    $mail->isHTML(false);

    $mail->send();
    echo "<script>alert('Message Sent'); window.location.href = '/';</script>";
} catch (Exception $e) {
    echo "<script>alert('There was an error sending your message. Please try again or call us directly.'); window.location.href = '/';</script>";
}
exit;
