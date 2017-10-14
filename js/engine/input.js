/**
 * Input master
 * 
 * @since v1.0.0
 */
var currentKeysDown = [];

document.addEventListener('keydown', function (e) {
	if(!currentKeysDown.includes(e.key))
		currentKeysDown.push(e.key);
}, true);

document.addEventListener('keyup', function (e) {
	if(currentKeysDown.includes(e.key))
		currentKeysDown.splice(currentKeysDown.indexOf(e.key), 1);
}, true);

var Input = new(function () {

	this.getKeyDown = function (key) {

		// console.log(currentKeysDown);
		for (var i = 0; i < currentKeysDown.length; i++) {
			if(keyMap[key].includes(currentKeysDown[i]))
				return true;
		}

		return false;
	}

	return this;
})();