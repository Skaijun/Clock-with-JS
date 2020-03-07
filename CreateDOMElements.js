
class CreateDOMElements {
    constructor(outputHtmlELement) {
        this.createDOMElements(outputHtmlELement)
    }
    createDOMElements(outputHtmlELement) {
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
}