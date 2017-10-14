/**
 * Input master
 * 
 * @since v1.0.0
 */
var currentKeyDown = null;

document.addEventListener('keydown', function (e) {
	currentKeyDown = e.key;
}, true);

document.addEventListener('keyup', function (e) {
	if (currentKeyDown == e.key)
		currentKeyDown = null;
}, true);

var Input = new(function () {

	this.getKeyDown = function (key) {

		for (var i = 0; i < keyMap[key].length; i++) {
			if (keyMap[key][i] == currentKeyDown)
				return true;
		}

		return false;
	}

	return this;
})();