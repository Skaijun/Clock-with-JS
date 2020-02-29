class myClock {
    constructor(selectedHtmlElement) {
        this.selectedHtmlElement = selectedHtmlElement || document.body
        this.generateDOMElements(this.selectedHtmlElement)
        this.constructor.startClock()
    }

    generateDOMElements(outputHtmlELement) {
        let clock = document.createElement('div');
        clock.classList.add('clock');
        outputHtmlELement.appendChild(clock);
        let arrows = `<div class="arrow hour" data-hour-arrow></div>
                      <div class="arrow minute" data-minute-arrow></div>
                      <div class="arrow second" data-second-arrow></div>`;
        clock.insertAdjacentHTML("afterbegin", arrows);
        for (let i = 0; i < 12; i++) {
            let newNumber = `<div class="number number${i}">${i}</div>`;
            clock.insertAdjacentHTML("afterbegin", newNumber);
        }
    }

    static startClock() {
        const HOUR_ARROW = document.querySelector('[data-hour-arrow]');
        const MINUTE_ARROW = document.querySelector('[data-minute-arrow]');
        const SECOND_ARROW = document.querySelector('[data-second-arrow]');

        let currentTime = new Date();
        let secondsValue = (currentTime.getSeconds() / 60);
        let minutesValue = ((secondsValue + currentTime.getMinutes()) / 60);
        let hoursValue = ((minutesValue + currentTime.getHours()) / 12);
        myClock.setRotation(HOUR_ARROW, hoursValue);
        myClock.setRotation(MINUTE_ARROW, minutesValue);
        myClock.setRotation(SECOND_ARROW, secondsValue);
        setInterval(this.startClock, 1000);
    }

    static setRotation(element, timeValue) {
        element.style.setProperty('--rotation', timeValue * 360);
    }

}

const startShowTime = new myClock();