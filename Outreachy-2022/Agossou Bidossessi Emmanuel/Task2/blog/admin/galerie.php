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
<?php include('menu.html') ?>
<center><h2>Here are all the images :</h2></center>
<?php
  $dir="upload";
  $dossier=opendir($dir);
  while($fichier=readdir($dossier))
    {
    $berk=array('.', '..');
    if(!in_array($fichier,$berk))
      {
      $lien=$dir.'/'.$fichier;
      if(file_exists($lien))
        {
          print '<img src="'.$lien.'" alt=""  style="padding: 10 10 10 10;"/>';
        }
      else
        {
          print 'There is no image';
        }
      }
    } 
?>
</body>
</html>
