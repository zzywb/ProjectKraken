/**
 * Input master
 * 
 * @since v1.0.0
 */
var currentKeyDown = null;

document.addEventListener('keydown', function(e) {
	currentKeyDown = e.key;
}, true);

document.addEventListener('keyup', function(e) {
	if(currentKeyDown == e.key)
		currentKeyDown = null;
}, true);

var Input = new (function(keyMap) {

	this.getKeyDown = function(key) {

		if(keyMap[key] == currentKeyDown)
			return true;
		
		return false;
	}

	return this;
})(keyMap);