import Reveal from "reveal.js";
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/serif.css'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js'
import 'reveal.js/plugin/highlight/zenburn.css'

let deck = new Reveal({
    hash: true,
    plugins: [
        RevealHighlight
    ]
})

deck.initialize()