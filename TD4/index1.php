<?php

   //$name = htmlspecialchars($_GET["name"]);
   //$prenom = htmlspecialchars($_GET["prenom"]);
   //echo $prenom . " " . $name;
   header('Content-Type : application/json');
  	echo (json_encode('{ "name":"'.$name.'", "prenom":"'.$prenom.'"}'));

 ?>
