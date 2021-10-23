<?php session_start(); ?>
<?php
 if(isset($_GET['action']) && $_GET['action'] == deconnexion) 
  {
session_destroy(); 

}
include("connecting.php");
if(isset($_POST) && !empty($_POST['login']) && !empty($_POST['password'])) {
  extract($_POST);
  // on recupère le password de la table qui correspond au login du visiteur
  $sql = "select password from membres_tbl where login='".$login."'";
  $req = mysqli_query($con,$sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysqli_error());

  $data = mysqli_fetch_assoc($req);
  mysqli_close($con);
  if($data['password'] != $password) {
header('Location: connect.php');
    exit;
  }
  else {
    session_start();
    $_SESSION['login'] = $login;
    header('Location: index.php');


  }    
}
else { ?>
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
<br />
<br />
<center>
<form action="" method='post'>
          <table border="0" class="membre" width="400" height="110">
            <tr>
    <td colspan="2"><b>Admin Zone:</b></td>

  </tr>
  <tr>
    <td width="125">Login</td>
    <td><input type="text" name="login" /></td>
  </tr>
  <tr>
    <td width="125">Password</td>
    <td colspan="2"><input type="password" name="password" /></td>

  </tr>
  <tr>
    <td colspan="2" align="center"><input type="submit" value="Connexion" /></td>
  </tr>
</table>
</form>
<p class="lien">[ <a href="../index.php"><< Back</a> ]</p>

</center>
</body>
</html>
<?php } mysqli_close($con); ?>