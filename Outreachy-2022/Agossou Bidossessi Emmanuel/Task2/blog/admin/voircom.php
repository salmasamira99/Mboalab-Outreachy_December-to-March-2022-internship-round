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
<?php
 if( isset($_GET['id']) ) 
  {
    include('connecting.php');
    $nombreDeMessagesParPage = 10;
    $retour = mysqli_query($con,'SELECT COUNT(*) AS nb_messages FROM commentaire WHERE id_news = "'.$_GET['id'].'"') or die(mysqli_error()); 
    $donnees = mysqli_fetch_array($retour); 
    $totalDesMessages = $donnees['nb_messages'];
    if($totalDesMessages > 0){
    $nombreDePages  = ceil($totalDesMessages / $nombreDeMessagesParPage);
    if (isset($_GET['page']))
    {                    
      $page = $_GET['page'];
    }
    else
    {
      $page = 1;
    }
    $premierMessageAafficher = ($page - 1) * $nombreDeMessagesParPage; 
    $reponse = mysqli_query($con,'SELECT * FROM commentaire WHERE id_news = "'.$_GET['id'].'" ORDER BY id_com DESC LIMIT ' . $premierMessageAafficher . ', ' . $nombreDeMessagesParPage) or die(mysqli_error()); 
    while ($donnees = mysqli_fetch_array($reponse))
    {
      echo '<strong><font color="#3A76EE">' . stripslashes($donnees['pseudo']) . '</font></strong>, Post&eacute; le <strong>'. date('d/m/Y ', $donnees['timestamp']) .'&agrave; '. date('H\hi', $donnees['timestamp']) . '</strong><br />';
      $mess = nl2br(stripslashes($donnees['com']));
      $mess = preg_replace('#:\)#','<img src="img/smiley/1.gif" alt="" />', $mess);
      $mess = preg_replace('#:D#','<img src="img/smiley/2.gif" alt="" />', $mess);
      $mess = preg_replace('#:lol:#','<img src="img/smiley/3.gif" alt="" />', $mess);
      $mess = preg_replace('#:\(#','<img src="img/smiley/4.gif" alt="" />', $mess);
      $mess = preg_replace('#:O#','<img src="img/smiley/5.gif" alt="" />', $mess);
      $mess = preg_replace('#:shock:#','<img src="img/smiley/6.gif" alt="" />', $mess);
      $mess = preg_replace('#:s#','<img src="img/smiley/7.gif" alt="" />', $mess);
      $mess = preg_replace('#:8\)#','<img src="img/smiley/8.gif" alt="" />', $mess);
      $mess = preg_replace('#:x#','<img src="img/smiley/9.gif" alt="" />', $mess);
      $mess = preg_replace('#:p#','<img src="img/smiley/10.gif" alt="" />', $mess);
      $mess = preg_replace('#:oops:#','<img src="img/smiley/11.gif" alt="" />', $mess);
      $mess = preg_replace('#\;\(#','<img src="img/smiley/12.gif" alt="" />', $mess);
      $mess = preg_replace('#:evil:#','<img src="img/smiley/13.gif" alt="" />', $mess);
      $mess = preg_replace('#:twisted:#','<img src="img/smiley/14.gif" alt="" />', $mess);
      $mess = preg_replace('#:roll:#','<img src="img/smiley/15.gif" alt="" />', $mess);
      $mess = preg_replace('#:\;\):#','<img src="img/smiley/16.gif" alt="" />', $mess);
      $mess = preg_replace('#:\!:#','<img src="img/smiley/17.gif" alt="" />', $mess);
      $mess = preg_replace('#:\?:#','<img src="img/smiley/18.gif" alt="" />', $mess);
      $mess = preg_replace('#:idea:#','<img src="img/smiley/19.gif" alt="" />', $mess);
      $mess = preg_replace('#:arrow:#','<img src="img/smiley/20.gif" alt="" />', $mess);
      $mess = preg_replace('#:\|#','<img src="img/smiley/21.gif" alt="" />', $mess);
      $mess = preg_replace('#:mrblue:#','<img src="img/smiley/22.gif" alt="" />', $mess);
      $mess = preg_replace('#\[g\]#','<strong>', $mess);
      $mess = preg_replace('#\[\/g\]#','</strong>', $mess);
      $mess = preg_replace('#\[i\]#','<i>', $mess);
      $mess = preg_replace('#\[\/i\]#','</i>', $mess);
      $mess = preg_replace('#\[s\]#','<u>', $mess);
      $mess = preg_replace('#\[\/s\]#','</u>', $mess);
      $mess = preg_replace('#\[strike\]#','<strike>', $mess);
      $mess = preg_replace('#\[\/strike\]#','</strike>', $mess);
      echo $mess;
      echo '<br /><a href="supprimcom.php?id='.$donnees['id_com'].'&amp;article='.$donnees['id_news'].'">Delete</a><hr /><br />';
}
echo '<center>';
  for ($i = 1 ; $i <= $nombreDePages ; $i++)
  {
  echo '<a href="voircom.php?id=' . $_GET['id'] . '&amp;page=' . $i . '">' . $i . '</a> ';
  }
echo '</center>';
}
else
{
echo '<br /><br /><center>There is no comment<br /><br />[ <a href="#" onclick="window.close(); return false;">Close this windows</a> ]</center>';
}
mysql_close(); 
}
else
{
echo "<br /><br /><center>No selected article</center>";
}
?>
    </body>
</html>
