import Reveal from "reveal.js";
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/serif.css'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js'
import 'reveal.js/plugin/highlight/zenburn.css'
import RevealNotes from 'reveal.js/plugin/notes/notes.js'
import { Fireworks } from 'fireworks-js'
import "/node_modules/flag-icons/css/flag-icons.min.css";

let deck = new Reveal({
    hash: true,
    plugins: [
        RevealHighlight,
        RevealNotes
    ]
})

let fireworksContainer = document.querySelector('.slides')
let fireworks = new Fireworks(fireworksContainer)

deck.on('slidetransitionend', event => {
    let curSlide = deck.getIndices()
    console.log(curSlide)

    if (curSlide.h == 8 && curSlide.v == 0) {
        fireworks.start()
    } else {
        fireworks.stop(true)
    }
})

deck.initialize()