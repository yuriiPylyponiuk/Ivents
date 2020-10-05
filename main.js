// 1. Створити сторінку на якій будемо відображати базовий текст в span
// ("Очікую на ввід даних"). При натисканні alt + A, замість спана зявиться 
// інпут з аналогічним текстом, який тепер ви зможете відредагувати. Далі коли 
// ви натисните shift + S дані збережуться і знов будуть відображатись як span. 

let firstBlockSpan = document.querySelector('.first-block span');
let firstBlockInput = document.querySelector('.first-block input');

document.onkeydown = (e) => {

	if (e.altKey && event.code == 'KeyA') {
		firstBlockSpan.style.display = 'none';
		firstBlockInput.style.display = 'block';
	}else	if (e.shiftKey && event.code == 'KeyS'){
		firstBlockInput.style.display = 'none';
		firstBlockSpan.textContent = firstBlockInput.value;
		firstBlockSpan.style.display = 'block';
	}
}

// 2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде 
// менше 600px , виводити лог ми векористовуємо мобільну версію, при більшому 
// розмірі сторінки - що ми використовуємо десктоп версію.

window.addEventListener('resize', showTypeOfDevice);

function showTypeOfDevice() {
	(this.innerWidth > 600)? console.log('Desctop'): console.log('Mobile'); 
}

// 3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням
 // зі значенням яке зараз є введено.

let secondBlockSpan = document.querySelector('.second-block p span');
let secondBlockInput = document.querySelector('.second-block input');

secondBlockInput.onkeyup = () => {
	secondBlockSpan.textContent = secondBlockInput.value;
}


// 4. При натисканні на кнопку альт+ о виводити модальне вікно на екран,
//альт + с - закривати.

let modalwindow = document.querySelector('.third-block');

document.onkeydown = (e) => {
	if (e.altKey && event.code == 'KeyO') {
		modalwindow.style.display = 'flex';
	}else	if (e.altKey && event.code == 'KeyC'){
		modalwindow.style.display = 'none';
	}
}



// 5. Створити модальне відкно аналог Алерта але з гарним дизайном. по кліку 
//на кнопку зявляється модальне вікно по центрі екрану(центрування елемента). 
//В модальному вікні має бути текст та кнопка закрити.


let openWindowBtn = document.querySelector('.open-window');
let closeWindowBtn = document.querySelector('.close-window');
let modalWindow = document.querySelector('.modal-window');

openWindowBtn.onclick = () => {
	modalWindow.classList.add('active');
}
closeWindowBtn.onclick = () => {
	modalWindow.classList.remove('active');
}