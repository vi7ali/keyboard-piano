
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransform));
window.addEventListener('keydown', playSound);

/*
In Chrome
The class 'playing' gets stuck if the same key is pressed quickly.
This listener clears the class
*/

window.addEventListener('keyup', function (e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(key && key.classList.contains('playing')) {
    key.classList.remove('playing');
  }
});

function playSound(e) {		

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	
  if (e.repeat)	return; // preventing the sound looping if the key is pressed down
	if (!audio) return;	
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

function removeTransform(e) {
	console.log(e.propertyName);
	if (e.propertyName !== 'color') return;
	this.classList.remove('playing');
}



