<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <title><?php include('admin/titre.txt') ?></title>
    <meta http-equiv="Cache-Control" content="no-cache" /> 
    <style type="text/css" media="all">@import "./admin/css/css.css"; </style>
    <script type="text/javascript" src="admin/java/xdir.js"></script>
  </head>
  <body>
    <center>
<?php
if (isset($_POST['pseudo']) AND isset($_POST['commentaire']) AND isset($_GET['id']) AND $_POST['pseudo'] != NULL AND $_POST['commentaire'] != NULL AND $_GET['id'] != NULL) // Si les variables existent
{
                  include('admin/connecting.php');
        $pseudo = mysqli_real_escape_string($con,$_POST['pseudo']);
        $commentaire = mysqli_real_escape_string($con,$_POST['commentaire']);
        $id_news = $_GET['id'];
        $req = mysqli_query($con,"INSERT INTO commentaire VALUES('$id_news', '', '$pseudo', '$commentaire', '" . time() . "')") or die(mysqli_error()); 
        if($req == true){echo '<br /><br />The comment is posted <br /><br />[ <a href="#" onclick="window.close(); return false;">Close this windows</a> ]';}else{echo "An error has occured";}
        mysqli_close($con,);
}else{
  if( isset($_GET['id']) ) 
  {
?><div id="bodycom">
         <div id="commentaire">
            <form action="" method="post">
              <center>
                Pseudo :
                <input type="text" name="pseudo" size="30" /><br />
                Comment :<br />
                <textarea name="commentaire" cols="50" rows="6" id="com"></textarea>
                <input type="submit" value="Send" /> - <input type="reset" value="Cancel" />         
              </center>
            </form>
</div>
<div id="tableausmiley">
                  <center>
                    <a href="#" onclick="javascript:document.getElementById('com').value+='[g][/g]';document.getElementById('com').focus();return(false);"><img src="admin/img/bold.png" alt="strong" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+='[i][/i]';document.getElementById('com').focus();return(false);"><img src="admin/img/italic.png" alt="italic" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+='[s][/s]';document.getElementById('com').focus();return(false);"><img src="admin/img/underline.png" alt="souligne" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+='[strike][/strike]';document.getElementById('com').focus();return(false);"><img src="admin/img/strikethrough.png" alt="strike" /></a>
                  </center>
                  <center>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':) ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/1.gif" alt=":)" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':D ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/2.gif" alt=":D" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':lol: ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/3.gif" alt="lol:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':( ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/4.gif" alt=":(" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':O ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/5.gif" alt=":o" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':shock: ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/6.gif" alt=":shock:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':s ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/7.gif" alt=":s" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':8) ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/8.gif" alt=":8)" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':x ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/9.gif" alt=":x" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':p ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/10.gif" alt=":p" /></a>       
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':oops: ';document.getElementById('commentaire').focus();return(false);"><img src="admin/img/smiley/11.gif" alt=":oops:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=';( ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/12.gif" alt=";(" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':evil: ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/13.gif" alt=":evil:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':twisted: ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/14.gif" alt=":twisted:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':roll: ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/15.gif" alt=":roll:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':;): ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/16.gif" alt=";)" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':!: ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/17.gif" alt=":!:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':?: ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/18.gif" alt=":?:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':idea: ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/19.gif" alt=":idea:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':arrow: ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/20.gif" alt=":arrow:" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':| ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/21.gif" alt=":|" /></a>
                    <a href="#" onclick="javascript:document.getElementById('com').value+=':mrblue: ';document.getElementById('com').focus();return(false);"><img src="admin/img/smiley/22.gif" alt=":mrblue:" /></a>
                  </center>               

         </div></div>
<?php
}
else
{
echo "No Article is selected";
}
}
?>
    </center>
  </body>
</html>