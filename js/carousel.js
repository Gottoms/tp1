(function(){

    let slideIndex = 1;
		showDivs(slideIndex);

		/*Timer de 10s entre les images du slider*/
		timer = setInterval(switchImg, 10000);

		/*Fonction du timer de 10s*/
		function switchImg(){

			showDivs(slideIndex += 1);

		}

		/*Fonction des boutons*/
		function plusDivs(n) {

			showDivs(slideIndex += n);

		}

		/*Fonction pour le léger délai entre les slides*/
		function currentDiv(n) {

			setTimeout(function() {actshotDivs(n);}, 10);

		}

		/*Fonction pour dire que l'index actuel est n*/
		function actshotDivs(n){

			showDivs(slideIndex = n);

		}

		/*Fonction pour changer de slide*/
		function showDivs(n) {

			let i;
			let x = document.getElementsByClassName("mySlides");

			if (n > x.length) {

				slideIndex = 1

			}

			if (n < 1) {

				slideIndex = x.length;

			}

			for (i = 0; i < x.length; i++) {

				x[i].style.display = "none";
				x[i].classList.remove("fadeOut");

			}

			x[slideIndex-1].style.display = "block";
			x[slideIndex-1].classList.remove("fadeIn");
			x[slideIndex-1].classList.add("fadeOut");

		}

}())