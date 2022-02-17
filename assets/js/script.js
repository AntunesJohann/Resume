/*
  Tudo aqui foi produzido por mim (Johann C. S. Antunes) fazendo uso do VSCode (depois de passar tempo até demais configurando),
  Edge Browser, café e muita paciência (um simples CSS é mais trabalhoso que parece (⊙ˍ⊙)).

  Tudo pode ser copiado, modificado e usado ao gosto do interessado, que deve somente concordar em dar os créditos apropriadamente.
*/

const isMobile = navigator.userAgentData.mobile;
const fistPage = document.getElementById('first-page');
const secondPage = document.getElementById('second-page');

if (isMobile) {
	document.getElementsByClassName('continue')[0].innerHTML = 'Toque em qualquer lugar para continuar';
}

function HidePage() {
	if (fistPage.style.display == 'none') { fistPage.style.display = 'block' }
	else { fistPage.style.display = 'none' };

	if (secondPage.style.display == 'grid') { secondPage.style.display = 'none' }
	else { secondPage.style.display = 'grid' };
}

setTimeout(() => {
	if (fistPage.style.display = 'grid') {
		fistPage.style.display = 'none';
		secondPage.style.display = 'grid';
	};
}, 12500)

// document.addEventListener('keydown', function (Key) {
// 	const keyPressed = Key.key
// });
