class Input {
    constructor(keyMap) {
        this.keyMap = keyMap;
        this.currentKeysDown = [];
        this.addListeners(this.currentKeysDown);
    }

    addListeners(currentKeysDown) {

        document.addEventListener('keydown', function (e) {
            if(!currentKeysDown.includes(e.key))
                currentKeysDown.push(e.key);
        }, true);
        
        document.addEventListener('keyup', function (e) {
            if(currentKeysDown.includes(e.key))
                currentKeysDown.splice(currentKeysDown.indexOf(e.key), 1);
        }, true);

    }

    getKeyDown(key) {
        
        for (var i = 0; i < this.currentKeysDown.length; i++) {
            if(this.keyMap[key].includes(this.currentKeysDown[i])) {
                return true;
            }
        }

        return false;
    }

}