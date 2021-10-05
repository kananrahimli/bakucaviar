<?
    header("Content-Type: text/html; charset=utf-8");

    function send_form($message) {
        $mail_to = "bakucaviar@gmail.com";
        $subject = "Заявка с сайта Baku Caviar";
        $headers  .= 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $headers .= "From: Baku Caviar <no-reply@".$_SERVER['HTTP_HOST'].">\r\n";

        mail($mail_to, $subject, $message, $headers);
    }

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $text = $_POST['text'];
    $caviar = $_POST['caviar'];
    $weight = $_POST['weight'];

    $message = "<p><b>Имя:</b> ".$name."</p>";
    $message .= "<p><b>Телефон:</b> ".$phone."</p>";
    $message .= "<p><b>Адрес:</b> ".$text."</p>";
    $message .= "<p><b>Икра:</b> ".$caviar."</p>";
    $message .= "<p><b>Упаковка и вес:</b> ".$weight."</p>";


    send_form($message);

?>