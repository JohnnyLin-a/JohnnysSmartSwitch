<?php
    $variables = [
        'MAC_ADDR' => '',
        'BROADCAST_ADDR' => '',
        'OPEN_LIGHT_IFTTT' => '',
        'CLOSE_LIGHT_IFTTT' => ''
    ];
    foreach ($variables as $key => $value) {
        putenv("$key=$value");
    }
?>