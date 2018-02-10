<?php
header('Content-Type: text/xml');
header("Cache-Control: no-cache, must-revalidate");
$dbhost = 'localhost';
$dbuser = 'cs691';
$dbpass = 'cs691';
$dbname = 'cs691_ci227';
$dbtable = 'tcomment';


$una=$_POST["uname"];
$wna=$_POST["wname"];
$com=$_POST["comment"];
$str=$_POST["strength"];
$per=$_POST["perception"];
$end=$_POST["endurance"];
$cha=$_POST["charisma"];
$itl=$_POST["intelligence"];
$agi=$_POST["agility"];
$luc=$_POST["luck"];


$db = mysql_connect($dbhost, $dbuser, $dbpass) or die ('Error connecting to mysql database '. mysql_error());

$con = mysql_connect($dbhost, $dbuser, $dbpass);
if (!$con)
 {
 	die('Could not connect: ' . mysql_error());
 }
 $dbselect = mysql_select_db($dbname,$con);
 
 $sql="SELECT * FROM $dbtable WHERE uname='$una' AND wname='$wna'";

$result = mysql_query($sql);

 if (mysql_num_rows($result)==1) { 
	header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
	echo "You have reviewed.";
} else {
	$result=mysql_query("INSERT INTO  $dbtable values ('$una','$wna','$com','$str','$per','$end','$cha','$itl','$agi','$luc')",$db);
	
}

mysql_close($con);

?>
