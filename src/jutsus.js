export const jutsus = {
   "rtdout" : {
     name: "Fire Element; Balsam Spread Fire",
     romanji: "Katon  ",
     element: "Katon",
     kanji: "火遁"
   },
  "rh" : {
     name: "Fire Element; Fire Dragon Flame Missile",
     romanji: "Katon style: ",
     element: "Katon",
    kanji: "火遁"
   },
  "trbm" : {
    name: "Fire Release: Exploding Flame Formation",
    romaji: "Katon: Kibaku Enjin",
    element: "katon",
    kanji: "火遁・起爆炎陣­"
  }
}


export const handSigns = {
  "t": {
    name: "tiger",
    sign: "",
    romanji: "tora",
    emoji: "🐯"
  },
   "i": {
    name: "boar",
    sign: "",
    romanji: "I",
    emoji: "🐗"
  }, 
  "b": {
    name: "bird",
    sign: "",
    romanji: "tori",
    emoji: "🐦"
  }, 
  "r": {
    name: "rat",
    sign: "",
    romanji: "ne",
    emoji: "🐭"
  },
  "o": {
    name: "ox",
    sign: "",
    romanji: "ushi",
    emoji: "🐮"
  },
  "u": {
    name: "rabbit",
    sign: "",
    romanji: "u",
    emoji: "🐰"
  },
  "a": {
    name: "dragon",
    sign: "",
    romanji: "tatsu",
    emoji: "🐲"
  },
  "m": {
    name: "snake",
    sign: "",
    romanji: "mi",
    emoji: "🐍"
  },
  "h": {
    name: "horse",
    sign: "",
    romanji: "uma",
    emoji: "🐴"
  },
  "s": {
    name: "ram",
    sign: "",
    romanji: "hitsuji",
    emoji: "🐑"
  },
  "n": {
    name: "monkey",
    sign: "",
    romanji: "saru",
    emoji: "🐵"
  },
  "d": {
    name: "dog",
    sign: "",
    romanji: "inu",
    emoji: "🐶"
  },

}

/*
 *
 * Presumably:

Water: wet the leaf

Lightning: Pierce the leaf

Fire: burn the leaf

Earth: crumble the leaf.

Wind: cut the leaf
  */

export const technique = (j) => {
  const ob = []
  Object.keys(jutsus).forEach(function(keyName) {
    // using index of to check if the object key name have a matched string
    if (keyName.includes(j) ) {
      ob.push(jutsus[keyName])
    }
  })
  return ob 
}
