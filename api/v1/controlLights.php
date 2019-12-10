<?php
function open() {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "<OPEN_LIGHT_IFTTT>");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
    curl_close($ch);
    unset($ch);
    if ($output == "Congratulations! You've fired the Light_on event") {
        $success = true;
    }
    unset($output);
    return $success;
}

function close() {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "<CLOSE_LIGHT_IFTTT>");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
    curl_close($ch);
    unset($ch);
    if ($output == "Congratulations! You've fired the Light_off event") {
        $success = true;
    }
    unset($output);
    return $success;
}

switch ($_GET['control']) {
    case 'open':
        $success = open();
        break; 
    case 'close':
        $success = close();
        break;
    default:
}


if (isset($success) && $success == 1) {
    echo '{ "success": true }';
} else {
    echo '{ "success": false }';
}