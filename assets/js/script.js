/*
  Tudo aqui foi produzido por mim (Johann C. S. Antunes) fazendo uso do VSCode (depois de passar tempo até demais configurando),
  Edge Browser, café e muita paciência (um simples CSS é mais trabalhoso que parece (⊙ˍ⊙)).

  Tudo pode ser copiado, modificado e usado ao gosto do interessado, que deve somente concordar em dar os créditos apropriadamente.
*/

const rootElement = document.querySelector(':root');
const theme_toggle = document.getElementById('theme_toggle');
const firstPage = document.getElementById('first-page');
const secondPage = document.getElementById('second-page');

theme_toggle.addEventListener('change', () => {
	if (theme_toggle.checked) {
		rootElement.style.setProperty('--fontColor', '#e2e2e2');
		rootElement.style.setProperty('--bgColor', '#202020');
		rootElement.style.setProperty('--hTextColor', '#191919');
	}
	else {
		rootElement.style.setProperty('--fontColor', '#202020');
		rootElement.style.setProperty('--bgColor', '#e2e2e2');
		rootElement.style.setProperty('--hTextColor', '#d0d0d0');
	}
})

if (navigator.userAgentData.mobile) {
	document.getElementsByClassName('continue')[0].innerHTML = 'Toque em qualquer lugar para continuar';
	document.getElementsByClassName('help-text_1')[0].innerHTML = 'Toque para mudar o tema';
}

function HidePage() {
	if (secondPage.style.display === 'grid') {
		secondPage.style.display = 'none'
		firstPage.style.display = 'grid'
	}
	else {
		secondPage.style.display = 'grid'
		firstPage.style.display = 'none'
	}
}


setTimeout(() => {
	firstPage.style.display = 'none';
	secondPage.style.display = 'grid';
}, 12500)

// document.addEventListener('keydown', function (Key) {
// 	const keyPressed = Key.key
// });
