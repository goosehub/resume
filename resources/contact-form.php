<?php

resume_form_send_mail();

function resume_form_send_mail() {
	// Honeypot
	if (isset($_POST['bee_movie']) && $_POST['bee_movie']) {
		echo 'You appear to be a robot';
		return false;
	}

	// Inputs required
	if (!isset($_POST['name'])  || !isset($_POST['email']) || !isset($_POST['message'])) {
		echo 'Name, Email, and Message are required fields';
		return false;
	}

	// Set inputs
	$name = $_POST['name']; 
	$email = $_POST['email']; 
	$message = $_POST['message']; 

	// Validate from email
	$email_regex = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i";
	if (!preg_match($email_regex, $email)) {
		echo 'Error: Invalid email address';
		return false;
	}

	// My email
	$to = 'goosepostbox@gmail.com';

	// Subject
	$email_subject = 'Resume Form: ' . $name;

	// Body
	$email_body = '';
	$email_body .= 'Sent from the resume form  - ';
	$email_body .= 'Name: ' . $name . ' - ';
	$email_body .= 'Email: ' . $email . ' - ';
	$email_body .= 'Message: ' . $message . ' - ';

	// Headers
	$headers = '';
	$headers .= 'From: ' . $to . ' - ';
	$headers .= 'Reply-To: ' . $email;

	// PHPMailer would be better but this will do
	mail($to, $email_subject, $email_body, $headers);

	// Redirect
	header('Location: ../');
}