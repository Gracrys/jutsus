import * as ROT from "rot-js/lib/index"
import { Game  } from './main'


export const launcher = ( x, y, tech : object ) =>{
    Game.display.draw(x, y - 1 , "🔥", "red")
    Game.display.draw(x, y - 2 , "🔥", "red")
    Game.display.draw(x -1 , y - 2 , "🔥", "red")
    Game.display.draw(x + 1  , y - 2 , "🔥", "red")

    setTimeout(() => {
        Game.display.draw(x, y - 1 , Game.map[x+","+(y -1 )])
        Game.display.draw(x, y - 2 , Game.map[x+","+(y - 2)])
        Game.display.draw(x -1 , y - 2 , Game.map[(x - 1)+","+(y -2)])
        Game.display.draw(x + 1  , y - 2 , Game.map[(x + 1)+","+(y - 2)])

    }, 500)
}
