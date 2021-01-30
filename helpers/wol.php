<?php
include '../../env.php';

function wol() {
    global $env;

    $broadcast = $env['BROADCAST_ADDR'];
    $mac = $env['MAC_ADDR'];
    
    exec('/home/www-data/wol wake '.$mac.' -b '.$broadcast);
}