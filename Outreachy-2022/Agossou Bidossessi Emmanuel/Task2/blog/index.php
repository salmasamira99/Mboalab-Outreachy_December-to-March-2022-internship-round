<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <title><?php include('admin/titre.txt') ?></title>
    <meta http-equiv="Cache-Control" content="no-cache" /> 
    <style type="text/css" media="all">@import "./admin/css/css.css"; </style>
    <script type="text/javascript" src="admin/java/xdir.js"></script>
    <meta name="keywords" content="lucasweb blog internet news new nouveau site info insolite" />
    <meta name="description" content="Découvrez toutes les infos sur les sites internet !" />
  </head>
  <body><br><br><div id="index">
   <p></p>
	<div id="google_translate_element"></div>
	 <script type="text/javascript"> 
	   function googleTranslateElementInit() {
	  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
	  }
	</script>

	<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

          <div id="en_tete"></div><div id="big">
                <?php
                  include('admin/connecting.php');
                  $nombreDeMessagesParPage = 10;
                  $req="select * from news "; 
				  
                  $res=mysqli_query($con,$req) or die(mysql_error());  
                  $nbr=mysqli_num_rows($res);
                  $totalDesMessages = $nbr;
                  $nombreDePages  = ceil($totalDesMessages / $nombreDeMessagesParPage);
                  if ($totalDesMessages >= 1) 
                  {
                      if (isset($_GET['page']))
                        {                    
                        $page = $_GET['page'];
                        }
                        else // La variable n'existe pas, c'est la première fois qu'on charge la page
                        {
                        $page = 1;
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
                        $couleur = "#FF8000";
                        }

                        ?><div class="block"><div class="sanslescoms">
                                  <p class="titrearticle" style="color: <?php echo $couleur; ?>;">
                                    <?php 
                                      $mess_titre = stripslashes($donnees['titre']);
                                      $mess_titre = preg_replace('#:\)#','<img src="admin/img/smiley/1.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:D#','<img src="admin/img/smiley/2.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:lol:#','<img src="admin/img/smiley/3.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:\(#','<img src="admin/img/smiley/4.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:O#','<img src="admin/img/smiley/5.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:shock:#','<img src="admin/img/smiley/6.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:s#','<img src="admin/img/smiley/7.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:8\)#','<img src="admin/img/smiley/8.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:x#','<img src="admin/img/smiley/9.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:p#','<img src="admin/img/smiley/10.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:oops:#','<img src="admin/img/smiley/11.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#\;\(#','<img src="admin/img/smiley/12.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:evil:#','<img src="admin/img/smiley/13.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:twisted:#','<img src="admin/img/smiley/14.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:roll:#','<img src="admin/img/smiley/15.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:\;\):#','<img src="admin/img/smiley/16.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:\!:#','<img src="admin/img/smiley/17.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:\?:#','<img src="admin/img/smiley/18.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:idea:#','<img src="admin/img/smiley/19.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:arrow:#','<img src="admin/img/smiley/20.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:\|#','<img src="admin/img/smiley/21.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#:mrblue:#','<img src="admin/img/smiley/22.gif" alt="" />', $mess_titre);
                                      $mess_titre = preg_replace('#\[i\]#','<i>', $mess_titre);
                                      $mess_titre = preg_replace('#\[\/i\]#','</i>', $mess_titre);
                                      $mess_titre = preg_replace('#\[s\]#','<u>', $mess_titre);
                                      $mess_titre = preg_replace('#\[\/s\]#','</u>', $mess_titre);
                                      $mess_titre = preg_replace('#\[strike\]#','<strike>', $mess_titre);
                                      $mess_titre = preg_replace('#\[\/strike\]#','</strike>', $mess_titre);
                                      $mess_titre = preg_replace('#&lt;#','<', $mess_titre);
                                      $mess_titre = preg_replace('#&quot;#','"', $mess_titre);
                                      $mess_titre = preg_replace('#&gt;#','>', $mess_titre);
                                      echo $mess_titre;
                                    ?>
                                  </p>
                                  <?php
	                             define('DIR', 'admin/upload/');
	                             $filename = $donnees['id'];
	                             switch(true)
	                             {
		                             case file_exists(DIR.$filename.'.jpg'):
		                             	echo '<img src="'.DIR.$filename.'.jpg'.'" style="float: left;" alt=""/>';
		                             	break;
                             
		                             case file_exists(DIR.$filename.'.jpeg'):
		                             	echo '<img src="'.DIR.$filename.'.jpeg'.'" style="float: left;" alt=""/>';
		                             	break;
                             
		                             case file_exists(DIR.$filename.'.bmp'):
		                             	echo '<img src="'.DIR.$filename.'.bmp'.'" style="float: left;" alt=""/>';
		                             	break;
                             
		                             case file_exists(DIR.$filename.'.gif'):
		                             	echo '<img src="'.DIR.$filename.'.gif'.'" style="float: left;" alt=""/>';
		                             	break;

	                             	default:
		                             
	                             }
                                     echo '<p class="contenuarticle">';
                                      $mess = nl2br(stripslashes($donnees['contenu']));
                                      $mess = preg_replace('#:\)#','<img src="admin/img/smiley/1.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:D#','<img src="admin/img/smiley/2.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:lol:#','<img src="admin/img/smiley/3.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:\(#','<img src="admin/img/smiley/4.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:O#','<img src="admin/img/smiley/5.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:shock:#','<img src="admin/img/smiley/6.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:s#','<img src="admin/img/smiley/7.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:8\)#','<img src="admin/img/smiley/8.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:x#','<img src="admin/img/smiley/9.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:p#','<img src="admin/img/smiley/10.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:oops:#','<img src="admin/img/smiley/11.gif" alt="" />', $mess);
                                      $mess = preg_replace('#\;\(#','<img src="admin/img/smiley/12.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:evil:#','<img src="admin/img/smiley/13.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:twisted:#','<img src="admin/img/smiley/14.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:roll:#','<img src="admin/img/smiley/15.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:\;\):#','<img src="admin/img/smiley/16.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:\!:#','<img src="admin/img/smiley/17.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:\?:#','<img src="admin/img/smiley/18.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:idea:#','<img src="admin/img/smiley/19.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:arrow:#','<img src="admin/img/smiley/20.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:\|#','<img src="admin/img/smiley/21.gif" alt="" />', $mess);
                                      $mess = preg_replace('#:mrblue:#','<img src="admin/img/smiley/22.gif" alt="" />', $mess);
                                      $mess = preg_replace('#\[i\]#','<i>', $mess);
                                      $mess = preg_replace('#\[\/i\]#','</i>', $mess);
                                      $mess = preg_replace('#\[s\]#','<u>', $mess);
                                      $mess = preg_replace('#\[\/s\]#','</u>', $mess);
                                      $mess = preg_replace('#\[strike\]#','<strike>', $mess);
                                      $mess = preg_replace('#\[\/strike\]#','</strike>', $mess);
                                      $mess = preg_replace('#&lt;#','<', $mess);
                                      $mess = preg_replace('#&quot;#','"', $mess);
                                      $mess = preg_replace('#&gt;#','>', $mess);
                                      $mess = preg_replace('#\[g\]#','<strong>', $mess);
                                      $mess = preg_replace('#\[\/g\]#','</strong>', $mess);
                                      echo $mess;
                                    ?>
                                  </p></div><div class="ajoute_commentaire">
                                  [<a href="ajoutcommentaire.php?id=<?php echo $donnees['id']; ?>" onclick="window.open(this.href, 'contact','width=641,height=240,left=100,top=100'); return false;">Add a comment</a>] 
                                    <?php
                                      $req40 = "SELECT * FROM commentaire WHERE id_news = '".$donnees['id']."'" ;
                                      $res40 = mysqli_query($con,$req40);
                                      $n = mysqli_num_rows($res40);
                                      if($n !== false)
                                      {
                                        if($n > 1){$s = "s";}else{$s = "";}
                                        if($n == 0)
                                        {
                                          echo "[No comment]" ;
                                        }
                                        else
                                        { ?>
                                          [<a href="voircom.php?id=<?php echo $donnees['id']; ?>" onclick="window.open(this.href, 'contact','width=400,height=600,left=150,top=25,scrollbars=1'); return false;"><strong><?php echo $n; ?></strong> comment<?php echo $s; ?></a>]
                                  <?php }
                                      }else{echo "There is an error and the result might not be sure!" ;}
                                    ?>
                                  <br />
                                  created on <?php echo date('d/m/Y ', $donnees['timestamp']); ?> at <?php echo date('H\hi', $donnees['timestamp']); 
                                  if($donnees['timestamp_modif'] != 0)
                                  { ?> and modified on <?php echo date('d/m/Y ', $donnees['timestamp_modif']); ?> at <?php echo date('H\hi', $donnees['timestamp_modif']); }
                                  else
                                  {
                                  }  ?>
                          </div></div>
                          <?php
                        }
                          echo "<div class=\"block\"><center>";
                        for ($i = 1 ; $i <= $nombreDePages ; $i++)
                        {
                        echo '<span class="lien"><a href="index.php?page=' . $i . '">' . $i . '</a></span> ';
                        }
                        echo "</center></div></div>";
                  }
                  else
                    {
                      echo '<div class="aucunarticle">There is no article</div>';
                    }
?>
<div id="pub"><center>
<p class="lien"><a href="admin/index.php">Administration <br>(Post,update, etc..)</a></p><br />
</center>
</div>
</div>

  <?php mysqli_close($con); ?>
  </body>
</html>
