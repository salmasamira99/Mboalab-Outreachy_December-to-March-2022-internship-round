<?php
session_start();
if(!isset($_SESSION['login'])) {
header('Location: connect.php');
  exit;
}
      if(isset($_POST) && !empty($_POST['pseudo'])) 
      {
      include("connecting.php");
        $newpseudo = mysqli_real_escape_string($con,$_POST['pseudo']);
        $vieupseudo = mysqli_real_escape_string($con,$_POST['vieupseudo']);
        $sql = "select * from membres_tbl where login='".$vieupseudo."'";
        $req = mysqli_query($con,$sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysqli_error());
        $data = mysqli_fetch_assoc($req);
        $id = $data['id'];
        $modifpseudo = "UPDATE membres_tbl SET login='".$newpseudo."' WHERE id='".$id."'";
        $modif = mysqli_query($con,$modifpseudo) or die('Erreur SQL !<br>'.$sql.'<br>'.mysqli_error());
        if($modif == true)
        {
          $_SESSION = array();
          session_destroy();
          header('Location: connect.php');
           exit;
        }
        else
        {
          echo "An error has occured";
        }
        mysqli_close($con);
      }else{
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
  <?php include('menu.html'); ?>
  <br />
  <br />
    <center>
    Change your current Pseudo: <b><?php echo $_SESSION['login']; ?></b> with : <br /><br />
      <form action="" method="post">
        <input type="text" name="pseudo" size="30" />
        <input type="hidden" name="vieupseudo" value="<?php echo $_SESSION['login']; ?>">
        <input type="submit" value="Send" />
      </form>
    </center>
  </body>
</html>
<?php } ?>