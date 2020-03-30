<?php

    /* 
        Список адресов
    */
    $recipients = array(
       // "vahaplaneta@gmail.com",
        "tkachuk.olexiy@gmail.com"
    );



    

    if (!isset($_POST['formname'])) exit;

    $text_message ='';

    
    if ($_POST['formname']=='callback'
        && isset($_POST['name'])
        && isset($_POST['phone'])
    ) {
        
  
        $form_name = htmlspecialchars(trim($_POST['name']));
        $form_phone = htmlspecialchars(trim($_POST['phone']));

        $text_message = "
            Новий лист з сайту lannet.lviv.ua.<br>
            Форма 'Замовити дзвінок'<br><br>

           Ім'я: ".$form_name ." <br>
            Номер телефона: ".$form_phone." <br>
        ";
    }

    if ($_POST['formname']=='join'
    && isset($_POST['name'])
    && isset($_POST['phone'])
    && isset($_POST['address'])
) {
    

    $form_name = htmlspecialchars(trim($_POST['name']));
    $form_phone = htmlspecialchars(trim($_POST['phone']));
    $form_address = htmlspecialchars(trim($_POST['address']));

    $text_message = "
        Новий лист з сайту lannet.lviv.ua.<br>
        Форма 'Підключитись'<br><br>

       Ім'я: ".$form_name ." <br>
        Номер телефона: ".$form_phone." <br>
        Адреса: ".$form_address." <br>
    ";
}

if ($_POST['formname']=='internet'
&& isset($_POST['name'])
&& isset($_POST['phone'])
&& isset($_POST['address'])
) {


$form_name = htmlspecialchars(trim($_POST['name']));
$form_phone = htmlspecialchars(trim($_POST['phone']));
$form_address = htmlspecialchars(trim($_POST['address']));

$text_message = "
    Новий лист з сайту lannet.lviv.ua.<br>
    Форма 'Замовити інтернет'<br><br>

   Ім'я: ".$form_name ." <br>
    Номер телефона: ".$form_phone." <br>
    Адреса: ".$form_address." <br>
";
}

if ($_POST['formname']=='tv'
&& isset($_POST['name'])
&& isset($_POST['phone'])
&& isset($_POST['address'])
) {


$form_name = htmlspecialchars(trim($_POST['name']));
$form_phone = htmlspecialchars(trim($_POST['phone']));
$form_address = htmlspecialchars(trim($_POST['address']));

$text_message = "
    Новий лист з сайту lannet.lviv.ua.<br>
    Форма 'Замовити ТБ'<br><br>

   Ім'я: ".$form_name ." <br>
    Номер телефона: ".$form_phone." <br>
    Адреса: ".$form_address." <br>
";
}

if ($_POST['formname']=='job'
&& isset($_POST['name'])
&& isset($_POST['phone'])
&& isset($_POST['cv'])
) {


$form_name = htmlspecialchars(trim($_POST['name']));
$form_phone = htmlspecialchars(trim($_POST['phone']));
$form_cv = htmlspecialchars(trim($_POST['cv']));

$text_message = "
    Новий лист з сайту lannet.lviv.ua.<br>
    Форма 'Резюме'<br><br>

   Ім'я: ".$form_name ." <br>
    Номер телефона: ".$form_phone." <br>
    Резюме: ".$form_cv." <br>
";
}

    $subject = "Новий лист!";
    $header = "Content-type: text/html\r\n";

    $email_to = implode(',', $recipients);

    $retval = mail ($email_to,$subject,$text_message,$header); 

?>