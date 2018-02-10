<?php
$dbhost = 'localhost';
$dbuser = 'cs691';
$dbpass = 'cs691';
$dbname = 'cs691_ci227';
$dbtable = 'tuser';
session_start();

$id=$_POST["uname"];
$paswd=$_POST["pword"];

$con = mysql_connect($dbhost, $dbuser, $dbpass);
if (!$con)
 {
 	die('Could not connect: ' . mysql_error());
 }
$dbselect = mysql_select_db($dbname,$con);

$sql="SELECT * FROM $dbtable WHERE uname='$id' AND pword='$paswd'";

$result = mysql_query($sql);


if (mysql_num_rows($result)!=1) { 
	header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
	echo "not registered";
} else {
	$row = mysql_fetch_array($result, MYSQL_ASSOC);
	$_SESSION["username"] = $id;
	$_SESSION["display"] = $row["displayname"];
	echo "registered";
}

mysql_close($con);

?>
