//MES VARIABLE

//au click de ma balise <p> qui repons a l ID "nom" un prompt ce déclenche 
var nom= document.getElementById("nom");
nom.onclick=function(){
   nom.innerHTML=prompt("entrer votre nom et prenom");
};

//je création d un tableau qui contien des couleur 
var color= ["#fd0101","#fd0101","#9370d8","#ffffff"];
var i=0;
// au click de "soft skill" la valeur de i change  
document.getElementById("soft").onclick=function(){
    i= 0 < color.length ? ++i : 0;
//i prend donc une valeur et on l uttilise comme indice dans le tableau de couleur
    document.querySelector("body").style.background= color[i]
};

//au click je change la source de ma balise <img>
var img= document.getElementById("img");
img.onclick=function(){
   img.src= 'images/photo_2_CV.jpeg'
};