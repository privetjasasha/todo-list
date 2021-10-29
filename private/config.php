<?php
define('SERVERNAME', "localhost");
define('USERNAME', "root");
define('PASSWORD', "root");
define('DBNAME', "bootcamp9_todo");


define('PRIVATE_DIR', __DIR__);

define('DEBUG_MODE', true);

if (DEBUG_MODE) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
}
