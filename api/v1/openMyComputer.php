<?php
include '../../helpers/wol.php';

wol();

//return json
$data['success'] = true;
header('Content-Type: application/json');
echo json_encode($data);