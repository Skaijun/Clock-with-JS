
class Clock {
    constructor(selectedHtmlElement) {
        this.selectedHtmlElement = selectedHtmlElement || document.body
        this.createDOM = new CreateDOMElements(this.selectedHtmlElement);
        this.setRotation = this.setRotation.bind(this)
        this.startClock = this.startClock.bind(this)
        this.startClock()
    }

    startClock() {
        const HOUR_ARROW = document.querySelector('[data-hour-arrow]');
        const MINUTE_ARROW = document.querySelector('[data-minute-arrow]');
        const SECOND_ARROW = document.querySelector('[data-second-arrow]');

        let currentTime = new Date();
        let secondsValue = (currentTime.getSeconds() / 60);
        let minutesValue = ((secondsValue + currentTime.getMinutes()) / 60);
        let hoursValue = ((minutesValue + currentTime.getHours()) / 12);
        this.setRotation(HOUR_ARROW, hoursValue);
        this.setRotation(MINUTE_ARROW, minutesValue);
        this.setRotation(SECOND_ARROW, secondsValue);
        setInterval(this.startClock, 1000);
    }

    setRotation(element, timeValue) {
        element.style.setProperty('--rotation', timeValue * 360);
    }
}