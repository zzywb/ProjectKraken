var keyMap = {
	fire1: 'Enter'
};

var currentKeyDown = null;

var Input = new (function(keyMap) {

	this.getKeyDown = function(key) {
		
		document.addEventListener('keydown', function(e) {
			currentKeyDown = e.key;
		}, true);
		
		var temp = currentKeyDown;
		currentKeyDown = null;

		if(keyMap[key] == temp)
			return true;
		
		return false;
	}

	return this;
})(keyMap);