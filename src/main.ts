import * as ROT from "rot-js/lib/index"
import { technique , jutsus } from './jutsus'
import {Player} from "./player"

export const Game = {
	display: null,
	map: {},
	engine: null,
	player: null,


	init() {
		console.log(this)
		this.display = new ROT.Display({ 
			height: 30,
			spacing: 1.1, 
			fontFamily: "Fira Code",
		});
		document.body.appendChild(this.display.getContainer());
		 this._generateMap();
        
        var scheduler = new ROT.Scheduler.Simple();
        scheduler.add(this.player, true);


		 this.engine = new ROT.Engine(scheduler);
        this.engine.start();
	},

	_generateMap: function () {
		var digger = new ROT.Map.Cellular(50, 30);
		var freeCells = [];

		digger.randomize(0.45)

		var digCallback = function (x, y, value) {

			var key = x + "," + y;
			this.map[key] = value ? "#" : "·";
			if(!value)
			freeCells.push(key);
		}
		digger.create(digCallback.bind(this));

		this._drawWholeMap();

		this.player = this._createBeing(Player, freeCells);
	},
	_generateDesc(){

	},
	_drawWholeMap() {
		for (var key in this.map) {
			var parts = key.split(",");
			var x = parseInt(parts[0]);
			var y = parseInt(parts[1]);
			this.display.draw(x, y, this.map[key]);
		}
	},
		
		 _createBeing(what, freeCells) {
        var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
        var key = freeCells.splice(index, 1)[0];
        var parts = key.split(",");
        var x = parseInt(parts[0]);
        var y = parseInt(parts[1]);
        return new what(x, y);
    },
}



Game.init()


console.warn(technique("y")[0]["name"])
console.warn(jutsus["pynomy"]["name"])