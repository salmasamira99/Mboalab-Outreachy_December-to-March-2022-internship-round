<?php
session_start();
if(!isset($_SESSION['login'])) {
header('Location: connect.php');
  exit;
}
if(isset($_GET['id']) && isset($_GET['article']))
{
$article = $_GET['article'];
$id = $_GET['id'];
  include('connecting.php');
  $sql = 'DELETE FROM commentaire WHERE id_com='.$_GET['id'];
  $req = mysqli_query($con,$sql) or die(mysqli_error()); 
  mysqli_close($con);
  if($req == true) 
    {
      header("Location: voircom.php?id=" .$article);
      exit;
    }
  else
    {
      echo 'An error has occured during the delete !';
    }
}
else
{
echo "Please select a comment to delete";
}
?>
