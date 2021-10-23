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
                                 <script type="text/javascript">
                                   function confirmation_suppr(url){if(confirm("Are you sure to delete ?")){location.href=url;}}
                                 </script>
  </head>
  <body>
<?php include('menu.html') ?>
<div id="index_admin">
          <div id="big_admin">
                <?php
                  include('connecting.php');
                  $req="select * from news ";  
                  $res=mysqli_query($con,$req) or die(mysqli_error());  
                  $nbr=mysqli_num_rows($res);
                  if ($nbr >= 1) 
                  {
                      $nombreDeMessagesParPage = 10;
                      $totalDesMessages = $nbr;
                      $nombreDePages  = ceil($totalDesMessages / $nombreDeMessagesParPage);
                      if (isset($_GET['page']))
                        {                    
                        $page = $_GET['page']; // On récupère le numéro de la page indiqué dans l'adresse (livreor.php?page=4)
                        }
                        else // La variable n'existe pas, c'est la première fois qu'on charge la page
                        {
                        $page = 1; // On se met sur la page 1 (par défaut)
                        }
                      $premierMessageAafficher = ($page - 1) * $nombreDeMessagesParPage; 
                      $reponse = mysqli_query($con,'SELECT * FROM news ORDER BY id DESC LIMIT ' . $premierMessageAafficher . ', ' . $nombreDeMessagesParPage) or die(mysqli_error()); 
                      while ($donnees = mysqli_fetch_array($reponse))
                        {
                        $newsimportante = $donnees["importance"];
                        if ($newsimportante == "oui")
                        {                    
                        $couleur = "red";
                        }
                        else
                        {
                        $couleur = "black";
                        }
                        ?><div class="block_admin"><div class="left"><div class="tout">
                                  <?php
                                  	define('DIR', 'upload/');
	                                  $filename = $donnees['id'];
	                                  switch(true)
	                                  {
		                                  case file_exists(DIR.$filename.'.jpg'):
		                                  	$action = 1;
		                                  	break;

		                                  case file_exists(DIR.$filename.'.jpeg'):
		                                  	$action = 1;
		                                  	break;

		                                  case file_exists(DIR.$filename.'.bmp'):
		                                  	$action = 1;
		                                  	break;

		                                  case file_exists(DIR.$filename.'.gif'):
		                                  	$action = 1;
		                                  	break;

		                                  default:
			                                  $action = 0;
	                                  }
                                 if ($action == 1) { echo '<img src="img/photo.png" border="0" alt="" style="float: left ; display: block ;" />';}else { echo '<img src="img/text.png" border="0" alt="" style="float: left ; display: block ;" />';}
                                  ?> </div>
                                  <div class="titreadmin" style = "color: <?php echo $couleur; ?>;">
                                    <?php 
                                      $mess = stripslashes($donnees['titre']);
                                      $lg_max = 80; //nombre de caractère autoriser
                                      if (strlen($mess) > $lg_max)
                                      {
                                        $mess = substr($mess, 0, $lg_max);
                                        $last_space = strrpos($mess, " ");
                                        $mess = substr($mess, 0, $last_space)."...";
                                      }
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
                                      $mess = preg_replace('#\[i\]#','<i>', $mess);
                                      $mess = preg_replace('#\[\/i\]#','</i>', $mess);
                                      $mess = preg_replace('#\[s\]#','<u>', $mess);
                                      $mess = preg_replace('#\[\/s\]#','</u>', $mess);
                                      $mess = preg_replace('#\[strike\]#','<strike>', $mess);
                                      $mess = preg_replace('#\[\/strike\]#','</strike>', $mess);
                                      $mess = preg_replace('#&lt;#','<', $mess);
                                      $mess = preg_replace('#&quot;#','"', $mess);
                                      $mess = preg_replace('#&gt;#','>', $mess);
                                      echo $mess;
                                    ?>
                                  </div><br />
                                  <div class="normale">
                                   Created on <?php echo date('d/m/Y  H\hi', $donnees['timestamp']); 
                                  if($donnees['timestamp_modif'] != 0)
                                  { ?> and Updated on <?php echo date('d/m/Y ', $donnees['timestamp_modif']); ?> at; <?php echo date('H\hi', $donnees['timestamp_modif']); }
                                  else
                                  {
                                  } 
                                  ?></div>
                                    <?php
                                     if ($action == 1) 
                                     { 
                                     ?><span class="lien_admin">
                                         <a href="apercu.php?id_img=<?php echo $donnees['id']; ?>" target="contact" onclick="window.open(this.href, 'contact','width=350,height=350,left=80,top=200'); return false;" class="contact">See image</a> | <a href="modifierimage.php?id_img=<?php echo $donnees['id']; ?>">Change image</a> | <a href="javascript:confirmation_suppr('supprimerimage.php?id_img=<?php echo $donnees['id']; ?>');">Delete image</a>
                                       </span>
                                     <?php
                                     }
                                     else 
                                     { ?>
                                        <span class="ajoute_photo">
                                          <a href="traitement.php?id=<?php echo $donnees['id']; ?>">
                                           Add an Image
                                          </a>
                                        </span>
                                      <?php
                                     }
                                  ?>
                                  <br /><div class="normale">
                                  <?php
                                    $req40 = "SELECT * FROM commentaire WHERE id_news = '".$donnees['id']."'" ;
                                    $res40 = mysqli_query($con,$req40);
                                    $n = mysqli_num_rows($res40);
                                    if($n !== false)
                                    {
                                      if($n > 1){$s = "s";}else{$s = "";}
                                      if($n == 0)
                                      {
                                        echo "No comment" ;
                                      }
                                      else
                                      { ?>
                                        <a href="voircom.php?id=<?php echo $donnees['id']; ?>" onclick="window.open(this.href, 'contact','width=400,height=600,left=150,top=25,scrollbars=1'); return false;"><strong><?php echo $n; ?></strong> comment<?php echo $s; ?></a>
                              <?php   }
                                    }else{echo "There is an error and the result can't not sure!" ;}
                                  ?></div>
                              </div>
                               <div class="supprmodif">
                                  <a href="javascript:confirmation_suppr('supprimer.php?id=<?php echo $donnees['id']; ?>');"><img src="img/supprimerlogo.gif" alt="photo" title="" border="0" /></a><br />
                                  <a href="modifier.php?id=<?php echo $donnees['id']; ?>"><img src="img/modifier.gif" alt="photo" title="" border="0" /></a>
                               </div>
                         </div>
                          <br />
                          <?php
                        }
                          echo "<div class=\"block_admin_bas\"><center>";
                        for ($i = 1 ; $i <= $nombreDePages ; $i++)
                        {
                        echo '<span class="lien"><a href="index.php?page=' . $i . '">' . $i . '</a></span> ';
                        }
                        echo "</center></div>";
                  }
                  else
                    {
                      echo '<div class="aucunarticle">'; echo 'You have no article currently in this Blog'; echo '</div>';
                    }
                  ?>
                 </div>
                 <div id="backgroundbleu">
                            <?php if($nbr>1) {$s="s";} else {$s="";} ?>
                            <div class="lien_menu"><a href="index.php"><strong><?php echo $nbr; ?></strong> article<?php echo $s; ?> online</a></div>
                            <div class="lien_menu" style="padding-top: 3px;"><a href="javascript:confirmation_suppr('supprimerall.php');">Re-initialize the Blog</a></div>
                        <div class="lien_menu" style="padding-top: 3px;"><a href="galerie.php">See all images</a></div>
                          <div class="lien_menu" style="padding-top: 3px; margin-left: 29px;">
                            <?php
                              $req_com = "select * from commentaire ";  
                              $res_com = mysqli_query($con,$req_com) or die(mysql_error());  
                              $nbr_com = mysqli_num_rows($res_com);
                              if($nbr_com > 1) {$s_com="s";} else {$s_com="";}
                              echo "<b>" . $nbr_com . "</b>";
                            ?>  Comment<?php echo $s_com; ?>
                          </div>
                       </div>

</div>
  <?php mysqli_close($con); ?>
  </body>
</html>