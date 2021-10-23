<?php
session_start();
if(!isset($_SESSION['login'])) {
header('Location: connect.php');
  exit;
}
  include('connecting.php');
  $sql = 'DELETE FROM news';
  $req = mysqli_query($con,$sql) or die(mysqli_error()); 
  $sql2 = 'DELETE FROM commentaire';
  $req2 = mysqli_query($con,$sql2) or die(mysqli_error()); 
  mysqli_close($con);
$folder = "./upload";     //Cette ligne est Ã  modifier
$dossier = opendir($folder);
while ($Fichier = readdir($dossier)) 
{
  if ($Fichier != "." && $Fichier != "..") 
      {
    $nomFichier = $folder."/".$Fichier;
 $size += filesize($nomFichier);
       }
}
  if($size >= 0) 
    {
      $dossier="./upload";
      $dir = opendir($dossier);
      while($file = readdir($dir)) 
      {
        if($file!=in_array($file, array(".","..")))
        {
          $suppr = unlink("$dossier/$file");
        }
      }
    closedir($dir); 
    }
if ($req == true && $req2 == true && $size >= 0 && $suppr == true)
{
header('Location: index.php');
  exit;
}
elseif ($req == true && $req2 == true && $size == 0) 
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
<?php include('menu.html') ?><br /><br /><center>An error has occured
</center>
  </body>
</html>
<?php
}
?>
