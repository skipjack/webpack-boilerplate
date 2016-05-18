// Import Polyfill (for full ES6 environment)
import 'babel-polyfill'

// Import Modules
import Clock from './clock.js'

// Load Styling
import './reset.css'
import './fonts.css'
import './style.css'

// Initiate the application
let element = document.getElementsByClassName('clock')[0],
	ticker = new Clock(element)

ticker.start()
ticker.span.addEventListener('click', e => {
	if (ticker.ticking) {
		ticker.stop()
		console.debug(`You've stopped time, why?!`)
	} else {
		ticker.start()
		console.debug(`No going back now...`)
	}
})