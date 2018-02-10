<?php

$dbhost = 'localhost';
$dbuser = 'cs691';
$dbpass = 'cs691';
$dbname = 'cs691_ci227';
$dbtable = 'tuser';

// connect to the database
$db = mysql_connect($dbhost, $dbuser, $dbpass) or die ('Error connecting to mysql database '. mysql_error());
 
 $id=$_POST["uname"];
 $paswd=$_POST["pword"];
 $name=$_POST["displayname"];


if (!$db) {
    die('Not connected : ' . mysql_error());
} else {
 
}
 
// select the table
$dbselect = mysql_select_db($dbname);
 

if (!$dbselect) {
    die ('Can\'t use $dbname : ' . mysql_error());
} else {
}

if ($id=='') {
 $id="empty";
}
if ($paswd=='') {
 $paswd="empty";
}
if ($name=='') {
 $name="empty";
}

$sql1="SELECT * FROM $dbtable WHERE uname='$id'";

$result1 = mysql_query($sql1,$db);



if (mysql_num_rows($result1)==0) { 


$result=mysql_query("INSERT INTO  $dbtable values ('$id','$paswd','$name')",$db); 


if ($result) {
     	echo "registered"; 
    $data = '';
 
 
    
} else {  
header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    echo 'Error: Could not get any data.\n';  
} 
 
echo $data; 

} else {
	header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
echo "user id exists"; 
} 

mysql_close($db);


?>