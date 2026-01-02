// Tableau des images
const images = ["facebook.png", "facebook.png", "facebook.png", "facebook.png", 
"facebook.png", "facebook.png", "facebook.png",];
let index = 0;

// Sélection des éléments
const diapoa = document.getElementById("diapoa");
const diapob = document.getElementById("diapob");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Fonction pour afficher l’image courante
function afficherImage() {
  diapoa.src = images[index % images.length];
  diapob.src = images[(index + 1) % images.length];
  updateDots();
}

// Bouton "Précédent"
prev.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  afficherImage();
});

// Bouton "Suivant"
next.addEventListener("click", () => {
  index = (index + 1) % images.length;
  afficherImage();
});

// Sélection des points
const dots = document.querySelectorAll(".dot");

// Fonction pour mettre à jour les points
function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === index % images.length) {
      dot.classList.add("active");
    }
  });
}

afficherImage();
