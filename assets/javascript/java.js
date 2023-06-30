// Fonction pour vérifier si l'élément est visible à l'écran
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Fonction pour afficher les étapes lorsqu'elles sont visibles à l'écran
  function showSteps() {
    var steps = document.getElementsByClassName('etape');
    for (var i = 0; i < steps.length; i++) {
      if (isElementInViewport(steps[i])) {
        steps[i].classList.add('visible');
      }
    }
  }
  
  // Écouteur d'événement pour déclencher la fonction showSteps lors du défilement de la page
  window.addEventListener('scroll', showSteps);
  
  // Afficher les étapes initialement visibles à l'ouverture de la page
  showSteps();