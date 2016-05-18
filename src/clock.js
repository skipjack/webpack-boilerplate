// Import Dependencies
import Moment from 'moment'

// Export an interface for creating a Clock
export default class Clock {
	constructor(element) {
		this.container = element
		this.span = this._createSpan()
		this.time = Moment()

		this.container.appendChild(this.span)
	}

	start() {
		this.interval = setInterval(() => {
			this.time.add(1, 'seconds')
			this.span.innerHTML = this.time.format('LTS')
		}, 1000)

		this.ticking = true
	}

	stop() {
		clearInterval(this.interval)

		this.ticking = false
	}

	_createSpan() {
		let span = document.createElement('span')

		span.classList.add('clock-display')

		return span
	}
}
