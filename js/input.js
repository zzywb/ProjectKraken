/**
 * Input handler
 * @since 1.0.0
 */
function Input() {

		return this;

}   

/**
 * Assign key mapping to the input handler and create events to
 * determine if the keys are pressed or released
 * keyMap = keyCode:keyName
 * @param {*dictionary} keys 
 */
Input.prototype.mapKeys = function(keys) {
	Input.keyMap = {};
	Input.keyMap = keys;
	
	/**
	 * Reset the state of the buttons
	 */
	keyMap.forEach(function(key) {
		keyMap[key].pressed = false;
		keyMap[key].released = false;
	})
	
	document.addEventListener('keypress', function (event) {
		keyMap[event.keycode].pressed = true;
	}, true)
	
	document.addEventListener('keyup', function (event) {
		keyMap[event.keycode].released = true;
	}, true)
}

Input.prototype.getKeyPress = function(key) {

	console.log(Input.keyMap);
	return Input.keyMap.key.pressed;
	
}