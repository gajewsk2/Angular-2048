'use strict';
describe('Game module', function(){
	describe('GameManager', function() {
		// Inject the Game module into this test
		beforeEach(module('Game'));

		var gameManager;
		beforeEach(inject(function(GameManager){
			gameManager = GameManager;
		}));

	});
});