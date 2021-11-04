function getInputValue() {
    // Selecting the input element and get its value
    let inputVal = document.getElementById("seq").value;
    return(inputVal);
  }
  
  function editValue(value){
      const return_val = "The value is : " + (value);
      return(return_val);
      // return value
  }
  
  function test(){
      console.log("hello world");
  }
  
  function displayValue(value){
      val = getInputValue();
      val = editValue(val);
      // Displaying the value
      console.log(val);
  }

//////// PAS REUSSI A LIRE LES DONNES CONTENUES DANS UN FICHIER TEXTE ///////////// LA fonction semble bien 

  function lireFichierTexte(fichier)
  {
   //On lance la requête pour récupérer le fichier
   var fichierBrut = new XMLHttpRequest();
   fichierBrut.open("GET", fichier, false);
   //On utilise une fonction sur l'événement "onreadystate"
   fichierBrut.onreadystatechange = function ()
   {
   if(fichierBrut.readyState === 4)
        {
   //On contrôle bien quand le statut est égal à 0
        if(fichierBrut.status === 200 || fichierBrut.status == 0)
            {
            //On peut récupérer puis traiter le texte du fichier
            var texteComplet = fichierBrut.responseText;
            alert(texteComplet);
            console.log(texteComplet);
            }
        }
   }
   fichierBrut.send(null);
  }