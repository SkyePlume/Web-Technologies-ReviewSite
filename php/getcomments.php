<?php
session_start();
header('Content-Type: application/json');
header("Cache-Control: no-cache, must-revalidate");
$dbhost = 'localhost';
$dbuser = 'cs691';
$dbpass = 'cs691';
$dbname = 'cs691_ci227';
$dbtable = 'tcomment';

$wna=$_GET["wname"];
$comments = [
    "special" => [
		"s" => 0,
		"p" => 0,
		"e" => 0,
		"c" => 0,
		"i" => 0,
		"a" => 0,
		"l" => 0
	],
    "comments" => [],
];

$con = mysql_connect($dbhost, $dbuser, $dbpass);
if (!$con)
 {
 	die('Could not connect: ' . mysql_error());
 }
$dbselect = mysql_select_db($dbname,$con);

$sql="SELECT * FROM $dbtable WHERE wname='$wna'";

$result = mysql_query($sql);

$count = mysql_num_rows($result);

while($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
	$comments["user"][] = $row["uname"];
	$comments["comments"][] = $row["comment"];
	$comments["special"]["s"] += $row["strength"]; 
	$comments["special"]["p"] += $row["perception"];
	$comments["special"]["e"] += $row["endurance"];
	$comments["special"]["c"] += $row["charisma"];
	$comments["special"]["i"] += $row["intelligence"];
	$comments["special"]["a"] += $row["agility"];
	$comments["special"]["l"] += $row["luck"];
}

$comments["special"]["s"] = $comments["special"]["s"] / $count;
$comments["special"]["p"] = $comments["special"]["p"] / $count;
$comments["special"]["e"] = $comments["special"]["e"] / $count;
$comments["special"]["c"] = $comments["special"]["c"] / $count;
$comments["special"]["i"] = $comments["special"]["i"] / $count;
$comments["special"]["a"] = $comments["special"]["a"] / $count;
$comments["special"]["l"] = $comments["special"]["l"] / $count;

echo json_encode($comments);

mysql_close($con);

?>
