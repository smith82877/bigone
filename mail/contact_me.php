<?php
	//declare our variables
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$semail = "smith82877@gmail.com";
	//get todays date
	$todayis = date("l, F j, Y, g:i a");
	//set a title for the message
	$body = "Name: $name <br>Subject: ".$subject ."<br> Email: ".$email."<br> Phone: ".$email." <br>Message: ".$message;
	$headers = 'From: ' . $semail . '' . "\r\n" .
	'Reply-To: ' . $semail . '' . "\r\n" .
	'Content-type: text/html; charset=utf-8' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	//put your email address here
	if(mail($email, $subject, $body, $headers))
	{
		echo 'Your messaage has been sent successfuly!';
	}
?>