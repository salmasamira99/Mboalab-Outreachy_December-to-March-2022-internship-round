<?php
session_start();
if(!isset($_SESSION['login'])) {
header('Location: connect.php');
  exit;
}
if(isset($_GET['id']))
{
  include('connecting.php');
  $sql = 'DELETE FROM news WHERE id='.$_GET['id'];
  $req = mysqli_query($con,$sql) or die(mysqli_error()); 
  $req40 = 'DELETE FROM commentaire WHERE id_news='.$_GET['id'];
  $res40 = mysqli_query($con,$req40);
  mysqli_close($con);
  $fichier = "upload/";
  $filename = $_GET['id'];
  $point = ".";
  $total = $fichier.$filename.$point;
  $jpg = "jpg";
  $jpeg = "jpeg";
  $bmp = "bmp";
  $gif = "gif";
  if (file_exists($total.$jpg))
    {
      $suppr = unlink($total.$jpg);
    } 
  elseif (file_exists($total.$jpeg)) 
    {
      $suppr = unlink($total.$jpeg);
    } 
  elseif (file_exists($total.$bmp)) 
    {
     $suppr = unlink($total.$bmp);
    } 
  elseif (file_exists($total.$gif)) 
    {
      $suppr = unlink($total.$gif);
    }
  else
    {
      $action = "0";
    }
  if($req == true && $req40 == true && $suppr == true) 
    {
      header('Location: index.php');
      exit;
    }
  elseif ($req == true && $req40 == true && $action == 0)
    {
      header('Location: index.php');
      exit;
    }
  else
    {
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
<?php include('menu.html') ?><br /><br /><center>
Error has occured during the delete !
</center>
  </body>
</html>
<?php
    }
}
else
{
echo "Please select an article to delete";
}
?>