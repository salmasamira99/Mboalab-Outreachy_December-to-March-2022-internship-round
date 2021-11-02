<?php
session_start();
if(!isset($_SESSION['login'])) {
header('Location: connect.php');
  exit;
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <title><?php include('titre.txt') ?></title>
    <meta http-equiv="Cache-Control" content="no-cache" /> 
    <style type="text/css" media="all">@import "./css/css.css"; </style>
    <script type="text/javascript" src="java/xdir.js"></script>
  </head>
  <body>
    <center>
<?php
if(isset($_GET['id_img']))
  {
	define('DIR', 'upload/');
	$filename = $_GET['id_img'];

	switch(true)
	{
		case file_exists(DIR.$filename.'.jpg'):
			echo '<img src="'.DIR.$filename.'.jpg'.'" alt=""/>';
			break;

		case file_exists(DIR.$filename.'.jpeg'):
			echo '<img src="'.DIR.$filename.'.jpeg'.'" alt=""/>';
			break;

		case file_exists(DIR.$filename.'.bmp'):
			echo '<img src="'.DIR.$filename.'.bmp'.'" alt=""/>';
			break;

		case file_exists(DIR.$filename.'.gif'):
			echo '<img src="'.DIR.$filename.'.gif'.'" alt=""/>';
			break;

		default:
			echo 'An error has occured';
	}
  }
else
  {
    echo 'An error has occured';
  }
?>
      <br />[ <a href="#" onclick="window.close(); return false;">Close this windows</a> ]
    </center>
  </body>
</html>
