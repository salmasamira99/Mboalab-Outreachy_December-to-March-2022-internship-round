<?php
session_start();
if(!isset($_SESSION['login'])) {
header('Location: connect.php');
  exit;
}
if (isset($_POST['titre']) AND isset($_POST['contenu']) AND isset($_POST['id']) AND $_POST['titre'] != NULL AND $_POST['contenu'] != NULL AND $_POST['id'] != NULL) // Si les variables existent
{
   include('connecting.php');
      $contenu = mysqli_real_escape_string($con,$_POST['contenu']);
        $titre = mysqli_real_escape_string($con,$_POST['titre']);
           $id = mysqli_real_escape_string($con,$_POST['id']);
        $important = $_POST['important'];
        if($important == true)
        {
          $cestimportant = "oui";
        }
        else
        {
          $cestimportant = "";
        }
        $req = mysqli_query($con,"UPDATE news SET titre='$titre', contenu='$contenu', timestamp_modif='" . time() . "', importance='$cestimportant' WHERE ID='$id'") or die(mysql_error());
        if($req == true)
        {
        header('Location: index.php');
        exit;
        }else{echo "An error has occured";}
      mysql_close();
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
<?php include('menu.html') ?>
<br />
<br />
<center>
<?php
if(isset($_GET['id'])){
	$id=$_GET['id'];
include('connecting.php');
$sql="SELECT * FROM news WHERE id='".$id."'";
$reponse=mysqli_query($con,$sql) or die(mysql_error()); 
$new = mysqli_fetch_assoc($reponse);
mysqli_close($con,);
$newsimportante = $new["importance"];
if ($newsimportante == "oui")
{                    
  $important = 'checked = "checked" ';
}
 else
{
  $important = "";
}
?>
<div id="bodycom">
         <div id="commentaire">
            <form action="" method="post">
              <center>
                Titre :
                <input type="text" name="titre" value="<?php  echo stripslashes($new['titre']); ?>" size="30"><br />
                Content :<br />
                <textarea name="contenu" cols="50" rows="6" id="commentaire"><?php echo stripslashes($new['contenu']);  ?></textarea>
                 <input type="checkbox" name="important"   <?php echo $important; ?> /> <label for="important">This new is important</label>
                <input type="hidden" name="id" value="<?php echo "$id"; ?>">
                <input type="submit" value="Send" /> - <input type="reset" value="Cancel" />         
              </center>
            </form>
</div>
<div id="tableausmiley">
                  <center>
                    <a href="#" onclick="javascript:document.getElementById('com').value+='[g][/g]';document.getElementById('com').focus();return(false);"><img src="img/bold.png" alt="strong" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+='[i][/i]';document.getElementById('com').focus();return(false);"><img src="img/italic.png" alt="italic" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+='[s][/s]';document.getElementById('com').focus();return(false);"><img src="img/underline.png" alt="souligne" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+='[strike][/strike]';document.getElementById('com').focus();return(false);"><img src="img/strikethrough.png" alt="strike" /></a>
                  </center>
                  <center>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':) ';document.getElementById('com').focus();return(false);"><img src="img/smiley/1.gif" alt=":)" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':D ';document.getElementById('com').focus();return(false);"><img src="img/smiley/2.gif" alt=":D" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':lol: ';document.getElementById('com').focus();return(false);"><img src="img/smiley/3.gif" alt="lol:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':( ';document.getElementById('com').focus();return(false);"><img src="img/smiley/4.gif" alt=":(" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':O ';document.getElementById('com').focus();return(false);"><img src="img/smiley/5.gif" alt=":o" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':shock: ';document.getElementById('com').focus();return(false);"><img src="img/smiley/6.gif" alt=":shock:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':s ';document.getElementById('com').focus();return(false);"><img src="img/smiley/7.gif" alt=":s" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':8) ';document.getElementById('com').focus();return(false);"><img src="img/smiley/8.gif" alt=":8)" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':x ';document.getElementById('com').focus();return(false);"><img src="img/smiley/9.gif" alt=":x" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':p ';document.getElementById('com').focus();return(false);"><img src="img/smiley/10.gif" alt=":p" /></a>       
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':oops: ';document.getElementById('commentaire').focus();return(false);"><img src="img/smiley/11.gif" alt=":oops:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=';( ';document.getElementById('com').focus();return(false);"><img src="img/smiley/12.gif" alt=";(" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':evil: ';document.getElementById('com').focus();return(false);"><img src="img/smiley/13.gif" alt=":evil:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':twisted: ';document.getElementById('com').focus();return(false);"><img src="img/smiley/14.gif" alt=":twisted:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':roll: ';document.getElementById('com').focus();return(false);"><img src="img/smiley/15.gif" alt=":roll:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':;): ';document.getElementById('com').focus();return(false);"><img src="img/smiley/16.gif" alt=";)" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':!: ';document.getElementById('com').focus();return(false);"><img src="img/smiley/17.gif" alt=":!:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':?: ';document.getElementById('com').focus();return(false);"><img src="img/smiley/18.gif" alt=":?:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':idea: ';document.getElementById('com').focus();return(false);"><img src="img/smiley/19.gif" alt=":idea:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':arrow: ';document.getElementById('com').focus();return(false);"><img src="img/smiley/20.gif" alt=":arrow:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':| ';document.getElementById('com').focus();return(false);"><img src="img/smiley/21.gif" alt=":|" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':mrblue: ';document.getElementById('com').focus();return(false);"><img src="img/smiley/22.gif" alt=":mrblue:" /></a>
                  </center>               

         </div></div>
  </body>
</html>
<?php } else {echo "Please select a news to update"; } } ?>