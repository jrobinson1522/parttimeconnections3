<?php
    $mail_to = 'jrobinson1522@gmail.com'; 

    
    $name = $_POST['name'];
    $mail_from = $_POST['email'];
    $message = $_POST['message'];

    // Construct email subject
    $subject = 'www.chnstocks.com Message from visitor ' . $name;

    // Construct email body
    $body_message = 'From: ' . $name . "\r\n";
    $body_message .= 'E-mail: ' . $mail_from . "\r\n";
    $body_message .= 'Message: ' . $message;

 

    $mail_sent = mail($mail_to, $subject, $body_message);

    if ($mail_sent == true){ ?>
        <script language="javascript" type="text/javascript">
        alert('Thank you for the message. We will contact you shortly.');
        window.location = 'index.html';
        </script>
    <?php } else { ?>
    <script language="javascript" type="text/javascript">
        alert('Message not sent. Please, notify the site administrator admin@admin.com');
        window.location = 'index.html';
    </script>
    <?php
    }
?>