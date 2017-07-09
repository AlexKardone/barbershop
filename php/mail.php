<?php  

$recepient = "alex-kardone@yandex.ru";
$sitename = "Барбершоп Бородинский";

$date = trim($_POST["date"]);
$time = trim($_POST["time"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Дата: $name \nВремя: $time \nИмя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n Form: $recepient");


// <?php

// $recepient = "alex-kardone@ya.ru";
// $sitename = "Название сайта";

// $name = trim($_POST["name"]);
// $phone = trim($_POST["phone"]);
// $text = trim($_POST["text"]);
// $message = "Имя: $name \n Телефон: $phone \n Текст: $text";

// $pagetitle = "Новая заявка с сайта \"$sitename\"";
// mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");