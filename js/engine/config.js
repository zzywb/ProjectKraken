	/**
	 * Configuration
	 *
	 * @since 1.0.0
	 */
	var delta = 0;
	var lastRun = 0;

	var fps = 0;
	var fpsUpdateInterval = 1000;
	var fpsTimer = 0;
	var frames = 0;

	var canvas = document.getElementById('canvas');
	var width = canvas.width;
	var height = canvas.height;
	var game_running = true;
	var show_fps = true;
	var context = null;

	var keyMap = {
		fire1: 'Enter'
	};