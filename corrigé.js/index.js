// fonction pour modifier le paragraphe
function customParagraph(color) {
  var paragraph = document.querySelector('p');
  paragraph.style.color = color;
  }
  var parent = document.querySelector('#text+div');
  //selectionne le texte de la div
  parent.addEventListener('click',function(event){
  let target = event.target;
  let classes = target.getAttribute('class');
  // récupére couleur
  let color = classes.split(' ').slice(-1).toString();
  customParagraph(color);
  })
  // var target = document.querySelectorAll('.color');
  // var classes = target[1].getAttribute('class');
  // on va selectionner l'élément DIV parent des boutons