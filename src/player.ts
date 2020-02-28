import * as ROT from "rot-js/lib/index"
import { technique , jutsus } from './jutsus'
import { launcher } from './launcher'
import { Game  } from './main'

export const Player = function(x, y) {
    this._x = x;
		this._y = y;
		this._hp = 10;
		this._element = "katon" 
		this._draw();
		this._health(0)
		Game.display.drawText(51, 1, "player one - " + this._element + " :")
		this._active = true
		this._commands  = ""
}

Player.prototype.getSpeed = () => 100
Player.prototype.getX = function() { return this._x; }
Player.prototype.getY = function() { return this._y; }

Player.prototype.act = function() {
    Game.engine.lock();
    window.addEventListener("keydown", this);
}
Player.prototype._health = function(num){
	for (let i = 0; i < this._hp; i++) {
		Game.display.draw(51 + i, 2, "o", "black")
	}


	this._hp -= num

	for (let j = 0; j < this._hp; j++) {
		Game.display.draw(51 + j, 2, "o", "white", "white")
	}

 }
    
Player.prototype.handleEvent = function(e) {
        var code = e.keyCode;

			 for(var i = 50; i <= 70; i++){
				 Game.display.drawText(i, 29, " ");

			 }
//        Game.display.drawText(i, 29, " ");
       
				 Game.display.drawText(50, 29, " %c{black}xxxxxxxxxxxxxxxxxxxxxxxxxxxx");
		Game.display.drawText(51, 29, "input: " + e.key);

   	if (code == 74 ) {
			 this._active = false
        return;
		} 

	if (this._active){	
		
    var keyMap = {};
    keyMap[38] = 0;
    keyMap[33] = 1;
    keyMap[39] = 2;
    keyMap[34] = 3;
    keyMap[40] = 4;
    keyMap[35] = 5;
    keyMap[37] = 6;
    keyMap[36] = 7;

    /* one of numpad directions? */
    if (!(code in keyMap)) { return; }

    /* is there a free space? */
    var dir = ROT.DIRS[8][keyMap[code]];
    var newX = this._x + dir[0];
    var newY = this._y + dir[1];
    var newKey = newX + "," + newY;
    if (!(newKey in Game.map)|| (Game.map[newKey] == "#")) { return; }

    Game.display.draw(this._x, this._y, Game.map[this._x+","+this._y]);
    this._x = newX;
    this._y = newY;
    this._draw();
    window.removeEventListener("keydown", this);
		Game.engine.unlock();
	} else {
		this._jutsu(e)
    }

}

Player.prototype._draw = function() {
		Game.display.draw(this._x, this._y, "🐺", "#ff0");
}

Player.prototype._jutsu = function (event) {
	if (!this._active) {

		if (event.keyCode == 13 || event.keyCode == 32) {

			if (jutsus[this._commands]?.kanji) {

				launcher(this._x, this._y, jutsus[this._commands])

				Game.display.drawText(51, 27, jutsus[this._commands]?.kanji);

			} else {

				Game.display.drawText(51, 29, "Wrong technique");
			}

			this._active = true
			this._commands = ""

			return;

		}

		this._commands += event.key

		Game.display.drawText(51, 29, "input: " + this._commands);


	}
}