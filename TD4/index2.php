<?php
   $name = htmlspecialchars($_POST["name"]);
   $prenom = htmlspecialchars($_POST["prenom"]);   
    //echo $prenom . " " . $name;
  	echo '{ "name":"'.$name.'", "prenom":"'.$prenom.'"}';
   ?>